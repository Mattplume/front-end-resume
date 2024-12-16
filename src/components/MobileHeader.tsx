import Link from "next/link";
import ImageComponent from "./ImageComponent";

const MobileHeader: React.FC = () => {
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

					<div id="menutoggle" className="flex flex-col justify-center gap-2">
						<div className="bg-white h-0.5 w-5 transition-transform duration-300"></div>
						<div className="bg-white h-0.5 w-5 transition-transform duration-300"></div>
					</div>
				</div>
			</header>
		</>
	);
};

export default MobileHeader;
