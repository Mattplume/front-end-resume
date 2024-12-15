import Image from "next/image";
import Link from "next/link";
import { IntroSkillsProps } from "@/types";
import SectionContainer from "@/components/SectionContainer";

const IntroSkills: React.FC<IntroSkillsProps> = ({ imageSrc, altText }) => {
	return (
		<>
			<SectionContainer
				backgroundColor="bg-darkerPrimary"
				sectionPadding="pb-0 md:pb-0"
			>
				<div className="component-container flex flex-col justify-between lg:flex-row pt-8 md:pt-0">
					<div className="intro infos-block text-white w-full w-max-[700] mb-10 lg:mb-0">
						<h1 className="text-mobileh1 md:text-h1 font-medium mb-2 leading-tight">
							Développeur front-end
						</h1>
						<h1 className="text-mobileh1 md:text-h1 font-medium leading-tight mb-[20px]">
							& interfaceur
						</h1>
						<p className="md:text-h4 mb-[10px] leading-relaxed max-w-[90%]">
							Depuis 2018, je participe à la conception, au développement et au
							pilotage des projets web pour déployer des applications digitales.
						</p>
						<p className="md:text-h4 leading-relaxed max-w-[90%] mb-[40px]">
							Depuis plus de 12 ans, j’exerce dans la relation client et le
							suivi des projets auprès des entreprises du numérique.
						</p>
						<Link
							href="/contact"
							className="text-h4 bg-darkPrimary border border-darkerPrimary border-0.5 hover:border-opacity-[0.25] rounded-[18px] px-6 py-3 hover:border-yellow transition duration-500 ease-out"
						>
							<span>Me contacter</span>
						</Link>
					</div>
					<div className="h-[400px] w-full w-max-[550px] md:h-[600px] flex justify-end">
						<Image
							src={imageSrc}
							alt={altText}
							width={550}
							height={600}
							quality={100}
							className="w-full h-full md:max-h-[600px] md:h-full lg:max-w-[550px] object-cover rounded-[30px]"
						/>
					</div>
				</div>
			</SectionContainer>
		</>
	);
};

export default IntroSkills;
