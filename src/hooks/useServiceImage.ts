import { useEffect, useState } from 'react';

interface ServiceImageHook {
  imageUrl: string;
  isLoading: boolean;
  error: string | null;
}

// Service image mappings with fallback to placeholder
const serviceImageMap: Record<string, string> = {
  'general-medicine': '/images/services/express.jpg',
  pediatrics: '/images/services/express.jpg',
  dermatology: '/images/services/facial-treatments.jpg',
  orthopedics: '/images/services/physio.jpg',
  'dental-care': '/images/services/dental.jpg',
  physiotherapy: '/images/services/physio.jpg',
  'laser-hair-removal': '/images/services/laser-hair-removal.jpg',
  'cupping-therapy': '/images/services/massage.jpg',
  'skin-care': '/images/services/facial-treatments.jpg',
};

export function useServiceImage(serviceSlug: string): ServiceImageHook {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get the mapped image URL or use placeholder
        const mappedUrl =
          serviceImageMap[serviceSlug] || '/images/service-placeholder.jpg';

        // Test if the image exists
        const response = await fetch(mappedUrl, { method: 'HEAD' });

        if (response.ok) {
          setImageUrl(mappedUrl);
        } else {
          // Fallback to placeholder
          setImageUrl('/images/service-placeholder.jpg');
        }
      } catch (err) {
        console.warn(`Failed to load image for service ${serviceSlug}:`, err);
        setError('Failed to load image');
        setImageUrl('/images/service-placeholder.jpg');
      } finally {
        setIsLoading(false);
      }
    };

    if (serviceSlug) {
      loadImage();
    }
  }, [serviceSlug]);

  return { imageUrl, isLoading, error };
}
