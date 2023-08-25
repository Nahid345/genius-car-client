import React from 'react';

const ProductsItem = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5 ">
          
    <figure><img className=" rounded-md object-scale-down h-48 w-96 m-4 p-2 bg-gray-50" src={img} alt='' /></figure>
           
          
            
            <div className="card-body flex items-center justify-center  ">
                <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-lg text-orange-600 font-semibold'>${price}</p>

            </div>
        </div>
    );
};

export default ProductsItem;