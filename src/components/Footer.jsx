import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-bg-dark text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-display">InfisGroup</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering businesses with AI-powered web solutions, strategic talent acquisition, and world-class training.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-brand-accent">Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/web-development" className="text-gray-400 hover:text-white transition">Web Development</Link></li>
                            <li><Link to="/recruitment" className="text-gray-400 hover:text-white transition">Recruitment</Link></li>
                            <li><Link to="/training" className="text-gray-400 hover:text-white transition">Corporate Training</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-brand-accent">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-brand-accent">Connect</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter (X)</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} InfisGroup. All rights reserved. • Qatar • UAE • India
                </div>
            </div>
        </footer>
    );
};

export default Footer;
