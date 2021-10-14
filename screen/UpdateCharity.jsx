import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UpdateCharity({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={24} color="black" style={{
                paddingTop: 50,
                marginLeft: -330
            }} />
            <View elevation={5} style={styles.buttonContainer}>
                <Text style={styles.textStyle}>ĐĂNG KÍ TÀI KHOẢN</Text>

                <Text style={{
                    paddingLeft: 12,
                    paddingTop: 20
                }}>Tên tài khoản</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập tên tài khoản"
                    keyboardType="ascii-capable"
                />

                <Text style={{
                    paddingLeft: 12,
                    // paddingTop: 20
                }}>Mật khẩu</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập mật khẩu"
                    // keyboardType="ascii-capable"
                    keyboardType="ascii-capable"
                />

                <Text style={{
                    paddingLeft: 12,
                    // paddingTop: 20
                }}>Nhập lại mật khẩu</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập lại mật khẩu"
                    keyboardType="visible-password"

                />


                <Text style={{
                    paddingLeft: 12,
                    // paddingTop: 20,
                }}>Họ và tên</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập họ và tên"
                    keyboardType="ascii-capable"
                />

                <Text style={{
                    paddingLeft: 12,
                    // paddingTop: 20
                }}>Số điện thoại</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập số điện thoại"
                    keyboardType="numeric"
                />

                <Text style={{
                    paddingLeft: 12,
                    // paddingTop: 20
                }}>Địa chỉ</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập địa chỉ"
                    keyboardType="ascii-capable"
                />





                <View style={{
                    width: 300,
                    paddingLeft: 11,
                    paddingTop: 10,
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    <Button title="Hủy bỏ" onPress={console.log('hih')} />
                    <View style={{ width: 10 }}></View>
                    <Button title="Đăng kí ngay" onPress={console.log('demo')} />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        marginTop: 10,
        color: '#FFFFFF',
        // alignItems: 'center',
        // justifyContent: 'center',
        fontSize: 22,
        textAlign: 'center',
        color: 'black'
    },
    buttonContainer: {
        marginTop: 20,
        height: 635,
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#808080'
    },
});
