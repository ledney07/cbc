import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const apiKey = "yjsWcNTmFB1VdFz4tLSWL2XE9mlyp78m";
const main = "lions";

const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const results = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${main}`
        );
        setGifs(results.data.data);
        // getting data error
      } catch (err) {
        setError(true);
        console.log("");
      }

      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  const GetGiphy = () => {
    if (isLoading) {
      return <h2 className="loading">Loading....</h2>;
    }
    return (
      <div className="gift_wrapper">
        {gifs.map((gif) => (
          <div className="gift_img" key={gif.id}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      const results = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`
      );
      setGifs(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <form className="formable">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="search"
          className="input_item"
        />
        <button onClick={handleSubmit} className="btn">
          Search
        </button>
      </form>
      <GetGiphy />
    </>
  );
};

export default Giphy;
