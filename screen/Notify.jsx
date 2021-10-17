import React from 'react'
import { Image, ScrollView, Text, View, Pressable } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function Notify({ navigation }) {

    const data = [
        {
            name: 'Lê Tuấn Vũ',
            avatar: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s403x403/246226675_4534604516599582_8634563701159754105_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=l9TTmYnkUqkAX-Dt20C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c66445c46d4f98da5e93d95ad067ac43&oe=61933059',
            chienDich: 'Tiếp Tế Lương Thực Cho TP.HCM'
        },
        {
            name: 'Lê Thành Tín',
            avatar: 'https://images-ext-2.discordapp.net/external/PMn0Boa3FhodttuIfEEiydVH2eQ5fbH_C76gc7O2Vf4/%3F_nc_cat%3D104%26ccb%3D1-5%26_nc_sid%3Da4a2d7%26_nc_ohc%3DHOK8vI6lClAAX_bswBy%26_nc_ht%3Dscontent.fdad1-3.fna%26oh%3De8884d3520fa43e2bfa02ec3055ae88a%26oe%3D61891B0C/https/scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/45658215_610315329386682_5998322733996310528_n.jpg?width=556&height=556',
            chienDich: 'Xây Cầu Bảng chang ở Cao bằng'
        },
        {
            name: 'Đỗ Thị Thảo',
            avatar: 'https://i.pravatar.cc/300?img=5',
            chienDich: 'Hướng về miền trung'
        },
    ]

    const renderNoti = () => {
        return data.map((item, index) => {
            return <Pressable key={index} onPress={() => {
                navigation.push('BrowseActivityDetail')
            }} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
                width: '95%',
                height: 90,
                backgroundColor: '#fff',
                // paddingTop: 10,
                borderRadius: 20,
                alignItems: 'center',

            }}>
                <View style={{
                    flexDirection: 'row',
                    position: 'relative'
                }}>
                    <Image style={{
                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginRight: 20
                    }} source={{
                        uri: `${item.avatar}`
                    }} />
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 50,
                        backgroundColor: 'blue',
                        borderRadius: 50,
                        padding: 5
                    }}>
                        <FontAwesome5 name="users" size={12} color="white" />
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                width: 300,
                                lineHeight: 20
                            }}>Hoạt động của {item.name} đang chờ duyệt trong <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{item.chienDich}</Text> </Text>

                        </View>
                        <Text style={{
                            fontStyle: 'italic'
                        }}>30 phút trước</Text>
                    </View>
                </View>


            </Pressable>


        })
    }


    return (
        <ScrollView contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <View style={{marginBottom: 15}}></View>
            {renderNoti()}

        </ScrollView>
    )
}
