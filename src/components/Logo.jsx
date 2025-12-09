import React from 'react';

const Logo = ({ size = 40, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))' }}
        >
            {/* Hexagon Background - Technology Symbol */}
            <path
                d="M50 5 L93.3 25 V75 L50 95 L6.7 75 V25 L50 5Z"
                stroke="url(#logo_gradient)"
                strokeWidth="3"
                fill="rgba(106, 27, 154, 0.05)"
            />

            {/* Code Brackets */}
            <path
                d="M35 35 L25 50 L35 65"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M65 35 L75 50 L65 65"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* The "A" with Upward Arrow - Business Growth */}
            {/* Legs of A */}
            <path
                d="M40 65 L50 35 L60 65"
                stroke="#8A1538"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Arrow crossbar */}
            <path
                d="M45 53 L50 48 L55 53"
                stroke="#8A1538"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Definitions for Gradients */}
            <defs>
                <linearGradient id="logo_gradient" x1="6.7" y1="5" x2="93.3" y2="95" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6A1B9A" />
                    <stop offset="0.5" stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#8A1538" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
