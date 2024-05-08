const ContactForm = () => {
  return (
      <div className="container">
          <h2 className="title has-text-centered mt-6">Contact Me</h2>
          <div className="columns is-centered mt-6">
              <div className="column is-half">
                  <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                          <input className="input" type="email" placeholder="Your email" />
                      </div>
                  </div>
                  <div className="field">
                      <label className="label">Phone Number</label>
                      <div className="control">
                          <input className="input" type="tel" placeholder="Your phone number" />
                      </div>
                  </div>
                  <div className="field">
                      <label className="label">Message</label>
                      <div className="control">
                          <textarea className="textarea" placeholder="Your message"></textarea>
                      </div>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                      <div className="control">
                          <button className="button is-primary">Submit</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ContactForm;