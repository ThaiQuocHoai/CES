import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, View, TextInput, Pressable } from 'react-native'
import logo from '../assets/images/LOGO.png';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({navigation}) {
    return (
        <View>
            <StatusBar backgroundColor="#013459" style="light"/>
            <View style={{
                backgroundColor: '#024f87',
                height: '100%',
                position: 'relative'
            }}>
                <Image source={logo} style={{
                    position: 'absolute',
                    top: 20,
                    left: 85,
                    width: 250,
                    height: 250
                }} />
                <View style={{
                    position: 'absolute',
                    top: 265,
                    backgroundColor: '#fff',
                    width: windowWidth,
                    height: windowHeight,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                    <View style={{ paddingLeft: 30, paddingTop: 20 }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#000',
                            paddingBottom: 5
                        }}>CES xin chào!</Text>
                        <Text style={{
                            color: 'rgba(33,33,33,.7)',
                            paddingBottom: 20
                        }}>Nhập số điện thoại để đăng nhập</Text>
                        <TextInput
                            placeholder="Nhập số điện thoại"
                            style={{
                                borderColor: 'rgba(33,33,33,.7)',
                                height: 40,
                                borderWidth: .5,
                                width: 300,
                                color: 'rgba(33,33,33,.7)',
                                paddingLeft: 15,
                                borderRadius: 9,
                                marginBottom: 30
                            }}
                            keyboardType="numeric"
                        />
                        <Pressable style={{
                            backgroundColor: '#024f87',
                            width: 150,
                            height: 50,
                            borderRadius: 10,
                            // marginLeft: windowWidth/4
                        }}
                            onPress={() => {
                              navigation.push('MainScreen');
                            }}
                        >
                            <Text style={{
                                color: '#fff',
                                fontSize: 20,
                                textAlign: 'center',
                                paddingTop: 10,
                                // textDecorationLine: "underline",
                                // textDecorationStyle: "solid",
                                // textDecorationColor: "#000",
                            }}>Gửi mã OTP </Text>
                        </Pressable>
                    </View>

                </View>

            </View>
        </View>
    )
}
