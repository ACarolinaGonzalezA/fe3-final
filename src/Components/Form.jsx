import React, { useState } from "react";


const Form = () => {
   //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Lógica para enviar el formulario
      alert("Form submitted");
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
