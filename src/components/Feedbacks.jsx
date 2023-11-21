

// import React from 'react';
// import { motion } from "framer-motion";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import { profileImg } from "../constant";

// const PersonProfiles = () => {

//   const profileName = 'John Doe';
//   const person1 = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Software Engineer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   };

//   const person2 = {
//     name: 'Jane Smith',
//     age: 25,
//     occupation: 'Graphic Designer',
//     description: 'Praesent dapibus consectetur odio quis pellentesque.',
//   };

//   return (
//     <>
//       <motion.div variants={textVariant()}>

//         <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Team.</h2>
//       </motion.div>
//       <div className='grid grid-cols-2'>
//         <div >
//           <h2 className={styles.profileText}>Bilal</h2>
//           <p className={styles.profileText}>Name: {person1.name}</p>
//           <p className={styles.profileText}>Age: {person1.age}</p>
//           <p className={styles.profileText}>Occupation: {person1.occupation}</p>
//           <p className={styles.profileText}>Description: {person1.description}</p>
//           <div className="profile-container">
//             <div className="profile-image">
//               <img src={profileImg.source} alt={profileName} />
//             </div>
//             <h2>{profileName}</h2>
//           </div>
//         </div>
//         <div>
//           <h2 className={styles.profileText}>Saqib</h2>
//           <p className={styles.profileText}>Name: {person2.name}</p>
//           <p className={styles.profileText}>Age: {person2.age}</p>
//           <p className={styles.profileText}>Occupation: {person2.occupation}</p>
//           <p className={styles.profileText}>Description: {person2.description}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonProfiles;


import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { team } from "../constant";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion"; 
import { youtube,github ,instagram,facebook,linkedin} from "../assets";

import {bilal} from "../assets";

const ServiceCard = ({ index, title, education, skills,namee,study,skillsss, img, Certificates, list }) => (
  
  
  

  
  <Tilt className='xs:w-[550px] w-full'>
   
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >

      
       
      
      
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] '
      >
      
      <div className="center" style={{display:'flex',justifyContent:'center',alignItems:'center',}}
>
      
      <img
          src={img}
          alt='web-development'
          className="green-pink-gradient p-[2px]"
          style={{borderRadius:"20px",width:'270px',height:'350px',marginTop:'13px',marginBottom:'13px'}}
        />
      </div>
      

        <h3 className='text-white text-[15px] text-center'>
          <strong style={{fontSize:'18px'}}>{title}</strong> {namee}
        </h3>
        <h3 className='text-white text-[15px] text-center'>
        <strong style={{fontSize:'18px'}}>{education}</strong> {study}
        </h3>
        <h3 className='text-white text-[15px] text-center'>
        <strong style={{fontSize:'18px'}}>{skills}</strong> {skillsss}
        </h3>
        <h3 className='text-white text-[15px] text-center'>
        <strong style={{fontSize:'18px'}}>{Certificates}</strong> {list}
        
        </h3>
        
      </div>

    </motion.div>
  </Tilt>
  

  
);


const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>CEO</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

      </motion.p>
      {/* <div className="text-center" style={{display:'flex',justifyContent:'center'}}> */}
      
      {/* </div> */}
        
        
      
      {/* <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-20 justify-center align-center overflow-auto ` style=}> */}
        {team.map((team, index) => (
         <>
         
         <div key={index}  className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-20 justify-center align-center overflow-hidden`}>


      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >

      <ul>
      <div   className={`xl:mt-12 flex xl:flex-row gap-8 justify-center align-center overflow-hidden`}>
     <div
              // onClick={() => window.open('https://www.facebook.com/', "_blank")}
              className='text-white text-[18px] text-center'
            >
                      <strong style={{fontSize:'28px'}}>{team.namee}</strong>

            </div>
     <div
              onClick={() => window.open('https://www.linkedin.com/in/saqib-ur-rehman-6393241b0/', "_blank")}
              className='w-20 h-20 rounded-full  justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            </div>
        {/* <h3 className='text-white text-[18px] text-center'><strong style={{fontSize:'28px'}}>{team.namee}</strong></h3> */}
        <br></br>
        <h3 ><strong style={{fontSize:'18px'}}>Degree</strong></h3>
        <li className='text-secondary text-[15px] '>❇ {team.study}
        </li>
        <br></br>
        <h3 ><strong style={{fontSize:'18px'}}>Skills</strong></h3>
        <li className='text-secondary text-[15px] '>❇ {team.skillsss}
        </li>
        <br></br>
        <h3 ><strong style={{fontSize:'18px'}}>Certificates</strong></h3>
        <li className='text-secondary text-[15px] '>
        ❇ {team.list[0]} 
        
        </li>
        <li className='text-secondary text-[15px] '>
        ❇ {team.list[1]} 
        
        </li>
         <li className='text-secondary text-[15px] '>
        ❇ {team.list[2]} 
        
        </li>
        
        </ul>
      </motion.div>
          
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[550px] flex-[0.75] bg-black-100 p-8 rounded-2xl flex items-center justify-center'
      >
      <img
          src={team.img}
          alt='web-development'
          
          style={{borderRadius:"10px",width:'400px',height:'450px',}}
        />
        
      
        {/* <EarthCanvas /> */}
      </motion.div>
      </div>
        </>
        ))}

        <div className='w-full flex'>
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-12 text-secondary text-center  text-[18px] max-w-6xl leading-[30px]'
        >
          Empowered by a dynamic team of Web / Mobile app developers, we excel in crafting cutting-edge web and mobile applications. Our proficiency spans React.JS, React Native, Next.JS, Three.JS, Node.JS, Redux, Hooks, Tailwind CSS, Bootstrap 5, MongoDB, Firebase, and SQL. With a commitment to innovation and excellence, we bring your digital aspirations to life with unparalleled skill and expertise.
        </motion.p>
      </div>
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(Feedbacks, "Team");


// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { team } from "../constant";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[85%] h-[95%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Feedbacks = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>

//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//         Team
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {team.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Feedbacks, "Team");


