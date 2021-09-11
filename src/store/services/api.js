const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '77ac17d81cfbf9ceb4c55e83863d0a35'

const api = () => {
    const fetchedWeatherDataByLocation = async (lat, lon) => {
        try{
          const response = await axios(
            `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&&units=metric`,
            {
              method: "GET",
            }
          );
          const weatherAllData = await response.data;
          console.log(weatherAllData);
          return weatherAllData;
        }
        catch(error){
          console.log(error)
        }
      }
      
      const fetchedWeatherDataByCityName = async (city) => {
        try{
          const response = await axios(
            `${BASE_URL}q=${city}&appid=${API_KEY}&&units=metric`,
            {
              method: "GET",
            }
          );
          const weatherAllData = await response.data;
          return weatherAllData;
        }catch(err){
          console.log(err)
        }
        
      };
}
export default api