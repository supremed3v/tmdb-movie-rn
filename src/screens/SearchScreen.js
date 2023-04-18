import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { TMDB_API } from "@env";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { TextInput, ImageBackground } from "react-native";
import { ActivityIndicator } from "react-native";

export default function SearchScreen({ navigation, route }) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
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

  const { search } = route.params;

  const handleSearch = () => {
    setLoading(true);

    const searchUrl =
      search === "movies"
        ? `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API}&language=en-US&query=${query}&page=1&include_adult=false`
        : `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API}&language=en-US&query=${query}&page=1&include_adult=false`;
    axios
      .get(searchUrl)
      .then((response) => {
        setResults(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  const renderItem = ({ item }) => (
    <Pressable
      className="rounded-xl p-2"
      onPress={() => navigation.navigate("Details", { data: item })}
    >
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
        }}
        style={{ width: 300, height: 400 }}
        imageStyle={{ borderRadius: 20 }}
        resizeMode="cover"
      >
        <View
          className="flex-1 justify-end p-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: 20,
          }}
        >
          <View className="flex-row justify-between items-center">
            <Text
              className="text-white font-700 text-xl overflow-hidden overflow-ellipsis"
              style={{ maxWidth: "80%" }}
            >
              {item.title}
            </Text>

            <Text className="bg-yellow-400 p-2 rounded-xl font-600">
              IMDB {item.vote_average}
            </Text>
          </View>
          <View className="flex-row">
            {item.genre_ids.map((genreId) => {
              const genreName = genre.find((g) => g.id === genreId);
              return genreName ? (
                <Text
                  className="text-white bg-indigo-600 p-1 ml-1 rounded overflow-hidden overflow-ellipsis"
                  style={{ maxWidth: "30%" }}
                  key={genreId}
                >
                  {genreName.name.slice(0, 6)}
                </Text>
              ) : null;
            })}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <View className="bg-slate-800 flex-1">
      <View className="flex-row justify-around items-center p-4">
        <TextInput
          className="bg-white rounded-xl p-2"
          style={{ width: "80%" }}
          placeholder="Search for a movie"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Pressable className="bg-white rounded-xl p-2" onPress={handleSearch}>
          <Text className="font-700">Search</Text>
        </Pressable>
        <Pressable className="bg-white rounded-xl p-2" onPress={handleClear}>
          <Text className="font-700">Clear</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
