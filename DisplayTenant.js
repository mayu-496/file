import React, { Component } from 'react';
import { Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';

export default class DisplayBuilding extends Component<{}> {
  render() {
   
    return(
      <ScrollView>
     
       <View style = {styles.container}>

                 <Text style={styles.title}> Building Name </Text>

                 <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>

                  </View>

                   <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>
                  
                  </View>

                   <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>
                  
                  </View>


                    <Text style={styles.title}> Building Name </Text>

                 <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>

                  </View>

                   <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>
                  
                  </View>

                   <View style={styles.item}>
                 
                  <View style={styles.avatar}>
                    <Text style={styles.letter}>
                       T
                    </Text>
                   </View>

                  <TouchableOpacity
                      style = {styles.touch}
                      onPress={Actions.Profile}>
                      <Text style = {styles.text}> Tenant 1 </Text>
                  </TouchableOpacity>
                  
                  </View>
  
  
               </View>  
               </ScrollView>
          
        

         
      );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
  },
  title: {
    paddingBottom: 16,
    alignSelf: 'flex-start',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
    marginTop:10,
  },
  
  text:{
    color:'#093a39',
    fontSize : 20,
   alignSelf:'center',
    fontFamily: 'normal',
  },
   touch:{
       padding: 12,
       width:300,
      margin: 5,
     backgroundColor: '#E0F0EC',
      alignItems: 'center',
      borderRadius: 2,
      borderWidth:0.1,
      alignSelf:'center'
   },
    item: {
    backgroundColor: '#E0F0EC',
    flexDirection: 'row',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#5adeed',
    alignItems: 'center',
    justifyContent: 'center',

  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
});
