import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';


export default class Inputs extends React.Component{

    state = {isFocuced : false};

    onFocusChange = () =>{
        this.setState({isFocuced:true});
    }


    render(){
        return(
            <View style={[styles.container, 
            {borderColor : this.state.isFocuced ? '#0779ef' : '#eee'}]}>
                <Input 
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    onChangeText={this.props.onChange}
                    leftIcon={
                        <Icon 
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocuced ? '#0779ef' : 'gray'}
                        />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        borderRadius:100,
        marginVertical:10,
        borderWidth:3.5
    },
    inputContainer:{
        borderBottomWidth:0
    },
    inputText:{
        color:'#0779e4',
        fontWeight:'bold',
        marginLeft:5
    }
})