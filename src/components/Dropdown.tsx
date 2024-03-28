import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../state/showsSlice";
import { RootState } from "../state/store";

//cant reliably get genre list from API hence hardcoded
const genres: string[] = [
  "All",
  "Drama",
  "Comedy",
  "Action",
  "Adventure",
  "Anime",
  "Children",
  "Food",
  "Crime",
  "Family",
  "Fantasy",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science-Fiction",
  "Thriller",
  "War",
  "Western",
  "Adult",
  "Nature",
  "Travel",
  "History",
  "DIY",
  "Medical",
  "Espionage",
  "Sports",
  "Supernatural",
  "Legal",
];

// change genre state on user selecting dropdown item
const Dropdown: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state: RootState) => state.shows.genre);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = event.target.value;
    dispatch(setGenre(newGenre));
  };

  return (
    <div className="dropdown-container">
      <label
        htmlFor="genre"
        className="dropdown-title">
        Select genre:
      </label>
      <select
        className="dropdown"
        onChange={handleChange}
        value={selectedGenre}
        name="genre"
        id="genre">
        {genres.map((genre) => (
          <option
            key={genre}
            value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
