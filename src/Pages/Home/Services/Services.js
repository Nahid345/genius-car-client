import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-5'>
             
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <div className="h2 text-5xl font-semibold">Our service Area</div>
                <p>The Majority Have Alteration in some From, By Injected Humour, Or Randomised <br />Words Which Don't Look Even Slightly Believable</p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}


                    ></ServiceItem>)
                }

            </div>
           <div className='flex text-center'>
           <button className="btn btn-warning  text-center">More Services</button>
           </div>
           
        </div>

    );
};

export default Services;