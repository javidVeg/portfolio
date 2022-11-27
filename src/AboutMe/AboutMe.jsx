import React, { useRef } from 'react'
import "./AboutMe.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

    const imgRef = useRef(null)
    const textRef = useRef(null)
    // const { ref, inView } = useInView();
    // const animation = useAnimation();
    // const animation2 = useAnimation();

    // const reviewAnimation = () => {
    //     if (inView) {
    //         animation.start({
    //             x: 0,
    //             transition: {
    //                 type: "spring",
    //                 duration: 1,
    //                 bounce: 0.3,
    //             },
    //         });
    //     }
    //     if (!inView) {
    //         animation.start({ x: -200 });
    //     }
    // };

    // reviewAnimation();

    // const reviewAnimation2 = () => {
    //     if (inView) {
    //         animation2.start({
    //             x: 0,
    //             transition: {
    //                 type: "spring",
    //                 duration: 1,
    //                 bounce: 0.3,
    //             },
    //         });
    //     }
    //     if (!inView) {
    //         animation2.start({ x: 200 });
    //     }
    // };

    // reviewAnimation2();
    useEffect(() => {
        gsap.from(textRef.current, {
            scrollTrigger: {
                id: "text",
                markers: true,
                trigger: imgRef.current,
                start: "center-=150 center",
                toggleActions: "play"
            },
            duration: 2.5,
            x: -800,
            ease: "elastic.out(1, 0.75)",
            delay: .5
        })
    }, [])
    
    useEffect(() => {
        gsap.from(imgRef.current, {
            scrollTrigger: {
                id: "img",
                markers: false,
                trigger: imgRef.current,
                start: "center-=150 center",
                toggleActions: "play"
            },
            duration: 2.5,
            x: 800,
            ease: "elastic.out(1, 0.75)",
            delay: .5
            
        })
    }, [])


    return (
        <div className='container'>
            <div ref={imgRef} className=" right shadow-lg shadow-black"></div>
            <div
                ref={textRef}
                className='left shadow-lg shadow-black'>
                <div className='content '>
                    <h1 className=' font-bold'>About Me</h1>
                    <p >
                        Innovation and creation are the two things that EXCITE me!  Saturating myself in the world of Tech and Software Development has allowed me to be part of this rapidly changing world and I could not be more grateful. For the last 12 years I have served as an infantryman in the United States Army and have traveled the world in my most recent position as a Congressional Travel Escort. For the last year I have dedicated all my spare time to learning how to code and now that my time in the Army is coming to an end, I am ready to join the work force as a Frontend Developer!
                    </p>
                </div>
            </div>
        </div >
    )
}

export default AboutMe