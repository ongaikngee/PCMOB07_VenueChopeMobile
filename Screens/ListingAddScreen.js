import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	TextInput,
	TouchableOpacity,
	Keyboard,
	Platform,
	Image,
	ScrollView
} from 'react-native';
import { useAddVenue } from '../hooks/api';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ListingAddScreen({ navigation }) {
	const [ nameInput, setNameInput ] = useState('');
	const [ descriptionInput, setDescriptionInput ] = useState('');
	const [ imageInput, setImageInput ] = useState(null);
	const [ addVenue ] = useAddVenue();

	useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, we need permissions to your photos.');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images, //you have Image, Video
			allowsEditing: true,
			aspect: [ 4, 3 ],
			quality: 1
		});

		console.log(result);

		if (!result.cancelled) {
			setImageInput(result.uri);
		}
	};

	return (
		<ScrollView style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View>
					<Text style={styles.title}>Welcome to Add Screen</Text>
					<Text style={styles.header}>Name of Venue</Text>
					<TextInput style={styles.textInput} onChangeText={(newtext) => setNameInput(newtext)} />
					<Text style={styles.header}>Description</Text>
					<TextInput
						style={[ styles.textInput, { height: 200 } ]}
						multiline
						numberOfLines={10}
						onChangeText={(newtext) => setDescriptionInput(newtext)}
					/>
					<View style={styles.imagePickerContainer}>
						<TouchableOpacity
							style={[
								styles.button,
								{ backgroundColor: '#326273', width: 150, height: 40, marginRight: 20, flexDirection:'row'}
							]}
							onPress={pickImage}
						>
							<Text style={{color:"white"}}>Select Photo </Text>
							<AntDesign name="picture" size={18} color="white" />
						</TouchableOpacity>
						{imageInput && <Image source={{ uri: imageInput }} style={styles.image} />}
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress={() => addVenue(nameInput, descriptionInput, imageInput)}
					>
						<Text style={styles.buttonText}>Add Venue</Text>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#EEEEEE',
		height: '100%',
		padding: 5
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		marginTop: 10,
		color: '#326273'
	},
	textInput: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		fontSize: 18,
		paddingLeft: 10,
		// color:"white",
		backgroundColor: 'white'
	},
	header: {
		fontWeight: 'bold',
		marginTop: 30,
		color: '#326273',
	},
	button: {
		padding: 10,
		width: '100%',
		borderRadius: 8,
		backgroundColor: '#C0DFA1',
		borderWidth: 1,
		marginTop: 15
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center'
	},
	imagePickerContainer: {
		flexDirection: 'row'
	},
	image: {
		marginTop: 20,
		width: 100,
		height: 100,
		borderWidth: 1,
		borderRadius: 5
	}
});
