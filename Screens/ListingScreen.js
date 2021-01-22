import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useHttpRequest } from '../hooks/api';

export default function ListingScreen({ navigation }) {
	const [data, getVenue] = useHttpRequest();
	//in the above example of using hooks, I am able to pass in varible. it will 
	//go into hooks and consoleLog. It is also able to create varible in hooks and pass it back.
	//I now wants to pass a function into hooks. 
	//I am now able to call the function inside the hooks. but the function is still in my main screen. 
	//I will next try to pass in the function in hooks. And the function will run in hooks. it will 
	//then return the function results. 
	//Conclusion
	//You will create the functions inside the custom hooks. you will then destruct the function

	useEffect(() => {
		console.log('Welcome to the starting of the application.');
		const naviListener = navigation.addListener("focus", ()=>getVenue());

		getVenue();
		return naviListener;
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
			<TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Venue Add')}>
				<Text style={styles.buttonText }>Add</Text>
			</TouchableOpacity>
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
