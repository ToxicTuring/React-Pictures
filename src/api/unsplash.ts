import axios from "axios";
import { UnsplashImage } from "./types/UnsplashImage";
import { FormEvent, Dispatch, SetStateAction } from "react";

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "",
  },
});

export async function unsplashSearchPhotosOnSubmit(
  event: FormEvent,
  setData: Dispatch<SetStateAction<UnsplashImage[]>>,
  input: string
) {
  event.preventDefault();
  const response = await unsplash.get(
    "https://api.unsplash.com/search/photos",
    {
      method: "POST",
      params: {
        query: { input },
      },
    }
  );
  setData(response.data.results);
}
