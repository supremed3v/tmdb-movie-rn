import { View, Text, FlatList, ImageBackground, Pressable } from "react-native";
import React, { useCallback } from "react";
import { TMDB_API } from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function TopRated({ genre }) {
  const navigation = useNavigation();
  const [topRated, setTopRated] = React.useState([]);
  const fetchData = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API}&language=en-US&page=1`
      )
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

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
                  className="text-white bg-indigo-600 p-1 ml-1 rounded"
                  key={genreId}
                >
                  {genreName.name}
                </Text>
              ) : null;
            })}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
  return (
    <View>
      <Text className="text-white font-700 text-2xl mt-4 mb-2 ml-2">
        Top Rated Movies
      </Text>
      <FlatList
        data={topRated}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
