import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Name">Name</label>
            <input
                placeholder="Your Name"
                {...register("Name", {
                    required: "this is a required"
                })}
            />
            {errors.Name && <p>{errors.Name.message}</p>}

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

            <label>New Password: </label>
            <input
                placeholder="Password"
                type="password"
                {...register("password", { required: "Password is required!" })}
            />
            {errors.password && (
                <p style={{ color: "black" }}>{errors.password.message}</p>
            )}

            <label>Confirm Password: </label>
            <input
                placeholder="Confirm password"
                type="password"
                {...register("passwordConfirmation", {
                    required: "Please confirm password!",
                    validate: {
                        matchesPreviousPassword: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords should match!";
                        }
                    }
                })}
            />
            {errors.passwordConfirmation && (
                <p style={{ color: "black" }}>
                    {errors.passwordConfirmation.message}
                </p>
            )}
            <input type="submit" />
            <h6 className="text-center text-dark">Already Customer? <Link to="/login">Log In</Link> Here</h6>
            <div className="text-center">
                <button className="btn btn-dark signIn-btn">Sign In With Google</button>
                <button className="btn btn-dark signIn-btn">Sign In With Facebook</button>
            </div>
        </form>
    );
}

export default SignUp;