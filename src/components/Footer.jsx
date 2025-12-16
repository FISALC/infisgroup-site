import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/10">
            <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                <span className="font-bold">IG</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Infis<span className="text-indigo-400">Group</span></span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empowering businesses with AI-powered web solutions, strategic talent acquisition, and world-class training.
                        </p>
                        <div className="flex gap-4">
                            {[<Linkedin />, <Twitter />, <Instagram />].map((icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-slate-400">
                                    {React.cloneElement(icon, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/web-development" className="text-slate-400 hover:text-indigo-400 transition-colors">Web Development</Link></li>
                            <li><Link to="/recruitment" className="text-slate-400 hover:text-indigo-400 transition-colors">Recruitment</Link></li>
                            <li><Link to="/training" className="text-slate-400 hover:text-indigo-400 transition-colors">Corporate Training</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-slate-400 hover:text-indigo-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
                            <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Mail className="shrink-0 mt-1 group-hover:text-white transition-colors" size={18} />
                                <span>info@infisgroup.com</span>
                            </li>
                            {/* Phone removed as requested */}
                            <li className="flex items-start gap-3 group">
                                <MapPin className="shrink-0 mt-1 group-hover:text-white transition-colors" size={18} />
                                <span>India, Dubai, Qatar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} InfisGroup. All rights reserved. • Qatar • UAE • India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
