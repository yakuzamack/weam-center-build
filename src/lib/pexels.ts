const PEXELS_API_KEY =
  'L816n4DOMckmjALNThVJeTKdCfliA2oSiBiEmbjuXj8i1LOqj8kG6rmg';
const PEXELS_BASE_URL = 'https://api.pexels.com/v1';

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page?: string;
  prev_page?: string;
}

class PexelsAPI {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = PEXELS_API_KEY;
    this.baseUrl = PEXELS_BASE_URL;
  }

  private async makeRequest<T>(endpoint: string): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          Authorization: this.apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error('Pexels API request failed:', error);
      return null;
    }
  }

  async searchPhotos(
    query: string,
    perPage: number = 15,
    page: number = 1
  ): Promise<PexelsResponse | null> {
    const endpoint = `/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;
    return this.makeRequest<PexelsResponse>(endpoint);
  }

  async getCuratedPhotos(
    perPage: number = 15,
    page: number = 1
  ): Promise<PexelsResponse | null> {
    const endpoint = `/curated?per_page=${perPage}&page=${page}`;
    return this.makeRequest<PexelsResponse>(endpoint);
  }

  async getPhoto(id: number): Promise<PexelsPhoto | null> {
    const endpoint = `/photos/${id}`;
    return this.makeRequest<PexelsPhoto>(endpoint);
  }
}

// Pre-defined high-quality medical and wellness themed images for better performance
export const MEDICAL_THEMED_IMAGES = {
  hero: {
    medical:
      'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg', // Modern medical facility
    wellness:
      'https://images.pexels.com/photos/3985203/pexels-photo-3985203.jpeg', // Wellness spa
    healthcare:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg', // Healthcare professional
  },
  services: {
    // General Medicine & Pediatrics
    wellness:
      'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg', // Modern medical facility
    // Dermatology & Skin Care
    dermatology:
      'https://images.pexels.com/photos/4004314/pexels-photo-4004314.jpeg', // Skincare treatment
    facial:
      'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg', // Facial treatment
    // Laser Treatments
    laser: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg', // Modern laser equipment
    // Alternative Therapies
    cupping:
      'https://images.pexels.com/photos/6663453/pexels-photo-6663453.jpeg', // Cupping therapy
    // Physical Therapy & Orthopedics
    physio:
      'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg', // Physiotherapy
    // Dental Care
    dental:
      'https://images.pexels.com/photos/3845804/pexels-photo-3845804.jpeg', // Dental care
  },
  backgrounds: {
    clean: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg', // Clean medical environment
    modern:
      'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg', // Modern clinic
    spa: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg', // Spa environment
  },
};

// Utility functions for image optimization and animation
export function getOptimizedImageUrl(
  url: string,
  size: 'small' | 'medium' | 'large' | 'original' = 'large'
): string {
  // Extract Pexels photo ID from URL and return optimized version
  const photoIdMatch = url.match(/photos\/(\d+)\//);
  if (!photoIdMatch) {
    return url;
  }

  const photoId = photoIdMatch[1];
  const sizeParams = {
    small: '?auto=compress&cs=tinysrgb&w=600',
    medium: '?auto=compress&cs=tinysrgb&w=1200',
    large: '?auto=compress&cs=tinysrgb&w=1920',
    original: '?auto=compress&cs=tinysrgb',
  };

  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg${sizeParams[size]}`;
}

export function generateImageSetForService(serviceSlug: string): string {
  const serviceImages = MEDICAL_THEMED_IMAGES.services;

  // Map service slugs to appropriate Pexels images (matching actual service slugs)
  const serviceImageMap: Record<string, string> = {
    'general-medicine': serviceImages.wellness, // General medical consultation
    pediatrics: serviceImages.wellness, // Pediatric care
    dermatology: serviceImages.dermatology, // Skin conditions and treatments
    orthopedics: serviceImages.physio, // Bone and joint treatments
    'dental-care': serviceImages.dental, // Dental services
    physiotherapy: serviceImages.physio, // Physical therapy and rehabilitation
    'laser-hair-removal': serviceImages.laser, // Laser hair removal
    'cupping-therapy': serviceImages.cupping, // Traditional cupping therapy
    'skin-care': serviceImages.facial, // Facial and skin care treatments
  };

  // Return mapped image or fallback to dermatology
  const imageUrl = serviceImageMap[serviceSlug] || serviceImages.dermatology;
  return getOptimizedImageUrl(imageUrl);
}

export const pexelsAPI = new PexelsAPI();

// CSS-in-JS animations for enhanced image loading
export const imageAnimationStyles = `
  .pexels-image-enter {
    opacity: 0;
    transform: scale(1.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .pexels-image-enter-active {
    opacity: 1;
    transform: scale(1);
  }
  
  .pexels-parallax {
    transform: translateY(var(--scroll-y, 0) * 0.5px);
    transition: transform 0.1s ease-out;
  }
  
  .pexels-hero-bg {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  @media (max-width: 768px) {
    .pexels-hero-bg {
      background-attachment: scroll;
    }
  }
`;
