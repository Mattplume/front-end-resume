import React, { useRef } from "react";
import JobsList from "@/components/JobsList";
import { useWindowSize } from "@/hooks";

interface pageProps {
	className?: string;
}

const WorkExperiencePage: React.FC<pageProps> = ({ className }) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const { currentWidth } = useWindowSize();
	return (
		<div className="bg-paleGrey md:bg-white">
			<div className="page-header md:fixed md:bg-white w-full md:pt-36 z-10">
				<h1 className="text-darkPrimary text-center text-mobileh1 md:text-h1 font-medium mb-2 leading-tight">
					Expérience professionnelle
				</h1>
				{currentWidth && currentWidth >= 769 && (
					<div className="fade-in-white"></div>
				)}
			</div>
			<JobsList parentRef={parentRef} />
		</div>
	);
};

export default WorkExperiencePage;
