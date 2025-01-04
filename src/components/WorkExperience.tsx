import React, { useEffect, useState, useRef } from "react";
import { Job } from "@/types";

interface WorkExperienceProps {
	job: Job;
	parentRef: React.RefObject<HTMLDivElement>;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ job, parentRef }) => {
	const [isSticky, setIsSticky] = useState(false);
	const dateRef = useRef<HTMLDivElement>(null); // Référence à l'élément de date

	useEffect(() => {
		const handleScroll = () => {
			if (parentRef.current && dateRef.current) {
				const parentRect = parentRef.current.getBoundingClientRect();
				const dateRect = dateRef.current.getBoundingClientRect();

				// L'élément devient sticky lorsque son haut atteint le bas du parent
				setIsSticky(dateRect.top <= parentRect.bottom);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [parentRef]);

	return (
		<div className="w-full md:max-w-[1100px]">
			<div className="flex w-full md:h-[300px]" ref={parentRef}>
				<div className="date-job-company relative w-[50%] flex-col md:align-bottom">
					<div
						ref={dateRef}
						className={`end-date-block ${
							isSticky ? "sticky top-[276px] z-1 bg-white" : "relative"
						} md:w-1/4`}
					>
						<div className="end-date-block flex justify-center border-solid border-[1px] md:border-darkPrimary px-4 py-[6px] uppercase w-fit rounded-3xl md:text-[13px] md:text-darkPrimary md:min-w-[80px]">
							{job.endDate === "" ? "Aujourd'hui" : job.endDate}
						</div>
					</div>
					<div className="job-company absolute top-1/2 right-4 transform -translate-y-1/2">
						<h3 className="md:text-end text-darkPrimary font-bold text-xl">
							{job.jobTitle}
						</h3>
						<h4 className="md:text-end text-gray-400 text-[15px]">
							{job.companyName}
						</h4>
					</div>
				</div>
				<div className="job-description w-[50%] md:border md:border-grey md:rounded-lg md:p-12">
					{job.description}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;
