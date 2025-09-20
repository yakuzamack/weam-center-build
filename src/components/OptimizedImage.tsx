import Image from 'next/image';

export function LogoImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className={`${className} dark:brightness-0 dark:invert transition-all duration-200`}
        unoptimized
      />
    </div>
  );
}
