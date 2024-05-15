import React, { useState } from 'react';

const ContactForm = () => {
  // State variables for form fields, errors, and form submission status
  const [name, setName] = useState(''); // Stores the name input value
  const [email, setEmail] = useState(''); // Stores the email input value
  const [message, setMessage] = useState(''); // Stores the message input value
  const [errors, setErrors] = useState({}); // Stores error messages for each field
  const [formSubmitted, setFormSubmitted] = useState(false); // Tracks the form submission status

  // Function to validate email format using a regex pattern
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pattern for basic email validation
    return emailRegex.test(email); // Returns true if the email matches the pattern
  };

  // Event handler for field blur to validate the field and set error messages
  const handleBlur = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    if (!value.trim()) { // Check if the field is empty
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` }); // Set error message
    } else {
      setErrors({ ...errors, [name]: '' }); // Clear error message if the field is not empty
    }
  };

  // Event handler for email field change to validate email format in real-time
  const handleEmailChange = (e) => {
    const { value } = e.target; // Get the value from the event target
    setEmail(value); // Update the email state
    if (value.trim() && !validateEmail(value)) { // Validate email format
      setErrors({ ...errors, email: 'Invalid email address' }); // Set error message for invalid email
    } else {
      setErrors({ ...errors, email: '' }); // Clear error message if the email is valid
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Check if all fields are valid and not empty
    if (Object.values(errors).every(x => x === '') && name && email && message) {
      setFormSubmitted(true); // Set form submission status to true
    } else {
      setFormSubmitted(false); // Set form submission status to false
      alert('Please fill in all fields correctly.'); // Display an alert for incomplete or invalid fields
    }
  };

  return (
    <div className="container is-three-quarters   is-fluid">
      <h2 className="title has-text-centered  has-text-info">Contact Me</h2>
      <div className="columns is-centered is-rounded ">
        <div className="column is-half">
          {/* Contact form */}
          <form onSubmit={handleSubmit}>
            {/* Name field */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${errors.name ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onBlur={handleBlur}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                {errors.name && <p className="help is-danger">{errors.name}</p>}
              </div>
            </div>
            {/* Email field */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${errors.email ? 'is-danger' : ''}`}
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleEmailChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {errors.email && <p className="help is-danger">{errors.email}</p>}
              </div>
            </div>
            {/* Message field */}
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className={`textarea ${errors.message ? 'is-danger' : ''}`}
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onBlur={handleBlur}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <p className="help is-danger">{errors.message}</p>}
              </div>
            </div>
            {/* Submit button */}
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button type="submit" className="button is-info">Submit</button>
              </div>
            </div>
            {/* Display form submission status */}
            {formSubmitted && <p className="help is-primary">Form submitted successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
