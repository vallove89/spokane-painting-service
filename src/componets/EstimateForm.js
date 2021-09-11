import  { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    property: '',
    service: '',
    projectInformation: '',
    importToYou: '',
    callbackDay: '',
    callbackTime: ''
  }
  
  const EstimateForm = (props) => {
    const [{ name, email, phone, address, property, service, projectInformation, importToYou, callbackDay, callbackTime }, setState] = useState(initialState)
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setState((prevState) => ({ ...prevState, [name]: value }))
    }

  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name, email, phone, address, property, service, projectInformation, importToYou, callbackDay, callbackTime)

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
        <div id='estimate-form' style={{padding: '100px 0 60px 0', backgroundColer: '#333'}}>
          <div className='container col-md-8'>
                <div className='section-title m-2 p-1'>
                  <h2 className='fs-1' style={{ color: '#243e5c'}}>Get a Free Estimate</h2>
                  <p className='fs-6 fst-italic' style={{ color: '#243e5c'}}>Spokane Painting Service provides free detailed and transparent consultions and estimates. For all your residential and commerial needs.</p>
                </div>
                <form name='sentMessage' validate onSubmit={handleSubmit} className='m-2 p-1'>
                    <div className='form-group'>
                    <label for='name' className='form-label m-1'>Your Name *</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control m-1 mb-3'
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
                        className='form-control m-1 mb-3'
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
                        className='form-control m-1 mb-3'
                        placeholder='Phone Number'
                        required
                        onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                    <label for='address' className='form-label m-1'>Address *</label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        className='form-control m-1 mb-3'
                        placeholder='Address'
                        required
                        onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                    </div>
                    <div className='section-title my-2 py-2'>
                        <h4 style={{ color: '#243e5c'}}>Project Information</h4>
                    </div>    
                    <div className='form-group'>   
                        <label for='property' className='form-label m-1'>What type of property do you have? *</label>     
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
                        <label for='service' className='form-label m-1'>What type of service do you need? *</label>     
                        <select
                            type='select'
                            id='service'
                            name='service'
                            className="form-select m-1 mb-2" 
                            required
                            onChange={handleChange}                            
                        >
                            <option selected>Type of Service...</option>
                            <option value="residential interial">Residential Interial</option>
                            <option value="residential exterial">Residential Exterial</option>
                            <option value="commercial interial">Commercial Interial</option>
                            <option value="commercial exterial">Commercial Exterial</option>
                            <option value="kitchen cabinets">Kitchen Cabinets</option>
                        </select>
                        <p className='help-block text-danger'></p>
                    </div>
                  <div className='form-group'>
                  <label for='projectInformation' className='form-label m-1'>Tell us about your project</label>   
                    <textarea
                      type='text'
                      name='projectInfomation'
                      id='projectInformation'
                      className='form-control m-1 mb-2'
                      rows='7'
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                  <label for='importToYou' className='form-label m-1'>What is important to you when selecting a painting company?</label>   
                    <textarea
                      type='text'
                      name='importToYou'
                      id='importToYou'
                      className='form-control m-1 mb-2'
                      rows='7'
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='section-title m-1 my-2 py-2'>
                    <p style={{ color: '#243e5c'}}><span>We'll Call You!</span></p>
                    <p style={{ color: '#243e5c'}}>Preferred Callback Time</p>
                  </div>
                  <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                            <label for='callbackDay' className='form-label m-1'>Day of the Week</label>
                            <input
                                type='text'
                                id='callbackDay'
                                name='callbackDay'
                                className='form-control m-1 mb-2'
                                placeholder='ex. Monday'
                                onChange={handleChange}
                            />
                            <p className='help-block text-danger'></p>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                            <label for='callbackTime' className='form-label m-1'>Time of Day</label>
                            <input
                                type='text'
                                id='callbackTime'
                                name='callbackTime'
                                className='form-control m-1 mb-2'
                                placeholder='ex 7pm-9am'
                                onChange={handleChange}
                            />
                            <p className='help-block text-danger'></p>
                        </div>
                      </div>
                  </div>
                  <button type='submit' className='btn btn-custom btn-lg bg-danger fs-2 fw-bolder text-white m-1 my-3 py-3'>
                    Get my Free Estimate
                  </button>
                </form>
        </div>
    </div>
    )
  }

  export default EstimateForm;