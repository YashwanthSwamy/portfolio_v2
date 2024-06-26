import React from 'react'
import { Boxes } from './ui/BackgroundBoxes'
import BorderMagicButton from './ui/BorderMagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from "react-icons/fa";
import { about } from "../constants";

const Homepage = () => {
    return (

        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-0 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <Boxes/>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-ts text-center text-blue-100 max-w-80'>
                        A Full Stack Developer
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-8xl'
                        words="Hi, I'm Yashwanth Swamy"
                    />
                    <p className='text-center md:tracking-tighter mb-4 text-sm md:text-lg lg:text-2xl'>
                        dive in to explore a journey marked by cutting-edge projects, impactful collaborations, and a relentless pursuit of technological excellence.
                    </p>

                    <a href="">
                        <BorderMagicButton title="Checkout Resume" icon={<FaLocationArrow />} position="right" classes='gap-2' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage