import React from "react";

const featuresData = [
  {
    icon: "mdi mdi-robot",
    title: "AI Agents",
    desc: "Trained to understand your operations and execute tasks with minimal oversight.",
  },
  {
    icon: "mdi mdi-message-processing-outline",
    title: "Automated Customer Support",
    desc: "Handle tier-1 queries 24/7, reduce wait times, and improve satisfaction.",
  },
  {
    icon: "mdi mdi-human-greeting-variant",
    title: "HR Task Automation",
    desc: "Streamline employee onboarding, leave management, and internal queries.",
  },
  {
    icon: "mdi mdi-finance",
    title: "Finance Assistance",
    desc: "Automate invoice processing, expense tracking, and financial reporting.",
  },
  {
    icon: "mdi mdi-truck-delivery-outline",
    title: "Logistics Coordination",
    desc: "Manage deliveries, track shipments, and optimize routes automatically.",
  },
  {
    icon: "mdi mdi-file-document-edit-outline",
    title: "Content Generation",
    desc: "Produce reports, social posts, and documentation using intelligent prompts.",
  },
  {
    icon: "mdi mdi-source-branch",
    title: "Technical Task Handling",
    desc: "Run code reviews, manage PRs, and suggest improvements automatically.",
  },
  {
    icon: "mdi mdi-monitor-dashboard",
    title: "Project Dashboards",
    desc: "Summarize status, track KPIs, and notify stakeholders instantly.",
  },
  {
    icon: "mdi mdi-account-multiple",
    title: "CRM Updates",
    desc: "Auto-log calls, emails, and meeting notes directly to your CRM.",
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-md shadow-md feature-card-bg transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="content mt-7">
                <div className="icon-title-row mb-4">
                  <span className="inline-block text-3xl text-gradient">
                  <i className={`${item.icon} feature-icon-gradient`}></i>
                  </span>
                  <h3 className="text-2xl font-bold text-black dark:text-white feature-h3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-700 mt-3 feature-p">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
