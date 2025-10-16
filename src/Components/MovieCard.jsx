import React from 'react'
import { TbClockPlus } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";


export const MovieCard = ({ movie }) => {
  return (
    <div className="relative group bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mx-2">

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
        }}
      />


      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4">
      <div className="flex flex-col content-center mb-8 ">
          <button className="   rounded-full m-2 flex flex-col items-center gap-2">
            <p className='text-xl'>play</p>
            <FaPlay className="text-4xl text-blue-500 hover:text-6xl duration-300 ease-in-out  " />
          </button>
          <button className=" text-white  rounded-full flex flex-col items-center gap-2  ">
            <p className='text-xl'>watchlist</p>
            <TbClockPlus className="text-4xl text-blue-500 hover:text-6xl duration-300 ease-in-out" />
          </button>
        </div>
        <h3 className="text-3xl font-bold mb-2 text-center">{movie.title}</h3>
        <p className="text-sm text-center">
          {movie.overview
            ? movie.overview.length > 100
              ? movie.overview.slice(0, 100) + '...'
              : movie.overview
            : 'No overview available.'}
        </p>


        <div className="absolute top-0.5 left-0.5 flex items-center">
          <span className="text-yellow-400 mr-2 text-2xl">⭐</span>
          <span className='text-xl'>{movie.vote_average
            ? Number(movie.vote_average).toFixed(1)
            : 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
