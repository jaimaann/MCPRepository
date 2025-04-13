'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TermsOfService() {
  return (
    <div className="container">
      <section className="section-heading">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Terms of Service
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Please read these terms carefully before using our services
        </motion.p>
      </section>
      
      <motion.div 
        className="terms-content"
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
          background: 'radial-gradient(circle, rgba(255,90,95,0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1
        }} />
        
        <section className="terms-section">
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing or using MCPRepository.net (the "Site"), you agree to be bound by these Terms of Service ("Terms"). 
            If you do not agree to these Terms, please do not use the Site. The Site is owned and operated by 
            MCPRepository.net, Inc. ("we," "us," or "our").
          </p>
        </section>

        <section className="terms-section">
          <h3>2. Description of Services</h3>
          <p>
            MCPRepository.net provides a comprehensive directory of Model Context Protocol (MCP) servers and resources. 
            Our services include but are not limited to directory listings, information regarding MCP servers, and 
            related resources ("Services").
          </p>
        </section>

        <section className="terms-section">
          <h3>3. User Accounts</h3>
          <p>
            Some features of our Site may require registration. You agree to provide accurate information when registering 
            and to update this information to maintain its accuracy. You are responsible for maintaining the confidentiality 
            of your account password and for all activities under your account. You agree to notify us immediately of any 
            unauthorized use of your account.
          </p>
        </section>

        <section className="terms-section">
          <h3>4. Intellectual Property</h3>
          <p>
            All content included on the Site, such as text, graphics, logos, images, as well as the compilation thereof, 
            and any software used on the Site, is the property of MCPRepository.net or its suppliers and protected by 
            copyright and intellectual property laws. You may not reproduce, duplicate, copy, sell, resell, or exploit 
            any portion of the Site without express written permission from us.
          </p>
        </section>

        <section className="terms-section">
          <h3>5. User-Generated Content</h3>
          <p>
            Users may post content to our Site. By submitting content, you grant us a worldwide, non-exclusive, royalty-free 
            license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or 
            future media. You represent and warrant that you own or control all rights to the content you post and that 
            the content does not violate these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h3>6. Prohibited Activities</h3>
          <p>
            You agree not to engage in any of the following prohibited activities: (1) copying, distributing, or disclosing 
            any part of the Site; (2) using any automated system to access the Site; (3) transmitting any viruses or other 
            code that has a destructive nature; (4) attempting to interfere with, compromise the system integrity or security, 
            or decipher any transmissions to or from the servers running the Site; (5) taking any action that imposes an 
            unreasonable load on our infrastructure; (6) uploading invalid data, viruses, or other software agents through the Site; 
            (7) impersonating another person or otherwise misrepresenting your affiliation; (8) harvesting or collecting email 
            addresses or other contact information; or (9) using the Site for any unlawful purpose or to violate the rights of others.
          </p>
        </section>

        <section className="terms-section">
          <h3>7. Third-Party Links</h3>
          <p>
            The Site may contain links to third-party websites or services that are not owned or controlled by MCPRepository.net. 
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party 
            websites or services. You further acknowledge and agree that we shall not be responsible or liable for any damage or 
            loss caused by the use of any such third-party content, goods, or services.
          </p>
        </section>

        <section className="terms-section">
          <h3>8. Disclaimer of Warranties</h3>
          <p>
            THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER 
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
            PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS 
            WILL BE CORRECTED, OR THAT THE SITE OR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </section>

        <section className="terms-section">
          <h3>9. Limitation of Liability</h3>
          <p>
            IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
            INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM 
            YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE; ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON 
            THE SITE; ANY CONTENT OBTAINED FROM THE SITE; OR UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR 
            CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR 
            NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
        </section>

        <section className="terms-section">
          <h3>10. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without 
            regard to its conflict of law provisions. Any dispute arising from or relating to these Terms shall be subject 
            to the exclusive jurisdiction of the courts in [Your Jurisdiction].
          </p>
        </section>

        <section className="terms-section">
          <h3>11. Changes to Terms</h3>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide 
            at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be 
            determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, 
            you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="terms-section">
          <h3>12. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at <Link href="/contact" style={{ color: 'var(--airbnb-pink)', textDecoration: 'underline' }}>our contact page</Link>.
          </p>
        </section>

        <div className="terms-updated" style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#717171' }}>
          Last updated: April 12, 2025
        </div>
      </motion.div>
      
      <style jsx global>{`
        .terms-section {
          margin-bottom: 2rem;
        }
        
        .terms-section h3 {
          font-size: 1.3rem;
          color: #222;
          margin-bottom: 1rem;
        }
        
        .terms-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: #484848;
        }
      `}</style>
    </div>
  );
}
