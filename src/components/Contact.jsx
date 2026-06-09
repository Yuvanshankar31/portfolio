import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }
    
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sksyuvanshankar@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || "Portfolio Contact Form Submission",
          Message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setStatus({ type: 'success', msg: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again or email directly.' });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=918610526897', '_blank');
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-bg-spot glow-blue" style={{ top: '-10%', right: '-15%', opacity: 0.15 }}></div>

      <div className="container">
        <p className="section-subtitle">Get in touch</p>
        <h2 className="section-title" style={{ marginBottom: '60px' }}>Contact Me</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'stretch'
        }} className="md:grid-cols-12">
          
          {/* Left Column: Find Me Purple Gradient Panel (Grid span 5) */}
          <div className="md:col-span-5" style={{ display: 'flex' }}>
            <div 
              className="animate-float"
              style={{
                background: 'linear-gradient(135deg, var(--accent-purple), #047857)',
                borderRadius: '24px',
                padding: '40px 30px',
                color: '#ffffff',
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 12px 40px var(--accent-purple-glow)',
                minHeight: '380px'
              }}
            >
              {/* Blurred Cyan Glow circle inside matching photo 4 */}
              <div style={{
                position: 'absolute',
                top: '30%',
                right: '15%',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-blue)',
                filter: 'blur(16px)',
                opacity: 0.85,
                pointerEvents: 'none'
              }}></div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '32px',
                textAlign: 'center'
              }}>
                Find Me
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Email</p>
                    <a href="mailto:sksyuvanshankar@gmail.com" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'none', wordBreak: 'break-all' }}>
                      sksyuvanshankar@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Phone</p>
                    <a href="tel:+918610526897" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'none' }}>
                      +91 8610526897
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.15)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Location</p>
                    <span style={{ fontWeight: '600' }}>Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Message Form (Grid span 7) */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel" style={{
              padding: '36px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
              background: 'rgba(17, 24, 39, 0.3)'
            }}>
              
              {/* Form Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }} className="sm:grid-cols-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    required
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="subject" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Message *</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  required
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {status && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-heading)',
                  background: status.type === 'success' ? 'var(--accent-purple-glow)' : 'rgba(239,68,68,0.1)',
                  border: `1px solid ${status.type === 'success' ? 'var(--accent-purple)' : '#ef4444'}`,
                  color: status.type === 'success' ? '#a7f3d0' : '#fca5a5'
                }}>
                  {status.msg}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-purple" 
                style={{ 
                  alignSelf: 'flex-start',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
                disabled={loading}
              >
                <Send size={16} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Floating Sticky WhatsApp Button */}
      <button 
        onClick={handleWhatsApp}
        className="animate-pulse-glow"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99,
          background: '#25D366',
          border: 'none',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '9999px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-heading)',
          fontWeight: '600',
          fontSize: '0.95rem',
          boxShadow: '0 8px 24px var(--accent-purple-glow)'
        }}
      >
        <MessageSquare size={18} />
        Contact me on WhatsApp
      </button>

      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
          .md\\:col-span-5 { grid-column: span 5 / span 5 !important; }
          .md\\:col-span-7 { grid-column: span 7 / span 7 !important; }
        }
        @media (min-width: 640px) {
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  transition: 'var(--transition-fast)',
  outline: 'none',
  width: '100%'
};
