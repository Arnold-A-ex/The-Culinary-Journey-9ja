import Logo from "../assets/images/logo-2.svg";
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Competition', path: '/competition' },
        { name: 'Training', path: '/training' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-background shadow-md sticky top-0 z-50 border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center gap-2">
                        	<img src={ Logo } alt="the culinary journey 9ja logo" className="h-25 w-auto object-contain"/>
                    	</NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'text-primary border-b-2 border-primary'
                                            : 'text-text hover:text-primary'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        
                        {/* CTA Button - Gold with Black Text for contrast */}
                        <a
                            href="https://forms.gle/eb9Ud5GbuJGs1A44A" 
			    target="_blank" rel="noopener noreferrer" 
                            className="bg-primary text-secondary px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-md"
                        >
                            Register
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-text hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-background border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-text hover:bg-gray-100 hover:text-primary'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <a
                            href="https://forms.gle/eb9Ud5GbuJGs1A44A" 
			    target="_blank" rel="noopener noreferrer" 
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-primary text-secondary px-4 py-3 rounded-md font-bold"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;