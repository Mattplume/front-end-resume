import { JobDetailProps } from "@/types";

const JobDetail: React.FC<JobDetailProps> = ({ title, content, showTitle }) => {
	const contentArray = content.split(";").map((item) => item.trim());

	return (
		<div className="mb-4">
			{showTitle && content !== "" && (
				<span className="font-semibold text-[11px] text-gray-400 uppercase">
					{title}
				</span>
			)}
			{contentArray.map((Arrayitem, index) => {
				return (
					<p key={index} className="detail-label text-darkPrimary font-light">
						{Arrayitem}
					</p>
				);
			})}
		</div>
	);
};

export default JobDetail;
