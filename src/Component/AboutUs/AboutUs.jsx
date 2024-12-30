import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 mt-8  flex flex-col md:flex-row items-center justify-center gap-x-8 p-8">
      {/* Our Story Section */}
      <div className="  text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Story
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          We are a team of passionate individuals who are dedicated to providing
          the best possible experience for our customers.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full  max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg relative">
        {/* Google Map */}
        <iframe
          title="30C Bus Stand Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8376308824115!2d88.45132627497592!3d22.618976285141636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02714425555555%3A0xabcdef1234567890!2sHatiar%20Bypass%20Road%2C%20Jheel%20Bagan%2C%20Hatiara%2C%20Sardarpar%2C%20Kolkata%2C%20West%20Bengal%20700157!5e0!3m2!1sen!2sin!4v1688923135253!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Red Dot Overlay */}
        <div
          className="absolute w-4 h-4 bg-red-600 rounded-full border-2 border-white"
          style={{
            top: "50%", // Adjust this value for precise positioning
            left: "50%", // Adjust this value for precise positioning
            transform: "translate(-50%, -50%)",
            zIndex: "10",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
