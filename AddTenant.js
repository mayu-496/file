import React,{Component} from 'react';
import {Text,
	TextInput,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

export default class AddTenantScreen extends Component{

	render(){
		return(
				<View style={styles.container}>
					 <TextInput 
			            placeholder = " Name"       
			            underlineColorAndroid="black"
			            style={styles.textInput}
			          />
            
		            <TextInput 
		               placeholder = " Email"
		               underlineColorAndroid="black"
		               style={styles.textInput}
		             />

		             <TextInput 
		               placeholder = " Phone"
		               underlineColorAndroid="black"
		               style={styles.textInput}
		             />


            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Add</Text>
           </TouchableOpacity>

				</View>
			
			);
	}
}

const styles= StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#E0F0EC',
		margin:10

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
});