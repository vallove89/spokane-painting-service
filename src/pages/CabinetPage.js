import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Heading from '../componets/Heading';
import ServiceContent3 from '../componets/ServiceContent3';
import EstimateSection from '../componets/EstimateSection';

const content = {
    first: {
        title: "Spokane's Cabinet Painting Specialists",
        paragraphs: [
            "We specialize in cabinet painting projects of all sizes. Why spend money on new cabinets when the team at Spokane Painting Service can paint your existing cabnits, at faction of the costs. Freinds and family will love the look of cabinet, and want to know where you bought them."    ]
    },
    second: {
        title: "Complementary Color Consultations",
        paragraphs: [
            "Once you've decided to paint your cabinets, one of the biggest decisions you have to make is what colour paint to choose. For some people, this is a very easy decision and they already have their mind made up when it comes to choosing the right color, other times it can be an overwhelming process. We aim to make this process a bit easier with our free color consultations.",
            "With a color consultation, you receive expert advice when selecting your colors to eliminate any potential issues. Our color consultants know exactly how a paint color will look once it's dried, how it will look when it's applied over your existing paint, how the direction of the sun will affect the color's appearance, and eliminate any guesswork and disappointment that can come with choosing the wrong color for your home's exterior."
        ]
    }
}

const heading = (
    <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
        <h1 className="fw-bolder"><u>Cabinet Painting Service</u></h1>
        <LinkContainer to="/estimate">
                    <button type="button" className="btn btn-danger">
                        Get a Free Estimate
                    </button>
        </LinkContainer>
    </div>
)

const CabinetPage = () => {

    return (
        <>
            <Heading background='img/rsz_2cabinet.jpg' heading={heading}/>
            <ServiceContent3 data={content} />
            <EstimateSection />
        </>
    )
}

export default CabinetPage;