import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    return (
        <header style={headerStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: scrolled || isMenuOpen ? 'var(--brand-primary)' : 'var(--text-primary)',
                    cursor: 'pointer'
                }} onClick={() => window.location.href = '#'}>
                    <Logo size={40} />
                    <span>Infis<span style={{ color: 'var(--brand-secondary)' }}>Group</span></span>
                </div>

                {/* Mobile Hamburger */}
                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
                    display: 'none', // Hidden by default, shown via media query in CSS usually, but here inline styles are hard.
                    // We will handle display none via CSS class if possible, or use window width state.
                    // For simplicity in this "inline-style" approach:
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
                        {['Home', 'Plans', 'Features', 'Portfolio'].map((item) => (
                            <li key={item}><a href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{item}</a></li>
                        ))}
                        <li><a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', color: '#fff', textDecoration: 'none' }}>Contact</a></li>
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
                        {['Home', 'Plans', 'Features', 'Portfolio', 'Contact'].map((item) => (
                            <a key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    color: item === 'Contact' ? 'var(--brand-primary)' : 'var(--text-primary)'
                                }}
                            >{item}</a>
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
