import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import Geocode from 'react-geocode';
Geocode.setApiKey('YOUR_API_KEY_HERE');
function Head() {
    const [location, setLocation] = useState('');
  
    function handleLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          Geocode.fromLatLng(
            position.coords.latitude,
            position.coords.longitude
          ).then(
            response => {
              setLocation(response.results[0].formatted_address);
            },
            error => {
              console.error(error);
            }
          );
        },
        error => {
          console.error(error);
        }
      );
    }
  
    return (
      <header className="flex justify-between items-center">
        <button
          className="flex items-center space-x-2 text-lg text-white hover:text-sky-900"
          onClick={handleLocation}
        >
          <FiMapPin />
          {location ? <span>{location}</span> : <span>Use my location</span>}
        </button>
      </header>
    );
  }
  
  export default Head;