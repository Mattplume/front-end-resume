import Image from "next/image";
import { IntroSkillsProps } from "@/types";
import PageContainer from "@/components/PageContainer";

const IntroSkills: React.FC<IntroSkillsProps> = ({ imageSrc, altText }) => {
	return (
		<PageContainer backgroundColor="#1E1E1E" className="page-container">
			<div className="component-container flex justify-between">
				<div className="intro infos-block text-white w-full w-max-[700]">
					<h1 className="text-h1 font-primaryFont">
						Développeur front-end & interfaceur
					</h1>
					<p>
						Depuis 2018, je participe à la conception, au développement et au
						pilotage des projets web pour déployer des applications digitales.
					</p>
					<p>
						Depuis 2018, je participe à la conception, au développement et au
						pilotage des projets web pour déployer des applications digitales.
					</p>
				</div>
				<div className="h-[600] w-full w-max-[550]">
					<Image
						src={imageSrc}
						alt={altText}
						width={0}
						height={600}
						className="w-full max-w-[550] h-full max-h-[600] object-cover rounded-[30]"
					/>
				</div>
			</div>
		</PageContainer>
	);
};

export default IntroSkills;
