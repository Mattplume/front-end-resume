// components/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 left-0 right-0 h-12 bg-black text-white flex items-center justify-center">
			<nav>
				<ul className="flex space-x-4">
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
						<Link href="/profile">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
