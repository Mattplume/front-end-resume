import Link from "next/link";
import ImageComponent from "./ImageComponent";
import Tooltip from "./Tooltip";

const Header: React.FC = () => {
	return (
		<header className="fixed top-5 left-0 right-0 z-50 w-100 flex justify-center">
			<div className="flex flex-row justify-between items-center w-full max-w-[1280px] h-10 md:w-[90%]">
				<Link href="/">
					<ImageComponent
						src="/assets/icon_logo.png"
						alt="Logo du site"
						width={40}
						height={40}
					/>
				</Link>
				<nav className="h-full max-w-max mx-auto bg-darkPrimary rounded-xl flex flex-row items-center">
					<ul className="flex flex-row space-x-6 text-sm text-white px-6">
						<li className="flex items-center hover:text-yellow transition duration-500 ease-out">
							<Link href="/">Intro / Compétences</Link>
						</li>
						<li className="flex items-center ">
							<Tooltip text="Page en construction">
								<Link
									className="pointer-events-none text-white opacity-50"
									href="/profile"
								>
									Profil
								</Link>
							</Tooltip>
						</li>
						<li className="flex items-center ">
							<Tooltip text="Page en construction">
								<Link
									className="pointer-events-none text-white opacity-50"
									href="/profile"
								>
									Parcours
								</Link>
							</Tooltip>
						</li>
						<li className="flex items-center ">
							<Tooltip text="Page en construction">
								<Link
									className="pointer-events-none text-white opacity-50"
									href="/profile"
								>
									Contact
								</Link>
							</Tooltip>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
