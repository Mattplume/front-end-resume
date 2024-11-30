import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Header: React.FC = () => {
	return (
		<header className="fixed top-5 left-0 right-0 z-50 w-100 flex justify-center">
			<div className="flex flex-row justify-between w-full max-w-[1280]">
				<Link href="/">
					{" "}
					<ImageComponent
						src="/icons/icon_logo.png"
						alt="Plage Insta"
						width={40}
						height={40}
					/>
				</Link>
				<nav className="h-[40] max-w-max mx-auto bg-darkPrimary rounded-[16] flex flex-row items-center">
					<ul className="flex flex-row space-x-6 text-sm text-white px-6">
						<li>
							<Link href="/">Accueil / Compétences</Link>
						</li>
						<li>
							<Link href="/profile">Profil</Link>
						</li>
						<li>
							<Link href="/work-experience">Parcours</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<div>Langage</div>
			</div>
		</header>
	);
};

export default Header;
