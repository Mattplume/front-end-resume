import { useState } from "react";
import Link from "next/link";
import ImageComponent from "./ImageComponent";

const MobileHeader: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="fixed left-0 right-0 z-50 w-100 flex flex-col justify-center p-[20px] bg-darkPrimary border-b-2 border-b-yellow border-opacity-[0.25]">
				<div className="flex flex-row justify-between items-center">
					<Link href="/">
						<ImageComponent
							src="/assets/icon_logo.png"
							alt="Logo du site"
							width={40}
							height={40}
						/>
					</Link>

					<div
						id="menutoggle"
						className="flex flex-col justify-center gap-2"
						onClick={toggleMenu}
					>
						<div
							className={`bg-white h-0.5 w-5 transition-transform duration-300 ${
								isMenuOpen ? "rotate-45 translate-y-1" : ""
							}`}
						></div>
						<div
							className={`bg-white h-0.5 w-5 transition-transform duration-300 ${
								isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						></div>
					</div>
				</div>
				{isMenuOpen && (
					<nav className="pt-[40] w-full bg-darkPrimary transition-transform duration-300 transform translate-y-0">
						<ul className="flex flex-col items-center py-4">
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/"
									onClick={() => setIsMenuOpen(false)}
								>
									<span className="text-white">Home</span>
									<ImageComponent
										src="/assets/icon_chevron.png"
										alt="Logo du site"
										width={20}
										height={20}
									/>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/profile"
									onClick={() => setIsMenuOpen(false)}
								>
									{" "}
									<span className="text-white">Profil</span>
									<ImageComponent
										src="/assets/icon_chevron.png"
										alt="Logo du site"
										width={20}
										height={20}
									/>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/work-experience"
									onClick={() => setIsMenuOpen(false)}
								>
									{" "}
									<span className="text-white">Parcours</span>
									<ImageComponent
										src="/assets/icon_chevron.png"
										alt="Logo du site"
										width={20}
										height={20}
									/>
								</Link>
							</li>
							<li className="w-full mt-3 mb-3">
								<Link
									className="flex flex-row justify-between items-center"
									href="/contact"
									onClick={() => setIsMenuOpen(false)}
								>
									{" "}
									<span className="text-white">Contact</span>
									<ImageComponent
										src="/assets/icon_chevron.png"
										alt="Logo du site"
										width={20}
										height={20}
									/>
								</Link>
							</li>
						</ul>
					</nav>
				)}
			</header>
		</>
	);
};

export default MobileHeader;
