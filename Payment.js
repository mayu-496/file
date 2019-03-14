import React from 'react';
import { Button, 
  View, 
  Text,
  StyleSheet,
  TextInput,
  Picker ,
TouchableOpacity,
ScrollView,} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


class Pay1Screen extends React.Component {
	 constructor(props){
    super(props)
    this.state = {
      building:"",
    }  
  }

  updateBuilding = (building) => {
      this.setState({building: building })
   }

   static navigationOptions = {
    title: 'Payment',
  };

  render() {
   
		return(
			 <View style = {styles.container}>
           
       
            <Picker selectedValue = {this.state.building} onValueChange = {this.updateBuilding}
            >
               <Picker.Item label = "Select Buiding" value = "Select Buiding" />
                <Picker.Item label = "Buiding 1" value = " Buiding 1" />
                 <Picker.Item label = "Buiding 2" value = "Buiding 2" />
               </Picker>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pay2')}
            style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
           
         </View>
			);
	}


}

class Pay2Screen extends React.Component {

 static navigationOptions = {
    title: 'Payment',
  };

 state = {
      names: [
         {
            id: 0,
            name: 'Tenant 1',
         },
         {
            id: 1,
            name: 'Tenant 2',
         },
         {
            id: 2,
            name: 'Tenant 3',
         },
        
      ]
   }
   
   render() {
      return (
         <View>
         
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Pay3')}
                     key = {item.id}
                     style = {styles.container1}
                     >
                     <Text style = {styles.text1}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

class Pay3Screen extends React.Component {
	static navigationOptions = {
    title: 'Payment',
  };

 state = {
      names: [
         {
            id: 0,
            name: '1 Nov 18 - 30 Nov 18',
         },
         {
            id: 1,
            name: '1 Dec 18 - 30 Dec 18',
         },
         {
            id: 2,
            name: '1 Jan 19 - 30 Jan 19',
         },
        
      ]
   }
   
   render() {
      return (
         <View>
        
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container1}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text1}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pay4')}
            style={styles.button}>
             <Text style={styles.buttonText}>Add New Payments</Text>
           </TouchableOpacity>

             
         </View>
         </View>
      )
   }
	
}

class Pay4Screen extends React.Component {

	static navigationOptions = {
    title: 'Payment',
  };

	constructor(props){
    super(props)
    this.state = {
      pdate:"2019-01-01",
      fdate:"2019-01-01",
      tdate:"2019-01-01",
    }
 
  }

	render() {
   
		return(
			 <View style = {styles.container}>

       <ScrollView>
       
            <TextInput 
              placeholder = "Payment Amount"       
               underlineColorAndroid="black"
               style={styles.textInput}
            />
  

              <Text style={styles.text}>Payment Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.pdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(pdate) => {this.setState({pdate: pdate})}}
      />

        
    
               <Text style={styles.text}> Rent from Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.fdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(fdate) => {this.setState({fdate: fdate})}}
      />

                 <Text style={styles.text}> Rent to Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.tdate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="1950-05-01"
                  maxDate="2050-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft:0
                    },
                    dateInput: {
                      marginLeft: 126
                    }
                   
                  }}
                  onDateChange={(tdate) => {this.setState({tdate: tdate})}}
      />

              <TextInput 
              placeholder = "Comment"       
               underlineColorAndroid="black"
               style={styles.textInput}
            />
           
            <TouchableOpacity 
            style={styles.button}>
             <Text style={styles.buttonText}>Add Payment</Text>
           </TouchableOpacity>
           </ScrollView>
         </View>
			);
	}

}

const RootStack = createStackNavigator(
  {
    Pay1: {
      screen: Pay1Screen,
      title:'Payment',
    },
    Pay2: {
      screen: Pay2Screen,
      title:"Payment",
    },
    Pay3: {
      screen: Pay3Screen,
    },
    Pay4:{
      screen: Pay4Screen,
    },
    
  },
  {
    initialRouteName: 'Pay1',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Payment extends React.Component {
  render() {
    return <AppContainer />;
  }
}



const styles = StyleSheet.create({
  container : {
    backgroundColor: '#E0F0EC',
    flex: 1,
    margin :20,
  
    
  },
  
  
   textInput:{
    height:40,
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 10,
   },
   button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13,
      alignSelf:'center'
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
  text:{
    color:'gray',
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 10,
  },
   container1: {
      padding: 18,
      marginTop: 3,
     backgroundColor: '#E0F0EC',
      alignItems: 'center',
      borderRadius: 10,
   },
   text1: {
      color: 'black',
      fontSize:16
   },
});
