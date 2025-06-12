import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DataraLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-600 py-4 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-white text-2xl font-bold">Datara</h1>
        <nav className="flex gap-4">
          <a href="#services" className="text-white hover:text-gray-200">Services</a>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-white py-20 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Datara</h2>
          <p className="text-gray-600 text-lg mb-8">
            At Datara, we empower businesses with data-driven solutions that lead to success.
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100 w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {[ 
            { title: "Data Analytics", description: "Gain insights to make informed decisions." },
            { title: "Cloud Integration", description: "Seamless integration with cloud platforms." },
            { title: "AI Solutions", description: "Innovative AI-powered tools for your business." }
          ].map((service, index) => (
            <Card key={index} className="p-4 shadow-lg">
              <CardContent>
                <h4 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-8">About Us</h3>
        <p className="text-gray-600 max-w-4xl mx-auto px-4">
          Datara is dedicated to providing top-tier data-driven solutions to help businesses excel in an ever-changing landscape. With a
          team of experienced professionals and cutting-edge technologies, we are committed to delivering measurable results.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 w-full text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-8">Contact Us</h3>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700">
            Submit
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 w-full text-center">
        <p>&copy; {new Date().getFullYear()} Datara. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DataraLandingPage;

         