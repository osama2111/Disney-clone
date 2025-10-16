import React from 'react'
import disneyImage from '../assets/Images/disney.png'
import marvelImage from '../assets/Images/marvel.png'
import nationalImage from '../assets/Images/nationalG.png'
import pixarImage from '../assets/Images/pixar.png'
import starwarsImage from '../assets/Images/starwar.png'
import disneyVideo from '../assets/Videos/disney.mp4'
import marvelVideo from '../assets/Videos/marvel.mp4'
import nationalVideo from '../assets/Videos/national-geographic.mp4'
import pixarVideo from '../assets/Videos/pixar.mp4'
import starwarsVideo from '../assets/Videos/star-wars.mp4'
const productionHouses = [
    { name: 'Disney', image: disneyImage, video: disneyVideo },
    { name: 'Marvel', image: marvelImage, video: marvelVideo },
    { name: 'National Geographic', image: nationalImage, video: nationalVideo },
    { name: 'Pixar', image: pixarImage, video: pixarVideo },
    { name: 'Star Wars', image: starwarsImage, video: starwarsVideo },
];

export const ProductionHouse = () => {
  return (
    <div className='flex justify-center items-center flex-wrap mt-8 mb-8'>
      {productionHouses.map((house) => (
        <div key={house.name} className="group gap-4 relative w-60 cursor-pointer overflow-hidden border-2 border-gray-300 rounded-lg m-4 transition-transform transform hover:scale-105">
          <img src={house.image} alt={house.name} className="w-full h-full object-cover z-[1]" />
            <video className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-[0]" autoPlay loop muted>
              <source src={house.video} type="video/mp4" />
            </video>
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse