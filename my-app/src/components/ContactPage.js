import React, { useState } from 'react';
import "./contactpage.css"

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can replace the console.log statements with your own logic
  };

  return (
    <div className='contactpage'>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='xyz'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='email'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='admin@admin.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='message'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
