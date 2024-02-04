import React from 'react';
import './contact.css'
import Swal from 'sweetalert2';
const Contact = () => {

const handleSuccess=()=>{
  Swal.fire({
    position: "top",
    icon: "success",
    width:"300px",
    title: "Send Successful",
    showConfirmButton: false,
    timer: 1500
  });

}

    return (
        <div className=' mx-auto meet h-screen'>
            
    
  <div>
  <h1 className='text-center font-semibold text-2xl text-white font-serif'>CONTACT US</h1>
   <p className='border-b-2 border-black w-[30px] mx-auto mt-6'></p>
     <p className='text-center mt-10 text-white'>WE launch our new website soon. <br />
     Please stay update and follow
     </p>
  </div>

     <div className='flex justify-center items-center form mt-[50px]'>
  <div className=''>
    <input type="text" placeholder="Name" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="Email" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="MESSAGE" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" />
    <br />
    <button onClick={handleSuccess} className='w-[150px] ml-[65px] mt-6 hover:bg-inherit hover:text-white border p-2 rounded bg-[#0ece91]'>SEND MESSAGE</button>
  </div>
</div>


   


        </div>
    );
};

export default Contact;