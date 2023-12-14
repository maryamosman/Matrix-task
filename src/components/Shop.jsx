import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Shop.scss";

const MovieCard = ({ title, price, image }) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "100px",
      borderRadius: "5px",
      height: "1680px",
      width: "1200px",
    }}
  >
    <h3>{title}</h3>
    <p>Price: {price}</p>

    <img
      src={image}
      alt={title}
      style={{ maxWidth: "100%", height: "1300px" }}
    />
  </div>
);

const Shop = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://wezuojqcngjolhgkkxwn.supabase.co/rest/v1/TodoList?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlenVvanFjbmdqb2xoZ2treHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MjA3NTksImV4cCI6MjAxNjA5Njc1OX0.ebjHxY2d6BKFAhCu6YN9arCGzxttFO2WnWhYEfiBDCE",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlenVvanFjbmdqb2xoZ2treHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MjA3NTksImV4cCI6MjAxNjA5Njc1OX0.ebjHxY2d6BKFAhCu6YN9arCGzxttFO2WnWhYEfiBDCE",
          },
        }
      )
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="shop-container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.name}
            price={movie.price}
            image={movie.image}
            className="movie-card"
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
