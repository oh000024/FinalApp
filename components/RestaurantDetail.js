import React,{Component} from 'react';
import {
    Text,
    Content} from 'native-base'
import {connect} from 'react-redux'

export class RestaurantDetail extends Component{

    render(){
        return(
            <Content>
                <Text>{this.props.restaurant.name}</Text>
                <Text>{this.props.restaurant.phone}</Text>
                <Text>{this.props.restaurant.distance}</Text>
                <Text>{this.props.restaurant.price}</Text>
                <Text>{this.props.restaurant.rating}</Text>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(RestaurantDetail);