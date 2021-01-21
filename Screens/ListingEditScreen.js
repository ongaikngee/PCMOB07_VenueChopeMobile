import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';


export default function ListingEditScreen({ route, navigation }) {
	console.log('Entering Edit Screen');

	const [ nameInput, setNameInput ] = useState('');
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const { id, name, description } = route.params;
	const API = 'https://venueChope.pythonanywhere.com';
	const API_UPDATE = '/venue/';

	useEffect(() => {
		console.log('You are now in Edit Screen, UseEffect [].');
		setNameInput(name);
		setDescriptionInput(description);
	}, []);

	async function editVenue(id) {
		console.log('You have click the edit button.');
		console.log('The id you have selected is' + id);
		console.log(nameInput);
		console.log(descriptionInput);

		try{
			const response = await axios.put(API+API_UPDATE+id,{name:nameInput,description:descriptionInput});
			console.log('Axios Success message');
			console.log('Venue has beed updated');
			navigation.navigate("Venue Details");
		} catch (e) {
			console.log('Axios Error message');
			console.log(e);
		}
	}


	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Text style={styles.title}>Welcome to edit Screen</Text>
				<Text style={styles.header}>Name of Venue</Text>
				<TextInput
					style={styles.textInput}
					value={nameInput}
					onChangeText={(newtext) => setNameInput(newtext)}
				/>
				<Text style={styles.header}>Description</Text>
				<TextInput
					style={[ styles.textInput, { height: 300 } ]}
					value={descriptionInput}
					multiline
					numberOfLines={10}
					onChangeText={(newtext) => setDescriptionInput(newtext)}
				/>
				<TouchableOpacity style={styles.button} onPress={() => editVenue(id)}>
					<Text style={styles.buttonText}>Edit</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#F7B267',
		height: '100%'
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 10
	},
	textInput: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		fontSize: 18,
		paddingLeft: 10,
		// color:"white",
		backgroundColor: 'white'
	},
	header: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 30
	},
	button: {
		padding: 10,
		marginTop: 10,
		width: 100,
		height: 40,
		borderRadius: 8,
		backgroundColor: 'red',
		borderWidth: 1
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center'
	}
});
