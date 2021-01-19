import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//Data for the listing, Will test with hard data, will need to change to API later
const DATA = [
	{
		id: '1',
		name: 'myfirstname',
		description: 'myfirstDescription',
		image: 'null'
	},
	{
		id: '2',
		name: 'mysecondname',
		description: 'mysecondDescription',
		image: 'null'
	}
];

export default function ListingScreen({ navigation }) {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Venue Details', { ...item })}>
				<Text style={styles.text}>{item.name}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View>
			<Text style={styles.title}>This is the listing Screen</Text>
			<FlatList data={DATA} renderItem={renderItem} />
		</View>
	);
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        textAlign:'center',
        marginBottom:40,
        marginTop:10,
    },
    text: {
		fontSize: 20,
		padding: 20,
		backgroundColor: 'red',
		margin: 2
	}
});
