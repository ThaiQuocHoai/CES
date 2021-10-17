import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Image, Pressable, Dimensions, ScrollView } from 'react-native';
import logo from '../assets/images/LOGO.png'
import { nhatki } from '../util/nhatki';
import * as Progress from 'react-native-progress';
import { AntDesign } from '@expo/vector-icons';

const itemWidth = Dimensions.get('window').width;

const renderNhatKi = (navigation) => {
    return nhatki.map((item, index) => {
        return <Pressable key={index} style={styles.container} onPress={() => {
          navigation.push("Detail", {item: item});
        }}>
            <Image
                source={{ uri: item.imgURL }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.title.length > 30 ? String.prototype.concat(item.title.substring(0, 30), "...") : item.title}</Text>
            <Text style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontStyle: 'italic',
                color: 'rgba(33,33,33,.7)'
            }}>Quỹ từ thiện <Text style={{
                fontWeight: 'bold'
            }}>{item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</Text></Text>
            <Text style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontStyle: 'italic',
                color: 'rgba(33,33,33,.7)'
            }}>Đăng Bởi: <Text style={{
                fontWeight: 'bold',
                color: 'rgba(33,33,33,.7)'
            }}>{item.owner}</Text></Text>
            <Text style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontStyle: 'italic',
                color: 'rgba(33,33,33,.7)'
            }}>Trạng thái: <Text style={{
                fontWeight: 'bold',
                color: 'rgba(33,33,33,.7)'
            }}>{item.status}</Text></Text>
            <Text style={{
                paddingLeft: 20,
                paddingTop: 7,
                fontStyle: 'italic',
                fontSize: 10,
                color: 'rgba(33,33,33,.7)'
            }}>Ngày đăng: <Text style={{
                fontSize: 12,
                color: 'rgba(33,33,33,.7)'
            }}>{item.date}</Text></Text>
            <Progress.Circle showsText color="green" formatText={() => {
                return item.progress + "%"
            }} progress={item.progress / 100} size={70} width={500} style={{
                position: 'absolute',
                bottom: 45,
                left: '75%'
            }} />
            <Text style={{
                position: 'absolute',
                bottom: 20,
                right: 35,
                paddingLeft: 20,
                paddingTop: 7,
                fontStyle: 'italic',
                color: 'rgba(33,33,33,.7)'
            }}>Tiến độ</Text>
        </Pressable>
    })
}


export default function MainScreen({navigation}) {
    return (
        <View>
            <ScrollView>
                {/* <StatusBar backgroundColor="#013459" /> */}
                {/* <View style={styles.headerStyle}>
                    <Image style={styles.headerImage} source={logo} />
                </View> */}
                <View style={{
                    paddingLeft: 20,
                    paddingTop: 10
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'rgba(33,33,33,.7)'
                    }}>Các chiến dịch đang tham gia</Text>
                </View>

                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 20,
                    borderRadius: 5,
                    marginTop: 20,
                }}>
                    {renderNhatKi(navigation)}
                </View>
            </ScrollView>
            <Pressable style={{
                position: 'absolute',
                bottom: 10,
                right: 30,
                elevation: 99,
                backgroundColor: '#ff8224',
                width: 60,
                height: 60,
                borderRadius: 50
            }} onPress={() => {
              navigation.push('CreateActivity')
            }}>
                <Text style={{
                    textAlign: 'center',
                    lineHeight: 60,
                    
                }}><AntDesign style={{
                    fontWeight: 'bold'
                }} name="plus" size={35} color="white" /></Text>
            </Pressable>
        </View>
    )
}

const styles = {
    headerStyle: {
        height: 216,
        backgroundColor: '#d7dff8',
        position: 'relative',
        color: 'rgba(33,33,33,.7)'
    },
    headerImage: {
        position: 'absolute',
        top: 65,
        left: 20,
        width: 350,
        height: 150
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: itemWidth - 40,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        position: 'relative',
        color: 'rgba(33,33,33,.7)',
        marginBottom: 20
    },
    image: {
        width: itemWidth - 40,
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    header: {
        color: "#222",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 10,
        color: 'rgba(33,33,33,.7)'
    },
}
