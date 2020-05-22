import React, {useState, useEffect} from 'react';
import { StyleSheet,Button, Text, View, DrawerLayoutAndroidBase } from 'react-native';
import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'

//Beacons.requestAlwaysAuthorization
// Tells the library to detect iBeacons
Beacons.detectIBeacons()

  export default function App() {

  const [dados, setDados] = useState([]);
  const [dist, setDist] = useState(0);
  const [deltadist,setDeltatdist] = useState(0);


 
async function rebea(){
  try {
    await Beacons.startRangingBeaconsInRegion('REGION1')
    console.log(`Beacons ranging started succesfully!`)
  }catch (err) {
    console.log(`Beacons ranging not started, error: ${error}`)
  }
}


function zera(){
  setDist(0)
  setDeltatdist(0)
}

useEffect(() => {

  DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
 // console.log('Found beacons!', data.beacons)
  setDados(data.beacons)
})
},[]);

dados.map(Element=>
  {console.log('sinal',Element.distance)

  if (((Element.distance-dist)>0.7)||((dist-Element.distance)>0.7)){
    setDist(Element.distance)
  }
  
});



console.log('distancia',dist)


  return (
    <View style={styles.container}>
      <View style = {styles.container}>
        <Button
          title = "Connect"
          onPress = {rebea}
        />
      </View>

      <View style = {styles.container}>      
        <Button
          title = "Zerar"
          onPress = {zera}
        />
      </View>
      
      <View style = {styles.container}>
          <Text>
          Distância: {dist.toFixed(2)}m
          </Text>
      </View>
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
 
});