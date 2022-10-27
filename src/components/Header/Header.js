import React, { useContext, useState } from 'react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../images/logo535.png'
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [mode, setMode] = useState(false);
    const { usersignOut, user } = useContext(AuthContext)

    const handleUserSignout = () => {
        return usersignOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const handleMode = (event) => {
        setMode(event.target.checked)
    }
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link className='flex items-center' to="/">
                            <img src={logo} className='w-14' alt="" />
                            <h2 className="text-2xl text-purple-700 font-bold ms-2">Programming Zone</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li>
                                <div className="form-control">
                                    <label onClick={handleMode} className="label cursor-pointer">
                                        {/* <span className="label-text">Remember me</span> */}
                                        <input type="checkbox" className="toggle toggle-primary" />
                                    </label>
                                </div>
                            </li>
                           
                            <li className="text-gray-600 font-semibold hover:text-purple-600">
                                <NavLink to="/courses">Courses</NavLink>
                            </li>
                            <li className="text-gray-600 font-semibold hover:text-purple-600">
                                <NavLink to="/Blog">Blog</NavLink>
                            </li>
                            <li className="text-gray-600 font-semibold hover:text-purple-600">
                                <NavLink to="/faq">FAQ</NavLink>
                            </li>

                            {
                                user?.uid ?
                                    <>
                                       


                                        {user?.photoURL ?
                                            <div className="avatar">
                                                <div className="w-12 rounded-full tooltip" data-tip={user?.displayName}>

                                                    <img src={user?.photoURL} alt="" />
                                                </div>
                                                <ReactTooltip />
                                            </div>
                                            : <FaUser></FaUser>}


                                        <li className="text-gray-800  font-semibold hover:text-purple-600">
                                            <button onClick={handleUserSignout}><NavLink to="/register"><FaSignOutAlt></FaSignOutAlt></NavLink></button>
                                        </li>
                                    </> :

                                    <>

                                        <li className="text-gray-600 font-semibold hover:text-purple-600">
                                            <NavLink to="/login">Login</NavLink>
                                        </li>
                                        <li className="text-gray-800  font-semibold hover:text-purple-600">
                                            <NavLink to="/register">Register</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Header;