import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const GOBACK_ACTION = "GOBACK_ACTION";
export const FETCH_DATA_SUCESS = "FETCH_DATA_SUCESS";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const GET_LOCATION = "GET_LOCATION";
export const SHOW_DETAIL = "SHOW_DETAIL";

const ACCESS_TOKEN="f-dh-VEE-rh3UJnFgb2O6iQJXiEizz8UeDo6hSaUY7uDWJMn7W_9Vf-21If0mqblgRW8_RwLL5I1Hg8-1Vwvt64z-dFdwwozodu-t5HDnaJVjl6zRcqDfbQXMzpJWnYx";
export function selectRestaurant(data) {
    return {
		type: SELECT_RESTAURANT,
		payload:data
    };
}

export function showDetailRestaurant() {
    return {
		type: SHOW_DETAIL,
    };
}

export function goBack(){
	return{
		type:GOBACK_ACTION,
	}
}

export function fetchRequest() {
	console.log("fetchRequest");
    return {
        type: FETCH_REQUEST
    };
}

export function fetchDataSuccess(data){
	console.log("fetchDataSuccess");
	return {
		type: FETCH_DATA_SUCESS,
		data:data
	};
}
function geo_sucess(){

}
function geo_error(){

}
export function getLocation(){
	return (dispatch) =>{
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		  };
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition((
			position) => {
            console.log(position.coords);
            dispatch( fetchData(position.coords));
		},
		()=>{return},
		options);
	}
}
export function fetchData(postion){
	return(dispatch)=> {

		console.log();
		let place = "latitude="+postion.latitude+"&longitude="+postion.longitude;
		// let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place;
		let url = "https://api.yelp.com/v3/businesses/search?" + place;
		
		console.log(url);
		dispatch(fetchRequest());
		axios.get(url,{
			headers: {
			"Authorization": "Bearer "+ ACCESS_TOKEN,
		  }}
		).then((response) =>{
			/* eslint no-debugger: 0 */
			// debugger;
			return response;
		}).then((response)=> {
			console.log(response.data);
			let restaurantdata = response.data;
			dispatch(fetchDataSuccess(restaurantdata));
		}).catch(function (error) {
			console.log(error);
		  });;
    };

}