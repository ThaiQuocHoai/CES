import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import logo from '../assets/images/LOGO.png'
import { AntDesign } from '@expo/vector-icons';

export default function MainScreen3({ navigation }) {
    return (
        <View style={{ position: 'relative' }}>
            <StatusBar backgroundColor="#013459" style="light" />
            <View style={styles.headerStyle}>
                <Image style={styles.headerImage} source={logo} />
            </View>
            <View style={{
            }}>
                <Text style={styles.textStyles}>Tìm kiếm chiến dịch</Text>
                <TextInput
                    placeholder="Nhập mã chiến dịch"
                    style={{
                        borderColor: 'rgba(33,33,33,.7)',
                        height: 50,
                        borderWidth: .5,
                        width: 300,
                        color: 'rgba(33,33,33,.7)',
                        paddingLeft: 15,
                        borderRadius: 9,
                        fontSize: 20,
                        marginLeft: 55,
                        paddingRight: 50,
                        marginTop: 20
                    }}
                />
                <Pressable style={{
                    position: 'absolute',
                    top: 55,
                    right: 65
                }} onPress={() => {
                    alert('abc')
                }
                } >
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        textAlign: 'center',
                        paddingTop: 35,
                        // textDecorationLine: "underline",
                        // textDecorationStyle: "solid",
                        // textDecorationColor: "#000",
                    }}><AntDesign name="search1" size={30} color="rgba(33,33,33,.7)" /> </Text>
                </Pressable>
            </View>

            <Text style={styles.textStyles}>Danh mục hoạt động</Text>

            <View style={styles.PressView}>
                <Pressable style={styles.PressStyle} onPress={() => {
                    navigation.push("CreateActivity")
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AntDesign style={{
                            marginLeft: 20,
                            marginRight: 15
                        }} name="addfolder" size={30} color="black" />
                        <Text style={styles.PressTextStyle}>Tạo chiến dịch</Text>
                    </View>
                </Pressable>
            </View>


            <View style={styles.PressView}>
                <Pressable style={styles.PressStyle} onPress={() => {
                  navigation.navigate('Nhật kí');
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AntDesign style={{
                            marginLeft: 20,
                            marginRight: 15
                        }} name="codesquareo" size={30} color="black" />
                        <Text style={styles.PressTextStyle}>Chiến dịch đang tham gia</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.PressView}>
                <Pressable style={styles.PressStyle} onPress={() => {
                  navigation.navigate('Nhật kí');
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AntDesign style={{
                            marginLeft: 20,
                            marginRight: 15
                        }} name="codesquareo" size={30} color="black" />
                        <Text style={styles.PressTextStyle}>Chiến dịch đã tham gia</Text>
                    </View>
                </Pressable>
            </View>


        </View>
    )
}

const styles = {
    headerStyle: {
        height: 216,
        backgroundColor: '#024f87',
        position: 'relative'
    },
    headerImage: {
        position: 'absolute',
        top: 30,
        left: 85,
        width: 250,
        height: 220
    },
    textStyles: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        padding: 10,
        marginTop: 20
    },
    PressStyle: {
        backgroundColor: '#fff',
        width: 350,
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    PressTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    PressView: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15
    }
}
