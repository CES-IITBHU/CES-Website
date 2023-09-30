import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Images/hero.png";
import BG from "../Images/image.png";
import Footer from "../Components/Footer";
import ImageGallery from "../Components/ImageGallery";
// import video from '../Video/Civil_Dept_vid.mp4';
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div
          className="flex h-[90vh] bg-cover bg-blend-darken"
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div className="md:w-[40%] w-[70%] relative md:top-40 top-20 ml-10 md:ml-16">
            <div className="text-header">
              <h>The Society of Civil Engineers</h>
            </div>
            <div className="text">
            <p>Civil Engineering Society is the interaction community of the civil engineers, often referred to as CES,  It serves as a link between enrolled civil engineering students, alumni and professors at IIT BHU
            The Civil Engineering Society typically refers to a community  dedicated to the field of civil engineering. The CES is an essential hub for students of civil engineering , offering resources, networking opportunities, and career enhancement.</p>

            </div>
          </div>
          <img
            src={Hero}
            alt=""
            className="h-[400px] md:block hidden relative top-24 ml-40"
          />
        </div>
        {/*<img src={Vector} alt="" className="absolute -top-10 z-10" />  */}
      </div>
      <div className="mt-10 mb-20">
        <div className="text-4xl text-center font-bold">About Us</div>
        <div className="container">
        This society is an effort to allow communication and sharing of ideas and information among all upcoming civil engineers and aim to provide a platform to show off their skills in every part of their life. The Society plays an active role in improving the Faculty-Student interaction in the department which involves Events, Talk Shows, Workshops, Hackathons and many more…
CES also conducts SHILP - one of the biggest cultural event of the civil engineering society it is more than just a fest , it's a fest where students explore their creative as well as technical aspects of civil engineering.Undoubtedly! Team is the backbone of any  society in CES, you'll encounter a diverse team alligned towards same mission and purpose.

        </div>
        <div className="container">
          <h>Alumni Interaction</h>
          <p> Alumni Interaction Team dedicates themselves to strengthen the bond between alumni and students. They facilitate mentorship for students to seek guidance and learn from alumni experiences.</p>
          <br></br>

          <h>Public Relations</h>
          <p>  Public Relations Team acts as the welcoming face of CES. They foster connections with industry leaders and organizations, guaranteeing that our message reaches across vast horizons.</p>
          <br></br>
          <h>Events</h>
          <p> The magic-makers Events Team turns ideas into unforgettable experiences by organizing workshops and insightful seminars</p>
          <br></br>
          <h>Creative Team</h>
          <p> Team of creative peeps responsible for brainstorming and generating attention-grabbing ideas and concepts.
</p>
          <br></br>
          <p>Together, we all are the driving force that ensures effective working of our society , it's this unity that allows us to overcome challenges, push boundaries, and leave a lasting legacy of innovation and progress.</p>
        </div>
      </div>
      {/* <video controls className="w-[60%] block m-auto mb-3">
        <source src={video} type="video/mp4"/>
      </video> */}
      <ImageGallery/>
      <Footer />
    </div>
  );
};

export default Homepage;
