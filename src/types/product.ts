export interface Price {
  current: number;
  original: number;
  discount: string;
  currencyCode: string;
}

export interface Rating {
  score: number;
  totalReviews: number;
}

export interface Summery {
  averageRating: number;
  totalReviews: number;
  distribution: {
    [key: string]: number;
  };
}

export interface Image {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  name: string;
  colorCode: string;
  price: Price;
}

export interface Dimensions {
  width: number;
  depth: number;
  height: number;
  seatWidth: number;
  seatDepth: number;
  seatHeight: number;
}

export interface Review {
  id: string;
  author: {
    name: string;
  };
  rating: number;
  content: string;
  date: string;
}
export interface FrequentlyBoughtItem {
  name: string;
  price: number;
  originalPrice: number;
  discount?: string;
  rating: {
    score: number;
    totalReviews: number;
  };
  images: {
    primary: string;
    thumbnail: string;
  };
}

export interface Product {
  name: string;
  price: Price;
  rating: Rating;
  description: {
    short: string;
    long: string;
    image: Image;
  };
  images: {
    primary: string;
    gallery: Image[];
  };
  variants: ProductVariant[];
  dimensions: Dimensions;
  features: {
    style: string;
    support: string;
  };
  tags: string[];
  reviews: {
    summary: {
      averageRating: number;
      totalReviews: number;
      distribution: {
        [key: string]: number;
      };
    };
    items: Review[];
    actions: {
      canAddReview: boolean;
      canSeeAllReviews: boolean;
    };
  };
  frequentlyBoughtWith: FrequentlyBoughtItem[];
}

export interface ProductResponse {
  message: string;
  product: Product;
}

export interface Description {
  short: string;
  long: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ProductDescriptionProps {
  description: string;
}

export interface ProductVariant {
  name: string;
  colorCode: string;
  price: {
    current: number;
    original: number;
    discount: string;
    currencyCode: string;
  };
}

export interface SizeInfoProps { 
    dimensions: Dimensions; 
} 

export interface AddToCartButtonProps {
  onPress: () => Promise<void>;
  onWishlistPress: () => void;
  isWishlisted?: boolean;
}
export interface ColorSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}
export interface ImageGalleryProps {
  images: {url:string} [];
}
export interface ProductInfoProps {
  name: string;
  price: Price;
  rating: Rating;
  description: Description;
}

export interface ReviewsProps {
  rating: Rating
  summery: Summery
  reviews: Review[]
}

