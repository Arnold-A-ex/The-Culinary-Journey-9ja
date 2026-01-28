import Logo from "../assets/images/logo.svg";
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Educraft from "../assets/images/logo.png";
import Consiglories from "../assets/images/d-consiglories.jpg";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-gray-300 pt-16 pb-8 border-t border-primary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Column */}
                    <div>
                        <NavLink to="/" className="flex items-center gap-2">
                            <img src={ Logo } alt="the culinary journey 9ja logo" className="h-25 w-auto object-contain"/>
                        </NavLink>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Celebrating the rich culinary heritage of the Niger Delta and empowering the next generation of Nigerian chefs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17Tf4bxoTf/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Facebook className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/theculinaryjourney9ja?igsh=dHp3cjBkN2Y1D2l4" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
                            <li><Link to="/competition" className="hover:text-primary transition">The Competition</Link></li>
                            <li><Link to="/training" className="hover:text-primary transition">Training Modules</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Support</h4>
                        <ul className="space-y-2">
                            <li><Link to="/faqs" className="hover:text-primary transition">FAQs</Link></li>
                            <li><Link to="/policies" className="hover:text-primary transition">Privacy Policy</Link></li>
                            <li><Link to="/policies" className="hover:text-primary transition">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">Get in Touch</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Plot C3 Rumuogba Artillery, PH/Aba Expressway, Port Harcourt.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+234 912 333 5309</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@theculinaryjourney9ja.org.ng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} The Culinary Journey 9ja. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span className="text-xs text-gray-500">In Partnership with:</span>
                        {/* Educraft */}
                        <div className="flex items-center gap-2">
                            <img src={ Educraft } alt="educraft logo" className="h-15 w-auto object-contain"/>
                        </div>
                        <span className="text-primary">|</span>
                        {/* D Consiglories */}
                        <div className="flex items-center gap-2">
                            <img src={ Consiglories } alt="D Consiglories logo" className="h-13 w-auto object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

