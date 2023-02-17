import { useEffect, useState } from "react";

const useForm = (callback: any, validate: any, formType: any) => {

    const [values, setValues] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        console.log('form validation values', values)
    }, [values])
    

    // submit if no errors
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = () => {
        // if(event) event.preventDefault();
        setErrors(
            validate(
                values,
                formType
            )
        );
        setIsSubmitting(true);
    };

    const handleChange = (event: any, inputType: any) => {
        // event.persist();
        if (inputType) {
            setValues((value: any) => (
                {
                    ...value,
                    [inputType]: event
                })
            );
            return;
        };

        setValues((value: any) => (
            {
                ...value,
                [event.target.name]: event.target.value
            })
        );
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;