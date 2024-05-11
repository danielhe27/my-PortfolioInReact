import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value.trim() && !validateEmail(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every(x => x === '') && name && email && message) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="container is-three-quarters   is-fluid">
      <h2 className="title has-text-centered  has-text-info">Contact Me</h2>
      <div className="columns is-centered is-rounded ">
        <div className="column is-half">
          <form onSubmit={handleSubmit}>
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
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button type="submit" className="button is-info">Submit</button>
              </div>
            </div>
            {formSubmitted && <p className="help is-primary">Form submitted successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
