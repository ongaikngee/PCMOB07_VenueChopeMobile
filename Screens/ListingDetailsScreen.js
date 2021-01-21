import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API = 'https://venueChope.pythonanywhere.com';
const API_DELETE = '/venue/';

export default function ListingDetailsScreen({ navigation, route }) {
	async function deleteVenue(id) {
		console.log('Deletion of the Venue.');
		try {
			const response = await axios.delete(API + API_DELETE + id);
			console.log('Axios Success message');
			console.log('Item been deleted');
			navigation.navigate('Venue Listing');
		} catch (e) {
			console.log('Axios Error message');
			console.log(e);
		}
	}

	const { id, name, description, image } = route.params;
	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>
                This is the listing Details Screen
            </Text> */}
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.description}>{description}</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={() => deleteVenue(id)}>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('Venue Edit', { ...route.params })}
				>
					{/* <TouchableOpacity onPress={() => navigation.navigate('Venue Details', { ...item })}> */}
					<Text style={styles.buttonText}>Edit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#F7B267',
		height: '100%'
	},
	name: {
		fontSize: 36
	},
	description: {
		fontSize: 18
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
	},
	button: {
		padding: 10,
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
