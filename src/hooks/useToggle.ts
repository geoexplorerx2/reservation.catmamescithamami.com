import React, { useCallback, useState } from 'react';

const useToggle = (defaultValue: boolean = false) => {
    const [ toggleValue, setToggleValue ] = useState(defaultValue);

    const toggle = useCallback(() => setToggleValue(d => !d), []);
	// const setFalse = useCallback(() => setToggleValue(false), []);
	// const setTrue = useCallback(() => setToggleValue(true), []);

	return {
        toggle,
        toggleValue, 
        // setFalse, 
        // setTrue 
    };
};

export default useToggle;