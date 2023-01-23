import React from "react";
import {AuthForm} from './Auth.components';

const LoginPage = () =>{

return(
    <AuthForm>
        <label htmlFor="username"> Username </label>
        <input placeholder="Username" />
        <label htmlFor="password"> Password </label>
        <input placeholder="Password" type="password"/>
        <button type="submit">Login</button>
    </AuthForm>
)

}

export default LoginPage;