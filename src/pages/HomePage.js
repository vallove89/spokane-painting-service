import React from 'react';

import Heading from '../componets/Heading';
import Services from '../componets/Services';
import About from '../componets/About';
import EstimateSection from '../componets/EstimateSection';
import { LinkContainer } from 'react-router-bootstrap';

const HomePage = () => {

    const about = {
        summery: "We've been painting in the Spokane CDA area for over 10 years.",
        list1: [
            "reason 1",
            "reason 2",
            "reason 3",
            "reason 4"
        ],
        list2: [
            "reason 5",
            "reason 6",
            "reason 7",
            "reason 8"
        ]        
    }

    const services = [
        {
            src: "img/residential.jpg",
            alt: "Residential Painting Services",
            name: "Residential Painting"
        },
        {
            src: "img/commercial.jpg",
            alt: "Commercial Painting Services",
            name: "Commercial Painting"
        },
        {
            src: "img/exterior.jpg",
            alt: "Exterior Painting Services",
            name: "Exterior Painting"
        },
        {
            src: "img/interior.jpg",
            alt: "Interior Painting Services",
            name: "Interior Painting"
        },
        {
            src: "img/staining.jpg",
            alt: "Staining Painting Services",
            name: "Staining"
        },
        {
            src: "img/cabinet.jpg",
            alt: "Cabinet Painting Services",
            name: "Cabinet Painting",
            text: "summery of service"
        }
    ];

    const heading = (
        <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
            <h1 className="fw-bolder"><u>Spokane Painting Service</u></h1>
            <p className="lead fs-5 fst-italic">We server all our painting, staining and refinishing needs, in greater Spokane area.</p>
            <LinkContainer to="/estimate">
                        <button type="button" className="btn btn-danger">
                            Get a Free Estimate
                        </button>
            </LinkContainer>
        </div>
    )
    return (
        <>
            <Heading background="/img/rsz_exterior.jpg" heading={heading}/>
            <Services services={services} />
            <About summery={about.summery} list1={about.list1} list2={about.list2} />
            <EstimateSection />
        </>
    )
}

export default HomePage;