import "../styles/globals.css";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import { AppProps } from "next/app";
import { useWindowSize } from "@/hooks";

const MyApp = ({ Component }: AppProps) => {
	const { currentWidth } = useWindowSize();
	return (
		<main className="main-container flex-col justify-center align-middle w-100">
			{currentWidth && currentWidth >= 769 ? <Header /> : <MobileHeader />}
			<Component id="page-main-component" className="w-full" />
			<Footer />
		</main>
	);
};

export default MyApp;
