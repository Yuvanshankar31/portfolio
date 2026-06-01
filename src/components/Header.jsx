import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Accomplishments', href: '#accomplishments' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleCVDownload = () => {
    window.open('https://drive.google.com/drive/u/1/folders/1S-eBzngWb6qnB8eQjOMizRLNsiPg50eB', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav' : 'bg-transparent'}`} 
      style={{ 
        transition: 'var(--transition-smooth)',
        paddingTop: scrolled ? '14px' : '22px',
        paddingBottom: scrolled ? '14px' : '22px'
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-blue)',
            boxShadow: '0 0 12px var(--accent-blue)',
          }}></div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}>
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="md:flex">
          <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={handleCVDownload}
            className="btn-purple animate-pulse-glow"
            style={{ 
              fontSize: '0.88rem',
              padding: '8px 20px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '600'
            }}
          >
            <Download size={16} />
            Download CV
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed',
        top: '70px',
        left: isOpen ? '0' : '-100%',
        width: '100%',
        height: 'calc(100vh - 70px)',
        background: 'var(--bg-primary)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--glass-border)',
        transition: 'var(--transition-smooth)',
        zIndex: 49,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '40px',
        gap: '30px'
      }} className="md:hidden">
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
          {navLinks.map((link) => (
            <li key={link.name} style={{ width: '100%', textAlign: 'center' }}>
              <a 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  display: 'block',
                  padding: '12px',
                  width: '100%',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-purple)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => {
            setIsOpen(false);
            handleCVDownload();
          }}
          className="btn-purple"
          style={{ width: '80%', justifyContent: 'center', marginTop: '20px' }}
        >
          <Download size={18} />
          Download CV
        </button>
      </div>

      {/* Tailwind responsive bypass helper */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </header>
  );
}

