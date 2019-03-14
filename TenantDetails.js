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

import {
  Sae,
  Hoshi,
} from 'react-native-textinput-effects';

class HomeScreen extends React.Component {
   static navigationOptions = {
    title: 'Add Details',
  };
  render() {
    return (
      <ScrollView 
      >
      <View style={styles.container}>
         <Text style={styles.title}> Personal Details </Text>
      
          <Hoshi 
          label={' First Name'} 
          borderColor={'#F9F7F6'} 
          maskColor={'#F9F7F6'} 
          />

          <Hoshi
            style={styles.input}
            label={' Last Name'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

           
          <Hoshi
            style={styles.input}
            label={' Email Address'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

           
          <Hoshi
            style={styles.input}
            label={' Phone'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

            
          <Hoshi
            style={styles.input}
            label={' Mobile'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />
         
          <Hoshi
            style={styles.input}
            label={' Alternative Mobile'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

           
          <Hoshi
            style={styles.input}
            label={'Address'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />
         
          <Hoshi
            style={styles.input}
            label={'Photo'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

       
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}

          style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
        
      </View>
      </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
    title: 'Add Details',
  };
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}> Family Details </Text>
                 <TextInput 
               placeholder = "Members in Family"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

             <TextInput 
               placeholder = "Name"
               underlineColorAndroid="black"
               style={styles.textInput}
            />
             <TextInput 
               placeholder = "Relation"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

             <TextInput 
               placeholder = "Mobile No."
               underlineColorAndroid="black"
               style={styles.textInput}
            />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Vehicle')}

          style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

class VehicleScreen extends React.Component {
   static navigationOptions = {
    title: 'Add Details',
  };
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}> Vehicle Details </Text>

            <Hoshi
            style={styles.input}
            label={'Two Wheeler'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

             <Hoshi
            style={styles.input}
            label={'Four Wheeler'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />

             <Hoshi
            style={styles.input}
            label={'Other'}
            maskColor={'#F9F7F6'}
            borderColor={'#F9F7F6'}
          />
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Payment')}

          style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

class PaymentScreen extends React.Component {
   static navigationOptions = {
    title: 'Add Details',
  };
  constructor(props){
    super(props)
    this.state = {
      mdate:"2019-01-01",
      ddate:"2019-01-01",
      day:"",
    }

     
  }
  updateDay = (day) => {
      this.setState({ day: day })
   }
  render() {
    return (
      <View style={styles.container}>
        
            <Text> Payment Details </Text>


            <TextInput 
              placeholder = "Deposit Amount"
              underlineColorAndroid="black"
              style={styles.textInput}
            />

              <Text style={styles.text}> Deposit Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.ddate}
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
                  onDateChange={(ddate) => {this.setState({ddate: ddate})}}
      />

            <TextInput 
               placeholder = "Rent"
               underlineColorAndroid="black"
               style={styles.textInput}
            />
             <Text style={styles.text}> Due Day Every Month </Text>
             <Picker selectedValue = {this.state.day} onValueChange = {this.updateDay}>
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
               <Picker.Item label = "4" value = "4" />
               <Picker.Item label = "5" value = "5" />
               <Picker.Item label = "6" value = "6" />
               <Picker.Item label = "7" value = "7" />
               <Picker.Item label = "8" value = "8" />
               <Picker.Item label = "9" value = "9" />
               <Picker.Item label = "10" value = "10" />
               <Picker.Item label = "11" value = "11" />
               <Picker.Item label = "12" value = "12" />
               <Picker.Item label = "13" value = "13" />
               <Picker.Item label = "14" value = "14" />
               <Picker.Item label = "15" value = "15" />
               <Picker.Item label = "16" value = "16" />
               <Picker.Item label = "17" value = "17" />
               <Picker.Item label = "18" value = "18" />
               <Picker.Item label = "19" value = "19" />
               <Picker.Item label = "20" value = "20" />
               <Picker.Item label = "21" value = "21" />
               <Picker.Item label = "22" value = "22" />
               <Picker.Item label = "23" value = "23" />
               <Picker.Item label = "24" value = "24" />
               <Picker.Item label = "25" value = "25" />
               <Picker.Item label = "26" value = "26" />
               <Picker.Item label = "27" value = "27" />
               <Picker.Item label = "28" value = "28" />
               <Picker.Item label = "29" value = "29" />
               <Picker.Item label = "30" value = "30" />
               <Picker.Item label = "31" value = "31" />
            </Picker>
           
               

               <Text style={styles.text}> Move In Date </Text>
                <DatePicker
                  style={{width: 300}}
                 date={this.state.mdate}
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
                  onDateChange={(mdate) => {this.setState({mdate: mdate})}}
      />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Attach')}

          style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

class AttachScreen extends React.Component {
   static navigationOptions = {
    title: 'Add Details',
  };
  render() {
    return (
      <View style={styles.container}>
         <Text> Attach Documents </Text>

           <TextInput 
               placeholder = "Id Proof"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

           <TextInput 
               placeholder = "Documents"
               underlineColorAndroid="black"
               style={styles.textInput}
            />

            <TextInput 
               placeholder = "Comment"
               underlineColorAndroid="black"
               style={styles.textInput}
            />
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}

          style={styles.button}>
             <Text style={styles.buttonText}>Next</Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      title:'Payment',
    },
    Details: {
      screen: DetailsScreen,
      title:"Payment",
    },
    Vehicle: {
      screen: VehicleScreen,
    },
    Payment:{
      screen: PaymentScreen,
    },
    Attach: {
      screen: AttachScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Date extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
    margin :10,
    paddingVertical: 16,
   
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
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
      alignItems:'center',
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  input:{
     marginTop: 4,
   },
});