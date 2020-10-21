/* eslint-disable */
import axios from "axios";
import Key from "../../constants";

//axios.defaults.withCredentials = true;

//const wspibeedesa = "/api";
// const wspibeedesa = "https://wspibeedesa.arg.igrupobbva/SARFEMP";

// LOGIN
export const getWeatherService = async () => {
  debugger;
  const country = "AR";
  const city = "Buenos%20Aires,07";
  const url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${Key.weatherbit.apiKey}&lang=es`;

  return await axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => error);
};
