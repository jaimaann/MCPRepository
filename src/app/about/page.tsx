'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="container">
      <section className="section-heading">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About MCPRepository.net
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Your central hub for Model Context Protocol servers and resources
        </motion.p>
      </section>
      
      <motion.div 
        className="about-content"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '2rem 0',
          position: 'relative'
        }}
      >
        {/* Background decoration */}
        <div className="bg-decoration" style={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,90,95,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1
        }} />
        
        <div className="bg-decoration" style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,112,243,0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1
        }} />
        
        <motion.div 
          className="mission-section"
          variants={fadeIn}
        >
          <h3 className="mb-4" style={{ 
            fontSize: '1.8rem', 
            background: 'linear-gradient(90deg, var(--airbnb-pink), #FF8A80)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Our Mission
          </h3>
          <p className="mb-6" style={{ 
            fontSize: '1.05rem', 
            lineHeight: '1.7', 
            color: '#484848',
            textShadow: '0 1px 1px rgba(255,255,255,0.8)'
          }}>
            MCPRepository.net is on a mission to be the one-stop place for searching, finding, and learning about 
            Model Context Protocol servers. We aim to provide a comprehensive directory that makes discovering 
            the right MCP server for your needs simple and efficient.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-image-container" 
          variants={fadeIn}
          style={{ 
            margin: '3rem 0', 
            borderRadius: '16px', 
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            transform: 'perspective(1000px) rotateX(2deg)',
            transition: 'all 0.5s ease'
          }}
          whileHover={{ 
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.18)',
            transform: 'perspective(1000px) rotateX(0deg)' 
          }}
        >
          <Image 
            src="/images/search.jpg" 
            alt="MCP Repository Search" 
            width={800}
            height={400}
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: 'auto' 
            }}
          />
        </motion.div>
        
        <motion.div variants={fadeIn} className="services-section">
          <h3 className="mb-4" style={{ 
            fontSize: '1.8rem',
            background: 'linear-gradient(90deg, #0070f3, #00c8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            MCP Server Hosting Solutions
          </h3>
          <p className="mb-6" style={{ 
            fontSize: '1.05rem', 
            lineHeight: '1.7', 
            color: '#484848',
            textShadow: '0 1px 1px rgba(255,255,255,0.8)'
          }}>
            Beyond our directory, we offer professional hosting solutions for MCP servers. Whether you need help 
            deploying your existing MCP server or looking for managed hosting options, our infrastructure is 
            optimized for MCP server performance and reliability.
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          className="expert-section"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(255,255,255,0.8)',
            margin: '3rem 0'
          }}
        >
          <h3 className="mb-4" style={{ 
            fontSize: '1.8rem',
            color: '#222222'
          }}>
            Expert Consultation
          </h3>
          <p className="mb-6" style={{ 
            fontSize: '1.05rem', 
            lineHeight: '1.7', 
            color: '#484848'
          }}>
            We're proud to partner with <a 
              href="https://mcpconsultants.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--airbnb-pink)', 
                textDecoration: 'none',
                borderBottom: '2px solid var(--airbnb-pink)',
                transition: 'all 0.2s ease',
                fontWeight: 500
              }}
              className="hover-effect"
            >MCPConsultants.net</a> to 
            provide specialized consultation services regarding Model Context Protocol. Their expert team can 
            guide you through implementation, optimization, and custom development of MCP solutions for your 
            specific use cases.
          </p>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h3 className="mb-4" style={{ 
            fontSize: '1.8rem',
            background: 'linear-gradient(90deg, #6B46C1, #9F7AEA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Simplifying Local Installations
          </h3>
          <p className="mb-6" style={{ 
            fontSize: '1.05rem', 
            lineHeight: '1.7', 
            color: '#484848',
            textShadow: '0 1px 1px rgba(255,255,255,0.8)'
          }}>
            We're committed to making the installation and configuration of local MCP servers easier for developers. 
            Through comprehensive guides, tools, and open-source utilities, we help you get up and running with 
            MCP server implementations quickly and efficiently.
          </p>
        </motion.div>
        
        <motion.div 
          className="cta-section" 
          variants={fadeIn}
          style={{ 
            textAlign: 'center', 
            margin: '4rem 0 2rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, #FF5A5F 0%, #FF385C 100%)',
            borderRadius: '16px',
            color: 'white',
            boxShadow: '0 15px 35px rgba(255, 90, 95, 0.2), 0 5px 15px rgba(0, 0, 0, 0.05)'
          }}
        >
          <h3 className="mb-4" style={{ 
            fontSize: '2rem',
            color: 'white',
            fontWeight: 700
          }}>
            Join the MCP Community
          </h3>
          <p className="mb-6" style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Whether you're building, hosting, or using MCP servers, we invite you to be part of our growing community. 
            Together, we're advancing the capabilities of AI assistants and enhancing how they interact with external tools and data.
          </p>
          <div className="btn-container">
            <Link 
              href="/contact" 
              className="btn" 
              style={{ 
                marginRight: '1rem',
                backgroundColor: 'white',
                color: 'var(--airbnb-pink)',
                fontWeight: 600,
                padding: '0.85rem 2rem',
                borderRadius: '50px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
              }}
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="btn" 
              style={{ 
                backgroundColor: 'transparent',
                color: 'white',
                fontWeight: 600,
                padding: '0.85rem 2rem',
                borderRadius: '50px',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Servers
            </Link>
          </div>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="stats-section"
          variants={fadeIn}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            margin: '4rem 0 2rem'
          }}
        >
          <div className="stat-box" style={{
            flex: '1 0 250px',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--airbnb-pink)',
              marginBottom: '0.5rem'
            }}>
              120+
            </h4>
            <p style={{ color: '#717171', fontSize: '1.1rem' }}>MCP Servers Listed</p>
          </div>
          
          <div className="stat-box" style={{
            flex: '1 0 250px',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#0070f3',
              marginBottom: '0.5rem'
            }}>
              5,000+
            </h4>
            <p style={{ color: '#717171', fontSize: '1.1rem' }}>Monthly Users</p>
          </div>
          
          <div className="stat-box" style={{
            flex: '1 0 250px',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#6B46C1',
              marginBottom: '0.5rem'
            }}>
              98%
            </h4>
            <p style={{ color: '#717171', fontSize: '1.1rem' }}>Customer Satisfaction</p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Add a custom style tag */}
      <style jsx global>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .hover-effect:hover {
          color: #FF385C;
          border-bottom-color: #FF385C;
        }
        
        .stat-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        
        /* Add a subtle animation to section headings */
        h3 {
          position: relative;
        }
        
        h3::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--airbnb-pink), transparent);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
