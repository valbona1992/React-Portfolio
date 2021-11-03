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
        <h1 class="display-4 text-center text-primary mb-5">Contact Me</h1>
        <form>
        <div className="container col-md-8 mb-3">
          <label for="exampleInputName1" class="text-danger">Name:</label>
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
        <div className="container col-md-8 mb-3">
          <label for="exampleInputEmail1" class="text-danger">Email:</label>
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
        <div className="container col-md-8 mb-3">
          <label for="exampleFormControlTextarea1" class="text-danger">Message:</label>
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
        <div className="container text-center col-md-8 mb-3">
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