import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Movie Thumbnail */}
      <Image source={{ uri: movie.image?.medium }} style={styles.thumbnail} />

      {/* Movie Details */}
      <View style={styles.details}>
        {/* Title */}
        <Text style={styles.title} numberOfLines={1}>
          {movie.name}
        </Text>

        {/* Summary */}
        <Text style={styles.summary} numberOfLines={3}>
          {movie.summary
            ? movie.summary.replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
            : 'No summary available'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summary: {
    color: '#AAA',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default MovieCard;
