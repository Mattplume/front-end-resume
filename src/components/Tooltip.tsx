import React, { useState } from "react";
import { TooltipProps } from "@/types";

const Tooltip: React.FC<TooltipProps> = ({ children, text, disabled }) => {
	const [visible, setVisible] = useState(false);

	const handleMouseEnter = () => {
		if (!disabled) {
			setVisible(true);
		}
	};

	const handleMouseLeave = () => {
		if (!disabled) {
			setVisible(false);
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		if (disabled) {
			e.preventDefault(); // Empêche l'action par défaut
			setVisible(true); // Affiche le tooltip
		}
	};

	return (
		<div
			style={{ position: "relative", display: "inline-block", width: "100%" }}
		>
			{React.cloneElement(children as React.ReactElement, {
				onMouseEnter: handleMouseEnter, // Affiche le tooltip au survol si pas désactivé
				onMouseLeave: handleMouseLeave, // Masque le tooltip au survol si pas désactivé
				onClick: handleClick, // Gère le clic pour afficher le tooltip si désactivé
				style: { pointerEvents: disabled ? "none" : "auto" }, // Désactive les événements de clic si disabled
			})}
			{visible && (
				<div
					className="max-w-fit px-2 bg-yellow text-darkPrimary absolute top-0"
					style={{
						position: "absolute",
						display: "flex",
						justifyContent: "center",
						left: "50%",
						transform: "translateX(-50%)",
						borderRadius: "6px",
						whiteSpace: "nowrap",
						zIndex: 1000,
					}}
				>
					{text}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
