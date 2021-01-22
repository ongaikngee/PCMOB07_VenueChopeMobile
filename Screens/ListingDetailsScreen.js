import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useRequestVenue} from '../hooks/api';


export default function ListingDetailsScreen({ navigation, route }) {
	console.log("Welcome to Venue Details Screen.");

	const { id, name, description, image } = route.params;
	const [deleteVenue] = useRequestVenue();

	return (
		<View style={styles.container}>
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
		fontSize: 36, 
		textAlign:"center",
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
