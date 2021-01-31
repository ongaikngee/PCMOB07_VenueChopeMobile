import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useGetVenues } from '../hooks/api';
import { AntDesign } from '@expo/vector-icons';

export default function ListingScreen({ navigation }) {
	const [ data, getVenues ] = useGetVenues();

	useEffect(() => {
		const naviListener = navigation.addListener('focus', () => getVenues());
		getVenues();
		return naviListener;
	}, []);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Venue Add')}>
					<AntDesign name="plussquareo" size={32} color="black" style={{ paddingRight: 15 }} />
				</TouchableOpacity>
			)
		});
	});

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Venue Details', { ...item })}>
				<View style={styles.card}>
					<Text style={styles.text}>{item.name}</Text>
					<Text style={styles.description}>{item.description}</Text>
					{item.image && <Image source={{ uri: item.image }} style={styles.image} />}
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Founded in 2009, VenueChope is the premier event planner and venue provider in Singapore. VenueChope
				will weave a tapestry of beautiful moment and regale guests for any occasion.{' '}
			</Text>
			<FlatList data={data} renderItem={renderItem} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EEEEEE',
		height: '100%'
	},
	title: {
		textAlign: 'center',
		color: '#326273',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15
	},
	card: {
		backgroundColor: '#C0DFA1',
		margin: 2,
		borderRadius: 10,
		padding: 10
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color:"#326273",
	},
	description:{
		marginTop:5,
		marginBottom:10,
		color:"#326273",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 15
	}
});
