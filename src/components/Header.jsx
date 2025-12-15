import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition-medium)',
        backgroundColor: scrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled || isMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled || isMenuOpen ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
    };

    const getLinkFn = (item) => {
        const lowerItem = item.toLowerCase();
        if (item === 'Home') return '/';
        if (item === 'About') return '/about';
        if (item === 'Web Development') return '/web-development';
        if (item === 'Recruitment') return '/recruitment';
        if (item === 'Training') return '/training';
        return `/${lowerItem.replace(' ', '-')}`;
    };

    const NavLink = ({ item, isMobile = false }) => {
        const path = getLinkFn(item);
        const isHash = path.startsWith('#');
        const commonStyle = isMobile ? {
            fontSize: '1.2rem',
            fontWeight: 600,
            color: item === 'Contact' ? 'var(--brand-primary)' : 'var(--text-primary)'
        } : {
            fontWeight: 500,
            color: 'var(--text-primary)'
        };

        if (isHash) {
            return (
                <a
                    href={path}
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    style={commonStyle}
                >
                    {item}
                </a>
            );
        }

        return (
            <Link
                to={path}
                onClick={() => isMobile && setIsMenuOpen(false)}
                style={commonStyle}
            >
                {item}
            </Link>
        );
    };

    return (
        <header style={headerStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: scrolled || isMenuOpen ? 'var(--brand-primary)' : 'var(--text-primary)',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}>
                    <Logo size={40} />
                    <span>Infis<span style={{ color: 'var(--brand-secondary)' }}>Group</span></span>
                </Link>

                {/* Mobile Hamburger */}
                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
                    display: 'none',
                    cursor: 'pointer',
                    flexDirection: 'column',
                    gap: '6px',
                }}>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--text-primary)' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--text-primary)' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--text-primary)' }}></span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
                        {['Home', 'Web Development', 'Recruitment', 'Training', 'About'].map((item) => (
                            <li key={item}>
                                <NavLink item={item} />
                            </li>
                        ))}
                        <li><Link to="/contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <nav style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        backgroundColor: '#fff',
                        padding: '2rem',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        textAlign: 'center'
                    }}>
                        {['Home', 'Web Development', 'Recruitment', 'Training', 'About', 'Contact'].map((item) => (
                            <NavLink key={item} item={item} isMobile={true} />
                        ))}
                    </nav>
                )}
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
