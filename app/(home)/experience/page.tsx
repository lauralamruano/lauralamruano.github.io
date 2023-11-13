import React from "react";

import { ExperienceItem } from "@/components/experience-item";
const Experience = () => {
  return (
    <main className="flex flex-col w-full px-8 mx-4 lg:my-12">
      <h1 className="font-bold text-thulian_pink-500 text-3xl py-5">
        Experience
      </h1>
      <ExperienceItem company={"A11 y Solutions"} date={" November - Present"} position={"Accesibility Tester"} tasks={<>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Evaluation of compliance with <span className="text-thulian_pink-400">accessibility standards</span>. </p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • <span className="text-thulian_pink-400">Testing</span> with <span className="text-thulian_pink-400">assistive technologies</span>.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • <span className="text-thulian_pink-400">Analysis</span> of navigation and interaction.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Facilitating <span className="text-thulian_pink-400">usability testing</span> with individuals having <span className="text-thulian_pink-400">disabilities</span>.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Creating <span className="text-thulian_pink-400">detailed reports</span>.</p></>} />
      <ExperienceItem company={""} date={"October 2023"} position={"Functional Tester"} tasks={<>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Executes <span className="text-thulian_pink-400">test cases</span> under varying circumstances.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Documents and evaluates <span className="text-thulian_pink-400">test results</span>.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Detects, logs, and reports program <span className="text-thulian_pink-400">bugs</span> and <span className="text-thulian_pink-400">glitches</span>.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Tracks defects and helps <span className="text-thulian_pink-400">troubleshoot errors</span>.</p>
        <p className="text-sm ml-3 mb-1 lg:text-base"> • Reviews <span className="text-thulian_pink-400">test procedures</span> and <span className="text-thulian_pink-400">develops test scripts</span>.</p></>} />
      <hr className=" bg-tutext-thulian_pink-700 pb-2" />
      <ExperienceItem
        company={"ANGELS PETS"}
        date={"January 2023 - September 2023"}
        position={"Community Manager"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              • Successfully spearhead campaigns on social media platforms
              including
              <span className="text-thulian_pink-400"> Facebook</span>,{" "}
              <span className="text-thulian_pink-400">Twitter</span>, and{" "}
              <span className="text-thulian_pink-400">Instagram</span>
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              • Manage social media planning for execution of{" "}
              <span className="text-thulian_pink-400">
                marketing strategies{" "}
              </span>
              and community management
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              • Implement marketing and promotion tactics that led to{" "}
              <span className="text-thulian_pink-400"> 34% growth </span> in
              total social media shares and{" "}
              <span className="text-thulian_pink-400"> 27% increase </span> in
              website traffic from social media posts
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              • Monitor online presence of{" "}
              <span className="text-thulian_pink-400">company’s brand</span> and
              engage with users,
              <span> strengthening customer relationships </span>
            </p>
          </>
        }
      />
      <hr className=" bg-tutext-thulian_pink-700 pb-2" />
      <ExperienceItem
        company={"JMRL"}
        date={"September 2023"}
        position={"Marketing"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              {" "}
              . Analysis of <span className="text-thulian_pink-400">market needs</span>, trends and creative idea development.
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . <span className="text-thulian_pink-400">Design</span> and{" "}
              <span className="text-thulian_pink-400">management</span> of
              plans, offline/online marketing activities
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . <span className="text-thulian_pink-400">Communication management</span> and{" "}
              <span className="text-thulian_pink-400">marketing plan</span> in traditional media and digital
              platforms.
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . Design and implementation of online <span className="text-thulian_pink-400">marketing plans</span>{" "}
              for clients from various sectors.
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . Analysis of the competition, <span className="text-thulian_pink-400"> market study </span> and
              trends in digital platforms.
            </p>
          </>
        }
      />


      <hr className=" bg-tutext-thulian_pink-700 pb-2" />
      <ExperienceItem
        company={"Recharge Phones"}
        date={"April 2023 - May 2023"}
        position={"QA Tester"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . Developed and executed test{" "}
              <span className="text-thulian_pink-400">plans</span> based on
              business
              <span className="text-thulian_pink-400"> requirements </span>.
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              {" "}
              . Wrote integration, regression, and automated{" "}
              <span className="text-thulian_pink-400"> test cases.</span>
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              {" "}
              . Maintained and executed regression{" "}
              <span className="text-thulian_pink-400"> test suites </span> . Ran
              Beta testing and defect management.
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              {" "}
              . Provided recommendations on areas for{" "}
              <span className="text-thulian_pink-400">
                {" "}
                test case automation{" "}
              </span>
              ; executed test cases and analyzed results
            </p>
            <p className="text-sm ml-3 mb-1 lg:text-base">
              . Identified, recorded, documented, and tracked code{" "}
              <span className="text-thulian_pink-400"> bugs </span> as they
              arise and perform regression{" "}
              <span className="text-thulian_pink-400"> testing</span>.
            </p>
          </>
        }
      />
    </main>
  );
};

export default Experience;
