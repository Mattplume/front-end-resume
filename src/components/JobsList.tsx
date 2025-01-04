import React from "react";
import data from "../data/jobs.json";
import { Job } from "@/types";
import WorkExperience from "./WorkExperience";

const JobsList = ({ parentRef }) => {
	const jobs: Job[] = data;
	return (
		<>
			<ul className="w-full md:h-[100vh] flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-10 md:pt-[300px]">
				{jobs.map((job) => {
					return (
						<WorkExperience key={job.id} job={job} parentRef={parentRef} />
					);
				})}
			</ul>
		</>
	);
};

export default JobsList;
