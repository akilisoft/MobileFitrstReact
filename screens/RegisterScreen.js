import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Inputs from '../components/Input';
import Submit from '../components/Submit';


export default class RegisterScreen extends React.Component{

    render(){
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Image
                        source={require('../images/foodapp.png')}
                        resizeMode="center"
                        style={styles.image}
                    />
                    <Text style={styles.textTitle}>Let's Get Started</Text>
                    <Text style={styles.textBody}>Create an account to get all features</Text>
                    <Inputs name="Full Name" icon="user" />
                    <Inputs name="Email" icon="envelope" />
                    <Inputs name="Phone" icon="phone" />
                    <Inputs name="Password" icon="lock" pass={true} />
                    <Inputs name="Confirm Password" icon="lock" pass={true} />
                    <Submit color="#0251ce" title="CREATE"/>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textBody}>Already have an account?</Text>
                        <Text style={[styles.textBody], {color:'blue'}} >
                            Log in</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    image:{
        width:400,
        height:150,
        marginVertical:10
    },
    textTitle:{
        fontSize:30,
        fontFamily:'foundation',
        marginVertical:5
    },
    textBody:{
        fontSize:16,
        fontFamily:'foundation'
    }
})