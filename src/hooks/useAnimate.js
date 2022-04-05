import { useState, useEffect } from 'react'

const useAnimate = () => {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    },[])

    return animate;
};

export default useAnimate;