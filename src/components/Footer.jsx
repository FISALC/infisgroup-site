import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'var(--bg-dark)',
        color: '#fff',
        padding: '4rem 0 2rem',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem',
    };

    const colTitle = {
        fontSize: '1.2rem',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-display)',
        color: 'var(--brand-accent)',
    };

    const linkStyle = {
        display: 'block',
        marginBottom: '0.75rem',
        color: '#9ca3af',
        transition: '0.2s',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <div style={gridStyle}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>InfisGroup</h3>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                            AI-Powered Web Solutions for the modern enterprise and agile startups.
                        </p>
                    </div>

                    <div>
                        <h4 style={colTitle}>Services</h4>
                        <a href="#plans" style={linkStyle}>Web Development</a>
                        <a href="#plans" style={linkStyle}>AI Solutions</a>
                        <a href="#plans" style={linkStyle}>Enterprise Platforms</a>
                    </div>

                    <div>
                        <h4 style={colTitle}>Company</h4>
                        <a href="#home" style={linkStyle}>About Us</a>
                        <a href="#portfolio" style={linkStyle}>Portfolio</a>
                        <a href="#contact" style={linkStyle}>Contact</a>
                    </div>

                    <div>
                        <h4 style={colTitle}>Connect</h4>
                        <a href="#" style={linkStyle}>WhatsApp</a>
                        <a href="#" style={linkStyle}>LinkedIn</a>
                        <a href="#" style={linkStyle}>Instagram</a>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} InfisGroup. All rights reserved. • Qatar • UAE • India
                </div>
            </div>
        </footer>
    );
};

export default Footer;
