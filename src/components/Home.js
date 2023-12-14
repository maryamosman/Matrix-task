import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
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
    <p>Price: ${price}</p>

    <img
      src={image}
      alt={title}
      style={{ maxWidth: "100%", height: "1300px" }}
    />
  </div>
);
function Home() {
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
    <div className="home">
      <Tabs defaultKey="home" id="uncontrolled-tab-example" className="mb-2">
        <Tab eventKey="home" title="Bu gün">
          <div className="shop-container">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                margin: "50px auto",
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
        </Tab>
        <Tab eventKey="profile" title="Cədvəl">
          <div>
            <table>
              <tr>
                <th>Film</th>
                <th>Seanslar</th>
                <th>Kinoteatr</th>
                <th>Zal</th>
                <th>Qiymet</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
            </table>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Home;
