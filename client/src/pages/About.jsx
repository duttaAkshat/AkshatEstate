import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About AkshatEstate
      </h1>
      <p className="mb-4 text-slate-700">
        AkshatEstate is a leading full-stack MERN (MongoDB, Express, React,
        Node.js) real estate agency. Specializing in helping clients buy, sell,
        and rent properties in the most desirable neighborhoods, our team of
        experienced agents is dedicated to providing exceptional service and
        making the buying and selling process as smooth as possible.
      </p>
      <p className="mb-4 text-slate-700">
        Its mission is to help the clients achieve their real estate goals by
        providing expert advice, personalized service, and a deep understanding
        of the local market. Whether you are looking to buy, sell, or rent a
        property, we are here to help you every step of the way.
      </p>

      <hr />
      <br />
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About the Creator
      </h1>
      <p className="mb-4 text-slate-700">
        AkshatEstate was founded by{" "}
        <a
          className="text-blue-500"
          href="https://www.linkedin.com/in/akshat-dutta/"
        >
          Akshat Dutta
        </a>
        , a student of BITS Pilani, Goa campus, with interest in Full stack web
        development. My vision is to create a seamless and user-friendly
        platform for real-world problems.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/akshat-dutta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://github.com/duttaAkshat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.instagram.com/ad.akshat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500"
        >
          <FaInstagram size={35} />
        </a>
      </div>
    </div>
  );
}
