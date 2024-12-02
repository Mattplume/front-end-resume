import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Header: React.FC = () => {
	return (
		<header className="fixed top-5 left-0 right-0 z-50 w-100 flex justify-center">
			<div className="flex flex-row justify-between items-center w-full max-w-[1280] h-[40]">
				<Link href="/">
					<ImageComponent
						src="/icons/icon_logo.png"
						alt="Logo du site"
						width={40}
						height={40}
					/>
				</Link>
				<nav className="h-[40] max-w-max mx-auto bg-darkPrimary rounded-[16] flex flex-row items-center">
					<ul className="flex flex-row space-x-6 text-sm text-white px-6">
						<li className="flex items-center">
							<Link href="/">Intro / Compétences</Link>
						</li>
						<li className="flex items-center">
							<Link href="/profile">Profil</Link>
						</li>
						<li className="flex items-center">
							<Link href="/work-experience">Parcours</Link>
						</li>
						<li className="flex items-center">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<Link href="/">
					<ImageComponent
						src="/icons/icon_france.png"
						alt="Drapeau français"
						width={50}
						height={40}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
