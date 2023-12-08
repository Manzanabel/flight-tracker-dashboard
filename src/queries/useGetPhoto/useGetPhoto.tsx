import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PhotosReturnType } from "./types";

const BASE_URL = "https://api.pexels.com/v1/search?query=";

const defaultOptions = {
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
  },
};

const getPictures = async (keyword: string) => {
  try {
    const pictures = await fetch(`${BASE_URL}${keyword}`, defaultOptions);
    const parsePictures: PhotosReturnType = await pictures.json();

    return parsePictures;
  } catch (error) {
    console.log("ERROR WHILE FETCHING:", error);
  }
};

export const useGetPhoto = (
  keyword: string
): UseQueryResult<PhotosReturnType> => {
  return useQuery({
    queryKey: ["pictures"],
    queryFn: () => getPictures(keyword),
    refetchInterval: Infinity,
  });
};
