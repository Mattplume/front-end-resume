import React, { useState } from "react";
import { TooltipProps } from "@/types";

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			style={{ position: "relative", display: "inline-block" }}
		>
			{children} {/* Assurez-vous que les enfants sont affichés ici */}
			{visible && (
				<div
					className="bg-yellow text-darkPrimary"
					style={{
						position: "absolute",
						top: "150%", // Positionne le tooltip au-dessus de l'élément
						left: "50%",
						transform: "translateX(-50%)",
						padding: "5px",
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
