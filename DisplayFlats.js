import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Alert,
  Dimensions,
  ScrollView,
  Image,FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardViewWithIcon,CardViewWithImage} from "react-native-simple-card-view";


export default  class DisplayFlats extends Component{

  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

  async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const response = await fetch('http://192.168.2.21/vanns/App/image.php');
            const pokemon = await response.json();
            this.setState({dataSource: pokemon, isLoading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    renderItem(data) {
    const miniCardStyle = {
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius       : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
    return (
    

    <View style={ {alignItems: "center",flexDirection: "row",flexWrap: 'wrap',} }>
      <CardViewWithImage
       width={(Dimensions.get("window").width / 2) - 10}
       height={ 30 }
       source={ {uri: data.item.image} } 
       title={ data.item.id }
       titleFontSize={ 16 }
       style={ miniCardStyle }
       roundedImage={ false }
       imageWidth={100}
       imageHeight={ 100 }
       onPress={Actions.FlatDetails}
       imageMargin={ {top: 10} }
      />

      <CardViewWithImage
       width={(Dimensions.get("window").width / 2) - 10}
       height={ 30 }
       source={ {uri: data.item.image} } 
       title={ data.item.id }
       titleFontSize={ 16 }
       style={ miniCardStyle }
       roundedImage={ false }
       imageWidth={100}
       imageHeight={ 100 }
       onPress={Actions.FlatDetails}
       imageMargin={ {top: 10} }
      />
    </View>

    );
  }

  render() {

    if(this.state.isLoading){

      return(
        <View style={styles.container}>
          <Text style= {styles.welcome}> Your Buildings </Text>
          <View style={ {alignItems: "center",flexDirection:"row",flexWrap: 'wrap',}}>
          <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => id}
          horizontal={false}
          numColumns={ 2 }
          />
        </View>

      </View>    
          );
    }
  else
  {
    const miniCardStyle = {
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius       : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
  return (
    
    
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style= {styles.welcome}> Your buildings are displayed here </Text>
         <View style={ {alignItems   : "center",justifyContent: "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Flat 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
            onPress={Actions.FlatDetails}
          />

          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Flat 2' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
            onPress={Actions.FlatDetails}
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Flat 3' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
            onPress={Actions.FlatDetails}
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Flat 4' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
            onPress={Actions.AddFlatDetails}
          />
         </View>
      </View>
        
      </View>
   
  );
  }
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0EC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
 

  try: {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',},
  
});