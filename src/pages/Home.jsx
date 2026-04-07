import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div>

      {/* HERO */}
      <div className="hero" style={{ textAlign: "center", paddingTop: "120px" }}>

        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Sclar Dynamics ⚡
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "60px",
            background: "linear-gradient(90deg, #38bdf8, #2563eb)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Sclar Dynamics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            color: "#cbd5f5"
          }}
        >
          Transforming ideas into intelligent technology solutions.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/products">
            <button>Explore Products</button>
          </Link>
        </motion.div>

      </div>

      {/* FEATURES */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "60px",
          flexWrap: "wrap"
        }}
      >

        <motion.div className="card" variants={item} whileHover={{ y: -10 }}>
          <h3>⚡ Fast Performance</h3>
          <p>High-speed smart systems.</p>
        </motion.div>

        <motion.div className="card" variants={item} whileHover={{ y: -10 }}>
          <h3>🤖 Automation</h3>
          <p>Reduce manual work with AI.</p>
        </motion.div>

        <motion.div className="card" variants={item} whileHover={{ y: -10 }}>
          <h3>🔒 Secure</h3>
          <p>Reliable and secure systems.</p>
        </motion.div>

      </motion.div>

      {/* MISSION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ textAlign: "center", padding: "60px" }}
      >
        <h2>🚀 Our Mission</h2>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "auto" }}>
          We build intelligent systems that transform industries and simplify life.
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          padding: "60px",
          flexWrap: "wrap"
        }}
      >

        <div>
          <h1>100+</h1>
          <p style={{ color: "#94a3b8" }}>Projects</p>
        </div>

        <div>
          <h1>50+</h1>
          <p style={{ color: "#94a3b8" }}>Clients</p>
        </div>

        <div>
          <h1>5+</h1>
          <p style={{ color: "#94a3b8" }}>Years</p>
        </div>

      </motion.div>

    </div>
  );
}

export default Home;