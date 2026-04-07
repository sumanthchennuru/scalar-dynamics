import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact Us
      </motion.h1>

      <p style={{ color: "#94a3b8", marginTop: "10px" }}>
        Get in touch with Sclar Dynamics
      </p>

      <div style={{
        marginTop: "30px",
        maxWidth: "400px",
        marginInline: "auto"
      }}>

        <input placeholder="Your Name" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
        <input placeholder="Email" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
        <textarea placeholder="Message" style={{ width: "100%", padding: "10px", margin: "10px 0" }} />

        <button>Send Message</button>

      </div>

      <p style={{ marginTop: "30px", color: "#94a3b8" }}>
        📍 Chennai, India <br />
        📧 sclardynamics@gmail.com <br />
        📞 +91 9876543210
      </p>

    </div>
  );
}

export default Contact;