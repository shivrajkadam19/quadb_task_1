import React, {useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen= ({navigation} ) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Tab');
        }, 4000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Animation */}
            <LottieView
                source={require('../assets/splash.json')} 
                autoPlay
                style={styles.lottie}
            />
            {/* Activity Indicator */}
            <ActivityIndicator size={50} color="#B81D24" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    lottie: {
        width: 300,
        height: 300,
    },
});

export default SplashScreen;
