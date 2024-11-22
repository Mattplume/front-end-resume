// components/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Accueil</Link>
				</li>
				<li>
					<Link href="/skills">Compétences</Link>
				</li>
				<li>
					<Link href="/work-experience">Expérience</Link>
				</li>
				<li>
					<Link href="/profile">Profil</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
