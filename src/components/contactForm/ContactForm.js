import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Contact Name"    
        aria-label="Contact Name"
      />
    </label>
    <br/>
    <label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        pattern="^(?:\+44|0)(?:\d{9}|\d{10}|\d{11}|\d{12})$"
        placeholder="Contact Phone (###-###-####)"    
        aria-label="Contact Phone"
      />
    </label>
    <br/>
    <label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Contact Email"    
        aria-label="Contact Email"
      />
    </label>
    <br/>
    <input type="submit" value="Add Contact" aria-label="Add Contact"/>  
  </form>
  </>
  );
};