const ServiceContent = (props) => {

    return (
        <div id='#service' style={{padding: '100px 0 60px 0', backgroundColer: '#777'}}>
            <div className='container col-md-8' style={{ color: '#243e5c'}}>
                <div className='m-2 p-1'>
                    <h1 className='my-2 py-1'>{props.data ? props.data.first.title : "Loading..."}</h1>
                    {props.data
                        ? props.data.first.paragraphs.map((p,i) => (
                            <p className='m-1 py-2' key={`${p}-${i}`}>{p}</p>
                        ))
                        : 'Loading...'
                    }
                </div>
                <div className='m-2 p-1'>
                    <h1 className='my-2 py-1'>{props.data ? props.data.second.title : "Loading..."}</h1>
                    {props.data
                        ? props.data.second.paragraphs.map((p,i) => (
                            <p className='m-1 py-2' key={`${p}-${i}`}>{p}</p>
                        ))
                        : 'Loading...'
                    }
                </div>
                <div className='m-2 p-1'>
                    <h1 className='my-2 py-1'>{props.data ? props.data.services.title : "Loading..."}</h1>
                    <div className='row'>
                        <div className="col-md-6 m-auto">
                            <ul className='list-unstyled m-2 p-1'>
                                {props.data
                                ? props.data.services.listOne.map((s, i) => (
                                    <li className='m-1 p-1' key={`${s}-${i}`}> {s}</li>
                                    ))
                                : "loading"}
                            </ul>
                        </div>
                        <div className="col-md-6 m-auto">
                            <ul className='list-unstyled m-2 p-1'>
                                {props.data
                                ? props.data.services.listTwo.map((s, i) => (
                                    <li className='m-1 p-1' key={`${s}-${i}`}> {s}</li>
                                    ))
                                : "loading"}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceContent;