import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Services/GlobalApi';

export const HeroSection = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setLoading(true);
                const response = await getTrendingMovies();
                setTrendingMovies(response.data.results.slice(0, 5));
                setError(null);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
                setError('Failed to fetch movies');
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    useEffect(() => {
        if (trendingMovies.length > 1) {
            const interval = setInterval(() => {
                setCurrentMovieIndex((prevIndex) =>
                    (prevIndex + 1) % trendingMovies.length
                );
            }, 8000);

            return () => clearInterval(interval);
        }
    }, [trendingMovies.length]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (trendingMovies.length <= 1) return;

            if (event.key === 'ArrowLeft') {
                setCurrentMovieIndex((prev) =>
                    prev === 0 ? trendingMovies.length - 1 : prev - 1
                );
            } else if (event.key === 'ArrowRight') {
                setCurrentMovieIndex((prev) =>
                    (prev + 1) % trendingMovies.length
                );
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [trendingMovies.length]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-900">
                <div className="text-4xl text-white">Loading featured movies...</div>
            </div>
        );
    }

    if (error || trendingMovies.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-900">
                <div className="text-4xl text-red-400">{error || 'No movies available'}</div>
            </div>
        );
    }

    const currentMovie = trendingMovies[currentMovieIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto px-8 text-white">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight min-h-[120px] flex items-center">
                        {currentMovie.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed min-h-[120px] flex items-center">
                        {currentMovie.overview?.length > 200
                            ? currentMovie.overview.substring(0, 200) + '...'
                            : currentMovie.overview
                        }
                    </p>
                    <div className="flex items-center space-x-8 mb-8 min-h-[40px]">
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400 text-2xl">⭐</span>
                            <span className="text-2xl font-semibold">
                                {currentMovie.vote_average?.toFixed(1)}
                            </span>
                        </div>
                        <div className="text-2xl">
                            {new Date(currentMovie.release_date).getFullYear()}
                        </div>
                        <div className="text-2xl">
                            {currentMovie.adult ? '18+' : 'PG'}
                        </div>
                    </div>
                    <div className="flex space-x-6 min-h-[60px] items-center">
                        <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
                            <span>▶</span>
                            <span>Play</span>
                        </button>
                        <button className="bg-gray-600/70 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-600/90 transition-colors duration-300 flex items-center space-x-2">
                            <span>ℹ</span>
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {trendingMovies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentMovieIndex(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${index === currentMovieIndex
                            ? 'bg-white scale-125 shadow-lg'
                            : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                            }`}
                        style={{ zIndex: 20 }}
                    />
                ))}
            </div>
            <button
                onClick={() => setCurrentMovieIndex((prev) =>
                    prev === 0 ? trendingMovies.length - 1 : prev - 1
                )}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white text-6xl transition-all duration-300"
                style={{ zIndex: 20 }}
            >
                ‹
            </button>
            <button
                onClick={() => setCurrentMovieIndex((prev) =>
                    (prev + 1) % trendingMovies.length
                )}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white text-6xl transition-all duration-300"
                style={{ zIndex: 20 }}
            >
                ›
            </button>
        </div>
    );
};

export default HeroSection;
