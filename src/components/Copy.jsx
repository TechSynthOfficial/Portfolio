import React from 'react'
import { youtube,github ,instagram,facebook,linkedin} from "../assets";


export default function Copy() {
  return (
    
    <>
     <div   className={`xl:mt-12 flex xl:flex-row gap-1 justify-center align-center overflow-hidden`}>
     <div
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61553180794058', "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={facebook}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
     <div
              onClick={() => window.open('https://www.instagram.com/techsynth.official/', "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={instagram}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open('https://www.linkedin.com/in/techsynth-undefined-218aa4299/', "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open('https://www.youtube.com/@TechSynthdev', "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={youtube}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {/* <div
              onClick={() => window.open('https://www.github.com/', "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
</div>
    <div className='text-center '>
    
        <h2>© 2023 TechSynth All Right Reserved </h2>
    </div>
    </>
  )
}
