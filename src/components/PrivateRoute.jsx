import { Navigate, Outlet } from "react-router-dom";
import useAuthState from "./hooks/useAuthStatus";
import { useEffect } from "react";

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthState()
    console.log('loggedIn privateRoute',loggedIn);

    useEffect(() => {
        if(checkingStatus){
            return <h3>Loading ...</h3>
        }
    },[loggedIn, checkingStatus])

    return loggedIn ? <Outlet /> : <Navigate to='/sign-in'/>
}
 
export default PrivateRoute;