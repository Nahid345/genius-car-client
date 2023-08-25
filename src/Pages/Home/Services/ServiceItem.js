import React from 'react';
import { FaArrowRight  } from "react-icons/fa";


const ServiceItem = ({ service }) => {
    const { img, price, title } = service;
    return (
    
         <div className="card  w-96 bg-base-100 shadow-xl  mb-5">
            <figure> <img className='rounded-lg object-scale-down h-50 w-98 m-5 p-2' src={img} alt="Shoes" /></figure>
           
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                <h3 className='text-xl text-orange-600'><FaArrowRight></FaArrowRight></h3>
                </div>
            </div>
        
        </div>
       
      
        
    );
};

export default ServiceItem;