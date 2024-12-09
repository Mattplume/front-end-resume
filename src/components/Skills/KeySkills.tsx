import advancedSkills from "../../data/advancedSkills.json";
import Image from "next/image";

const KeySkills = () => {
	return (
		<div>
			<h1 className="mb-[60] text-mobileh1 md:text-h1 font-medium leading-tight text-white">
				Mes compétences de niveau confirmé
			</h1>
			<ul className="flex flex-wrap justify-start items-center gap-12 md:gap-16">
				{advancedSkills.map((skill) => {
					return (
						<li key={skill.id} className="flex flex-col items-center">
							<Image src={skill.path} alt="" width={50} height={50} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default KeySkills;
