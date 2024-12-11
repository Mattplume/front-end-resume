import Image from "next/image";
import skills from "../../data/skills.json";

const Skills = () => {
	return (
		<>
			<h1 className="text-center mb-28 text-mobileh1 md:text-h1 font-medium leading-tight text-white">
				Autres compétences & outils
			</h1>
			<div>
				<ul className="flex flex-row overflow-x-auto w-full animate-marquee gap-8">
					{skills.map((skill) => {
						return (
							<Image
								className="mr-8 md:mr-20"
								key={skill.id}
								src={skill.path}
								alt={""}
								width={70}
								height={70}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Skills;
