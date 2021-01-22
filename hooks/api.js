import React, {useState} from 'react';
import axios from 'axios';

export function useHttpRequest() {
    const [ data, setData ] = useState([]);
	const API = 'https://venueChope.pythonanywhere.com';
    const API_VENUES = '/venues';
	// const API_ADD = '/create_venue';

	console.log('You have entered useHttpRequest Hooks!');
	console.log('You have provided an ID');

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
    
    // async function addVenue(){
    //     console.log("Entering Axios Add Async function");
    //     console.log(nameInput);
    //     console.log(descriptionInput);
    //     try{
    //         console.log("Axio Success Message");
    //         const response = await axios.post(API+API_ADD,{name:nameInput, description:descriptionInput});
    //         navigation.navigate("Venue Listing");
    //     }catch (e){
    //         console.log("Axio Error Message");
    //         console.log(e);
    //     }
    // }

	return [data, getVenue];
}
