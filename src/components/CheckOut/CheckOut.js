import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const CheckOut = (props) => {
    console.log(props.cart);

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
    const onAddress = (data) => {
        document.getElementById("toAddress").innerText = data.Address;
    };

    return (
        <div className="row mt-5">
            <div className="col-6">
                <form className="signup" onChange={handleSubmit(onAddress)} onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="Name"></label>
                    <input
                        defaultValue={loggedInUser.displayName}
                        placeholder="Your Name"
                        {...register("Name", {
                            required: "this is a required"
                        })}
                    />
                    {errors.Name && <p>{errors.Name.message}</p>}

                    <label htmlFor="Address"></label>
                    <input
                        placeholder="Your Address"
                        {...register("Address", {
                            required: "this is a required"
                        })}
                    />
                    {errors.Address && <p>{errors.Address.message}</p>}

                    <label htmlFor="FlatNo"></label>
                    <input
                        placeholder="Flat, suite or floor"
                        {...register("FlatNo", {
                            required: "this is a required"
                        })}
                    />
                    {errors.FlatNo && <p>{errors.FlatNo.message}</p>}

                    <label htmlFor="instruction"></label>
                    <input
                        type="text"
                        placeholder="Add delivery instruction"
                        {...register("instruction", {
                            required: "this is a required"
                        })}
                    />
                    {errors.instruction && <p>{errors.instruction.message}</p>}
                    <input type="submit" />
                </form>
            </div>
            <div className="col-6">
                <h5>From <strong>Gulshan Plaza Restaura GPR</strong></h5>
                <p>Arriving in 20-30 min</p>
                <h5 id="toAddress"></h5>
                {

                }
            </div>
        </div>
    );
};

export default CheckOut;