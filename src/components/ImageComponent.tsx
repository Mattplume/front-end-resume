// components/MyImageComponent.tsx
import Image from "next/image";
import { ImageComponentProps } from "@/types"; // Ajustez le chemin selon votre structure de fichiers

const ImageComponent: React.FC<ImageComponentProps> = ({
	src,
	alt,
	width,
	height,
	className,
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
		/>
	);
};

export default ImageComponent;
