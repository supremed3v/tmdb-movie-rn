import { View, Text, ScrollView } from "react-native";
import React from "react";
import GenreSection from "../components/GenreSection";
import { TMDB_API } from "@env";
import axios from "axios";
import TopRated from "../components/TopRated";
import Popular from "../components/PopularMovies";
import TrendingNow from "../components/TrendingNow";
import LatestSeasons from "../components/LatestSeasons";

export default function SeasonsScreen() {
  const [genre, setGenre] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState(28);

  const handleGenre = (id) => {
    setSelectedGenre(id);
  };

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API}&language=en-US`
      )
      .then((response) => {
        setGenre(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView nestedScrollEnabled className="bg-slate-800">
      <View className="py-10">
        <LatestSeasons genre={genre} />
      </View>
    </ScrollView>
  );
}
