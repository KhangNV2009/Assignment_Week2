import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const imgData = [
    { id: 0, imgSource: require('./assets/1.png') },
    { id: 1, imgSource: require('./assets/2.jpg') },
    { id: 2, imgSource: require('./assets/3.jpg') },
    { id: 3, imgSource: require('./assets/4.jpg') },
    { id: 4, imgSource: require('./assets/5.jpg') },
    { id: 5, imgSource: require('./assets/6.jpg') },
    { id: 6, imgSource: require('./assets/7.jpg') },
    { id: 7, imgSource: require('./assets/8.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2);

class Body extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.countArea}>
                    <View>
                        <Text style={styles.countText}>210</Text>
                        <Text style={styles.infoText}>Photes</Text>
                    </View>
                    <View>
                        <Text style={styles.countText}>15k</Text>
                        <Text style={styles.infoText}>Followers</Text>
                    </View>
                    <View>
                        <Text style={styles.countText}>605</Text>
                        <Text style={styles.infoText}>Following</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.imageArea} style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column' }}>
                        {imgData.slice(0, centerImgData).map(item => { return <Image key={item.id} source={item.imgSource} style={styles.image} /> })}
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        {imgData.slice(centerImgData).map(item => { return <Image key={item.id} source={item.imgSource} style={styles.image} /> })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    countArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    countText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 14,
        color: 'grey'
    },
    image: {
        height: 140,
        width: 160,
        margin: 10,
        borderRadius: 15
    }
});

export default Body;