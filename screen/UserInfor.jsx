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
            uri: 'https://images-ext-1.discordapp.net/external/1LVhXTnrhFqevdoc5GVdJOU9DkkbuinkNbsnX3LmT7k/https/lh5.googleusercontent.com/gCwD9XfgM3Ztbbfy9etvclfTRbYKqkWMQM3QZrQzijYk14jNrFQsPx0rgYWnnf1ZfAmb0uPIANh0AC7skyD5%3Dw1920-h913-rw?width=418&height=556'
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
      <View
        style={{
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 0.3,
          marginLeft: 25,
          marginRight: 25,
          paddingTop: 5,
          paddingBottom: 9,
        }}
      />
      <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="checkcircle" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}> Chiến dịch đang tham gia</Text>
        </View>
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </View>
      <View
        style={{
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 0.3,
          marginLeft: 25,
          marginRight: 25,
          paddingTop: 5,
          paddingBottom: 9,
        }}
      />
      <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="checkcircle" size={24} color="green" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}> Chiến dịch đã tham gia</Text>
        </View>
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </View>
      <View
        style={{
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 0.3,
          marginLeft: 25,
          marginRight: 25,
          paddingTop: 5,
          paddingBottom: 9,
        }}
      />
      <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="add-to-list" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}> Hoạt động đang chờ kiểm duyệt</Text>
        </View>
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </View>
      <View
        style={{
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 0.3,
          marginLeft: 25,
          marginRight: 25,
          paddingTop: 5,
          paddingBottom: 9,
        }}
      />
      <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20, paddingBottom: 10, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Octicons name="checklist" size={24} color="green" />
          <Text style={{ fontSize: 18, marginLeft: 5, color: 'black' }}> Hoạt động đã đăng</Text>
        </View>
        <Entypo name="chevron-small-right" size={30} color="black" style={{ marginRight: 10 }} />
      </View>
      <View
        style={{
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 0.3,
          marginLeft: 25,
          marginRight: 25,
          paddingTop: 5,
          paddingBottom: 9,
        }}
      />
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ padding: 10, backgroundColor: 'red', width: 150, textAlign: 'center', borderRadius: 10, color: 'white', fontWeight: 'bold' }}>Đăng Xuất</Text>
      </View>
    </ScrollView >

  );
}