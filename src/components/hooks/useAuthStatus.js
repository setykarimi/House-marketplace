import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useEffect, useRef, useState } from 'react';
const useAuthState = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingState, setCheckingState] = useState(true)
    // const isMounted = useRef(true)

    useEffect(() => {
        // if(isMounted) {
            const auth = getAuth()
            onAuthStateChanged(auth, user => {
                console.log(user);
                if(user){
                    setLoggedIn(true)
                    console.log('true');
                }

                setCheckingState(false)
            })
        // }

        // return () => {
        //     isMounted.current == false
        // }
        
    }, [loggedIn, checkingState])
    
    return {loggedIn, checkingState}
}
 
export default useAuthState;