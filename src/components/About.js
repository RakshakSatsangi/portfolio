import React from 'react';
import profileImage from '../assets/ProfileImage.jpg'

const About = () => {
  return (
    <div className="container flex flex-row justify-center items-center h-screen">
        <div className="custom-row flex-row ">
            <span>
                <img src={profileImage} alt="My Profile" className='rounded-full overflow-hidden'/>
            </span>
        </div>

        <div className="custom-row flex-row">
            <div className="name-title">
                About me! 👋 
                <h1>Rakshak Satsangi</h1>
            </div>
            <div className='text-gray-600 font-mono'>💻 Principal Software Engineer at Devo</div>
            <div className='text-gray-600 font-mono'>🧑‍🎓 B.Tech in CSE from <b>IIT Delhi</b></div>
            <div className='text-gray-600 font-mono'>📝 All India Ranked 23 in JEE Advanced</div>
            <div className='text-gray-600 font-mono'>🏸 Badminton, Chess player</div>
        </div>
    </div>
  );
};

export default About;
