import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const CheckOut = () => {
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
    return (
        <div className="row mt-5">
            <div className="col-6">
                <form className="signup" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={loggedInUser.displayName}
                        placeholder="Your Name"
                        {...register("Name", {
                            required: "this is a required"
                        })}
                    />
                    {errors.Name && <p>{errors.Name.message}</p>}

                </form>
            </div>
            <div className="col-6">

            </div>
        </div>
    );
};

export default CheckOut;