import React, { useState, useEffect } from "react"
import Link from 'next/link'
import {
  FaGithubSquare,
  FaHamburger,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaRegTimesCircle,
} from 'react-icons/fa'
import navStyles from '../styles/nav.module.css'

const Nav = ({ categories }) => {
  const [open, setOpen] = useState('false')

  const menuActive = (e) => {
    const toggle = document.getElementById('toggle')
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
  }

  return (
    <>
      {width > 900 ?
      <nav className={navStyles.content} id={navStyles.nav}>
        <div className='uk-navbar-container' data-uk-navbar>
          <div className='uk-navbar-left'>
            <ul className='uk-navbar-nav'>
              <li>
                <Link href='/'>
                  <a>Affirmed Visionary</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <FaLinkedin />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <FaGithubSquare />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <FaInstagramSquare />
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>
                    <FaPinterestSquare />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='uk-navbar-right'>
            <ul className='uk-navbar-nav nav-links'>
              <li>
                <Link href='/'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Resources</a>
                </Link>
              </li>
            </ul>

            <button
              className='uk-button uk-button-default uk-margin-right nav-links'
              type='button'
            >
              Categories
            </button>
            <div uk-dropdown='animation: uk-animation-slide-top-small; duration: 1000'>
              <ul className='uk-nav uk-dropdown-nav nav-links'>
                {categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <Link
                        as={`/category/${category.slug}`}
                        href={`/category/[id]`}
                      >
                        <a className='uk-link-reset'>{category.name}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
         </div>
      </nav>
        :
        <div className='uk-navbar-container' data-uk-navbar>
        <div className='uk-navbar-left'>
          <ul className='uk-navbar-nav'>
            <li>
              <Link href='/'>
                <a>Affirmed Visionary</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaLinkedin />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaGithubSquare />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaInstagramSquare />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaPinterestSquare />
                </a>
              </Link>
            </li>
          </ul>
        </div>
          <div className='uk-navbar-right'>
            <button><FaHamburger /></button>
        </div>

        </div>}
   </>
  )
}

export default Nav

// const Nav = ({ categories }) => {

//     return (
//         <div>
//           <nav className="uk-navbar-container" data-uk-navbar>
//             <div className="uk-navbar-left">
//               <ul className="uk-navbar-nav">
//                 <li>
//                   <Link to="/"><a>Affirmed Visionary</a></Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="uk-navbar-right">
//               <button
//                 className="uk-button uk-button-default uk-margin-right"
//                 type="button"
//               >
//                 Categories
//               </button>
//               <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
//                 <ul className="uk-nav uk-dropdown-nav">
//                 {categories.map((category) => {
//               return (
//                 <li key={category.id}>
//                    <Link as={`/category/${category.slug}`} href={`/category/[id]`}>
//                    <a className='uk-link-reset'>{category.name}</a>
//                   </Link>
//                 </li>
//               )
//             })}
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//     )}

// export default Nav;
