'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <section className="section-heading">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Privacy Policy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          How we collect, use, and protect your information
        </motion.p>
      </section>
      
      <motion.div 
        className="privacy-content"
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
          top: '5%',
          right: '-5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,112,243,0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1
        }} />
        
        <section className="privacy-section">
          <h3>1. Introduction</h3>
          <p>
            MCPRepository.net ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website 
            MCPRepository.net (the "Site"). Please read this policy carefully. If you do not agree with the terms of 
            this privacy policy, please do not access the Site.
          </p>
        </section>

        <section className="privacy-section">
          <h3>2. Information We Collect</h3>
          <p>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, 
            telephone number, and demographic information that you voluntarily provide to us when registering 
            with the Site or when choosing to participate in various activities related to the Site.
          </p>
          <p>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, 
            such as your IP address, browser type, operating system, access times, and the pages you have viewed.
          </p>
          <p>
            <strong>Financial Data:</strong> If you choose to purchase a service or product, we collect financial 
            information necessary to process your payment, such as credit card numbers and billing addresses.
          </p>
          <p>
            <strong>Data From Social Networks:</strong> User information from social networking sites, including 
            Facebook, Google, Twitter, or other social networking sites, if you connect your account to such services.
          </p>
        </section>

        <section className="privacy-section">
          <h3>3. Use of Your Information</h3>
          <p>
            We may use the information we collect about you for various purposes, including:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>To provide and maintain our Site</li>
            <li>To notify you about changes to our Site</li>
            <li>To allow you to participate in interactive features of our Site</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Site</li>
            <li>To monitor the usage of our Site</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To send you promotional communications, such as updates on MCP servers or other products and services</li>
            <li>To process your financial transactions</li>
            <li>To fulfill and manage your orders, payments, returns, and exchanges</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3>4. Disclosure of Your Information</h3>
          <p>
            We may share information we have collected about you in certain situations. Your information 
            may be disclosed as follows:
          </p>
          <p>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is 
            necessary to respond to legal process, to investigate or remedy potential violations of our policies, 
            or to protect the rights, property, and safety of others, we may share your information as permitted 
            or required by any applicable law, rule, or regulation.
          </p>
          <p>
            <strong>Third-Party Service Providers:</strong> We may share your information with third parties that 
            perform services for us or on our behalf, including payment processing, data analysis, email delivery, 
            hosting services, customer service, and marketing assistance.
          </p>
          <p>
            <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw 
            consent, we may share your information with third parties for marketing purposes.
          </p>
          <p>
            <strong>Business Transfers:</strong> If we or our assets are acquired, or in the unlikely event that we 
            go out of business or enter bankruptcy, user information would be one of the assets that is transferred 
            or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may 
            decline to honor commitments we made in this Privacy Policy.
          </p>
        </section>

        <section className="privacy-section">
          <h3>5. Security of Your Information</h3>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. 
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
            can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="privacy-section">
          <h3>6. Cookies and Tracking Technologies</h3>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help 
            customize the Site and improve your experience. By using the Site, you agree to the use of cookies as 
            described in this policy. Most browsers are set to accept cookies by default. You can remove or reject 
            cookies, but be aware that such action could affect the availability and functionality of the Site.
          </p>
        </section>

        <section className="privacy-section">
          <h3>7. Third-Party Websites</h3>
          <p>
            The Site may contain links to third-party websites and applications of interest that are not affiliated 
            with us. Once you have used these links to leave the Site, any information you provide to these third 
            parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your 
            information. Before visiting and providing any information to any third-party websites, you should 
            inform yourself of the privacy policies and practices of the third party responsible for that website.
          </p>
        </section>

        <section className="privacy-section">
          <h3>8. Children's Privacy</h3>
          <p>
            The Site is not directed to children under the age of 13, and we do not knowingly collect personal 
            information from children under 13. If we discover that a child under 13 has provided us with personal 
            information, we will delete such information from our systems.
          </p>
        </section>

        <section className="privacy-section">
          <h3>9. Your Privacy Rights</h3>
          <p>
            <strong>Opt-Out Rights:</strong> You can stop receiving promotional emails from us by following the 
            unsubscribe instructions included in those emails. We will still send you transaction-related emails 
            regarding products or services you have requested.
          </p>
          <p>
            <strong>Access to Your Personal Information:</strong> You may request access to your personal 
            information that we collect on the Site by contacting us.
          </p>
          <p>
            <strong>Amend or Delete Your Data:</strong> You may request that we amend or delete your personal 
            information that we have collected about you by contacting us.
          </p>
        </section>

        <section className="privacy-section">
          <h3>10. Changes to This Privacy Policy</h3>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an 
            updated "Revised" date and the updated version will be effective as soon as it is accessible. We 
            encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </section>

        <section className="privacy-section">
          <h3>11. Contact Us</h3>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at <Link href="/contact" style={{ color: 'var(--airbnb-pink)', textDecoration: 'underline' }}>our contact page</Link>.
          </p>
        </section>

        <div className="privacy-updated" style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#717171' }}>
          Last updated: April 12, 2025
        </div>
      </motion.div>
      
      <style jsx global>{`
        .privacy-section {
          margin-bottom: 2rem;
        }
        
        .privacy-section h3 {
          font-size: 1.3rem;
          color: #222;
          margin-bottom: 1rem;
        }
        
        .privacy-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: #484848;
          margin-bottom: 1rem;
        }
        
        .privacy-section strong {
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
