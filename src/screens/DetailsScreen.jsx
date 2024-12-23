import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

const DetailsScreen = ({ route,navigation }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Header
        onSearchPress={() => navigation.navigate('Search')} 
        onDownloadPress={() => console.log('Download button pressed')} 
      />

      <ScrollView style={styles.container}>
        {/* Movie Banner Image */}
        <Image source={{ uri: movie.image?.original }} style={styles.image} />

        {/* Movie Title */}
        <Text style={styles.title}>{movie.name}</Text>

        {/* Movie Rating */}
        {movie.rating?.average && (
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>{movie.rating.average}/10</Text>
          </View>
        )}

        {/* Movie Genres */}
        {movie.genres?.length > 0 && (
          <View style={styles.genresContainer}>
            {movie.genres.map((genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre}
              </Text>
            ))}
          </View>
        )}

        {/* Movie Summary */}
        <Text style={styles.sectionHeader}>Summary</Text>
        <Text style={styles.summary}>
          {movie.summary
            ? movie.summary.replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
            : 'No summary available'}
        </Text>

        {/* Movie Schedule */}
        {movie.schedule && (
          <>
            <Text style={styles.sectionHeader}>Schedule</Text>
            <Text style={styles.schedule}>
              {movie.schedule.days?.length > 0
                ? `Airs on ${movie.schedule.days.join(', ')} at ${movie.schedule.time}`
                : 'Schedule not available'}
            </Text>
          </>
        )}

        {/* Official Site */}
        {movie.officialSite && (
          <>
            <Text style={styles.sectionHeader}>Official Site</Text>
            <TouchableOpacity onPress={() => Linking.openURL(movie.officialSite)}>
              <Text style={styles.link}>Visit Official Website</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Network Details */}
        {movie.network && (
          <>
            <Text style={styles.sectionHeader}>Network</Text>
            <Text style={styles.network}>
              {`${movie.network.name} (${movie.network.country.name})`}
            </Text>
          </>
        )}

        {/* External Links */}
        {movie.externals?.imdb && (
          <>
            <Text style={styles.sectionHeader}>External Links</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`https://www.imdb.com/title/${movie.externals.imdb}`)}>
              <Text style={styles.link}>IMDb</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: '#FFD700',
    fontSize: 16,
    marginLeft: 5,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  genre: {
    backgroundColor: '#444',
    color: '#FFF',
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  summary: {
    color: '#AAA',
    fontSize: 16,
    lineHeight: 22,
  },
  schedule: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  network: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailsScreen;
