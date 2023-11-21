import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion"; 
import Lottie from "lottie-react";
// import 
import contact from "../assets/tech/contact12.json";

// template_emdhc2o
// service_2bq0dyc
// E4WjSmKSFvsSvTD5L

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [val, setVal] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // template_emdhc2o
// service_2bq0dyc
// E4WjSmKSFvsSvTD5L


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    

    emailjs
      .send(
        'service_gnz4usb',
        'template_s09yr6k',
        {
          from_name: form.name,
          to_name: "Saqib ur Rehman",
          from_email: form.email,
          // to_email : 'saqibkashi008@gmail.com',
          message: form.message,
          
        },
        'j3_9tG5EaVrb_ngpG'
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I will get back to you as soon as possible.");

          setVal("Yess")
          setTimeout(() => {
            setVal("")
          }, 3000);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setVal("Noo")
          setTimeout(() => {
            setVal("")
          }, 5000);
          // alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
     <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      {/* <img src={contact} alt="loading..." /> */}
      <Lottie animationData={contact} loop={true} />
      
        {/* <EarthCanvas /> */}
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {val === "Yess" ? (
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Thank you. We will get back to you as soon as possible.</span>
            </label>
          ): val === "Noo" ? (
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ahh, something went wrong. Please try again.</span>
            </label>
         ):<></>}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");
