import React from 'react';
import intro from '../assets/videos/intro1.mp4';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Counting from './Counting';
import Swal from 'sweetalert2';

const CommingSoon = () => {
  const handleAlert = () => {
    Swal.fire({
      position: 'top',
      icon: 'success',
      width: '300px',
      title: 'Notify Successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const containerStyle = {
    position: 'relative',
    height: '100vh', 
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
  };

  const gradientStyle = {
    background: 'linear-gradient(to bottom, #2c3033bf, #2c3033bf)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <div className="tour text-center relative" style={containerStyle}>
      <video className="absolute top-0 left-0 object-cover" autoPlay loop muted style={videoStyle}>
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gradient-background" style={gradientStyle}></div>

      <div className="mx-auto container relative">
        <div className="flex justify-between px-4 pt-4 ">
          <h2 className="text-3xl font-serif font-bold text-white">
            Tour <span className="text-[#0ece91]">Time</span>
          </h2>
            <button  className="w-[100px] hover:bg-inherit hover:text-white border p-2 rounded bg-[#0ece91]">
            <Link to="/contact">Contact Us</Link>
            </button>

        </div>

<div className='flex flex-col items-center justify-between h-screen relative'>
<div></div>


        <div className="px-4">
          <Counting></Counting>

          <p className="text-1xl font-semibold font-serif text-white mt-16">
            WE ARE <br />
            <p className="text-2xl font-bold mt-1 font-serif">COMMING SOON</p>
          </p>

<p className='text-white w-[400px] text-sm font-thin mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Nisi deserunt officia praesentium aperiam unde blanditiis
    iusto quia. Commodi nemo consectetur. </p>
       

          <div className="mt-6  flex justify-center gap-8">
          <button onClick={handleAlert} className="w-[100px] hover:bg-inherit hover:text-white border p-2 rounded bg-[#0ece91]">
              Get Notify
            </button>
            <button className="w-[100px] text-white border p-2 rounded  hover:text-black hover:bg-[#0ece91]">
              <Link to="/about">About Us</Link>
            </button>
          </div>

        
        </div> 
        <div className="pb-[130px] flex text-white text-2xl  gap-4">
            <FaFacebook className="hover:text-[#0ece91]" />
            <FaInstagramSquare className="hover:text-[#0ece91]" />
            <FaWhatsappSquare className="hover:text-[#0ece91]" />
            <FaTwitter className="hover:text-[#0ece91]" />
            <FaSkype className="hover:text-[#0ece91]" />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default CommingSoon;
