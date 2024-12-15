import Image from "next/image";
import skills from "../../data/skills.json";

const Skills = () => {
	const combinedSkills = [...skills, ...skills]; // Duplication ici

	return (
		<>
			<h1 className="text-center mb-28 text-mobileh1 md:text-h1 font-medium leading-tight text-white">
				Autres compétences & outils
			</h1>
			<div className="marquee-container w-screen relative overflow-hidden">
				<div className="fade-left"></div>
				<ul className="flex flex-row animate-marquee gap-24">
					{combinedSkills.map((skill, index) => (
						<li
							key={`${skill.id}-${index}`}
							className="w-max flex items-center"
						>
							<Image
								className="mr-12 md:mr-28"
								src={skill.path}
								alt={skill.path}
								width={80}
								height={80}
							/>
						</li>
					))}
				</ul>
				<div className="fade-right"></div>
			</div>
		</>
	);
};

export default Skills;
