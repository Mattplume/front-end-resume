import React from "react";
import IntroSkills from "./intro-skills";

const Home: React.FC = () => {
	return (
		<div className="flex-col items-center justify-center">
			<IntroSkills
				imageSrc="/images/instabeachpano.jpg"
				altText="Un homme à la plage"
			/>
		</div>
	);
};

export default Home;
