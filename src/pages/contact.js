import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import contactImg from "../assets/images/Contact-04.svg"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Switcher from "../components/switcher";

import {FiHexagon, FiPhone,FiMail, FiMapPin} from "../assets/icons/vander"

export default function Contact(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
    }, []);
    return(
        <>
        <Navbar/>
        <section id="contact-section" className="relative lg:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={contactImg} alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch with us!</h3>

                                <form>
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-400 dark:border-gray-800 dark:focus:border-sky-400 focus:ring-0 mt-2" placeholder="Name :"/>
                                        </div>
        
                                        <div className="lg:col-span-6 mb-5">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-400 dark:border-gray-800 dark:focus:border-sky-400 focus:ring-0 mt-2" placeholder="Email :"/>
                                        </div>
                                    </div>
    
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0 mt-2" placeholder="Subject :"/>
                                        </div>
    
                                        <div className="mb-5">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0 mt-2 h-40" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center custom-button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
        <Footer/>
        
        </>
    )
}