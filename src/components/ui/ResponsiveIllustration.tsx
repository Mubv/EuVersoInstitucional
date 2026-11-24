import { SITE_CONFIG } from "@/config/site";

interface ResponsiveIllustrationProps {
  variant: "hero" | "pulse" | "automacoes";
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function ResponsiveIllustration({
  variant,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 52vw, 620px",
}: ResponsiveIllustrationProps) {
  const asset = SITE_CONFIG.illustrations[variant];

  return (
    <picture className="block w-full">
      <source
        type="image/webp"
        srcSet={`${asset.webp640} 640w, ${asset.webp} ${asset.width}w`}
        sizes={sizes}
      />
      <img
        src={asset.png}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`block h-auto w-full object-contain ${className}`}
      />
    </picture>
  );
}
