import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class FoodScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems: 'center', 
                        justifyContent: 'center'}}>
                <Text>Food Screen</Text>
            </View>
        )
    }
}

