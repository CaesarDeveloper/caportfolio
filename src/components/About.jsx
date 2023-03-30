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
        className='mt-4 text-secondary text-[17px] leading-[30px] flex'
      >
        <div class="lg:max-w-lg md:w-1/2 w-5/6 mr-4">
          <img class="object-cover object-center rounded-2xl rounded-full" alt="tip_book" src="https://media.licdn.com/dms/image/D4E03AQG-DM0afU6AFw/profile-displayphoto-shrink_800_800/0/1665592015770?e=1685577600&v=beta&t=vJE1-HurFNPqnjsFU-fXj26NdmseaGdCi-szvAo7Oac"/>
        </div>

        I’m an experienced Software Developer adept in bringing forth expertise in design,
        installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms,
        languages, and embedded systems. Experienced with the latest cutting edge development tools and procedures. Able to effectively self-manage during independent
        projects, as well as collaborate as part of a productive team. <br/> Let's work together to bring your ideas to life!
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
