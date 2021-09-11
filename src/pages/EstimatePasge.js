import Heading from "../componets/Heading";
import EstimateForm from "../componets/EstimateForm";

const heading = (
    <div className="m-auto aligns-items-center text-center text-white" style={{ background: 'black', backgroundColor: 'rgba(0, 0, 255, 0)'}}>
        <h1 className="fw-bolder"><u>Estimate</u></h1>
    </div>
)

const EstimatePage = () => {

    return (
        <>
            <Heading background='img/rsz_exterior.jpg' heading={heading}/>
            <EstimateForm/>
        </>
    )
}

export default EstimatePage;

