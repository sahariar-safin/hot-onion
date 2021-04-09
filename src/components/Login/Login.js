import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleFbSignIn, handleGoogleSignIn } from '../../firebase.manager';

const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        // if (redirect) {
        //     history.replace(from);
        // }
    }
    console.log(user);
    console.log(loggedInUser);


    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
                placeholder="Your email"
                type="text"
                {...register("email", {
                    required: "this is required",
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address"
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label htmlFor="password">Password</label>
            <input
                placeholder="Your password"
                type="password"
                {...register("password", {
                    required: "This is required"
                })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" />
            <h6 className="text-center text-dark">New Customer? <Link to="/signup">Sign Up</Link> Here</h6>
            <div className="text-center">
                <button onClick={googleSignIn} className="btn btn-dark signIn-btn">Sign In With Google</button>
                <button onClick={fbSignIn} className="btn btn-dark signIn-btn">Sign In With Facebook</button>
            </div>
        </form>
    );
};

export default Login;