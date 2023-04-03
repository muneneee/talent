import React, { useState, useRef, useEffect, Fragment } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import HeroImage from '../images/hero-image.png';
import Header from '../partials/Header';
import SpeedDialTooltipOpen from '../partials/speeddial';
import SimpleAccordion from '../partials/accordion';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function About() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      <Header />
      <SpeedDialTooltipOpen />
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Us</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <p className="text-xl text-gray-600" style={{ lineHeight: "1.5" }}>
                  At Talent, we are passionate about helping students discover their dream careers.<br /><br />

                  We understand that choosing a career can be a daunting task, and that's why we created this website to make the process easier and more efficient.Our team is comprised of experienced career counselors, data analysts, and web developers who work together to ensure that our algorithm provides accurate and personalized career recommendations to our users.<br /><br />
                  
                  
                  Our mission is to empower students to make informed decisions about their future by providing them with the tools and resources they need to succeed. We believe that every student has unique talents, interests, and goals, and it's our job to help them discover the right career path.<br /><br />
                  
                  
                  We are committed to providing exceptional customer service to our users. If you have any questions or concerns, please don't hesitate to contact us using the information provided on our Contact Us page.<br /><br />
                  
                  
                  Thank you for choosing Talent Assessment as your career recommendation website. We look forward to helping you achieve your career goals.
                </p>
                                  

              </div>
              
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                <h2 className="h2 mb-4">FAQ</h2>
                <SimpleAccordion />
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default About;

