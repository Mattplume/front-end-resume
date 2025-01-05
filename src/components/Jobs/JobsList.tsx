import React from "react";
import data from "../../data/jobs.json";
import { Job, JobsListProps } from "@/types";
import WorkExperience from "./WorkExperience";

const JobsList: React.FC<JobsListProps> = ({ parentRef }) => {
	const jobs: Job[] = data;

	return (
		<>
			<ul className="w-full px-[20px] pt-12 lg-px-0 lg:h-full flex flex-col gap-40 lg:flex-row lg:flex-wrap lg:justify-center items-center lg:gap-20 lg:pt-[300px] pb-16">
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
