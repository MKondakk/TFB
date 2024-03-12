import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0];

      setUserData({
        picture: userData.picture.large,
        name: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        phone: userData.phone,
        dob: userData.dob.date,
        address: `${userData.location.city}, ${userData.location.country}, ${userData.location.postcode}`,
      });
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User</h1>
        <button className = 'randomize_button' onClick={fetchRandomUser}>Randomize</button>
        {userData && (
          <div>
          <img src={userData.picture} alt="User" />
          <p>
            <strong>Imię i nazwisko:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Numer telefonu:</strong> {userData.phone}
          </p>
          <p>
            <strong>Data urodzenia:</strong> {new Date(userData.dob).toLocaleDateString()}
          </p>
          <p>
            <strong>Adres:</strong> {userData.address}
          </p>
        </div>
        )}
      </header>
    </div>
  );
}

export { App };
