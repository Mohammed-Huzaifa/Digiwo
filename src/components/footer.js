import React from "react";
import { Link } from "react-router-dom";
import LogoLight from '../assets/images/logo-light.png'
import Logo5 from '../assets/images/logo5.png';

import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail,FiFileText} from '../assets/icons/vander'

export default function Footer(){
    return(
        <>
         
        <footer className="relative bg-gray-900 overflow-hidden">
            

            <div className="container relative text-center">
                <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
                    <div className="py-[30px] px-0">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                            {/* <Link to="#" className="text-[22px] focus:outline-none">
                                    <img src={Logo5} className="mx-auto md:me-auto md:ms-0" alt=""/>
                            </Link> */}
                            </div>

                            <ul className="list-none footer-list md:text-end text-center mt-6 md:mt-0 space-x-1">
                                <li className="inline"><Link to="https://1.envato.market/mortalai-react" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiShoppingCart className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiDribbble className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiLinkedin className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiFacebook className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiInstagram className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiTwitter className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiMail className="h-4 w-4 align-middle"/></Link></li>
                                <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-blue-400 dark:hover:border-sky-400 hover:bg-sky-400 dark:hover:bg-blue-400 text-slate-300 hover:text-white"><FiFileText className="h-4 w-4 align-middle"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="text-gray-400">© {new Date().getFullYear()} Mortal.Ai. Design with <i className="mdi mdi-heart text-orange-700"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
        </>
    )
}