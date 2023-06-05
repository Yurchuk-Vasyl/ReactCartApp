import axios from 'axios';
import { ClothesItem } from 'src/redux/slices/clothes/types';

export const getApiResource = async (url: string): Promise<ClothesItem[]> => {
  try {
    const response = await axios.get(url);
    return response.data as ClothesItem[];
  } catch (error) {
    console.log(error);
  }
  return [];
};
