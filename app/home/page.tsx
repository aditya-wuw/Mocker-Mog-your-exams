"use client";
import Feedback from "@/components/Feedbackform/feedback";
import Feedbackform from "@/components/Feedbackform/Feedbackform";
import Mainbodynav from "@/components/home/BodyNav";
import InputField from "@/components/home/InputField";
import Sidebar from "@/components/home/Sidebar";
import Loader from "@/components/Loader";
import { CreateContext } from "@/Context/ContextProvider";
import React, { useEffect } from "react";

const Page = () => {
  const {setsidebar,loader,setloader,SetTimerSlider,feedbackform,setuploader,loadermessage,SETloadermessAGE} = CreateContext();
  useEffect(()=>{setloader(false);setsidebar(true);SETloadermessAGE("")},[setloader,setsidebar])
  
  if(loader) return <div className="w-full h-screen flex justify-center items-center"><Loader message={loadermessage}/></div>
  return (
    <div className="w-[100%] h-full flex">
      <Sidebar/>
      <main className="w-full h-full mx-4 " >
        <Mainbodynav />
        <section  className="mainContaine md:h-[90vh] h-[86vh] relative" onClick={()=>{setsidebar(true);SetTimerSlider(false);setuploader(false);}}>
          {feedbackform && <div className="flex justify-center items-center relative md:top-[-5%] top-[10%] z-6"><Feedbackform/></div>}
        </section>
        <InputField/> 
      </main>
      <footer className="absolute bottom-0 w-full flex justify-center">
        <Feedback/>
      </footer>
    </div>
  );
};

export default Page;
