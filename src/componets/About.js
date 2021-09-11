import { AiOutlineFormatPainter } from "react-icons/ai";

const About = () => {
    return (
      <div id="about" style={{padding: '50px 0 50px 0', backgroundColer: '#777'}}>
        <div className="container text-center">
          <div className='mb-3 pb-2'>
            <h2 className='fw-bolder fst-italic' style={{ color: '#243e5c'}}><u>About Us</u></h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src="img/rsz_residential.jpg" className="img-responsive m-auto p-2" alt="" style={{ width: "100%"}}/>{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2 className="m-2 p-1 fw-bolder" style={{ color: '#243e5c'}}>Why Choose Us?</h2>
                <p className='m-2 p-1 fst-italic'>We are experienced, professional painting company, in Spokane area, dedicated to delivering high quality painting services for all your residental or commercial needs. </p>
                <h3 className='m-2 p-1 fw-bolder' style={{ color: '#243e5c'}}>How we can serve you:</h3>
                <div className="list-style row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h5 className='m-2 p-1 fw-bolder' style={{ color: '#243e5c'}}>Residential</h5>
                    <ul className="m-auto p-auto list-unstyled">
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Exterior Painting</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Exterior Staining</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Interior Painting</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Interior Stainting</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Kitchen Cabinets</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Wall Paper Removal</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Color Selection</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h5 className='m-2 p-1 fw-bolder' style={{ color: '#243e5c'}}>Commercial</h5>
                    <ul className="m-auto p-auto list-unstyled">
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Exterior Painting</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Exterior Staining</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Interior Painting</li>
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Interior Stainting</li>                      
                      <li className='m-2 p-1 fst-italic'><AiOutlineFormatPainter className='mx-2'/>Color Selection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;