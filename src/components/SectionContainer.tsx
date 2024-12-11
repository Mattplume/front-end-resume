import { SectionContainerProps } from "@/types";

const SectionContainer: React.FC<SectionContainerProps> = ({
	children,
	backgroundColor,
}) => {
	return (
		<div
			className="w-full pt-paddingTopXL sm-pr-4"
			style={{ backgroundColor: backgroundColor || "transparent" }}
		>
			<div className="w-full max-w-[1280px] mx-auto pr-4 pl-4 md:max-w-[90%] pb-sectionPB">
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
