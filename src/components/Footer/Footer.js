import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FcCopyright } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Footer = () => {
   
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
     
    <p className='flex gap-2'>Copyright  <FcCopyright></FcCopyright> 2022 - All right reserved MD.Saki-uz-zaman</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link  >
    <FaFacebookSquare className='text-4xl'></FaFacebookSquare>
    </Link> 
    <Link><FaLinkedin className='text-4xl'></FaLinkedin> </Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;