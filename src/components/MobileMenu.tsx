import Link from "next/link";
import ImageComponent from "./ImageComponent";

const MobileMenu: React.FC = () => {
	return (
		<header className="">
			<div className="">
				<nav>
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

export default MobileMenu;
