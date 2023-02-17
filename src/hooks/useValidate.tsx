const useValidate = (values: any, type: any) => {
    let errors: any = {};
    switch (type) {
        case 'userpersonaldataregistry':
            if(!values.namesurname){
                errors.username = 'Name surname is required';
            };

            if(!values.telephone){
                errors.telephone = 'Telephone is required';
            };

            if(!values.bithdate){
                errors.bithdate = 'Telephone is required';
            };

            // if(!values.gender){
            //     errors.gender = 'Telephone is required';
            // };

            // if(!values.therapist){
            //     errors.therapist = 'Therapist is required';
            // };

            if(!values.email){
                errors.email = 'Email address is required';
            } else if(!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid';
            }

            break;
        // case 'userhealthinformationregistry' :
        //     if(values.covid_note && !values.covid_note) {
        //         errors.covid_note = 'Please provide explanation'
        //     }
        //     if() {

        //     }
            
            
        default:
            break;
    };  

    return errors;
};

export default useValidate;