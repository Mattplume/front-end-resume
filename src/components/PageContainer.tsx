import { PageContainerProps } from "@/types";

const PageContainer: React.FC<PageContainerProps> = ({
	children,
	backgroundColor,
}) => {
	return (
		<div
			className="w-full pt-paddingTopXL sm-pr-4"
			style={{ backgroundColor: backgroundColor || "transparent" }}
		>
			<div className="w-full max-w-[1280px] mx-auto pr-4 pl-4 md:pr-0 md:pl-0 pb-componentYPadding">
				{children}
			</div>
		</div>
	);
};

export default PageContainer;
