import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import QR from "../Images/Funds/Fund UPI QR.jpg";

const Funds = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 ">
        <div class="relative  my-10 md:w-[50%] w-full md:left-[25%] z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
          <h4 class="w-full text-4xl font-medium leading-snug">Alumnus Fund</h4>
          <p>If you want to make a donation to the society please scan the following QR</p>
          <form class="relative w-full mt-6 space-y-8">
            <div class="relative">
              <div style={{ textAlign: "center" }}>
                <img
                  src={QR}
                  style={{ display: "block", margin: "auto" }}
                  width="50%"
                  alt="QR Code"
                />
              </div>

              <div className="pt-6 text-center">UPI Id: civengsoc@ybl</div>
            </div>
            <div class="relative">
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Funds;
