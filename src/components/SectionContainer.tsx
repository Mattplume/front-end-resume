import { SectionContainerProps } from "@/types";

const SectionContainer: React.FC<SectionContainerProps> = ({
	children,
	backgroundColor,
	sectionPadding,
	fullWidth,
}) => {
	return (
		<div
			className={`w-full py-[100px] md:py-[140px] flex flex-col items-center ${sectionPadding} ${backgroundColor}`}
		>
			<div
				className={`${
					fullWidth ? "w-screen" : "w-full max-w-[1280px] pr-4 pl-4"
				} `}
			>
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
