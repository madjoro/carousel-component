import Dropdown from "./Dropdown";
import MovieCard from "./MovieCard";
import NoShows from "./NoShows";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import {
  setSelectedShows,
  fetchShows,
  setStartIndex,
  Show,
} from "../state/showsSlice";
import { useNavigate } from "react-router-dom";

const MovieCarousel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // destruct state elements
  const { shows, loading, error, genre, selectedShows, startIndex } =
    useSelector((state: RootState) => state.shows);

  //get shows from API
  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

  // navigate to selected genre URL
  useEffect(() => {
    navigate(`/${genre.toLowerCase()}`);
  }, [genre, navigate]);

  // filter list based on selecte d genre
  useEffect(() => {
    const selectRandomShows = (): Show[] => {
      const filteredShows =
        genre !== "All"
          ? shows.filter((show: Show) => show.genres.includes(genre))
          : shows;

      if (filteredShows.length <= 5) {
        return filteredShows;
      }

      const retArr: Show[] = [];

      // randomly select 5 shows from the list
      for (let i = 0; i < 5; i++) {
        const randomShow =
          filteredShows[Math.floor(Math.random() * filteredShows.length)];
        if (!retArr.includes(randomShow)) {
          retArr.push(randomShow);
        }
      }
      return retArr;
    };

    dispatch(setSelectedShows(selectRandomShows()));
  }, [dispatch, genre, shows]);

  // rotating images based on index
  const nextSlide = () => {
    const nextIndex = (startIndex + 1) % selectedShows.length;
    dispatch(setStartIndex(nextIndex));
  };

  const prevSlide = () => {
    const prevIndex =
      (startIndex - 1 + selectedShows.length) % selectedShows.length;
    dispatch(setStartIndex(prevIndex));
  };

  // conditional rendering on failed fetching or missing data
  if (
    error ||
    loading ||
    selectedShows.length === 0 ||
    (selectedShows.length === 1 && selectedShows[0] === undefined)
  ) {
    return (
      <>
        <Dropdown />
        {!error && !loading && <NoShows />}
        {loading && <p className="descriptionr">Loading show data...</p>}
        {error && <p className="description">Error: {error}</p>}
      </>
    );
  }

  // displaying max 3 shows at a time depending on index; clicking buttons moves the index left/right
  const displayedShows = selectedShows
    .slice(startIndex, startIndex + Math.min(selectedShows.length, 3))
    .concat(
      selectedShows.slice(
        0,
        Math.max(
          0,
          Math.min(selectedShows.length, 3) -
            (selectedShows.length - startIndex)
        )
      )
    );

  return (
    <>
      <Dropdown />
      <div className="movies-container">
        <button
          className="left"
          onClick={prevSlide}>{`<`}</button>
        {displayedShows.map((show: Show, index: number) => (
          <MovieCard
            title={show?.name}
            img={show?.image.medium}
            desc={show?.summary}
            nr={index}
            key={index}></MovieCard>
        ))}
        <button
          className="right"
          onClick={nextSlide}>{`>`}</button>
      </div>
    </>
  );
};

export default MovieCarousel;
