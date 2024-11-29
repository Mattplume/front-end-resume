import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="fixed top-5 left-0 right-0 z-50 flex flex-row justify-between">
			<div>Logo</div>
			<nav className="px-4 py-4 h-50 max-w-max mx-auto bg-darkPrimary text-white flex flex-row justify-between rounded-[50]">
				<ul className="flex space-x-6">
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
		</header>
	);
};

export default Header;
