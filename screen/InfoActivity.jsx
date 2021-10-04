import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function InfoActivity({navigation}) {



    return (
        <View style={{
            paddingTop: 10
        }}>
            <Pressable style={{
                marginBottom: 10,
                paddingTop: 10,
                display: 'flex',
                justifyContent: 'center',
                borderBottomColor: 'lightgray',
                paddingBottom: 10,
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,

            }} onPress={() => {
              navigation.push('Member');
            }}>
                <Text style={{
                    marginLeft: 20,
                    fontSize: 18
                }}><AntDesign name="team" size={24} color="blue" />  Thành Viên</Text>
            </Pressable>
            <Pressable style={{
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                borderBottomColor: 'lightgray',
                paddingBottom: 10,
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,

            }}>
                <Text style={{
                    marginLeft: 20,
                    fontSize: 18
                }}><AntDesign name="plus" size={24} color="green" />  Thêm Hoạt Động </Text>
            </Pressable>
            <Pressable style={{
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                borderBottomColor: 'lightgray',
                paddingBottom: 10,
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,

            }}>
                <Text style={{
                    marginLeft: 20,
                    fontSize: 18
                }}><AntDesign name="check" size={24} color="orange" />  Duyệt Hoạt Động </Text>
            </Pressable>
           
        

        </View>
    )
}
