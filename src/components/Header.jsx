import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to section handling (for Home)
    useEffect(() => {
        if (location.hash) {
            const elem = document.getElementById(location.hash.substring(1));
            if (elem) {
                setTimeout(() => {
                    elem.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">Infis<span className="text-indigo-400">Group</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Web Development', path: '/web-development' },
                        { name: 'Recruitment', path: '/recruitment' },
                        { name: 'Training', path: '/training' },
                        { name: 'About', path: '/about' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={{ color: '#ffffff' }}
                            className="!text-white hover:!text-indigo-400 font-bold transition-colors text-sm uppercase tracking-wider hover:underline underline-offset-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/contact" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2">
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-indigo-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-gray-800 shadow-2xl py-6 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Web Development', path: '/web-development' },
                        { name: 'Recruitment', path: '/recruitment' },
                        { name: 'Training', path: '/training' },
                        { name: 'About', path: '/about' },
                        { name: 'Contact', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={{ color: '#ffffff' }}
                            className="text-lg font-bold !text-white hover:!text-indigo-400 border-b border-gray-800 pb-3 last:border-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
