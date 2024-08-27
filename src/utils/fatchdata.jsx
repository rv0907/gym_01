export const exerciseoptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "4344b82dadmshc3dc6c1282a89c6p1a415bjsna5aa7f2e4a38",
  },
};

export const fetchdata = async (url, options, retries = 3, backoff = 3000) => {
  try {
    const response = await fetch(url, options);
    if (response.status === 429) {
      if (retries > 0) {
        const retryAfter = response.headers.get("Retry-After");
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : backoff;
        console.warn(`Rate limited. Retrying in ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        return fetchdata(url, options, retries - 1, backoff * 2);
      } else {
        throw new Error("Max retries reached");
      }
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
    throw error;
  }
};

export const youtubeOptions = async () => {
  return <></>;
};
