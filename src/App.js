import { useEffect, useState } from "react";

function App() {
  const[weatherData,setWeatherData] = useState({})

  useEffect( () => {
    const getData = async() =>{
      
    }
  })

  console.log(weatherData)

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;