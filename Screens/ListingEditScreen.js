import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {useRequestEdit} from '../hooks/api';


export default function ListingEditScreen({ route, navigation }) {

	const [ nameInput, setNameInput ] = useState('');
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const { id, name, description } = route.params;
	const [editVenue] = useRequestEdit();

	useEffect(() => {
		setNameInput(name);
		setDescriptionInput(description);
	}, []);

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
				<TouchableOpacity style={styles.button} onPress={() => editVenue(id, nameInput, descriptionInput)}>
					<Text style={styles.buttonText}>Edit</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EEEEEE',
		height: '100%',
		padding:5,
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		marginTop: 10,
		color: '#326273',
	},
	textInput: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		fontSize: 18,
		paddingLeft: 10,
		backgroundColor: 'white'
	},
	header: {
		fontWeight: 'bold',
		marginTop: 30,
		color: '#326273',
	},
	button: {
		padding: 10,
		width: "100%",
		borderRadius: 8,
		backgroundColor: '#C0DFA1',
		borderWidth: 1,
		marginTop:15,
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center'
	}
});
