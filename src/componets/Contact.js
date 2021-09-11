import React,{ useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}
const Contact = ({ contact }) => {
  const [{ name, email, phone, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, message)

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_CONTACT_FORM, e.target, process.env.REACT_APP_EMAIL_USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()

    setState({ ...initialState})
  }
  return (
    <div>
      <div id='contact' style={{padding: '100px 0 60px 0', backgroundColer: '#777'}}>
        <div className='container m-auto p-auto'> 
          <div className='row'>
            <div className='col-md-6 m-2 p-1'>
              <div className='row'>
                <div className='section-title m-2 p-2'>
                  <h2 className='fs-1' style={{ color: '#243e5c'}}>Get In Touch</h2>
                  <p className='fs-5 fst-italic' style={{ color: '#243e5c'}}>
                    Spokane Painting Service provides detailed, transparent estimates and no obligation consultations. Trust that the expert team at Spokane Painting Service will get the job done right the first time, on time and on budget.
                  </p>
                </div>
                <form name='sentMessage' validate onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <label for='name' className='form-label m-1'>Your Name *</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control m-1 mb-2'
                      placeholder='Your Name'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <label for='email' className='form-label m-1'>Email Address *</label>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      className='form-control m-1 mb-2'
                      placeholder='Email Address'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <label for='phone' className='form-label m-1'>Phone Number *</label>
                    <input
                      type='text'
                      id='phone'
                      name='phone'
                      className='form-control m-1 mb-2'
                      placeholder='Phone Number'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <label for='message' className='form-label m-1'>Message *</label>
                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      className='form-control m-1 mb-2'
                      rows='7'
                      placeholder='How can we assist you?'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg bg-danger text-white m-1 my-3 py-3'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className='col-md-3 col-md-offset-1 contact-info m-2 p-1'>
              <div className='contact-item m-2 p-2'>
                <h3 className='fs-1' style={{ color: '#243e5c'}}>Contact Info</h3>
              </div>
              <div className='contact-item m-2 p-2'>
                <p style={{ color: '#243e5c'}}>
                  <span>
                    <i className='fa fa-map-marker'></i> Address:
                  </span>{' '}
                  {contact ? contact.address : 'loading'}
                </p>
              </div>
              <div className='contact-item m-2 p-2'>
                <p style={{ color: '#243e5c'}}>
                  <span>
                    <i className='fa fa-phone'></i> Phone:
                  </span>{' '}
                  {contact ? contact.phone : 'loading'}
                </p>
              </div>
              <div className='contact-item m-2 p-2'>
                <p style={{ color: '#243e5c'}}>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email:
                  </span>{' '}
                  {contact ? contact.email : 'loading'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;