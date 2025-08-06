import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'

export default function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [scroll, setScroll] = useState(false);

    useEffect(()=>{
        activateMenu()
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
          });
    },[])

     /*********************/
 /*    Menu Active    */
 /*********************/
 function getClosest(elem, selector) {
 
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};

function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
            if (menuItems[idx].href === window.location.href) {
                matchingMenuItem = menuItems[idx];
            }
        }

        if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
         
         
            var immediateParent = getClosest(matchingMenuItem, 'li');
      
            if (immediateParent) {
                immediateParent.classList.add('active');
            }
            
            var parent = getClosest(immediateParent, '.child-menu-item');
            if(parent){
                parent.classList.add('active');
            }

            var parent = getClosest(parent || immediateParent , '.parent-menu-item');
        
            if (parent) {
                parent.classList.add('active');

                var parentMenuitem = parent.querySelector('.menu-item');
                if (parentMenuitem) {
                    parentMenuitem.classList.add('active');
                }

                var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            } else {
                var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                if (parentOfParent) {
                    parentOfParent.classList.add('active');
                }
            }
        }
    }
}
/*********************/
/*  Clickable manu   */
/*********************/
if (document.getElementById("navigation")) {
    var elements = document.getElementById("navigation").getElementsByTagName("a");
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
            if (elem.target.getAttribute("href") === "#") {
                var submenu = elem.target.nextElementSibling.nextElementSibling;
                submenu.classList.toggle('open');
            }
        }
    }
}

    return(
        <>
        <nav id="topnav" className={`${scroll ? "nav-sticky" : "" } defaultscroll is-sticky`}>
            <div className="container">
                <Link className="logo" to="/">
                    {/* <img src={logoDark} className="h-6 inline-block dark:hidden" alt=""/>
                    <img src={logoLight} className="h-6 hidden dark:inline-block" alt=""/> */}
                    DigiWorks
                </Link>
               
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link className={`${toggleMenu ? 'open' : ''} navbar-toggle`}  onClick={()=>setToggleMenu(!toggleMenu)}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className="buy-button list-none mb-0">
                    <li className="inline mb-0">
                    {/* <Link to="/login">
  <span className="custom-login-button-outline md:inline hidden">Login</span>
  <span className="custom-login-button-solid inline md:hidden">Login</span>
</Link> */}

                    </li>
            
                    <li className="md:inline hidden ps-1 mb-0 ">
                    <HashLink smooth to="/#contact-section" className="custom-button">
  Contact
</HashLink>

                    </li>
                </ul>
                
            </div>
        </nav>
        </>
    )
}