import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Heading from '../componets/Heading';
import ServiceContent2 from '../componets/ServiceContent2';
import EstimateSection from '../componets/EstimateSection';

const content = {
    first: {
        title: "Spokane's Commercial Painting Specialists",
        paragraphs: [
            "Spokane Painting Service has completed numerous commercial painting projects for clients of all sizes. We provide high quality commercial painting services to businesses throughout the Spokane area.",
            "Our award winning commercial painting services are known throughout the Spokane area for our high quality products and strict attention to detail. Our talented team provides a custom tailored solution for each painting project we undertake – saving you time, money and headaches while completing the project in a non-invasive manner.",
            "When its time to paint your office, warehouse, or other commercial property, commercial painting provides the highest return on investment compared to other commercial renovation options available. Commercial painting for offices has also been shown to increase productivity among employees. Psychological studies on commercial interior painting for offices has shown that paint colors can affect creativity, energy and mental activity. So if you're looking for a way to boost your teams moral, a new paint color might be the solution."
        ]
    },
    services: {
        title: "Our Commercial Painting Services",
        listOne: [
            "Retail Painting",
            "Renovation Painting",
            "Hotel & Motel Painting",
            "Student Housing"
        ],
        listTwo: [
           "Light & Heavy Industrial Painting",
           "Non-Profit Organizations",
           "New Commercial Construction Painting"
        ],
    }
}

const heading = (
    <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
        <h1 className="fw-bolder"><u>Commercial Painting Service</u></h1>
        <LinkContainer to="/estimate">
                    <button type="button" className="btn btn-danger">
                        Get a Free Estimate
                    </button>
        </LinkContainer>
    </div>
)

const CommercialPage = () => {

    return (
        <>
            <Heading background='img/rsz_commercial.jpg' heading={heading}/>
            <ServiceContent2 data={content} />
            <EstimateSection />
        </>
    )
}

export default CommercialPage;