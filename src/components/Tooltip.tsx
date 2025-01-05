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
				onMouseEnter: handleMouseEnter,
				onMouseLeave: handleMouseLeave,
				onClick: handleClick,
				style: { pointerEvents: disabled ? "none" : "auto" },
			})}
			{visible && (
				<div className="absolute flex max-w-fit px-2 rounded-lg bg-yellow text-darkPrimary left-28 top-0 z-[1000] lg:left-0 lg:top-8">
					{text}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
