'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Sitemap() {
  return (
    <div className="container">
      <section className="section-heading">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Sitemap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Navigation guide to all pages on MCPRepository.net
        </motion.p>
      </section>
      
      <motion.div 
        className="sitemap-content"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '2rem 0',
          position: 'relative'
        }}
      >
        <div className="bg-decoration" style={{
          position: 'absolute',
          top: '15%',
          left: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,90,95,0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1
        }} />
        
        <section className="sitemap-section">
          <h3>Main Pages</h3>
          <ul className="sitemap-links">
            <li>
              <Link href="/">Home</Link>
              <span className="link-description">Browse our collection of MCP servers</span>
            </li>
            <li>
              <Link href="/about">About Us</Link>
              <span className="link-description">Learn more about MCPRepository.net</span>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
              <span className="link-description">Get in touch with our team</span>
            </li>
          </ul>
        </section>
        
        <section className="sitemap-section">
          <h3>Legal Information</h3>
          <ul className="sitemap-links">
            <li>
              <Link href="/terms">Terms of Service</Link>
              <span className="link-description">Our terms and conditions</span>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
              <span className="link-description">How we handle your data</span>
            </li>
          </ul>
        </section>
        
        <section className="sitemap-section">
          <h3>Server Directory</h3>
          <ul className="sitemap-links">
            <li>
              <Link href="/servers">All Servers</Link>
              <span className="link-description">View our complete server directory</span>
            </li>
            <li>
              <Link href="/servers/popular">Popular Servers</Link>
              <span className="link-description">Most-used MCP servers</span>
            </li>
            <li>
              <Link href="/servers/new">New Additions</Link>
              <span className="link-description">Recently added MCP servers</span>
            </li>
          </ul>
        </section>
        
        <section className="sitemap-section">
          <h3>User Account</h3>
          <ul className="sitemap-links">
            <li>
              <Link href="/account/login">Login</Link>
              <span className="link-description">Access your account</span>
            </li>
            <li>
              <Link href="/account/register">Register</Link>
              <span className="link-description">Create a new account</span>
            </li>
            <li>
              <Link href="/account/dashboard">Dashboard</Link>
              <span className="link-description">Manage your account settings</span>
            </li>
          </ul>
        </section>
      </motion.div>
      
      <style jsx global>{`
        .sitemap-section {
          margin-bottom: 2.5rem;
        }
        
        .sitemap-section h3 {
          font-size: 1.5rem;
          color: #222;
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
        }
        
        .sitemap-section h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--airbnb-pink), transparent);
          border-radius: 3px;
        }
        
        .sitemap-links {
          list-style: none;
          padding: 0;
        }
        
        .sitemap-links li {
          margin-bottom: 1rem;
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
        }
        
        .sitemap-links li a {
          font-size: 1.1rem;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          margin-right: 1rem;
          position: relative;
        }
        
        .sitemap-links li a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--airbnb-pink);
          transition: width 0.3s ease;
        }
        
        .sitemap-links li a:hover {
          color: var(--airbnb-pink);
        }
        
        .sitemap-links li a:hover::after {
          width: 100%;
        }
        
        .link-description {
          color: #717171;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .sitemap-links li {
            flex-direction: column;
          }
          
          .link-description {
            margin-top: 0.3rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
