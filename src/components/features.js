import React from "react";
import about1 from '../assets/images/features/1.png';
import about2 from '../assets/images/features/2.png';
import about3 from '../assets/images/features/3.png';

export default function Features() {
  const featuresData = [
    {
      image: about1,
      title: "$20000+ saved on operational costs",
      desc: "Our AI coworkers optimize resource allocation and automate time-consuming processes, leading to significant cost reductions and improved financial efficiency."
    },
    {
      image: about2,
      title: "35%+ increase in team efficiency",
      desc: "By handling routine tasks, Digiworks AI agents empower your human team to concentrate on high-value activities, accelerating project completion and enhancing overall output."
    },
    {
      image: about3,
      title: "5 hours saved per employee per week",
      desc: "Imagine the impact of reclaiming precious hours. Our AI solutions streamline daily operations, giving your team more time for innovation, client engagement, and personal development."
    },
  ];

  return (
    <div className="features-section-bg">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            AI Coworkers + Humans ={" "}
            <span className="bg-gradient-to-br from-blue-500 via-violet-500 to-sky-400 text-transparent bg-clip-text">
              AskDigi
            </span>
          </h3>
          <p className="max-w-xl mx-auto">
            Digiworks brings you a new way to create agentic coworkers to reduce your work load so you can focus on the real work!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {featuresData.map((item, index) => (
            <div
              className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 feature-box-hover"
              key={index}
            >
              <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 
                after:bg-gradient-to-tl after:from-blue-500 after:to-sky-400
                after:blur-[80px] after:rounded-full"
              >
                <img
                  src={item.image}
                  className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1"
                  alt=""
                />
              </div>
              <div className="p-6 text-black">
                <h5 className="text-lg font-semibold">{item.title}</h5>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
