import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import CartProduct from '../CartProduct/CartProduct';

const CheckOut = (props) => {
    const cart = props.cart;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [price, setPrice] = useState(0);

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
            <div className="col-sm-12 col-xs-12 col-md-6">
                <form className="signup" onChange={handleSubmit(onAddress)} onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="Name"></label>
                    <input
                        defaultValue={loggedInUser.displayName}
                        placeholder="Your Name"
                        {...register("Name", {
                            required: "This is a required"
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

                    <label htmlFor="Address2"></label>
                    <input
                        type='text'
                        placeholder="Flat, suite or floor"
                        {...register("FlatSuiteOrFloor")}
                    />

                    <label htmlFor="instruction"></label>
                    <input
                        type="text"
                        placeholder="Add delivery instruction"
                        {...register("instruction")}
                    />
                    {errors.instruction && <p>{errors.instruction.message}</p>}
                    <input type="submit" />
                </form>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
                <h5>From <strong>Gulshan Plaza Restaura GPR</strong></h5>
                <p>Arriving in 20-30 min</p>
                <h5 id="toAddress"></h5>
                {
                    cart.map(cart => <CartProduct price={price} setPrice={setPrice} cart={cart}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default CheckOut;