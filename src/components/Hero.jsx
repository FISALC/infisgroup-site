import React from 'react';

const Hero = () => {
    const sectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff',
        paddingTop: '80px',
    };

    const bgShape1 = {
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(106, 27, 154, 0.1) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: 1,
    };

    const bgShape2 = {
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(138, 21, 56, 0.08) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: 1,
    };

    const contentStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        zIndex: 2,
        position: 'relative',
    };

    const badgeStyle = {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        borderRadius: '2rem',
        background: 'rgba(106, 27, 154, 0.1)',
        color: 'var(--brand-secondary)',
        fontWeight: '600',
        fontSize: '0.9rem',
        marginBottom: '1.5rem',
    };

    return (
        <section id="home" style={sectionStyle}>
            <div style={bgShape1}></div>
            <div style={bgShape2}></div>

            <div className="container">
                <div style={contentStyle}>
                    <div style={badgeStyle}>AI-Powered Web Development</div>

                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        AI-Powered Web Development for <br />
                        <span className="text-gradient">Your Business Growth</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                        Choose your development model — pay upfront OR pay as you grow. <br />
                        We build high-quality, fully customizable websites utilizing the power of Artificial Intelligence.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#plans" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            View Our Plans
                        </a>
                        <a href="#contact" style={{
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '0.5rem',
                            backgroundColor: '#fff'
                        }}>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
