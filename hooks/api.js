import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const API = 'https://venueChope.pythonanywhere.com';
const API_VENUES = '/venues';
const API_ADDUPDATE = '/venue/';
const API_ADD = '/create_venue';

//Custom Hooks documnetation
//useGetVenues : GET all venues, returning an array of objects
//useGETVenue : GET selected venue. 
//useDeleteVenue : DELETE of venue.
//useAddVenue : POST new venue.


//all venues hooks
export function useGetVenues() {
	const [ data, setData ] = useState([]);
	async function getVenues() {
		console.log("**********************")
		console.log("GET all venues.")
		try {
			const response = await axios.get(API + API_VENUES);
			console.log('Axios Success message');
			const newData = response.data;
			//NTS: This is to cast the id to string for flatitem
			newData.map((x) => (x.id = String(x.id)));
			setData(newData);
		} catch (e) {
			console.log('Axio Error Message');
			console.log(e.response);
		}
	}

	return [ data, getVenues ];
}


export function useGetVenue(){

	const [info, setInfo] = useState();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);

	async function getVenue(id){

		try{

			const response = await axios.get(API + API_ADDUPDATE + id);
			console.log('Axios Success message');
			setInfo(response.data);
			setName(response.data.name);
			setDescription(response.data.description);
			setImage(response.data.image);
			
		}
		catch(e){
			console.log("Asios error");
			console.log(e.response);
		}



	}

	return [name, description, image, getVenue];

}

//delete hooks
export function useDeleteVenue() {
	const navigation = useNavigation();

	async function deleteVenue(id) {
		console.log("**********************")
		console.log("DELETE venue.")
		try {
			const response = await axios.delete(API + API_ADDUPDATE + id);
			console.log('Axios Success message');
			console.log('Item been deleted');
			navigation.navigate('VenueChope');
		} catch (e) {
			console.log('Axio Error Message');
			console.log(e.response);
		}
	}

	return [ deleteVenue ];
}

//update hooks
export function useRequestEdit() {
	const navigation = useNavigation();

	async function editVenue(id, nameInput, descriptionInput) {
		console.log("**********************")
		console.log("UPDATE venue.")

		try {
			const response = await axios.put(API + API_ADDUPDATE + id, {
				name: nameInput,
				description: descriptionInput
			});
			console.log('Axios Success message');
			console.log('Venue has beed updated');
			navigation.navigate('Venue Details');
		} catch (e) {
			console.log('Axio Error Message');
			console.log(e.response);
		}
	}

	return [ editVenue ];
}

//Add hooks
export function useAddVenue() {
	console.log("**********************")
	console.log("POST new venue.")
	const navigation = useNavigation();

	async function addVenue(nameInput, descriptionInput, ImageInput) {

		//nts: extracting the filename. needed later if just to store the filename rather than the path
		// let uri = ImageInput;
		// const INDEX = uri.lastIndexOf("/");
		// const LENGTH = uri.length;
		// const RESULT = uri.substr(INDEX+1, LENGTH)

		try {
			console.log('Axio Success Message');
			await axios.post(API + API_ADD, {
				name: nameInput,
				description: descriptionInput,
				image: ImageInput
			});
			navigation.navigate('VenueChope');
		} catch (e) {
			console.log('Axio Error Message');
			console.log(e.response);
		}
	}
	return [ addVenue ];
}
