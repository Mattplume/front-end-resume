import React, { useRef } from "react";
import JobsList from "@/components/Jobs/JobsList";
import { useWindowSize } from "@/hooks";

interface pageProps {
	className?: string;
}

const WorkExperiencePage: React.FC<pageProps> = ({ className }) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const { currentWidth } = useWindowSize();

	return (
		<div className="bg-paleGrey lg:bg-white pt-20 lg:pt-0">
			<div className="page-header mb-16 lg:fixed lg:bg-white w-full pt-16 lg:pt-36 z-10">
				<h1 className="text-darkPrimary text-center text-mobileh1 md:text-h1 font-medium leading-tight">
					Expérience professionnelle
				</h1>
				{currentWidth && currentWidth > 1023 && (
					<div className="fade-in-white"></div>
				)}
			</div>
			<JobsList parentRef={parentRef} />
		</div>
	);
};

export default WorkExperiencePage;
