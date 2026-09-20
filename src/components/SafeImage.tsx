"use client";

import { useState } from "react";

/**
 * SafeImage — img element with automatic fallback on error.
 * Handles: broken src, network failures, 404s, CORS issues.
 */
export default function SafeImage({
  src,
  fallbackSrc = "/fallback-avatar.png",
  alt,
  className,
  ...props
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  [key: string]: unknown;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
