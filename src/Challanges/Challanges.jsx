import React, { useEffect, useState } from 'react'
import "./Challanges.css"
import Axios from "axios"
import { FaHammer } from "react-icons/fa"
import { MdDateRange } from "react-icons/md"
import { BiCodeAlt } from "react-icons/bi"
import { HiChevronDoubleDown } from "react-icons/hi"
import { HiChevronDoubleUp } from "react-icons/hi"
import snippet1 from "../pictures/snippet-1.png"

import { useRef } from 'react'


const Challanges = () => {

    const [challanges, setChallanges] = useState([])
    const [mapNum, setMapNum] = useState((3))
    const showMoreRef = useRef(null)
    const showLessRef = useRef(null)

    useEffect(() => {
        const challange = () => {

            Axios.get("https://www.codewars.com/api/v1/users/javidVeg/code-challenges/completed?page=0")
                .then(response => {
                    setChallanges(response.data.data)
                })
                .catch(err => console.error(err.message));
        };
        challange();
    }, [])

    console.log(challanges)

    const showMore = () => {
        setMapNum((1000))
        showMoreRef.current.style.display = "none"
        showLessRef.current.style.display = "block"
    }
    const showLess = () => {
        setMapNum((3))
        showMoreRef.current.style.display = "block"
        showLessRef.current.style.display = "none"
    }

    return (
        <div className="challanges-container">
            <div className="challanges-title">
                <h1 className=''>#Challanges</h1>
            </div>
            <div className="codewars">
                <h3 className="codewars-title text-emerald-500">Completed Codewars Challanges</h3>
                <a href="https://www.codewars.com/users/javidVeg"><img src="https://www.codewars.com/users/javidVeg/badges/large"></img></a>
            </div>
            <div className="comp-container">
                {challanges.slice(0, `${mapNum}`).map(({ id, name, completedAt, completedLanguages }) => (
                    <a href={`https://www.codewars.com/kata/${id}`} key={id}>
                        <div className="chall-wrapper">
                            <div className="tint">
                                <div className='p-wrapper'>
                                    <p><FaHammer color='white' size={15} className="icon" />&nbsp;:&nbsp;{name}</p>
                                    <p><MdDateRange color='white' size={20} className="icon" />&nbsp;:&nbsp;{completedAt.substr(0, 10)}</p>
                                    <p><BiCodeAlt color='white' size={20} className="icon" />&nbsp;:&nbsp;{completedLanguages[0]}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <button className='show-more-button' ref={showMoreRef} onClick={() => { showMore() }}>
                <div className="show-more-icon"><HiChevronDoubleDown size={50} />
                </div>
            </button>
            <button className='show-less-button' ref={showLessRef} onClick={() => { showLess() }}>
                <div className="show-less-icon"><HiChevronDoubleUp size={50} />
                </div>
            </button>
            <div className="code-snippets">
                <h3 className="codewars-title text-emerald-500">Various Feature Snippets</h3>
                <div className="snippet-wrapper">
                    <div className="code-snippet-container">
                        <div className="top">
                        </div>
                        <div className="bottom"></div>
                        {/* <img src={snippet1} alt="snippet-1" /> */}
                    </div>
                    <div className="link">
                        <p className='link-p'>visit snippet</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challanges