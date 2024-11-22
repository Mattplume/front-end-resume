// pages/index.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<h1>Bienvenue sur mon CV</h1>
			<Footer />
		</div>
	);
};

export default Home;
