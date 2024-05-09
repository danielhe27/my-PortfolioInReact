import React, { useState } from 'react';



  return (
    <div className="container">
      <h2 className="title has-text-centered mt-6">Contact Me</h2>
      <div className="columns is-centered mt-6">
        <div className="column is-half">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className={`input ${errors.name && 'is-danger'}`}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onBlur={handleBlur}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${errors.email && 'is-danger'}`}
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleEmailChange}
                />
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className={`textarea ${errors.message && 'is-danger'}`}
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onBlur={handleBlur}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {errors.message && <p className="help is-danger">{errors.message}</p>}
            </div>
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
