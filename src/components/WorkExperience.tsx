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
			<div
				ref={dateRef} // Ajouter la référence à l'élément de date
				className={`end-date-block ${
					isSticky ? "sticky top-0 z-10 bg-white" : "relative"
				} md:w-1/4`}
			>
				<div className="end-date-block">
					{job.endDate === "" ? "Aujourd'hui" : job.endDate}
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:h-[300px]" ref={parentRef}>
				<div className="job-title w-[50%] flex-col md:align-bottom">
					<h3 className="md:text-end">{job.jobTitle}</h3>
					<h4 className="md:text-end">{job.companyName}</h4>
				</div>
				<div className="job-description w-[50%] md:border md:border-grey md:rounded-lg md:p-12">
					{job.description}
				</div>
			</div>
		</div>
	);
};

export default WorkExperience;
