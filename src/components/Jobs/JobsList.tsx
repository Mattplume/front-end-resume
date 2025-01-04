import React from "react";
import data from "../../data/jobs.json";
import { Job } from "@/types";
import WorkExperience from "./WorkExperience";

const JobsList = ({ parentRef }) => {
	const jobs: Job[] = data;

	return (
		<>
			<ul className="w-full px-[20px] pt-12 lg-px-0 lg:h-[100vh] flex flex-col gap-36 lg:flex-row lg:flex-wrap lg:justify-center items-center lg:gap-20 lg:pt-[300px] pb-16 lg:pb-[120px]">
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
