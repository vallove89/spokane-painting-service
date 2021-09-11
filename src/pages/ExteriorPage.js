import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Heading from '../componets/Heading';
import ServiceContent from '../componets/ServiceContent';
import EstimateSection from '../componets/EstimateSection';

const content = {
    first: {
        title: "Spokane's Exterior Painting Specialists",
        paragraphs: [
            "We specialize in exterior painting projects of all sizes. From repainting your garge or shop exterior to match your home to repainting all of your exterior trim or repainting the entire outside of your home. Let the team at Spokane Painting Service transform your home interior with a modern color scheme. You can count on us to transparent, punctual and professional, throught the entire process."    ]
    },
    second: {
        title: "Complementary Color Consultations",
        paragraphs: [
            "Once you've decided to paint your home, one of the biggest decisions you have to make is what colour paint to choose. For some people, this is a very easy decision and they already have their mind made up when it comes to choosing the right color, other times it can be an overwhelming process. We aim to make this process a bit easier with our free color consultations.",
            "With a color consultation, you receive expert advice when selecting your colors to eliminate any potential issues. Our color consultants know exactly how a paint color will look once it's dried, how it will look when it's applied over your existing paint, how the direction of the sun will affect the color's appearance, and eliminate any guesswork and disappointment that can come with choosing the wrong color for your home's interior."
        ]
    },
    services: {
        title: "Our Interior Painting Services",
        listOne: [
            "Exterior Painting",
            "Metal Siding Painting",
            "Deck & Fence Staining"
        ],
        listTwo: [
            "Wood Siding Painting",
            "Fiber Cement Siding Painting",
            "Window & Door Painting"
        ],
    }
}

const heading = (
    <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
        <h1 className="fw-bolder"><u>Exterior Painting Service</u></h1>
        <LinkContainer to="/estimate">
                    <button type="button" className="btn btn-danger">
                        Get a Free Estimate
                    </button>
        </LinkContainer>
    </div>
)

const ExteriorPage = () => {

    return (
        <>
            <Heading background='img/rsz_exterior.jpg' heading={heading} />
            <ServiceContent data={content} />
            <EstimateSection />
        </>
    )
}

export default ExteriorPage;