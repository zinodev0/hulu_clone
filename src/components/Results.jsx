import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import FlipMove from "react-flip-move";
import { CircularProgress } from "@material-ui/core";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      setIsLoading(false);
      console.log(request);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {isLoading ? (
        <CircularProgress size={90} />
      ) : (
        <FlipMove>
          {movies.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
      )}
    </div>
  );
}

export default Results;
