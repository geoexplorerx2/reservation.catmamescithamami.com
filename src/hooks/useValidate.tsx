const useValidate = (values: any, type: any) => {
    let errors: any = {};
    switch (type) {
        case 'userpersonalinformation':
            if (!values.namesurname) {
                errors.namesurname = 'Name Surname is required';
            };

            if (!values.telephone) {
                errors.telephone = 'Phone Number is required';
            };

            if (!values.bithdate) {
                errors.bithdate = 'Birth date is required';
            };

            // if(!values.gender){
            //     errors.gender = 'Telephone is required';
            // };

            // if(!values.therapist){
            //     errors.therapist = 'Therapist is required';
            // };

            if (!values.email) {
                errors.email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'E-mail address is invalid';
            }

            break;
        default:
            break;
    };

    return errors;
};

export default useValidate;