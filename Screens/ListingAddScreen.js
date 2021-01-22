import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import {useRequestAdd} from '../hooks/api';

export default function ListingAddScreen({navigation}) {
	const [ nameInput, setNameInput ] = useState('');
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const [addVenue] = useRequestAdd();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<Text style={styles.title}>Welcome to Add Screen</Text>
				<Text style={styles.header}>Name of Venue</Text>
				<TextInput style={styles.textInput} onChangeText={(newtext) => setNameInput(newtext)} />
				<Text style={styles.header}>Description</Text>
				<TextInput
					style={[ styles.textInput, { height: 300 } ]}
					multiline
					numberOfLines={10}
					onChangeText={(newtext) => setDescriptionInput(newtext)}
				/>
				<TouchableOpacity style={styles.button} onPress={() => addVenue(nameInput, descriptionInput)}>
					<Text style={styles.buttonText}>Add Venue</Text>
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
