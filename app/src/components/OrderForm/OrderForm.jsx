import React, { useState } from 'react';
import Field from '../Field/Field';
import swal from "sweetalert"; 

const OrderForm = ({ handleCheckout }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const { name, phone, email } = formData;

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && phone && email;

    const onSubmit = (event) => {
        event.preventDefault();

        if (isFormValid) {
            handleCheckout({ name, phone, email });
        } else{
            swal("Complete el formulario para finalizar la compra",);

        }
    };

    return (
        <div>
            <h5>Ingresa tus datos para completar la compra 🛍</h5>

            <form onSubmit={onSubmit}>
                <Field label="Nombre" name="name" onChange={handleChange} />
                <Field label="Telefono" name="phone" onChange={handleChange} />
                <Field label="Correo Electrónico" name="email" onChange={handleChange} />

                <div className="text-center"> 
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
