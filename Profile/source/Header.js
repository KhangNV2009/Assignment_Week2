import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

class Header extends Component {
    pressFollow = () => { Alert.alert('Notification', 'Followed', [ { text: 'OK'} ] ); }
    pressSend = () => { Alert.alert('Notification', 'Message sended', [ { text: 'OK'} ] ); }
    render() {
        return (
            <View>
                <View style={styles.headerButton}>
                    <TouchableOpacity><Ionicons name='md-arrow-back' style={styles.buttonLayout} /></TouchableOpacity>
                    <TouchableOpacity><Entypo name='grid' style={styles.buttonLayout} /></TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <View style={styles.imageWarraper}>
                        <Image style={styles.avatar} source={require('./assets/avatar.jpg')} />
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.nameText}>Khang Nguyễn</Text>
                        <Text style={styles.jobText}>Developer</Text>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={this.pressFollow} style={[styles.followButton, styles.button]}><Text style={styles.buttonLabel}>Follow</Text></TouchableOpacity>
                            <TouchableOpacity onPress={this.pressSend} style={[styles.sendButton, styles.button]}><Ionicons name='md-send' style={styles.buttonLabel} /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    headerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    imageWarraper: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100,
    },
    userInfo: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    jobText: {
        fontSize: 20,
        color: 'grey'
    },
    buttonWrapper: {
        flexDirection: 'row',
    },
    followButton: {
        backgroundColor: FOLLOW_COLOR,
        width: 100,
        height: 30,
    },
    sendButton: {
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 40,
        height: 30,
        marginLeft: 10
    },
    button: {
        color: 'white',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10
    },
    buttonLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },
    buttonLayout: {
        fontSize: 35
    },
});

export default Header; // Don’t forget to use export default!