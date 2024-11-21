import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

function OrgProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { curruser } = useAuth();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/data')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter the data based on the org_name in curruser
  const filteredData = data?.filter(
    (organizer) => organizer.org_name.toLowerCase().split(' ').join('').includes(curruser.email.split('.')[0])
  );

  return (
    curruser?<main className='m-0'>
      <Header />
      <div className="min-h-screen container mx-auto px-4 py-8 bg-blue-950">
      <div className="flex flex-col space-y-4">
        {filteredData && filteredData.map((organizer) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" key={organizer._id}>
            <div className="px-2 py-2">
             
              <div className="mt-2">
                {organizer.interestedUsers.map((user) => (
                  <div key={user.username} className='bg-white h-20 '>
                    <h2 className="text-black text-2xl">Name Of the Interested User: {user.username}</h2>
                    <p className="text-black text-2xl">Mobile No: {user.mobileno}</p>
                  </div>
                  
                ))} 
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </main>:<Navigate to='/'/>
  );
}

export default OrgProfile;
