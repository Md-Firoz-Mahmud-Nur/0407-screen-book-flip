import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaInfoCircle, FaServicestack } from 'react-icons/fa'; // Import icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control the menu
    const [isScrolled, setIsScrolled] = useState(false); // State to control scroll

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar fixed top-0 z-50 shadow-md ${isScrolled ? 'text-gray-800 bg-[#ffffff9a]' : 'text-gray-200 bg-[#00000009]'}`}>
            <div className="navbar-start">
                <Link to={'/'}>
                    <div className="flex items-center">
                        <img
                            src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
                            alt="Logo"
                            className="h-10 w-10 lg:mr-2"
                        />
                        <p className="text-xl font-semibold">SereneFit</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                        onClick={toggleMenu} // Toggle menu on click
                    >
                        <FaBars className="h-5 w-5" />
                    </div>
                    {isOpen && ( // Show dropdown menu if isOpen is true
                        <ul className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-1 right-0 left-auto text-black">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                    }
                                >
                                    <FaHome className="mr-2" /> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                    }
                                >
                                    <FaInfoCircle className="mr-2" /> About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                    }
                                >
                                    <FaServicestack className="mr-2" /> Services
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                }
                            >
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                }
                            >
                                <FaInfoCircle className="mr-2" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    isActive ? "hover:bg-gray-200 font-bold flex items-center" : "hover:bg-gray-200 flex items-center"
                                }
                            >
                                <FaServicestack className="mr-2" /> Services
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;