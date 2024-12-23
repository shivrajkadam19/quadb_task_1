import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({ onSearchPress, onDownloadPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Netflix Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Icons */}
      <View style={styles.iconContainer}>
        {/* Download Icon */}
        <TouchableOpacity onPress={onDownloadPress} style={styles.iconButton}>
          <MaterialIcons name="file-download" size={30} color="#FFF" />
        </TouchableOpacity>

        {/* Search Icon */}
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <MaterialIcons name="search" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
  },
  logo: {
    width: 40, // Adjusted size for smaller logo
    height: 80,
    
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 10, // Spacing between icons
  },
});

export default Header;
