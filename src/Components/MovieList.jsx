import React, { useEffect, useState } from 'react'
import { genres } from '../assets/Constants/Genera'
import MovieCard from './MovieCard'
import { getMoviesByGenre } from '../Services/GlobalApi'
import Slider from 'react-slick'

export const MovieList = () => {
  const [genreMovies, setGenreMovies] = useState({})
  const [loading, setLoading] = useState(true)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        setLoading(true)
        const moviesData = {}

        for (const genre of genres) {
          try {
            const response = await getMoviesByGenre(genre.id)
            moviesData[genre.id] = response.data.results.slice(0, 10)
          } catch (error) {
            moviesData[genre.id] = []
          }
        }

        setGenreMovies(moviesData)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }

    fetchMoviesByGenre()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-2xl text-gray-400">Loading movies...</div>
      </div>
    )
  }

  return (
    <div className="w-full px-6 py-8">
      {genres.map((genre) => (
        <div key={genre.id} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">
            {genre.name} Movies
          </h2>
          {genreMovies[genre.id] && genreMovies[genre.id].length > 0 ? (
            <Slider {...sliderSettings}>
              {genreMovies[genre.id].map((movie) => (
                <div key={movie.id} className="px-2">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="text-gray-400 text-center py-8">
              No movies found for {genre.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default MovieList
