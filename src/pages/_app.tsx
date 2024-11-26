import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component }) => {
	return (
		<div>
			<Header />
			<main className="pt-12">
				<Component />
			</main>
			<Footer />
		</div>
	);
};

export default MyApp;
