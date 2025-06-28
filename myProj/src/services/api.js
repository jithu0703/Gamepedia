const API_KEY = "3bc40075fa644167b6a1636dfef50da7";
const BASE_URL = "https://api.rawg.io/api/";

export const getPopularGames = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}games?page=${page}&page_size=20&key=${API_KEY}&ordering=-added`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular games:", error);
    return [];
  }
};

export const searchGames = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}games?search=${encodeURIComponent(query)}&page=${page}&page_size=20&key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching games:", error);
    return [];
  }
};


export const getGameDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}games/${id}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch game details:", error);
    throw error;
  }
};