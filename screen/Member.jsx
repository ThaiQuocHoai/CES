import React, { useState } from 'react';
import { View, useWindowDimensions, Text, Pressable, Image, Modal, StyleSheet, TextInput } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';


// const [visible, setIsVisible] = useState(false);
// const [index, setIndex] = useState(0);

const FirstRoute = () => {

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <Pressable style={{
                width: '100%',
                height: 40,
                paddingTop: 15,
                paddingBottom: 20,
            }} onPress={() => {
                setModalVisible(!modalVisible);
            }}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}><AntDesign name="adduser" size={24} color="green" />  Thêm thành viên</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.modalText, { fontSize: 25, fontWeight: 'bold' }]}>Thêm thành viên</Text>
                        <Text>Nhập số điện thoại:</Text>


                        <View >
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 300,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginBottom: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    justifyContent: 'flex-start',
                                }}
                                placeholder="Nhập số điện thoại"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '100%',
                            marginTop: 20
                        }}>
                            <Pressable
                                style={{
                                    width: 100,
                                    height: 50,
                                    backgroundColor: 'red',
                                    borderRadius: 10
                                }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingTop: 12

                                }}>Huỷ</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    width: 100,
                                    height: 50,
                                    backgroundColor: 'green',
                                    borderRadius: 10
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.goBack('BrowseActivity')
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingTop: 12

                                }}>Thêm</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>

            <View style={{
                marginTop: 20,
                paddingLeft: 20
            }}>
                <Pressable style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=3' }} />
                    <View>
                        <Text style={{ fontSize: 20, paddingLeft: 20 }}>Lê Duy Tuấn Vũ</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Người phụ trách</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=4' }} />
                    <View>
                        <Text style={{ fontSize: 20, paddingLeft: 20 }}>Nguyễn Văn An</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Thành viên</Text>
                    </View>
                </Pressable>
                <Pressable style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=5' }} />
                    <View>
                        <Text style={{ fontSize: 20, paddingLeft: 20 }}>Đỗ Thị Thảo</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Thành viên</Text>
                    </View>
                </Pressable>
            </View>

        </View>);
};

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
        {/* <Pressable style={{
            width: '100%',
            height: 40,
            paddingTop: 15,
            paddingBottom: 20,
        }}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}><AntDesign name="adduser" size={24} color="green" />  Thêm quản trị viên</Text>
        </Pressable> */}
        <View style={{
            marginTop: 20,
            paddingLeft: 20
        }}>
            <Pressable style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=3' }} />
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Lê Duy Tuấn Vũ</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Người phụ trách</Text>
                </View>
            </Pressable>
        </View>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function Member({ navigation }) {




    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tất cả' },
        { key: 'second', title: 'Người phụ trách' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#000' }}
            style={{ backgroundColor: 'white' }}
            activeColor='black'
            inactiveColor='black'
        />
    );

    return (
        // <View>


        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}

        />


        // </View >
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // paddingBottom: 50
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        // paddingBottom: 50
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});