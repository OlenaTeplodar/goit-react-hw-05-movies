import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from "react-loader-spinner"; 

import MoviesList from "components/MoviesList/MoviesList";
import SearchMoviesForm from "components/SearchMoviesForm/SearchMoviesForm";

import Error from "components/Error/Error";
import { getMoviesSearch } from "services/moviesApi";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return;
        }

        const fetchSearchMovies = async () => {
            try {
                setLoading(true);
                const data = await getMoviesSearch(query);
                if (data.length === 0) {
                    toast.error('No movies found for this query')
                }
                setMovies(data);
            } catch (error) {
                setError(error.massage);
            } finally {
                setLoading(false);
            }
        };
        fetchSearchMovies();
    }, [query]);

    const searchMovies = ({ query }) => {
        if (query.trim() === '') {
            toast.error('Specify your request, please.');
        }
        setMovies([]);
        setSearchParams({ query });
    };

    return (
        <div>
            <SearchMoviesForm onSubmit={searchMovies} />
            <ToastContainer />
            
            <ThreeCircles
                height="100"
                width="100"
                color="#2642dd"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loading && true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#6478eb"
                innerCircleColor="#424f99"
                middleCircleColor="#031992"
            />
            {error && <Error />}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
};

export default MoviesPage;