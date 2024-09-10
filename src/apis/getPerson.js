const urlBase = import.meta.env.VITE_REMOTE;
const ApiKey = import.meta.env.VITE_API_KEY;

const getPerson = async () => {
  const url = `${urlBase}/getRepo`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": ApiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    data.sort((a, b) => b.rankg - a.rankg);
    return await data;
  } catch (error) {
    return { success: false, error: error };
  }
};

export default getPerson;
