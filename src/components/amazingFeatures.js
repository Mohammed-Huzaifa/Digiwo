import React from "react";

const featuresData = [
  {
    icon: "mdi mdi-robot",
    title: "AI Agents",
    desc: "New Skills, New You",
  },
  {
    icon: "mdi mdi-message-processing-outline",
    title: "Automated Customer Support",
    desc: "Improve Your Business",
  },
  {
    icon: "mdi mdi-human-greeting-variant",
    title: "HR Task Automation",
    desc: "Hire and Retain",
  },
  {
    icon: "mdi mdi-finance",
    title: "Finance Assistance",
    desc: "Data is Everything",
  },
  {
    icon: "mdi mdi-truck-delivery-outline",
    title: "Logistics Coordination",
    desc: "On Time, Minimize Errors",
  },
  {
    icon: "mdi mdi-file-document-edit-outline",
    title: "Content Generation",
    desc: "Revenue Generation",
  },
  {
    icon: "mdi mdi-source-branch",
    title: "Technical Task Handling",
    desc: "Fun & Challenging",
  },
  {
    icon: "mdi mdi-monitor-dashboard",
    title: "Project Dashboards",
    desc: "Claims & Reimbursements",
  },
  {
    icon: "mdi mdi-account-multiple",
    title: "CRM Updates",
    desc: "RPF's & Tenders",
  },
];

export default function AmazingFeatures() {
  return (
    <div className="amazing-features-section relative z-10 pt-40 scroll-mt-40">
      <div className="container">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Powerful Features for Modern Teams
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Everything you need to supercharge your productivity with AI-powered collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-6">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="px-3 py-2 rounded-md shadow-md feature-card-bg feature-card-hover"

            >
              <div className="content mt-7">
              <div className="custom-feature-card">
  <span className="icon-wrapper">
    <i className={`${item.icon}`}></i>
  </span>
  <div className="text-wrapper">
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
