import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Account from '../components/Account';
import Inputs from '../components/Input';
import Submit from '../components/Submit';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.container}>
                    <Image 
                        source={require('../images/foodapp.png')}
                        resizeMode='center'
                        style={styles.image}
                    />
                    <Text style={styles.textTitle}>Welcome to FoodApp</Text>
                    <Text style={styles.textBody}>
                        Log in to your existant account</Text>
                    <View style={{marginTop:20}} />
                    <Inputs name="Email" icon="user" />
                    <Inputs name="Password" icon="lock" pass={true} />
                    <View style={{width:'90%'}}>
                        <Text style={[styles.textBody, {alignSelf:'flex-end'}]}>
                            Forgot Password ?</Text>
                    </View>
                    <Submit title="LOG IN" color="#0148a4" />
                    <Text style={styles.textBody}>Or connect using</Text>
                    <View style={{flexDirection:'row'}}>
                        <Account color="#3b5c8f" icon="facebook" title="Facebook"/>
                        <Account color="#ec482f" icon="google" title="Google" />
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:400,
        height:150,
        marginVertical:10
    },
    textTitle:{
        fontFamily:'foundation',
        fontSize:30,
        marginVertical:10,
    },
    textBody:{
        fontFamily:'foundation',
        fontSize:16
    }
})