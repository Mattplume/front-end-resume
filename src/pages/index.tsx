import React from "react";
import IntroSkills from "./intro-skills";

const Home: React.FC = () => {
	return (
		<div className="flex-col items-center justify-center">
			<IntroSkills
				imageSrc="/images/instabeachsquarred.jpeg"
				altText="Matthieu Petit à la plage"
			/>
		</div>
	);
};

export default Home;
