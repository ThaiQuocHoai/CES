import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Image, Text, View, Pressable, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import logo from '../assets/images/LOGO.png';
import { Dimensions } from 'react-native';
import { Surface, TextInput, Button } from "react-native-paper";
import { StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function SignupScreen({ navigation }) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [secure, setSecure] = useState(true);
    return (
        <ScrollView contentContainerStyle={{height: 680}}>
            <StatusBar backgroundColor="#013459" style="light" />
            <View style={{
                backgroundColor: '#024f87',
                height: '100%',
                position: 'relative'
            }}>
                {/* <Image source={logo} style={{
                    position: 'absolute',
                    top: 20,
                    left: 85,
                    width: 250,
                    height: 250
                }} /> */}
                <View style={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: '#fff',
                    width: windowWidth,
                    height: windowHeight,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                    <View style={{
                        paddingTop: 20,
                        paddingLeft: 15, paddingRight: 15
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            color: '#000',
                            paddingBottom: 5,
                            textAlign: 'center',
                            marginTop: 40,

                        }}>Đăng kí</Text>

                        <Surface>
                            <TextInput
                                style={styles.inputStyle}
                                mode="text"
                                label="Họ và tên"
                                theme={{
                                    colors: { primary: "black" },
                                }}
                                right={
                                    <TextInput.Icon name="account" size={24} color='#024f87' />
                                }
                                value={phone}
                                onChangeText={(phone) => setPhone(phone)}
                            />
                        </Surface>

                        <Surface>
                            <TextInput
                                style={styles.inputStyle}
                                mode="text"
                                label="Email"
                                theme={{
                                    colors: { primary: "black" },
                                }}
                                right={
                                    <TextInput.Icon name="email" size={24} color='#024f87' />
                                }
                                value={phone}
                                onChangeText={(phone) => setPhone(phone)}
                            />
                        </Surface>

                        <Surface>
                            <TextInput
                                style={styles.inputStyle}
                                mode="text"
                                label="Số điện thoại"
                                theme={{
                                    colors: { primary: "black" },
                                }}
                                right={
                                    <TextInput.Icon name="phone" size={24} color='#024f87' />
                                }
                                value={phone}
                                onChangeText={(phone) => setPhone(phone)}
                            />
                        </Surface>
                        <Surface
                            style={{
                                marginTop: 10,
                            }}
                        >
                            <TextInput
                                style={styles.inputStyle}
                                mode="text"
                                secureTextEntry={secure}
                                label="Mật khẩu"
                                theme={{
                                    colors: { primary: "black" },
                                }}
                                right={
                                    secure === true ? (
                                        <TextInput.Icon
                                            onPress={() => setSecure(!secure)}
                                            name="eye"
                                            color='#024f87'
                                        />
                                    ) : (
                                        <TextInput.Icon
                                            onPress={() => setSecure(!secure)}
                                            name="eye-off"
                                            color='#024f87'
                                        />
                                    )
                                }
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                            />
                        </Surface>

                        <Surface
                            style={{
                                marginTop: 10,
                            }}
                        >
                            <TextInput
                                style={styles.inputStyle}
                                mode="text"
                                secureTextEntry={secure}
                                label="Xác nhận mật khẩu"
                                theme={{
                                    colors: { primary: "black" },
                                }}
                                right={
                                    secure === true ? (
                                        <TextInput.Icon
                                            onPress={() => setSecure(!secure)}
                                            name="eye"
                                            color='#024f87'
                                        />
                                    ) : (
                                        <TextInput.Icon
                                            onPress={() => setSecure(!secure)}
                                            name="eye-off"
                                            color='#024f87'
                                        />
                                    )
                                }
                                value={confirm}
                                onChangeText={(confirm) => setConfirm(confirm)}
                            />
                        </Surface>
                        {/* <View style={{ flexDirection: 'row' }}> */}
                        
                        <Pressable
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.push('MainScreen');
                            }}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 15,

                            }}>Đăng kí</Text>
                        </Pressable>

                        <Pressable
                            onPress={() => {
                                navigation.push('Login');
                            }}
                        >
                            <Text style={{
                                marginTop: 10,
                                textAlign: 'center',
                                color: 'black',
                                fontSize: 13,
                            }}>Bạn đã có tài khoản ? <Text style={{
                                color: '#1e88e5',
                            }}>Đăng nhập</Text></Text>
                        </Pressable>

                        {/* </View> */}




                        {/* <Pressable style={{
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
                        </Pressable> */}
                    </View>

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: '#ff8224',
        marginTop: 40,
        height: 45,
        // width: 160,
        paddingTop: 11.3,
        borderRadius: 4,
    },
})