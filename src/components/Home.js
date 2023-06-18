import React from 'react';
import './Home.css';
import avatar from '../assets/Avatar.png'
import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';
import Gmail from '../icons/Gmail';
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const icons = [
    { icon: <LinkedIn />, link: 'https://www.linkedin.com/in/rakshak-satsangi/' },
    { icon: <Github />, link: 'https://github.com/rakshakSatsangi/' },
    { icon: <Gmail />, link: 'mailto:rakshak@alumni.iitd.ac.in' }
];

const resumeLink = "https://drive.google.com/file/d/1W39en63ClW1aYq0EKL_vgQQM7QQtXZje/view?usp=sharing"
const Home = () => {
  return (
    <div className="container home-container flex flex-row justify-center items-center h-screen">
        <div className="custom-row flex-row">
            <span>
                <img src={avatar} alt="My Avatar"/>
            </span>
        </div>

        <div className="custom-row flex-row">
            <span className="name-title">
                Meet me! 👋 
                <h1>Rakshak Satsangi</h1>
            </span>
            <span className='text-gray-600 font-mono'>👨‍💻 Software Engineer</span>
        </div>

        <div className="custom-row flex-row">
            {icons.map((item, index) => (
                <span className="custom-col text-gray-500" key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                </span>
                
            ))}
        </div>

        <div className="custom-row flex-row bg-white">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <Button className="border bg-white border-gray-500 text-gray-500 px-4 py-2 rounded-lg uppercase font-mono">
                    <span className="flex items-center">
                        Resume
                        <ArrowLongRightIcon className="h-5 w-5 ml-2" />
                    </span>    
                </Button>
            </a>
        </div>
    </div>
  );
};

export default Home;