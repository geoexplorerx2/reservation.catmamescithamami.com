import { HTTPResponse } from "../types";
import { post } from "./request";


class Services {

    public registry = (registry: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            return post({
                url: ``,
                body: registry
            }).then(resolve).catch(this.handleError.bind(null, reject));
        });
    };

    // handle error
    private handleError = (reject: any, response: HTTPResponse): Promise<HTTPResponse> => {
        if (response.message === "Failed to fetch") {
            return reject({ message: "errors.server_is_down" });
        };

        const entity = response.entity;
        if (response.status && response.status === 401) {
            return Promise.resolve(response);
        };

        return reject({ message: entity });
    }
};

export default new Services();