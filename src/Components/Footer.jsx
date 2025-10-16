import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center mt-16">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="#" className="mx-2 hover:text-blue-400 duration-200 ease-in-out">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-blue-400 duration-200 ease-in-out">Terms of Service</a>
          <a href="#" className="mx-2 hover:text-blue-400 duration-200 ease-in-out">Contact Us</a>
          <a href="#" className="mx-2 hover:text-blue-400 duration-200 ease-in-out">Support</a>
        </div>
        <div className="mb-4 flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=100006195645373" className="hover:text-blue-400 duration-200 ease-in-out text-4xl "> <FaFacebook /> </a>
          <a href="https://x.com/_Osssama_" className="hover:text-blue-400 duration-200 ease-in-out text-4xl "> <FaTwitter /> </a>
          <a href="https://www.instagram.com/_ooosama_/" className="hover:text-blue-400 duration-200 ease-in-out text-4xl "> <FaInstagram /> </a>
          <a href="https://www.linkedin.com/in/osama-ramadan-elnagamy-717438333/" className="hover:text-blue-400 duration-200 ease-in-out text-4xl "> <FaLinkedin /> </a>

        </div>
        <p>&copy; {new Date().getFullYear()} Disney clone. All rights reserved for Osama Ramadan.</p>
      </div>
    </footer>
  )
}

export default Footer