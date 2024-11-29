import { PageContainerProps } from "@/types";

const PageContainer: React.FC<PageContainerProps> = ({
	children,
	backgroundColor,
}) => {
	return (
		<div
			className="w-full pt-paddingTopXL"
			style={{ backgroundColor: backgroundColor || "transparent" }}
		>
			<div className="w-full max-w-[1280px] mx-auto">{children}</div>
		</div>
	);
};

export default PageContainer;
