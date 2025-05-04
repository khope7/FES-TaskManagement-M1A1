import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

//Creating method to redirect on user error
type AuthenticationGuardProps = {
    component: React.ReactNode | any;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({component})=>{
    const Component = withAuthenticationRequired(component,{
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
    })

    return(
        <Component />
    )
}

export default AuthenticationGuard;