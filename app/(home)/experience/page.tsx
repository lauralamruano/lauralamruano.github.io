import React from "react";
import { ExperienceItem } from "@/components/experience-item";

const Experience = () => (
  <main className="lg:ml-72 flex-1 relative">
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h1 className="section-heading">Professional Experience</h1>
    <ExperienceItem
      company={"A11 y Solutions September 2023 - Present"}
      date={"A11y Bot"}
      position={"Frontend Developer"}
      tasks={
        <>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
            <p className="text-sm lg:text-base" style={{ color: 'rgb(var(--muted))' }}>
              Developed an{" "}
              <span className="text-primary">accessibility-focused</span>{" "}
              bot interface using{" "}
              <span className="text-primary">React</span>, enhancing user
              experience for individuals with{" "}
              <span className="text-primary">disabilities</span>.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
            <p className="text-sm lg:text-base" style={{ color: 'rgb(var(--muted))' }}>
              Implemented{" "}
              <span className="text-primary">state management</span> with{" "}
              <span className="text-primary">Redux</span> to streamline
              data flow and improve{" "}
              <span className="text-primary">
                application performance
              </span>
              .
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
            <p className="text-sm lg:text-base" style={{ color: 'rgb(var(--muted))' }}>
              Integrated <span className="text-primary">Axios</span>{" "}
              for seamless{" "}
              <span className="text-primary">API interactions</span>,
              ensuring efficient data retrieval and management.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
            <p className="text-sm lg:text-base" style={{ color: 'rgb(var(--muted))' }}>
              Designed and enforced{" "}
              <span className="text-primary">
                authentication protocols
              </span>{" "}
              with <span className="text-primary">Auth0</span>, ensuring
              secure user access and data protection.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
            <p className="text-sm lg:text-base" style={{ color: 'rgb(var(--muted))' }}>
              Collaborated with{" "}
              <span className="text-primary">UX/UI designers</span> to
              create{" "}
              <span className="text-primary">intuitive layouts</span> and
              features, enhancing usability and accessibility standards.
            </p>
          </div>
        </>
      }
    ></ExperienceItem>
    <ExperienceItem
      company={""}
      date={"Accesibility Detector"}
      position={"Product Analyst"}
      tasks={
        <>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Conduct</span>{" "}
            <span className="text-thulian_pink-400">market research</span> to
            identify key{" "}
            <span className="text-thulian_pink-400">accessibility issues</span>{" "}
            in web applications.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Collaborate</span> with{" "}
            <span className="text-thulian_pink-400">
              cross-functional teams
            </span>{" "}
            to define product requirements and ensure alignment with{" "}
            <span className="text-thulian_pink-400">WCAG 2.2 standards</span>.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Analyze</span>{" "}
            <span className="text-thulian_pink-400">user feedback</span> and
            data to enhance the product's ability to detect and report
            accessibility issues.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Develop</span> product
            documentation and{" "}
            <span className="text-thulian_pink-400">user guides</span> for the
            accessibility issue detector.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Participate</span> in{" "}
            <span className="text-thulian_pink-400">stakeholder meetings</span>{" "}
            to present findings and gather input.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • <span className="text-thulian_pink-400">Create</span> requirements
            and functionalities, leveraging{" "}
            <span className="text-thulian_pink-400">development skills</span>{" "}
            and{" "}
            <span className="text-thulian_pink-400">
              accessibility experience
            </span>
            .
          </p>
        </>
      }
    ></ExperienceItem>
    
    <ExperienceItem
      company={""}
      date={""}
      position={"Accesibility Tester"}
      tasks={
        <>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Evaluation of compliance with{" "}
            <span className="text-thulian_pink-400">
              accessibility standards
            </span>
            .{" "}
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • <span className="text-thulian_pink-400">Testing</span> with{" "}
            <span className="text-thulian_pink-400">
              assistive technologies
            </span>
            .
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • <span className="text-thulian_pink-400">Analysis</span> of
            navigation and interaction.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Facilitating{" "}
            <span className="text-thulian_pink-400">
              usability testing
            </span>{" "}
            with individuals having{" "}
            <span className="text-thulian_pink-400">disabilities</span>.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Creating{" "}
            <span className="text-thulian_pink-400">detailed reports</span>.
          </p>
        </>
      }
    />
    <ExperienceItem
      company={""}
      date={""}
      position={"Functional Tester"}
      tasks={
        <>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Executes <span className="text-thulian_pink-400">
              test cases
            </span>{" "}
            under varying circumstances.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Documents and evaluates{" "}
            <span className="text-thulian_pink-400">test results</span>.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Detects, logs, and reports program{" "}
            <span className="text-thulian_pink-400">bugs</span> and{" "}
            <span className="text-thulian_pink-400">glitches</span>.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Tracks defects and helps{" "}
            <span className="text-thulian_pink-400">troubleshoot errors</span>.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            • Reviews{" "}
            <span className="text-thulian_pink-400">
              test procedures
            </span> and{" "}
            <span className="text-thulian_pink-400">develops test scripts</span>
            .
          </p>
        </>
      }
    />
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
            <span className="text-thulian_pink-400">marketing strategies </span>
            and community management
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • Implement marketing and promotion tactics that led to{" "}
            <span className="text-thulian_pink-400"> 34% growth </span> in total
            social media shares and{" "}
            <span className="text-thulian_pink-400"> 27% increase </span> in
            website traffic from social media posts
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            • Monitor online presence of{" "}
            <span className="text-thulian_pink-400">company's brand</span> and
            engage with users,
            <span> strengthening customer relationships </span>
          </p>
        </>
      }
    />
        <ExperienceItem
      company={"JMRL"}
      date={"September 2023"}
      position={"Marketing"}
      tasks={
        <>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            {" "}
            . Analysis of{" "}
            <span className="text-thulian_pink-400">market needs</span>, trends
            and creative idea development.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            . <span className="text-thulian_pink-400">Design</span> and{" "}
            <span className="text-thulian_pink-400">management</span> of plans,
            offline/online marketing activities
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            .{" "}
            <span className="text-thulian_pink-400">
              Communication management
            </span>{" "}
            and <span className="text-thulian_pink-400">marketing plan</span> in
            traditional media and digital platforms.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            . Design and implementation of online{" "}
            <span className="text-thulian_pink-400">marketing plans</span> for
            clients from various sectors.
          </p>
          <p className="text-sm ml-3 mb-1 lg:text-base">
            . Analysis of the competition,{" "}
            <span className="text-thulian_pink-400"> market study </span> and
            trends in digital platforms.
          </p>
        </>
      }
    />
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
          </p>
        </>
      }
    />
      </div>
    </section>
  </main>
);

export default Experience;
