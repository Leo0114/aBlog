import { useState, useEffect } from "react";
import axios from "axios";
import { type Character } from "@constants/constants";

const BASE_URL = "https://dragonball-api.com/api/characters";
const LIMIT = 8;

export const useDBZ = (page: number = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [links, setLinks] = useState<{ next?: string; previous?: string }>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}?page=${page}&limit=${LIMIT}`
        );
        setCharacters(response.data.items as Character[]);
        setLinks({
          next: response.data.links.next,
          previous: response.data.links.previous,
        });
        setLoading(false);
      } catch (err) {
        setError("Error al traer los datos");
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  return { characters, loading, error, links };
};
