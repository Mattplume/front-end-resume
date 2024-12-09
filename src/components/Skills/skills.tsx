import Image from "next/image";

const Skills = () => {
	return (
		<div>
			<h1 className="mb-[60] text-mobileh1 md:text-h1 font-medium leading-tight text-white">
				Mes autres compétences
			</h1>
			<ul className="flex flex-wrap justify-start items-center gap-12 md:gap-16">
				{/* {advancedSkills.map((skill) => {
					return (
						<Image
							className="mr-8 md:mr-20"
							key={skill.id}
							src={`/icons/icon_${skill.name}.png`}
							alt={""}
							width={60}
							height={60}
						/>
					);
				})} */}
			</ul>
		</div>
	);
};

export default Skills;
