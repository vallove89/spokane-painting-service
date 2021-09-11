import { FaRegBuilding, FaCouch } from 'react-icons/fa';
import { BsHouseFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
const Services = () => {
    return (
      <div id='services' className='text-center' style={{padding: '100px 0 60px 0', backgroundColer: '#777'}} >
        <div className='container'>
          <div className='mb-3 pb-2'>
            <h2 className='fw-bolder fst-italic' style={{ color: '#243e5c'}}><u>Our Services</u></h2>
          </div>
          <div className='row'>
            <div className='col-md-4 my-3 py-2'>
              <div className='m-auto d-flex aligns-items-center justify-content-center' style={{ width: '250px', height: '250px', borderRadius: '50%', background: '#243e5c'}}>
                <LinkContainer to='/commercial'>
                  <div className='m-auto p-auto'>
                    <FaRegBuilding className='m-auto' size={100} style={{ color: 'white'}}/>
                    <h4 className='m-auto text-white'>Commercial</h4>
                  </div>
                </LinkContainer>
              </div>
            </div>
            <div className='col-md-4 my-3 py-2'>
              <div className='m-auto d-flex aligns-items-center justify-content-center' style={{ width: '250px', height: '250px', borderRadius: '50%', background: '#243e5c'}}>
                <LinkContainer to='/exterior'>
                  <div className='m-auto p-auto'>
                  <BsHouseFill className='m-auto' size={100} style={{ color: 'white'}}/>
                    <h4 className='m-auto text-white'>Exterior</h4>
                  </div>
                </LinkContainer>
              </div>
            </div>
            <div className='col-md-4 my-3 py-2'>
              <div className='m-auto d-flex aligns-items-center justify-content-center' style={{ width: '250px', height: '250px', borderRadius: '50%', background: '#243e5c'}}>
                <LinkContainer to='/interior'>
                  <div className='m-auto p-auto'>
                    <FaCouch className='m-auto' size={100} style={{ color: 'white'}}/>
                    <h4 className='m-auto text-white'>Interior</h4>
                  </div>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Services;