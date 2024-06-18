export const exerciseoptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "826fa0ce51msh93c9a80e983a77bp1aa334jsn0421dc78a079",
  },
};

export const fetchdata = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
