async function obtenerClima(ciudad) {
            const apiKey = '42b93462440e4ed4ef0a980c924b2144'; // Reemplaza con tu clave API
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

            try {
                const respuesta = await fetch(url);
                const datos = await respuesta.json();

                if (datos.cod === 200) {
                    document.getElementById('ciudad').textContent = ciudad;
                    document.getElementById('temperatura').textContent = datos.main.temp;
                    document.getElementById('condicion').textContent = datos.weather[0].description;
                } else {
                    console.error("Error al obtener el clima:", datos.message);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        }

        obtenerClima("Buenos Aires"); // Cambia "Madrid" por tu ciudad preferida