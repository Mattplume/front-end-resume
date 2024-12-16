import data from "../data/projects.json";
import Image from "next/image";
import { Project } from "@/types";

const ProjectsList = () => {
	const projects: Project[] = data;
	return (
		<>
			<h1 className="mb-24 text-center text-mobileh1 md:text-h1 font-medium leading-tight text-darkPrimary">
				Projets à la une
			</h1>
			<ul className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-10">
				{projects.map((project) => {
					return (
						<div
							key={project.id}
							className="md:h-full md:max-h-560 md:max-w-[550px] hover:shadow-[0px_4px_12px_rgba(20,20,20,0.08)] rounded-3xl transition duration-500 ease-out"
						>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-col"
							>
								<Image
									src={project.imgPath}
									alt=""
									width={600}
									height={330}
									className="md:h-[330px] object-cover rounded-t-3xl"
								/>
								<div className="flex flex-col justify-between bg-white p-6 md:p-8 rounded-b-3xl min-h-[260px] md:h-[270px]">
									<div className="flex-col">
										<h3 className="text-h3 text-darkPrimary mb-4">
											{project.name}
										</h3>
										<p className="text-darkPrimary">{project.description}</p>
									</div>
									<div className="flex flex-wrap">
										{project.technos.split(",").map((techno, index) => (
											<span
												className="text-xs text-darkPrimary opacity-60 border border-darkPrimary border-opacity-60 rounded-3xl py-1 px-2 mr-2"
												key={index}
											>
												{techno.trim()}
											</span>
										))}
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export default ProjectsList;
