import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px' }} className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '2rem',
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}>
          About InfisGroup
        </h1>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Welcome to InfisGroup, where innovation meets execution. We are a premier web development agency dedicated to transforming digital visions into reality.
          </p>
          
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Founded on the principles of excellence and agility, we specialize in high-performance web applications, leveraging cutting-edge technologies like React, Vite, and modern CSS frameworks. Our mission is to empower businesses with digital tools that drive growth and engagement.
          </p>

          <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Vision</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
             To be the catalyst for the next generation of web experiences, making the web faster, more accessible, and more beautiful for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
