import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Platform, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Header from './source/Header';
import Body from './source/Body';

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Header/>
      <Body/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 1 : 0
  }
});