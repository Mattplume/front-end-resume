import React, { useEffect, useState, useRef } from "react";
import { Job } from "@/types";
import { useWindowSize } from "@/hooks";
import JobDetails from "./JobDetails";

interface WorkExperienceProps {
	job: Job;
	parentRef: React.RefObject<HTMLDivElement>;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ job, parentRef }) => {
	const [isSticky, setIsSticky] = useState(false);
	const dateRef = useRef<HTMLDivElement>(null);
	const { currentWidth } = useWindowSize();

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
		<div className="job-container relative  bg-white roundedrelative w-full lg:max-w-[1100px] rounded-lg p-[15px]">
			<div
				className="flex flex-col justify-between lg:flex-row w-full lg:min-h-[300px]"
				ref={parentRef}
			>
				<div className="date-job-company self-end lg:self-auto lg:relative w-[50%] flex-col lg:align-bottom">
					<div
						ref={dateRef}
						className={`end-date-block ${
							currentWidth &&
							currentWidth > 1023 &&
							(isSticky ? "sticky top-[278px] z-1" : "absolute top-[-10px]")
						} text-gray-400 flex justify-end lg:w-1/4`}
					>
						<div className="end-date-block text-[10px] flex justify-center border-solid border-[1px] lg:border-darkPrimary px-4 py-[6px] uppercase w-fit rounded-3xl lg:text-[13px] lg:text-darkPrimary lg:min-w-[80px]">
							{job.endDate === "" ? "Aujourd'hui" : job.endDate}
						</div>
					</div>
					<div className="job-company flex flex-col lg:gap-2 absolute top-[-40px] left-0 lg:top-1/2 right-4 transform -translate-y-1/2">
						{job.companyName === "IMIE" &&
						currentWidth &&
						currentWidth > 1023 ? (
							<>
								<h3 className="lg:text-end text-darkPrimary font-semibold text-xl">
									Chargé des relations
								</h3>
								<span className="lg:text-end text-[13px] text-gray-400">
									puis
								</span>
								<h3 className="lg:text-end text-darkPrimary font-semibold text-xl">
									Responsable grands comptes
								</h3>
							</>
						) : job.companyName === "IMIE" &&
						  currentWidth &&
						  currentWidth < 1024 ? (
							<h3 className="lg:text-end text-darkPrimary font-semibold text-xl">
								Responsable grands comptes
							</h3>
						) : (
							<h3 className="lg:text-end text-darkPrimary font-semibold text-xl">
								{job.jobTitle}
							</h3>
						)}
						{job.companyName === "IMIE" ? (
							<h4 className="lg:text-end text-gray-400 text-[14px] font-bold">
								IMIE, École de la filière numérique
							</h4>
						) : (
							<h4 className="lg:text-end text-gray-400 text-[14px] font-semibold">
								{job.companyName}
							</h4>
						)}
					</div>
				</div>
				<JobDetails
					details={job.description}
					context={job.id === 1 || job.id === 2 ? "tech" : undefined}
					seif={job.companyName === "SEIF CONSULT"}
				/>
				{currentWidth && currentWidth < 1024 && (
					<div className="start-date text-[10px] text-gray-400 flex justify-center self-end border-solid border-[1px] lg:border-darkPrimary px-4 py-[6px] uppercase w-fit rounded-3xl lg:text-[13px]">
						{job.startDate}
					</div>
				)}
			</div>
		</div>
	);
};

export default WorkExperience;
