import { 
    ACTION_TYPE,
    GOBACK_ACTION,
    FETCH_REQUEST,
    FETCH_DATA_SUCESS,
    SELECT_RESTAURANT,
    SHOW_DETAIL,
    HIDE_DETAIL } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    switch(action.type) {
        case FETCH_REQUEST:
            console.log("Fetch Request");
            modifiedState.isFetching = true;
            break;
        case ACTION_TYPE:
            // modifiedState.gotIt = true;
            // modifiedState.locatoin = "List";
            // modifiedState.isFetching=true;
            // navigate("List");
            break;
        case GOBACK_ACTION:
            console.log("GO BACK");
            modifiedState.isFetching=false;
            modifiedState.showDetail = false;
            // modifiedState.restaurants = true;
            break;
        case FETCH_DATA_SUCESS:
            modifiedState.isFetching=false;
            modifiedState.showDetail = false;
            // modifiedState.restaurants = true;

            modifiedState.restaurants = Object.assign({},action.data);
            modifiedState.businesses = [...modifiedState.restaurants.businesses];
            console.log(modifiedState.businesses);
            modifiedState.locatoin = "List";
            break;
        case SELECT_RESTAURANT:
            modifiedState.showDetail = true;
            // modifiedState.restaurants = false;
            modifiedState.restaurant = action.payload;
            console.log("SELECT_RESTAURANT");
            break;
        case HIDE_DETAIL:
            modifiedState.showDetail = false;
            modifiedState.restaurants = true;
            break;
        case SHOW_DETAIL:
            modifiedState.showDetail = true;
            modifiedState.restaurants = false;
            console.log("SHOW DETAIL");
            break;
        default:
            return state;
    }
    return modifiedState;
}