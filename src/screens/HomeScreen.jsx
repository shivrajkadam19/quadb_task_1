import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from '../components/Header'; // Import the custom Header component
import MovieCard from '../components/MovieCard'; // Import the MovieCard component

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Header
        onSearchPress={() => navigation.navigate('Search')}
        onDownloadPress={() => console.log('Download button pressed')} 
      />

      {/* Page Title */}
      <Text style={styles.pageTitle}>All Movies</Text>

      {/* Movie List */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  pageTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
