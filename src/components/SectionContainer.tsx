import { SectionContainerProps } from "@/types";

const SectionContainer: React.FC<SectionContainerProps> = ({
	children,
	backgroundColor,
	paddingBottom = "pb-sectionPB",
	paddingTop = "pt-sectionPT",
}) => {
	return (
		<div
			className={`w-full ${paddingTop} ${paddingBottom}`}
			style={{ backgroundColor: backgroundColor || "transparent" }}
		>
			<div className="w-full max-w-[1280px] mx-auto pr-4 pl-4 md:max-w-[90%]">
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
