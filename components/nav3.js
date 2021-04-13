import Link from 'next/link'
import { useState } from 'react'
import { FaHamburger, FaPortrait } from 'react-icons/fa'

const Nav3 = ({ categories }) => {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
      <nav className='flex items-center space-between flex-wrap bg-teal-500 p-6'>
          <div className='block lg:hidden' style={{paddingRight: '20px'}}>
        <button
          onClick={() => setMenuVisibility(!isMenuVisible)}
          className='flex items-center px-3 py-2 border rounded text-teal border-teal hover:border-white'
          data-cy='mmenu-btn'
        >
          <FaHamburger />
        </button>
      </div>
      <div className='flex items-center flex-shrink-0 mr-6 justify-start'>
        
              <Link href='/'>
          <a>
          <span className='font-semibold text-xl tracking-tight'>
            Affirmed Visionary
          </span>
          </a>
        </Link>
              
      </div>
      
      <div
        className={`${
          isMenuVisible ? 'max-h-full' : 'h-0'
        } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}
      >
        <div className='text-sm  justify-right'>
          <Link href='/about'>
            <a
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'
              data-cy='nav-item'
            >
              About
            </a>
          </Link>
          <Link href={'/resources'}>
            <a
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'
              data-cy='nav-item'
            >
              Resources
            </a>
                  </Link>
                  <Link href='/blog'>
        <button
          className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'
          type='button'
        >
                          Blog
        </button>
        </Link>
        <div uk-dropdown='animation: uk-animation-slide-top-small; duration: 900'>
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
                  <Link href='/about'>
            <a
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4'
              data-cy='nav-item'
            >
              Contact
            </a>
          </Link>

        </div>
      </div>

      <div>
      </div>
    </nav>
  )
}

export default Nav3
