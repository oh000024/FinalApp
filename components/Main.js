
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Container, 
    Header,
    Content,
    List, 
    ListItem, 
    Button, 
    Left, 
    Right, 
    Body, 
    Icon, 
    Text,
    Spinner} from 'native-base';
import Restaurant from './Restaurant';
import RestaurantDetail from './RestaurantDetail';
import * as actions from "../actions";

console.log(actions);

export class Main extends Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }
  
  buttonPress() {
    console.log('called');
    this.props.navigation.navigate('RestaurantDetial');
  }
  // Showing 
  renderButton(){
    if(this.props.isFetching) {
      console.log("Render Spinner");
      return <Spinner color='red' />
  }
    else{
      console.log("render Button");
    return(

    <Button full onPress={this.props.fetchAddress} >
      <Text>Find restaurants nearby.</Text>
    </Button>)
    }
  }
  // Rendering each store
  renderListItem() {
    let count = 0;
    console.log("Called RenderListItem")
    if(!this.props.businesses) return;
    else if(this.props.showDetail!=true){
        return this.props.businesses.map((item) => {
      
    //   let dist = Number(item.distance / 1000).toFixed(2);
    //   let basicInfo = item.name +"(" +dist + "km"+")";
    //    return (
    //    <ListItem key={item.name}>
    //     <Text>{basicInfo}</Text>
    //     <Right>
    //       <Icon name="arrow-forward" onPress={this.buttonPress}/>
    //     </Right>
    //   </ListItem>);
       //<List key ={count++}> <Restaurant  restaurant = {item} /></List>
        return <Restaurant key={count++} restaurant = {item} />
    
        }) 
    }//ELSE IF
    else {

    }

  };//END OF FUNC
  render() {

    if(!this.props.showDetail){
        return(
            <Container>
                <Header><Text>The big restaurant list</Text></Header>
                <Content>
                {this.renderButton()}{this.renderListItem()}
                </Content>
            </Container>
        );
    } else {
        return(
            <Container>
                <Header><Text>The big restaurant list</Text></Header>
                <Content>
                <Button full>
                <Left ><Icon name='arrow-back' onPress = {this.props.goBack}/></Left>
                <Text onPress = {this.props.goBack}>Back to List</Text>
                </Button>
                <RestaurantDetail />
                </Content>
            </Container>
        );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
      businesses: state.businesses,
      isFetching: state.isFetching,
      showDetail: state.showDetail,
      restaurant: state.restaurant,
  };
};
const mapDispatchToProps = (dispatch,ownPros) => {
  return {
      fetchAddress: ()=> {dispatch(actions.getLocation())},
      goBack: ()=> dispatch(actions.goBack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main); 
