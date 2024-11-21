import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { useAuth } from "./AuthProvider";
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { useContent } from './ContProvider';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VenueInfo = () => {
  const [venueInfo, setVenueInfo] = useState();
  const [loading,setLoading]=useState(false);
  const {data}=useContent();
  const {id}=useParams();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const {curruser}=useAuth();

  const handleInterestedClick = async (e) => {
    e.preventDefault()
    // Create an object with the user's details
    const userDetails = {
     username: name,
      mobileno:mobile,
      orgname:venueInfo.org_name
    };
    try {
      // Send the user's details to the server
      const response = await axios.post('http://localhost:3000/api/interested', userDetails);
      console.log(response.data); // Assuming the server responds with some data
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setLoading(true);
    setVenueInfo(data[id]);
    console.log(data[id]);
    setLoading(false);
  }, []);


  return (
 
    <>
     {curruser?<>
       <Header />
      {!loading ? (
        venueInfo && (
          <div className="container mx-auto px-4 py-8 bg-blue-950">
           <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
  <span className="text-sky-300">{venueInfo.org_name}</span> 
</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
  {venueInfo?.img && (
    <div className="bg-sky-200 p-6 rounded-lg shadow-md">
      <p className="text-xl font-bold">Album</p>
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
      
        {venueInfo?.img.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt="Convention Hall"
              className="w-full h-auto rounded-md"
            />
          </div>
        ))}
      </Slider>
     
    </div>
  )}
</div>


              <div className="flex flex-col space-y-4">
                <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                  <p className="text-xl font-bold">Rent: ₹{venueInfo?.rent}</p>
                </div>

                {venueInfo.venueInfo && (
                  <>
                     
                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Payment</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li className="text-lg font-bold"> Advance: {venueInfo.venueInfo?.paymentAndBooking?.advance}</li>
                        <li className="text-lg font-bold"> Payment After Event: {venueInfo.venueInfo?.paymentAndBooking?.paymentAfterEvent}</li>
                      </ul>
                    </div>
            

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Air Conditioning</p>
                      <p className="text-lg font-bold">{venueInfo.venueInfo?.airConditioning}</p>
                    </div>

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Cuisines Allowed</p>
                      <p className="text-lg font-bold">{venueInfo.venueInfo?.cuisinesAllowed}</p>
                    </div>

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">DJ Policy</p>
                      <p className="text-lg font-bold">{venueInfo.venueInfo?.djPolicy}</p>
                    </div>

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Alcohol Policy</p>
                      <p className="text-lg font-bold">{venueInfo.venueInfo?.alcoholPolicy}</p>
                    </div>

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Outside Decoration</p>
                      <p className="text-lg font-bold">{venueInfo.venueInfo?.outsideDecorationAllowed}</p>
                    </div>

                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                      <p className="text-xl font-bold">Rooms Available</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li className="text-lg font-bold"> Guest Rooms: {venueInfo.venueInfo.roomsAvailable?.guestRooms}</li>
                        <li className="text-lg font-bold"> AC Rooms: {venueInfo.venueInfo.roomsAvailable?.acRooms}</li>
                      </ul>
                    </div>
                    <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                    <p className="text-xl font-bold">Parking Space</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li className="text-lg font-bold"> Bike Parking: {venueInfo?.venueInfo?.parkingSpace?.bikeParking}</li>
                      <li className="text-lg font-bold"> Car Parking: {venueInfo?.venueInfo?.parkingSpace?.carParking}</li>
                      <li className="text-lg font-bold"> Valet Parking: {venueInfo?.venueInfo?.parkingSpace?.valetParkingAvailable}</li>
                    </ul>
                  </div>
                  <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
                    <p className="text-xl font-bold">Contact</p>
                    <ul className="list-disc ml-6 space-y-1 font-bold">
                      <li>Phone: {venueInfo.contact}</li>
                    </ul>
                  </div>

                  <div className="bg-sky-200 p-6 rounded-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300 hover:bg-lime-200">
      <p className="text-xl font-bold">Interested in {venueInfo.org_name}?</p>
      <form>
        <div className="mt-4">
          <label className="text-lg font-bold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg font-bold">Mobile Number:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
          />
        </div>
        <button
          onClick={(e)=>handleInterestedClick(e)}
          className="bg-teal-200 hover:bg-green-400 rounded-md px-4 py-2 mt-4 "
        >
          I'm Interested
        </button>
      </form>
      <p className="text-lg font-bold mt-2">(Click here to show your interest)</p>
      <p className="text-lg font-bold mt-2">{venueInfo.org_name} will contact you further.</p>
    </div>
                 </>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        <h1>Loading...</h1>
    )}
    <Footer />
    </>:<Navigate to='/'/>
      }
    </>
   
  ); 
};

export default VenueInfo;

