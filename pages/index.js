import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>My ZeroTier Clone</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <nav>{/* Navigation links */}</nav>
        </header>
        <section className="hero">
          <h1>Connect Everything</h1>
          <p>
            ZeroTier delivers the capabilities of VPNs, SDN, and scale-out
            networking.
          </p>
          <button>Get Started</button>
        </section>
        <section className="features">
          <h2>Features</h2>
          <div className="feature">
            <img src="/placeholder-feature-image.png" alt="Feature" />
            <h3>Secure Networking</h3>
            <p>Encrypt your connections and ensure privacy.</p>
          </div>
          {/* Repeat for other features */}
        </section>
        <section className="pricing">
          <h2>Pricing</h2>
          <div className="plan">
            <h3>Free Plan</h3>
            <p>Basic features with limited usage.</p>
          </div>
          {/* Repeat for other plans */}
        </section>
        <footer>
          <p>&copy; 2023 My ZeroTier Clone. All rights reserved.</p>
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
