import React, {useState} from 'react';
import axios from 'axios';

const API = 'https://venueChope.pythonanywhere.com';
const API_VENUES = '/venues';
const API_DELETE = '/venue/'
const API_UPDATE = '/venue/'
const API_ADD = '/create_venue';


//all venues hooks
export function useHttpRequest() {
    const [ data, setData ] = useState([]);

	console.log('You have entered useHttpRequest Hooks!');

	async function getVenue() {
		try {
			const response = await axios.get(API + API_VENUES);
			console.log('Axios Success message');
			const newData = response.data;
			//NTS: This is to cast the id to string for flatitem
			newData.map((x) => (x.id = String(x.id)));
			setData(newData);
		} catch (e) {
			console.log('Axios Error message');
			console.log(e);
		}
    }

	return [data, getVenue];
}

//delete hooks
export function useRequestVenue(){
	console.log("You are now in the new hooks: useRequestVenue");
	// console.log(id);

	async function deleteVenue(id) {
		console.log('Deletion of the Venue.');
		try {
			const response = await axios.delete(API + API_DELETE + id);
			console.log('Axios Success message');
			console.log('Item been deleted');
			// navigation.navigate('Venue Listing');
		} catch (e) {
			console.log('Axios Error message');
			console.log(e);
		}
	}

	return [deleteVenue];
}


//update hooks
export function useRequestEdit(){
	console.log("You are now in useRequestEdit");
	// console.log(id);

	async function editVenue(id, nameInput, descriptionInput) {
		console.log('You have click the edit button.');
		console.log('The id you have selected is ' + id);
		console.log(nameInput);
		console.log(descriptionInput);

		try{
			const response = await axios.put(API+API_UPDATE+id,{name:nameInput,description:descriptionInput});
			console.log('Axios Success message');
			console.log('Venue has beed updated');
			// navigation.navigate("Venue Details");
		} catch (e) {
			console.log('Axios Error message');
			console.log(e);
		}
	}

	return [editVenue];
}


//Add hooks
export function useRequestAdd(){

	console.log("You are now in useRequestAdd");

	async function addVenue(nameInput, descriptionInput){
        console.log("Entering Axios Add Async function");
        console.log(nameInput);
        console.log(descriptionInput);
        try{
            console.log("Axio Success Message");
            const response = await axios.post(API+API_ADD,{name:nameInput, description:descriptionInput});
            // navigation.navigate("Venue Listing");
        }catch (e){
            console.log("Axio Error Message");
            console.log(e);
        }
	}
	
	return [addVenue];
}