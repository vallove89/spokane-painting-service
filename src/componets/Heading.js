import React from 'react';

const Heading = ({ background, heading }) => {
    

     

    return (
        <header>
            <div
                className='bg-info d-flex aligns-items-center justify-content-center'
                style={{ backgroundImage: `url('${background}')`, height: 600, backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
               {heading}
            </div>
        </header>

    )
}

export default Heading;