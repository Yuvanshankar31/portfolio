import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '40px 0',
      background: 'var(--bg-primary)',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        textAlign: 'center'
      }}>
        
        {/* Nav Links */}
        <ul style={{
          display: 'flex',
          gap: '24px',
          listStyle: 'none',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['Home', 'About', 'Accomplishments', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-emerald)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          &copy; {currentYear} Yuvan Shankar S. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
