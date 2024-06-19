'use client'

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface RoundedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    [key: string]: any;
}

export function RoundedImage({ src, alt, className, ...props }: RoundedImageProps) {
    return (
        <LazyLoadImage
            effect="blur"
            alt={alt}
            className={`rounded-md w-full h-full ${className}`}
            src={src}
            {...props}
        />
    );
}
