import React,{ useState } from "react";
import emailjs from 'emailjs-com';

const initialState = {
    name: '',
    email: '',
    phone: '',
    property: '',
    service: '',
  }

const EstimateSection = () => {
     

    const [{ name, email, phone, property, service }, setState] = useState(initialState)

    const handleChange = (e) => {
      const { value } = e.target
      setState((prevState) => ({ ...prevState, value }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name, email, phone, property, service)

      
      emailjs.sendForm(process.env.REACT_APP_EMAIL_SERICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ESTIMATE_FORM, e.target, process.env.REACT_APP_EMAIL_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

      setState({ ...initialState})
    }

    return (
        <div id='#estimate' style={{padding: '100px 0 60px 0', backgroundColer: '#777'}}>
            <div className='container'>
                 <div className='m-auto mb-3 pb-2 text-center'>
                    <h2 className='fw-bolder fst-italic' style={{ color: '#243e5c'}}><u>Contact Us</u></h2>
                </div>
                <div className='row'>
                    <div className='col-md-5 m-2 p-1'>
                        <div className='m-5'>
                            <div className='section-title m-2 p-1'>
                                <h2 style={{ color: '#243e5c'}}>Get In Touch</h2>
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
                                    <label for='property' className='form-label m-1'>Select Property Type *</label>
                                    <select
                                        type='select'
                                        id='property'
                                        name='property'
                                        className="form-select m-1 mb-2" 
                                        required
                                        onChange={handleChange}                            
                                    >
                                        <option selected>Select One...</option>
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="condo">Condo</option>
                                    </select>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div className='form-group'>    
                                    <label for='service' className='form-label m-1'>Select Service *</label>
                                    <select
                                        type='select'
                                        id='service'
                                        name='service'
                                        className="form-select m-1 mb-2" 
                                        required
                                        onChange={handleChange}                            
                                    >
                                        <option selected>Type of Service...</option>
                                        <option value="residential interial">Residential</option>
                                        <option value="residential exterial">C</option>
                                        <option value="commercial interial">Commercial Interial</option>
                                        <option value="commercial exterial">Commercial Exterial</option>
                                        <option value="kitchen cabinets">Kitchen Cabinets</option>
                                    </select>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg bg-danger text-white m-1 my-3 py-3'>
                                Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-5 m-2 p-1'>
                        <div className='m-2 p-1'>
                            <h2 style={{ color: '#243e5c'}}>Get a Free,No obligation Estimate Today and Experience the Difference that Quality Makes.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstimateSection;