import Contact from "../componets/Contact";
import Heading from "../componets/Heading";

const contact = {
    address: "4237 S Driftwood Dr. Spokane Valley WA 99206",
    phone: "509-499-7414",
    email: "chriscov270@yahoo.com"
}

const heading = (
    <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
        <h1 className="fw-bolder"><u>Contact Us</u></h1>
    </div>
)

const ContactPage = () => {

    return (
        <>
            <Heading background='img/rsz_exterior.jpg' heading={heading} />
            <Contact contact={contact}/>
        </>
    )
}

export default ContactPage;