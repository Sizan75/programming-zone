import React from 'react';
import { FaFacebookSquare, FaLinkedin,FaGithubSquare } from 'react-icons/fa';
import { FcCopyright } from 'react-icons/fc';


const Footer = () => {
   
    return (
        <div>
            <footer className="footer mt-48 items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
     
    <p className='flex gap-2'>Copyright  <FcCopyright></FcCopyright> 2022 - All right reserved MD.Saki-uz-zaman</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a  href='https://www.facebook.com/sakiuz.zaman.1/' target='_blank' rel='noreferrer'>
    <FaFacebookSquare className='text-3xl'></FaFacebookSquare>
    </a> 
    <a href='https://www.linkedin.com/in/md-saki-uz-zaman/' target='_blank' rel='noreferrer'><FaLinkedin className='text-3xl'></FaLinkedin> </a>
    <a href='https://github.com/Sizan75' target='_blank' rel='noreferrer'><FaGithubSquare className='text-3xl'></FaGithubSquare> </a>
  </div>
</footer>
        </div>
    );
};

export default Footer;