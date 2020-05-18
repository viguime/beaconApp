import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'

// Tells the library to detect iBeacons
Beacons.detectIBeacons()

// Start detecting all iBeacons in the nearby
async function rebea(){
try {
  await Beacons.startRangingBeaconsInRegion('REGION1')
  console.log(`Beacons ranging started succesfully!`)
} catch (err) {
  console.log(`Beacons ranging not started, error: ${error}`)
}
}
rebea()

// Print a log of the detected iBeacons (1 per second)
DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
  console.log('Found beacons!', data.beacons)
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
