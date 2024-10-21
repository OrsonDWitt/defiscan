import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Report",
};

export default function SubmitReportPage() {
  return (
    <div className="container relative mb-20 max-w-6xl py-6 lg:py-10">
      <h1 className="inline-block text-4xl font-bold leading-3 tracking-tight text-primary lg:text-5xl">
        Submit Report
      </h1>
      <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
        <ol className="mt-8 list-decimal list-inside space-y-4 text-left text-sm xl:text-base">
          <li>
            Fork the project’s{" "}
            <a
              href="https://github.com/deficollective/defi-scan"
              className="text-blue-600 underline"
            >
              GitHub repository
            </a>
            .
          </li>
          <li>
            Copy the protocol{" "}
            <a href="/report-template" className="text-blue-600 underline">
              Report Template
            </a>{" "}
            to a new file named after the protocol.
          </li>
          <li>
            Clone and install the Permission Scanner from the{" "}
            <a
              href="https://github.com/deficollective/permission-scanner"
              className="text-blue-600 underline"
            >
              GitHub repository
            </a>
            .
          </li>
          <li>
            Create a report of all permissioned functions found in the protocol
            using the Permission Scanner.
          </li>
          <li>
            Follow the{" "}
            <a href="/submit-report" className="text-blue-600 underline">
              Reporting Guidelines
            </a>{" "}
            to complete the report.
          </li>
          <li>
            Submit a PR to the main repository with the name of the analyzed
            protocol.
          </li>
          <li>
            Ping the team in the DeFi Collective's{" "}
            <a href="https://discord.gg" className="text-blue-600 underline">
              Discord
            </a>{" "}
            to get the PR reviewed and merged.
          </li>
        </ol>
      </div>
    </div>
  );
}