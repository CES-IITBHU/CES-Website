import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Images/hero.png";
import BG from "../Images/image.png";
import dept from "../Images/dept.jpg";
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
            <p>The Civil Engineering Society (CES) at IIT BHU is a revered organisation that provides a shared platform for students, faculty, and alumni, fostering a sense of community and collaboration. Our mission is to facilitate comprehensive growth and development among our members. Guided by experienced students, esteemed professors, and successful alumni, CES stands as a distinguished institution in the realm of civil engineering. We are committed to cultivating an environment where the fusion of knowledge and experience thrives, enabling each member to reach their full potential.</p>

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
        <div className="text-5xl text-center font-bold aboutus">About Us</div>
        <div className="container-1">
        The Civil Engineering Society (CES) at IIT BHU is a dedicated effort to foster communication, idea sharing, and knowledge exchange among emerging civil engineers. Our mission is to provide a robust platform for showcasing their multifaceted skills across various domains of life.CES takes an active role in enhancing faculty-student interaction within the department through a spectrum of initiatives, including events, talk shows, workshops, hackathons, and more. We are committed to facilitating holistic learning and career advancement opportunities for our members.

Notably, CES proudly organizes 'SHILP,' one of the premier cultural events in the civil engineering community. More than just a fest, SHILP is a celebration where students explore and showcase their creative and technical prowess in the realm of civil engineering.

Indeed, teamwork is the cornerstone of any successful society, and at CES, you'll encounter a diverse and dedicated team united by a common mission and purpose.


        </div>
        <div className="deptImg">
          <img src = {dept} alt="Department Building"></img>
        </div>
        {/* <div className="container-1">
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
        </div> */}
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
