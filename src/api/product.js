import { API_URL } from "../utils/constants";

export async function getProducts(limit) {
  try {
    const response = await fetch(
       // `${API_URL}/api/products?_sort=createdAt:desc&_limit=${limit}populate=image,category`
      `${API_URL}/api/products?populate=image,category&filters?pagination[start]=0&pagination[limit]=${limit}`
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
} 
export async function getProductsCategory(category) {
  try {
    const response = await fetch(
      // `${API_URL}/api/products?fields=name&populate=image,category&filters[category][slug][$eq]=${category}`
      `${API_URL}/api/products?populate=image,category&filters[category][slug][$eq]=${category}`
    );
    const result = await response.json();
    return result;
    // console.log(result);
  } catch (error) {
    console.log(error);
    return null;
  }
}

