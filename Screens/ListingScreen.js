import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API = 'https://venueChope.pythonanywhere.com';
const API_CREATE = '/create_venue';
const API_VENUES = '/venues';

export default function ListingScreen({ navigation }) {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		(async () => {
			console.log('Welcome to the starting of the application.');

			try {
				const response = await axios.get(API + API_VENUES);
				console.log('Axios Success message');
				const newData = response.data;
				//NTS: This is to cast the id to string for flatitem
				newData.map((x)=>x.id = String(x.id))
				setData(newData);
			} catch (e) {
				console.log('Axios Error message');
				console.log(e);
			}
		})();
	}, []);

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Venue Details', { ...item })}>
				<View style={styles.card}>
					<Text style={styles.text}>{item.name}</Text>
					<Text>{item.description}</Text>
					<Text>Available</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>This is the listing Screen</Text>
			<FlatList data={data} renderItem={renderItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F7B267',
		height: '100%'
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 40,
		marginTop: 10
	},
	card: {
		backgroundColor: '#F25C54',
		margin: 2,
		borderRadius: 25,
		padding: 10
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
