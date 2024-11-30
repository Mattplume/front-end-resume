import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProps } from "next/app";

const MyApp = ({ Component }: AppProps) => {
	return (
		<main className="main-container flex-col justify-center align-middle w-100">
			<Header />
			<Component className="w-full" />
			<Footer />
		</main>
	);
};

export default MyApp;
