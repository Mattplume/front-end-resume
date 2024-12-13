import Image from "next/image";
import softskills from "../../data/softSkills.json";

const SoftSkills = () => {
	return (
		<div>
			<h1 className="text-center mb-32 text-mobileh1 md:text-h1 font-medium leading-tight text-darkPrimary">
				Compétences transverses
			</h1>
			<div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-10">
				{softskills.map((softSkill) => {
					return (
						<div
							key={softSkill.id}
							className="bg-[#f9f9f9] rounded-[24px] relative pb-8 pl-8 pr-8 pt-[120px] w-full md:max-w-[350px] h-[380px] mb-20 md:mb-0"
						>
							<Image
								className="absolute top-[-40px] left-6"
								src={softSkill.path}
								alt={""}
								width={152}
								height={152}
							/>
							<h2 className="text-h3 mb-4 text-darkPrimary">
								{softSkill.name}
							</h2>
							<p className="text-darkPrimary">{softSkill.infos}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SoftSkills;
