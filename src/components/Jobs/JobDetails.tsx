import React from "react";
import { useWindowSize } from "@/hooks";
import JobDetail from "./JobDetail";

const JobDetails = ({ details, context, seif }) => {
	const { currentWidth } = useWindowSize();
	const missionsArray = details.missions
		.split(";")
		.map((mission) => mission.trim());

	return (
		<div className="job-description flex flex-col justify-center max-w-[75%] lg:max-w-[90%] py-6 lg:w-[50%] lg:border lg:border-grey lg:rounded-lg lg:p-12">
			<JobDetail
				title={seif ? "Missions principales" : "Missions"}
				content={seif ? missionsArray[0] : details.missions}
				showTitle={currentWidth > 1023}
				context={context}
				seif
			/>
			<JobDetail
				title={context === "tech" ? "Environnement technique" : "Environnement"}
				content={details.Environnement}
				showTitle={currentWidth > 1023}
				context={context}
			/>
			{seif && (
				<>
					{currentWidth > 1023 && (
						<span className="font-semibold text-[11px] text-gray-400 uppercase">
							Autres missions
						</span>
					)}
					<p className="text-darkPrimary font-light">{missionsArray[2]}</p>
					<p className="text-darkPrimary font-light">{missionsArray[3]}</p>
				</>
			)}
		</div>
	);
};

export default JobDetails;
