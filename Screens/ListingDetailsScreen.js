import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function ListingDetailsScreen({route}){
    console.log("This is detail log");
    console.log(route);
	const {id, name, description, image} = route.params;
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>
                This is the listing Details Screen
            </Text> */}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            
        </View>
    );
}

const styles= StyleSheet.create(
    {
        container:{
            paddingLeft:10,
            paddingRight:10,
        },
        name: {
            fontSize:36,
        },
        description:{
            fontSize:18,
        }
    }
)