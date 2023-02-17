import { HTTPRequest, HTTPResponse } from "../types";
import { BASE_URL } from "./env";

// post: create || update
export const post = (request: HTTPRequest): Promise<HTTPResponse> => {
    return new Promise((resolve, reject) => {
        request.method = "POST";
        doRequest(request).then(resolve).catch(reject);
    });
};

// request
const doRequest = (request: any): Promise<HTTPResponse> => {
    if (!request.headers) {
        request.headers = {};
    }
    if (
        request.method !== "GET" && 
        request.method !== "DELETE" && 
        !request.headers.hasOwnProperty("Content-Type")
    ) {
        // request.headers["Content-Type"] = "application/x-www-form-urlencoded";
        request.headers["Content-Type"] = "application/json";
        if (request.body) {
            // request.body = encodeParameters(request.body);
            request.body = JSON.stringify(request.body);
        }
    };

    // request.headers["Accept-Language"] = 'EN-US';
    return new Promise((resolve, reject) => {
        fetch(new Request(BASE_URL + request.url, request) ).then((response: HTTPResponse) => {
            response.traceId = response.headers.get("x-trace-id");

            const finalize = () => {
                if (response.status < 400) {
                    return resolve(response);
                }

                return reject(response);
            };

            if (response.json) {
                return response.json().then((entity) => {
                    response.entity = entity;
                    return finalize();
                }).catch(finalize);
            }

            return finalize();

        }).catch((response: HTTPResponse) => {
            if (response.headers) {
                response.traceId = response.headers.get("x-trace-id");
            }
            return reject(response);
        });
    });
};