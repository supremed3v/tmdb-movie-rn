import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { TMDB_API } from "@env";
import axios from "axios";
import Header from "../components/Header";
export default function DetailsScreen({ route }) {
  const { data } = route.params;
  const [genre, setGenre] = React.useState([]);

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
    <>
      <Header title={data.title} />
      <ScrollView className="bg-slate-800 flex-1">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
          }}
          style={{ width: "100%", height: 500 }}
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-white font-700 text-2xl pb-2">
            {data.title}
          </Text>
          <View className="flex-row items-center">
            {data.genre_ids.map((genreId) => {
              const genreName = genre.find((g) => g.id === genreId);
              return genreName ? (
                <Text
                  className="text-white bg-indigo-600 p-1 ml-1 rounded"
                  key={genreName.id}
                >
                  {genreName.name}
                </Text>
              ) : null;
            })}
            <Text className="bg-yellow-400 p-2 ml-1 rounded-xl font-600">
              IMDB {data.vote_average}
            </Text>
          </View>
          <Text className="text-white font-300 text-base mt-4">
            Released On: {data.release_date}
          </Text>
          <Text className="text-white font-700 text-xl mt-4">Prologue</Text>
          <Text className="text-gray-300 font-500 text-base mt-4">
            {data.overview}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
