import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === "name") {
          setName(inputValue);
        } else if (inputType === "email") {
          setEmail(inputValue);
        } else setMessage(inputValue);
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        } else {
          setName("");
          setEmail("");
          setMessage("");
        }
      };

      return (
        <>
        <h1>Contact Me</h1>
        <form>
        <div className="container mb-3">
          <label for="exampleInputName1">Name:</label>
          <input
            name="name"
            value={name}
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div className="container mb-3">
          <label for="exampleInputEmail1">Email:</label>
          <input
            name="email"
            value={email}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleInputChange}
            placeholder="Enter Your Email Here"
            required
          />
        </div>
        <div className="container mb-3">
          <label for="exampleFormControlTextarea1">Message:</label>
          <input
            name="message"
            value={message}
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleInputChange}
            placeholder="Enter Your Message Here"
            required
          />
        </div>
        <div className="container mb-3">
          <button
            type="submit"
            class="text-center btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          </div>
     </form> 
     {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
     </>
      )
}




export default Contact;