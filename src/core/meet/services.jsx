import axios from "axios";
import Key from "../../constants";

export const getWeatherService = async () => {
  const country = "AR";
  const city = "Buenos%20Aires,07";
  const url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${Key.weatherbit.apiKey}&lang=es`;

  return await axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => error);
};
