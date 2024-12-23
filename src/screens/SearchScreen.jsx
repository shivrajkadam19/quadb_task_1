import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const fetchResults = async (term) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${term}`
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleInputChange = (term) => {
    setSearchTerm(term);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        if (term.trim().length > 0) {
          fetchResults(term);
        } else {
          setResults([]);
        }
      }, 500)
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search games, shows, movies..."
          placeholderTextColor="#AAA"
          value={searchTerm}
          onChangeText={handleInputChange}
        />
        <MaterialIcons name="mic" size={24} color="#AAA" />
      </View>

      {/* Search Results */}
      <View style={styles.section}>
        <FlatList
          data={results}
          keyExtractor={(item) => item.show.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              movie={item.show}
              onPress={() => navigation.navigate('Details', { movie: item.show })}
            />
          )}
          contentContainerStyle={styles.resultsList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    marginHorizontal: 10,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultsList: {
    paddingBottom: 70,
  },
});

export default SearchScreen;
