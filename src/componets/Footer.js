import { LinkContainer } from "react-router-bootstrap";
import logo from '../icon/logo.svg';

const Footer = (props) => {
    return (
        <footer id='#footer' className='text-white' style={{padding: '20px 0 0 0', background: '#243e5c'}}>
            <div className='container'>
                <div className='row'>
                    <div className='m-3 p-2 col-md d-flex'>
                            <LinkContainer to='/' className='m-auto' style={{ width: '150px'}}>
                                <img src={logo} alt='Spokane Painting Service logo' />
                            </LinkContainer>
                    </div>
                    <div className='m-3 p-2 col-md d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <LinkContainer to='/' className='m-1 fs-5'>
                                <a href='#home' className='text-reset text-decoration-none'>Home</a>
                            </LinkContainer>
                            <LinkContainer to='/contact' className='m-1 fs-5'>
                                <a href='#contact' className='text-reset text-decoration-none'>Contact Us</a>
                            </LinkContainer>
                            <LinkContainer to='/estimate' className='m-1 fs-5'>
                                <a href='#estimate' className='text-reset text-decoration-none'>Estimates</a>
                            </LinkContainer>
                        </div>
                    </div>
                    <div className='m-3 p-2 col-md d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <LinkContainer to='/commercial' className='m-1 fs-5'>
                                <a href='#home' className='text-reset text-decoration-none'>Commercial</a>
                            </LinkContainer>
                            <LinkContainer to='/exterior' className='m-1 fs-5'>
                                <a href='#home' className='text-reset text-decoration-none'>Residential Exterior</a>
                            </LinkContainer>
                            <LinkContainer to='/interior' className='m-1 fs-5'>
                                <a href='#home' className='text-reset text-decoration-none'>Residential Interior</a>
                            </LinkContainer>
                            <LinkContainer to='/cabinet' className='m-1 fs-5'>
                                <a href='#home' className='text-reset text-decoration-none'>Kitchen Cabinets</a>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
                <p className='copy-right text-center fw-light fst-italic'>Copyright @ Spokane Painting Service. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;