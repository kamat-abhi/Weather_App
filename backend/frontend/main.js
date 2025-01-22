

const name = prompt('Enter your name');


async function getWeather() {

    const location = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('result');
    try {
        const response = await axios.get('http://localhost:3000/api/v1/getweather', {
            params: {
                username: name,
                place: location
            }
        });
        console.log(response);
        resultDiv.innerHTML = `<h2>Temperature in ${location}: ${response.data.message} &deg;C</h2>`;
    } catch (error) {
        console.log('Error fetching data:', error);
        resultDiv.innerHTML = `<h2>Error</h2>`;

    }
}