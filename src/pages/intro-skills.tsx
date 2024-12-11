import Image from "next/image";
import Link from "next/link";
import { IntroSkillsProps } from "@/types";
import SectionContainer from "@/components/SectionContainer";
import KeySkills from "@/components/Skills/KeySkills";
import SoftSkills from "@/components/Skills/SoftSkills";
import Skills from "@/components/Skills/skills";

const IntroSkills: React.FC<IntroSkillsProps> = ({ imageSrc, altText }) => {
	return (
		<>
			<SectionContainer backgroundColor="#1E1E1E">
				<div className="component-container flex flex-col justify-between lg:flex-row">
					<div className="intro infos-block text-white w-full w-max-[700] lg:mb-0">
						<h1 className="text-mobileh1 md:text-h1 font-medium mb-[6] leading-tight">
							Développeur front-end
						</h1>
						<h1 className="text-mobileh1 md:text-h1 font-medium leading-tight mb-[20]">
							& interfaceur
						</h1>
						<p className="md:text-h4 mb-[10] leading-relaxed max-w-[90%]">
							Depuis 2018, je participe à la conception, au développement et au
							pilotage des projets web pour déployer des applications digitales.
						</p>
						<p className="md:text-h4 leading-relaxed max-w-[90%] mb-[40]">
							Depuis plus de 12 ans, j’exerce dans la relation client et le
							suivi des projets auprès des entreprises du numérique.
						</p>
						<Link
							href="/contact"
							className="text-h4 bg-darkPrimary border border-darkerPrimary border-0.5 hover:border-opacity-[0.25] rounded-[18] px-6 py-3 hover:border-yellow transition duration-500 ease-out"
						>
							<span>Me contacter</span>
						</Link>
					</div>
					<div className="h-[600] w-full w-max-[550] flex justify-end">
						<Image
							src={imageSrc}
							alt={altText}
							width={0}
							height={550}
							className="w-full h-4/6 md:max-h-[550] md:h-full lg:max-w-[550] object-cover rounded-[30]"
						/>
					</div>
				</div>
			</SectionContainer>
			<SectionContainer backgroundColor="#1E1E1E">
				<KeySkills />
			</SectionContainer>
			<SectionContainer backgroundColor="#FFFFFF">
				<SoftSkills />
			</SectionContainer>
			<SectionContainer backgroundColor="#1E1E1E">
				<Skills />
			</SectionContainer>
		</>
	);
};

export default IntroSkills;
