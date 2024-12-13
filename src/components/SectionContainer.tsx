import { SectionContainerProps } from "@/types";

const SectionContainer: React.FC<SectionContainerProps> = ({
	children,
	backgroundColor,
}) => {
	return (
		<div className={`w-full py-[100px] md:py-[140px] ${backgroundColor}`}>
			<div className="w-full max-w-[1280px] mx-auto pr-4 pl-4 md:max-w-[90%]">
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
