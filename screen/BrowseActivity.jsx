import React from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BrowseActivity({ navigation }) {
    return (
        <View>

            <View style={{
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative'
            }}>
                <View>
                    <AntDesign name="bells" size={24} color="black" />
                    <Text style={{
                        color: 'red',
                        position: 'absolute',
                        fontSize: 40,
                        top: -22,
                        right: 0
                    }}>•</Text>
                </View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 5
                }}>Các hoạt động chờ được duyệt duyệt</Text>
            </View>

            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopColor: 'lightgray',
                borderTopWidth: 1,
                paddingTop: 10,
                marginTop: 10
            }} onPress={() => {
                navigation.push('BrowseActivityDetail')
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginLeft: 10,
                    marginRight: 10
                }} source={{ uri: 'https://i.pravatar.cc/300?img=5' }} />
                <View>
                    <Text><Text style={{ fontWeight: 'bold' }}>Hoạt động:</Text> Mua lương thực</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Thời gian:</Text> 7:30AM - 05/10/2021</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Người đăng:</Text> Đỗ Thị Thảo</Text>
                </View>
            </Pressable>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopColor: 'lightgray',
                borderTopWidth: 1,
                paddingTop: 10,
                marginTop: 10
            }} onPress={() => {
                navigation.push('BrowseActivityDetail')
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginLeft: 10,
                    marginRight: 10
                }} source={{ uri: 'https://i.pravatar.cc/300?img=8' }} />
                <View>
                    <Text><Text style={{ fontWeight: 'bold' }}>Hoạt động:</Text> Mua vật dụng đóng gói</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Thời gian:</Text> 11:30AM - 05/10/2021</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Người đăng:</Text> Lê Thành Tín</Text>
                </View>
            </Pressable>
            <Pressable style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopColor: 'lightgray',
                borderTopWidth: 1,
                paddingTop: 10,
                marginTop: 10
            }} onPress={() => {
                navigation.push('BrowseActivityDetail')
            }}>
                <Image style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginLeft: 10,
                    marginRight: 10
                }} source={{ uri: 'https://i.pravatar.cc/300?img=7' }} />
                <View>
                    <Text><Text style={{ fontWeight: 'bold' }}>Hoạt động:</Text> Thuê phương tiện</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Thời gian:</Text> 5:00AM - 06/10/2021</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Người đăng:</Text> Nguyễn Văn An</Text>
                </View>
            </Pressable>

        </View>
    )
}
