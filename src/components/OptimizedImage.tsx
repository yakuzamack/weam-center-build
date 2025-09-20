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
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      className={className}
      unoptimized
    />
  );
}