import React from 'react';

const Contact = () => {
    const sectionStyle = {
        padding: '6rem 0',
        backgroundColor: 'var(--bg-secondary)',
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '3rem auto 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--glass-border)',
        borderRadius: '0.5rem',
        color: '#fff',
        fontSize: '1rem',
    };

    const buttonStyle = {
        padding: '1rem',
        backgroundColor: 'var(--brand-primary)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Get in <span className="gradient-text">Touch</span></h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                    Ready to start your project? Contact us today.
                </p>

                <form style={formStyle}>
                    <input type="text" placeholder="Name" style={inputStyle} />
                    <input type="email" placeholder="Email" style={inputStyle} />
                    <textarea placeholder="Message" rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                    <button type="submit" style={buttonStyle}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
