import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";

const Teams = () => {
    return (
        <div>
            <div className='text-center mb-10'>
                <p className='text-xl font-semibold text-orange-600 mt-24'>Team</p>
                <div className='text-3xl font-bold mt-2 mb-2 '>Meet Our Team</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consecteturm <br /> adipisicing elit. Blanditiis, iure. Iste culpa dignissimos  </p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl mb-10 ">
                    <img className='rounded-lg w-80 mx-auto  ' src={img1} alt="Shoes" />
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions text-3xl ">
                            <FaFacebook className='text-blue-600'></FaFacebook>
                            <FaInstagramSquare className='text-red-400'></FaInstagramSquare>
                            <FaLinkedin className='text-blue-600 '> </FaLinkedin>
                            <FaGithub className='text-black-700'></FaGithub>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-10">
                    <img className='rounded-lg w-80 mx-auto  ' src={img2} alt="Shoes" />
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions text-3xl ">
                            <FaFacebook className='text-blue-600'></FaFacebook>
                            <FaInstagramSquare className='text-red-400'></FaInstagramSquare>
                            <FaLinkedin className='text-blue-600 '> </FaLinkedin>
                            <FaGithub className='text-black-700'></FaGithub>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-10">
                    <img className='rounded-lg w-80 mx-auto  ' src={img3} alt="Shoes" />
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions text-3xl ">
                            <FaFacebook className='text-blue-600'></FaFacebook>
                            <FaInstagramSquare className='text-red-400'></FaInstagramSquare>
                            <FaLinkedin className='text-blue-600 '> </FaLinkedin>
                            <FaGithub className='text-black-700'></FaGithub>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;