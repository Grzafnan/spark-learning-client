import React, { useContext, useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import logo from '../../../../assets/logo.png'
import { toast } from 'react-toastify';
import './darkmode.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut, enabled, handelThemeSwitch } = useContext(AuthContext);

  // 



  const handelLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success('Sign Out Success')
      }).catch((error) => {
        // An error happened.
        toast.error(error.message)
      });
  }


  // const handelSwitch = () => {
  //   setEnabled(!enabled);
  //   handelThemeSwitch();
  // }



  return (
    <div className="px-4 py-5 w-full md:px-24 lg:px-12 shadow-md bg-gray-100  dark:bg-gray-900  sticky top-0 z-40">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className="inline-flex items-center"
        >
          <img src={logo} className="w-20" alt="" />
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-blue-500  dark:text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              aria-label="Courses"
              title="Courses"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-blue-500  dark:text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-blue-500  dark:text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              aria-label="FAQ"
              title="FAQ"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-blue-500  dark:text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/about'
              aria-label="About us"
              title="About us"
              className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-blue-500  dark:text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
            >
              About
            </NavLink>
          </li>

          {
            user?.uid ? <>
              <li className='flex items-center'>
                {/* <span title={user?.displayName} className='font-semibold hidden lg:block'>{user?.displayName}</span> */}

                <Link to='/profile' className='hidden lg:block ml-2'>
                  {
                    user?.photoURL ? <img
                      src={user?.photoURL}
                      className='rounded-full'
                      title={user?.displayName}
                      alt={user?.displayName}
                      style={{ height: '35px', width: '35px' }}
                    />
                      : <FaUserAlt title={user?.displayName} className='hidden lg:block' />
                  }
                </Link>
              </li>


              <li>
                <button
                  onClick={handelLogout}
                  className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide  transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                  aria-label="Log out"
                  title="Log out"
                >
                  Log out
                </button>
              </li>
            </>
              :
              <li>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                  aria-label="Sign in"
                  title="Sign in"
                >
                  Sign in
                </Link>
              </li>
          }

          <li>
            <DarkModeSwitch
              checked={enabled}
              onChange={handelThemeSwitch}
              size={40}
              className={`${enabled ? 'bg-black' : 'bg-blue-600'}  rounded-full`}
            />
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-blue-50 focus:bg-blue-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5  dark:bg-gray-900  bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className='w-11/12 flex justify-between items-center '>
                    <Link
                      to="/"
                      aria-label="Home"
                      title="Home"
                      className="inline-flex items-center"
                    >
                      <img src={logo} className="w-20" alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white">
                        Spark Learning
                      </span>
                    </Link>

                    <DarkModeSwitch
                      // style={{ marginBottom: '2rem' }}
                      checked={enabled}
                      onChange={handelThemeSwitch}
                      size={40}
                      className={`${enabled ? 'bg-black' : 'bg-blue-600'
                        }  inline-flex items-center rounded-full`}
                    />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className={({ isActive }) => isActive ? "font-medium tracking-wide transition-colors duration-200 hover:text-blue-500 text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Courses"
                        title="Courses"
                        className={({ isActive }) => isActive ? "font-medium tracking-wide transition-colors duration-200 hover:text-blue-500 text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className={({ isActive }) => isActive ? "font-medium tracking-wide transition-colors duration-200 hover:text-blue-500 text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="FAQ"
                        title="FAQ"
                        className={({ isActive }) => isActive ? "font-medium tracking-wide transition-colors duration-200 hover:text-blue-500 text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        aria-label="About us"
                        title="About us"
                        className={({ isActive }) => isActive ? "font-medium tracking-wide transition-colors duration-200 hover:text-blue-500 text-blue-600" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500  dark:text-white"}
                      >
                        About
                      </NavLink>
                    </li>

                    {
                      user?.uid ? <>
                        <div className='flex flex-col-reverse items-center gap-2'>
                          <span className="font-semibold  dark:text-white" title="Name">{user?.displayName}</span>

                          <Link to='/profile'>
                            {
                              user?.photoURL ? <img
                                title={user.displayName}
                                src={user?.photoURL}
                                className='rounded-full'
                                alt=''
                                style={{ height: '35px', width: '35px' }}
                              />
                                : <FaUserAlt title={user.displayName} />
                            }
                          </Link>
                        </div>

                        <li>
                          <button
                            onClick={handelLogout}
                            className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide w-full  transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                            aria-label="Log out"
                            title="Log out"
                          >
                            Log out
                          </button>
                        </li>
                      </>
                        :
                        <li>
                          <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                            aria-label="Sign in"
                            title="Sign in"
                          >
                            Sign in
                          </Link>
                        </li>
                    }

                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;