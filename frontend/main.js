
async function getWeather() {
    const name = document.getElementById('nameInput').value;
    const location = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('result');
    try {
        const response = await axios.get('http://192.168.31.52:3000/api/v1/getweather', {
            params: {
                username: name,
                place: location
            }
        });
        console.log(response);
        resultDiv.innerHTML = `<h2>Temperature in ${location}: ${response.data.data} &deg;C</h2>`;
    } catch (error) {
        console.log('Error fetching data:', error);
        resultDiv.innerHTML = "<h2>Error: Server in not running</h2>" ;

    }
}