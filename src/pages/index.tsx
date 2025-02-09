import React from "react";
import IntroSkills from "../components/Skills/IntroSkills";
import SectionContainer from "@/components/SectionContainer";
import KeySkills from "@/components/Skills/KeySkills";
import SoftSkills from "@/components/Skills/SoftSkills";
import Skills from "@/components/Skills/skills";
import ProjectsList from "@/components/ProjectsList";

const Index: React.FC = () => {
	return (
		<div className="{flex-col items-center justify-center}">
			<IntroSkills
				imageSrc="/images/instabeach_199.jpeg"
				altText="Matthieu Petit à la plage"
			/>
			<SectionContainer backgroundColor="bg-darkerPrimary">
				<KeySkills />
			</SectionContainer>
			<SectionContainer backgroundColor="#FFFFFF">
				<SoftSkills />
			</SectionContainer>
			<SectionContainer
				fullWidth={true}
				className="w-screen"
				backgroundColor="bg-darkerPrimary"
			>
				<Skills />
			</SectionContainer>
			<SectionContainer backgroundColor="bg-paleGrey">
				<ProjectsList />
			</SectionContainer>
		</div>
	);
};

export default Index;
