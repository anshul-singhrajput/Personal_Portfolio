import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const formRef = useRef(null); // Reference to the form element

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "c35fb413-09b1-4021-8ed3-3e50a398e8f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage({ type: "success", text: "Thank you for your message!" });
        formRef.current.reset(); // Clear the form after successful submission
      } else {
        setMessage({ type: "error", text: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }

    setLoading(false);
  };

  return (
    <Element name="contact">
    <section className="bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">CONTACT US</h1>
          <p className="text-gray-400 mt-2">We'd love to hear what you think</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-16 lg:space-y-0">
          {/* Contact Information */}
          <motion.div
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">EMAIL US</h2>
              <a href="mailto:hello@example.com" className="text-gray-400">anshulsinghrajput29@gmail.com</a>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">PHONE US</h2>
              <a href="tel:+61112223333" className="text-gray-400">+91 96305 72576</a>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">VISIT US</h2>
              <p className="text-gray-400">Janta Colony, Gudhiyari, Raipur, Chhattisgarh, India</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/_.rebel_ansh_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="www.linkedin.com/in/anshul-singh-rajput-80395a251" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://github.com/anshul-singhrajput" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://x.com/Anshul_webdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-8">LET'S WORK TOGETHER</h2>

            {message && (
              <motion.div
                className={`p-4 mb-6 rounded-lg text-center ${message.type === "success" ? "bg-green-600" : "bg-red-600"
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {message.text}
              </motion.div>
            )}

            <form onSubmit={onSubmit} ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="Phone_Number"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold mb-2">Date</label>
                  <input
                    type=" date"
                    name="Date"
                    required
                    className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="Subject"
                  required
                  className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <label className="block text-sm font-semibold mb-2">Details</label>
                <textarea
                  rows="4"
                  name='Details'
                  required
                  className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
                ></textarea>
              </motion.div>

              <button
                type="submit"
                disabled={loading}
                className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </Element>
  );
}

export default Contact;