import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Pressable } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, Entypo, Feather, FontAwesome5, FontAwesome, Octicons } from '@expo/vector-icons';

export default function UserInfo({navigation}) {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'column', height: 250, paddingTop: 60, backgroundColor: '#C0C0C0', alignItems: 'center' }}>
        <View style={{ height: 2 }}></View>
        <Image
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/s403x403/246226675_4534604516599582_8634563701159754105_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=l9TTmYnkUqkAX-Dt20C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=c66445c46d4f98da5e93d95ad067ac43&oe=61933059'
          }}
          style={{ width: 100, height: 100, borderRadius: 100 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 10 }}>Lê Duy Tuấn Vũ</Text>
      </View>
      <Pressable onPress={() => {
        navigation.push('PersonalInfo');
      }} style={{ position: 'absolute', right: 25, top: 50 }}><Ionicons name="settings-outline" size={24} color="black" /></Pressable>
      {/* <View style={{ position: 'absolute', left: 16, top: 38 }}><Ionicons name="arrow-back" size={24} color="black" /></View> */}
      <View style={{ position: 'absolute', right: 160, top: 140, height: 25, width: 25, borderRadius: 100, backgroundColor: '#EEEEEE', alignItems: 'center', justifyContent: 'center' }}><Feather name="camera" size={14} color="black" /></View>


      <Pressable onPress={() => {
        navigation.push('PersonalInfo');
      }} style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons name="account-circle" size={30} color="grey" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Thông tin người dùng</Text>
        </View> 
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </Pressable>
      <Pressable onPress={() => {
        navigation.push('Login');
      }} style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="logout" size={30} color="red" />
          <Text style={{ fontSize: 18, marginLeft: 5, color:'red' }}>Đăng Xuất</Text>
        </View> 
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </Pressable>
      
     
    </ScrollView >

  );
}