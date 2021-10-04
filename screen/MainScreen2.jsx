import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import logo from '../assets/images/LOGO.png'
import { AntDesign } from '@expo/vector-icons';

export default function MainScreen2(props) {
    return (
        <View style={{ position: 'relative' }}>
            <StatusBar backgroundColor="#013459" style="light"/>
            <View style={styles.headerStyle}>
                <Image style={styles.headerImage} source={logo} />
            </View>
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
                    paddingRight: 50
                }}
            />
            <Pressable style={{
                position: 'absolute',
                top: 232,
                right: 65
            }} onPress={() => {
                alert('abc')}
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
        top: 65,
        left: 20,
        width: 350,
        height: 150
    },
    textStyles : {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        padding: 10
    }
}
