import advancedSkills from "../../data/advancedSkills.json";
import Image from "next/image";

const KeySkills = () => {
	return (
		<div>
			<h1 className="text-mobileh1 md:text-h1 font-medium mb-[6] leading-tight">
				Mes compétences de niveau confirmé
			</h1>
			<ul className="flex flex-wrap flex-row items-center gap-[70px] md:flex-nowrap">
				{advancedSkills.map((skill) => {
					return (
						<Image
							key={skill.id}
							src={`/icons/icon_${skill.name}.png`}
							alt={""}
							width={60}
							height={60}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default KeySkills;
