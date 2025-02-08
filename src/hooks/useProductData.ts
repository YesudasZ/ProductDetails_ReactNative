import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { fetchProductDetails } from '../utils/api';

export const useProductData = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductDetails();
        setProduct(data.product);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  return { product, loading, error };
};