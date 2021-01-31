import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useGetVenue, useDeleteVenue } from '../hooks/api';

export default function ListingDetailsScreen({ navigation, route }) {
	const { id } = route.params;
	const [ deleteVenue ] = useDeleteVenue();
	const [ name, description, image, getVenue ] = useGetVenue();
	// const {nameOut, descriptionOut} = info;

	useEffect(() => {
		const naviListener = navigation.addListener('focus', () => getVenue(id));
		console.log('you are useEffect');
		console.log(id);
		getVenue(id);
		return naviListener;
	}, []);

	console.log('he');
	// console.log(info);

	return (
		<ScrollView style={styles.container}>
			<View>
				<Text style={styles.name}>{name}</Text>
				{image && <Image source={{ uri: image }} style={styles.image} />}
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
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EEEEEE',
		height: '100%',
		padding:5,
	},
	name: {
		textAlign: 'center',
		fontSize:24,
		marginTop:15,
		marginBottom:15,
		color: '#326273',
	},
	description: {
		marginTop:15,
		marginBottom:5,
		color: '#326273',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30,
	},
	button: {
		padding: 10,
		width: 200,
		borderRadius: 8,
		backgroundColor: '#C0DFA1',
		borderWidth: 1
	},
	buttonText: {
		textAlign: 'center'
	},
	image: {
		width: "100%",
		height: 250,
		borderRadius:15,
	}
});
