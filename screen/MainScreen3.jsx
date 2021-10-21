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
                    navigation.navigate('Detail', {
                        item: {
                            code: "covidhcm2021",
                            title: "Tiếp Tế Lương Thực Cho TP.HCM",
                            total: 305000000,
                            owner: "Lê Duy Tuấn Vũ",
                            date: "18/09/2021",
                            imgURL:
                                "https://static2.yan.vn/YanNews/2167221/202108/20210822_102423_nnel_optimized91f368de-3e2f830b.jpeg",
                            status: "Đang tiến hành",
                            progress: 50,
                        },
                    });
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AntDesign style={{
                            marginLeft: 20,
                            marginRight: 15
                        }} name="codesquareo" size={30} color="black" />
                        <Text style={styles.PressTextStyle}>Chiến dịch đang tiến hành</Text>
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
                        <Text style={styles.PressTextStyle}>Tất cả chiến dịch</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        padding: 10,
        marginTop: 20,
        color: '#000'
    },
    PressStyle: {
        backgroundColor: 'white',
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
        fontWeight: 'bold',
        // color: '#fff'
    },
    PressView: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15
    }
}
