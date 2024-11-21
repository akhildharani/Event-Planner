import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContent } from './ContProvider';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import Slider from 'react-slick';

function CardLayout() {
  const { data, setData } = useContent();
  const [showDate, setShowDate] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    axios.get('http://localhost:3000/api/data/').then((res) => {
      setData(res.data);
      console.log(res.data)
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.org_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-3 bg-blue-950 p-2">
      
      <HeroSection onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {filteredData.map((item, index) => (
          <div className="mb-8 hover:scale-105 transition-transform duration-300" key={item.id}>
            <div className="bg-blue-300 shadow-lg rounded-2xl overflow-hidden">
              {item.img && (
                <div className="bg-blue-100  p-6 rounded shadow-md">
                  <p className="text-xl font-bold"></p>
                  <Slider
                    dots={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                  >
                    {
                    item.img.map((item, index) => (
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
      
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{item.org_name}</h2>
                <p className="text-gray-700 text-base">Location: {item.location}</p>
                <div className="flex items-center">
                  <div className="flex flex-row justify-center items-center flex-nowrap space-x-4">
                    <p className="text-gray-700 text-base">Veg/plate: {item.food_cost.veg}</p>
                    <p className="text-gray-700 text-base">Non-Veg/plate: {item.food_cost.non_veg}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-row justify-center items-center flex-nowrap">
                    <FaStar className="text-yellow-500" />
                    <p className="ml-2 text-lg font-bold text-sky-1000 dark:text-sky">{item.rating}</p>
                  </div>
                </div>
                <Link to={`/
venuedetails/${index}`}>
<p className="text-gray-700 text-base">More details</p>
</Link>
<div>
<button
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
onClick={() => setShowDate([...showDate, item._id])}
>
Check Availability
</button>              {showDate.includes(item.id) && (
                <div>
                  <p className="text-red-900 text-base">Already Booked on: {item.Booked_on}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
);
}
export default CardLayout;








