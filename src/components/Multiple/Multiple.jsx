import React, { useState } from "react";
import "./multiple.css";
export default function Multiple() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        qualification: "",
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `First Name: ${formData.firstName},LastName: ${formData.lastName} Email: ${formData.email}, 
            Mobile Number: ${formData.mobileNo},Qualification: ${formData.qualification}`
        );
    };
    return (
        <form onSubmit={handleSubmit} className="multiple">

            <label className="multiple__text" htmlFor="firstName">
                First Name:
                <input
                    type="text"
                    id="firstName"
                    className="multiple__input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />      </label>
            <label className="multiple__text" htmlFor="lastName">
                Last Name:
                <input
                    type="text"
                    id="lastName"
                    className="multiple__input"
                    name="lastName"
                    value={formData.checkBox1}
                    onChange={handleChange}
                /> </label>
            <label className="multiple__text" htmlFor="email">
                Email I:
                <input
                    type="email"
                    id="email"
                    className="multiple__input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                /></label>
            <label className="multiple__text" htmlFor="mobileNo">
                Mobile Number:
                <input
                    type="text"
                    id="mobileNo"
                    className="multiple__input"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange} /></label>
            Qualification:
            <label htmlFor="qualification" className="checkbox__text">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="checkbox1"
                    value={formData.checkbox1}
                    onChange={handleChange}
                />
                Hign School(10th)
            </label>
            <label htmlFor="qualification" className="checkbox__text">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="checkbox2"
                    value={formData.checkbox2}
                    onChange={handleChange}
                />
                High School(12th)
            </label>
            <label htmlFor="qualification" className="checkbox__text">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="checkbox3"
                    value={formData.checkbox3}

                    onChange={handleChange}
                />
                Graduation(Bachelors)
            </label>
            <label htmlFor="qualification" className="checkbox__text">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="checkbox4"
                    value={formData.checkbox4}
                    onChange={handleChange}
                />
                Post Graduation(Masters)
            </label>
            <label htmlFor="qualification" className="checkbox__text">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    name="qualification"
                    value={formData.checkbox5}
                    onChange={handleChange}
                />
                Other

            </label>

            <button className="multiple__button" type="submit">
                Submit
            </button>
            <button className="multiple__button" type="reset">
                Reset
            </button>
        </form>
    );
}