import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in both backend and frontend. <br/>
        As for the frontend I use HTML, CSS, TypeScript and JavaScript with expertise in frameworks like React, Node.js, and
        innovative technologies like Three.js. <br/>
        About what concerns backend I code mainly in  Python, PhP, Java, but I do possess some basic knowledges on other languages such as C++, C#, JSP.<br/>
        Favorite backend frameworks are surely Spring, Django, FastAPI and Symphony.<br/>
        Being passionate about security I'm used as well to script in BASH and batch.<br/>
        Furthermore, my passion for machine learning led me to acquire skills in processing big data, creating plots, and developing machine learning models and algorithms, specifically in the areas of time series analysis, deep learning, computer vision, and natural language processing.<br/>
        I'm a quick learner, proactive person and critical thinker.<br/>
        I am eager to improve my skills daily, I am able to collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems and I always strive for excellence. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
