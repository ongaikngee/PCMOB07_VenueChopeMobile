import React from 'react';
import {View,Text} from 'react-native';

export default function ListingEditScreen({route}){
    console.log("Entering Edit Screen");
    console.log(route);
    return(
        <View>
            <Text>Welcome to edit Screen</Text>
        </View>
    );
}