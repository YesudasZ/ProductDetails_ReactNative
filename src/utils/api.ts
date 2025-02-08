import { ProductResponse } from '../types/product';

 const API_URL= "https://s8hemrsz5o.to.intercept.rest/productDetails"

export const fetchProductDetails = async (): Promise<ProductResponse> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};