import { Movie } from "@/components/columns";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type OMDBMovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

type CombinedMovie = Movie & OMDBMovieDetails;

async function getData(id: string): Promise<CombinedMovie> {
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  return data;
}

const Page = async ({ params }: { params: { id: string } }) => {
  const movie = await getData(params.id);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/3 rounded-lg shadow-lg"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 ">{movie.Plot}</p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Language:</strong> {movie.Language}
            </p>
            <p>
              <strong>Duration:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Country:</strong> {movie.Country}
            </p>
            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Ratings</h2>
            {movie.Ratings.map((rating, index) => (
              <p key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <p>
              <strong>IMDb Rating:</strong> {movie.imdbRating}
            </p>
            <p>
              <strong>Metascore:</strong> {movie.Metascore}
            </p>
            <p>
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
