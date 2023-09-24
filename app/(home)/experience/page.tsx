import React from "react";

import { ExperienceItem } from "@/components/appbar/experience-item";
import excel from "../../../assets/icons/flutter.png";

const Experience = () => {
  return (
    <main className="px-8">
      <h1 className="font-semibold text-thulian_pink-500 text-2xl py-5">
        Experience
      </h1>
      <ExperienceItem
        company={"JMRL"}
        date={"September 2023 - Present"}
        position={"Marketing"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1">
              {" "}
              . Analysis of <span className="text-thulian_pink-400">market needs</span>, trends and creative idea development.
            </p>
            <p className="text-sm ml-3 mb-1">
              . <span className="text-thulian_pink-400">Design</span> and{" "}
              <span className="text-thulian_pink-400">management</span> of
              plans, offline/online marketing activities
            </p>
            <p className="text-sm ml-3 mb-1">
              . <span className="text-thulian_pink-400">Communication management</span> and{" "}
              <span className="text-thulian_pink-400">marketing plan</span> in traditional media and digital
              platforms.
            </p>
            <p className="text-sm ml-3 mb-1">
              . Design and implementation of online <span className="text-thulian_pink-400">marketing plans</span>{" "}
              for clients from various sectors.
            </p>
            <p className="text-sm ml-3 mb-1">
              . Analysis of the competition, <span className="text-thulian_pink-400"> market study </span> and
              trends in digital platforms.
            </p>
          </>
        }
      />
      <hr className=" bg-tutext-thulian_pink-700 pb-2" />
      <ExperienceItem
        company={"ANGELS PETS"}
        date={"January 2023 - Present"}
        position={"Community Manager"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1">
              • Successfully spearhead campaigns on social media platforms
              including
              <span className="text-thulian_pink-400"> Facebook</span>,{" "}
              <span className="text-thulian_pink-400">Twitter</span>, and{" "}
              <span className="text-thulian_pink-400">Instagram</span>
            </p>
            <p className="text-sm ml-3 mb-1">
              • Manage social media planning for execution of{" "}
              <span className="text-thulian_pink-400">
                marketing strategies{" "}
              </span>
              and community management
            </p>
            <p className="text-sm ml-3 mb-1">
              • Implement marketing and promotion tactics that led to{" "}
              <span className="text-thulian_pink-400"> 34% growth </span> in
              total social media shares and{" "}
              <span className="text-thulian_pink-400"> 27% increase </span> in
              website traffic from social media posts
            </p>
            <p className="text-sm ml-3 mb-1">
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
        company={"Recharge Phones"}
        date={"April 2023 - May 2023"}
        position={"QA Tester"}
        tasks={
          <>
            <p className="text-sm ml-3 mb-1">
              . Developed and executed test{" "}
              <span className="text-thulian_pink-400">plans</span> based on
              business
              <span className="text-thulian_pink-400"> requirements </span>.
            </p>
            <p className="text-sm ml-3 mb-1">
              {" "}
              . Wrote integration, regression, and automated{" "}
              <span className="text-thulian_pink-400"> test cases.</span>
            </p>
            <p className="text-sm ml-3 mb-1">
              {" "}
              . Maintained and executed regression{" "}
              <span className="text-thulian_pink-400"> test suites </span> . Ran
              Beta testing and defect management.
            </p>
            <p className="text-sm ml-3 mb-1">
              {" "}
              . Provided recommendations on areas for{" "}
              <span className="text-thulian_pink-400">
                {" "}
                test case automation{" "}
              </span>
              ; executed test cases and analyzed results
            </p>
            <p className="text-sm ml-3 mb-1">
              . Identified, recorded, documented, and tracked code{" "}
              <span className="text-thulian_pink-400"> bugs </span> as they
              arise and perform regression{" "}
              <span className="text-thulian_pink-400"> testing</span>.
            </p>
            {/* <div className="flex flex-row">
            <Image
                className="h-6 w-6 mr-1"
                src={excel}
                alt="Picture of the author"
              />
            
            </div> */}
          </>
        }
      />
    </main>
  );
};

export default Experience;
