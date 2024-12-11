import advancedSkills from "../../data/advancedSkills.json";
import Image from "next/image";

const KeySkills = () => {
	return (
		<div>
			<h1 className="mb-24 text-center text-mobileh1 md:text-h1 font-medium leading-tight text-white">
				Compétences techniques confirmées
			</h1>
			<ul className="flex flex-wrap justify-center items-center gap-20 md:gap-24 md:justify-start">
				{advancedSkills.map((skill) => {
					return (
						<li key={skill.id} className="flex flex-col items-center">
							<Image src={skill.path} alt="" width={70} height={70} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default KeySkills;
