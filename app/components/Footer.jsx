'use client'

import Link from 'next/link';
import Image from 'next/image';

import { FaInstagram, FaLinkedin, FaTelegram, FaFacebookF } from "react-icons/fa";

import {
BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const Footer = () =>   {
  return (
    <footer className="text-white " id="footer" style={{ backgroundColor: '#111c29' }}>
      <div className="py-4 border-b border-gray-700 footer-top">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Info */}
          <div>
            <Link href="/" className="flex items-center mb-8 ml-15 space-x-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <BuildingOfficeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold ml-2 text-white">EMPower</span>
            </Link>


            <p className="text-justify text-md">
              EMPower is a modern EMS that revolutionizes workforce management through streamlined HR operations, automated processes, and intuitive tools. It empowers organizations to enhance productivity and drive business success efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-amber-400 ">Quick Links</h4>
            <ul className="text-white mt-7">
              
              {/* Home */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-house text-yellow-400 text-lg"></i>
                <Link href="/" className="hover:text-yellow-400 transition font-semibold">Home</Link>
              </li>

              {/* About Us */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-user-group text-yellow-400 text-lg"></i>
                <Link href="/about" className="hover:text-yellow-400 transition font-semibold">About Us</Link>
              </li>

              {/* Your Profile */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-cogs text-yellow-400 text-lg"></i>
                <Link href="/userProfile" className="hover:text-yellow-400 transition font-semibold">Your Profile</Link>
              </li>

              {/* Contact Us */}
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-users text-yellow-400 text-lg"></i>
                <Link href="/contactUs" className="hover:text-yellow-400 transition font-semibold">Contact Us</Link>
              </li>
            </ul>
          </div>



       {/* Essential Links */}
          <div className="mx-auto">
            <h4 className="text-xl font-semibold mb-4  text-amber-400">Essential Links</h4>
            <ul className="text-white mt-7">
              
              {/* Privacy Policy */}
              <li className="flex items-center  space-x-3 mb-3">
                <i className="fa-solid fa-shield-halved text-yellow-400 text-lg"></i>
                <Link href="/privacyPolicy" className="hover:text-yellow-400 transition font-semibold">Privacy Policy</Link>
              </li>

              {/* FAQ / Help */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-circle-question text-yellow-400 text-lg"></i>
                <Link href="/faq" className="hover:text-yellow-400 transition font-semibold">FAQ / Help</Link>
              </li>

              {/* Terms & Conditions */}
              <li className="flex items-center space-x-3 mb-3">
                <i className="fa-solid fa-file-contract text-yellow-400 text-lg"></i>
                <Link href="/terms" className="hover:text-yellow-400 transition font-semibold">Terms & Conditions</Link>
              </li>

              {/* Settings */}
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-yellow-400 text-lg"></i>
                <Link href="/settings" className="hover:text-yellow-400 transition font-semibold ">Settings</Link>
              </li>
            </ul>
          </div>

          {/* Social Networks */} 
         <div>
          <h4 className="text-xl font-semibold mb-4 flex justify-center text-amber-400">
            Our Social Networks
          </h4>
          <p className="text-center text-gray-50">
            Stay connected through our social channels for updates and insights.
          </p>

          <div className="flex justify-center space-x-4 text-xl mt-5">
            <a href="#" className=" w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-500 hover:bg-yellow-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className=" w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-500 hover:bg-yellow-400 hover:text-white"><FaLinkedin /></a>
            <a href="#" className="w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-500 hover:bg-yellow-400 hover:text-white" > <FaTelegram /></a>
            <a href="#"  className=" w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-500 hover:bg-yellow-400 hover:text-white"> <FaFacebookF /></a>
          </div>
        </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="py-5" style={{ backgroundColor: '#131f2d' }}>
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-200">
          © <span className="text-white font-semibold">EMPower 2025</span> | All Rights Reserved.
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;  