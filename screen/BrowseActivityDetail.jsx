import React, { useState, useEffect } from 'react'
import { Alert, Image, Pressable, Text, View, Modal, StyleSheet, LogBox, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";
import { SimpleLineIcons, Ionicons, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function BrowseActivityDetail({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Thiếu thông tin', value: 'doan' },
        { label: 'Thông tin chưa chính xác', value: 'qua' },
        { label: 'Hình ảnh không rõ ràng', value: 'phuongtien' },
        // { label: 'Tiền trợ cấp', value: 'trocap' },
        { label: 'Lí do khác', value: 'khac' },
    ]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const images = [
        {
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZV0_1Ufe0Ghf_m4RLxhKdZT0kDEZJHCjlA&usqp=CAU",
        },
        {
            uri: "https://images-ext-2.discordapp.net/external/y63u_6sANNiEMLh0-47ras_jtnPNkRw5da14BM3LGSA/https/www.baolongan.vn/image/news/2018/20181109/images/Ngh%25E1%25BB%2581-b%25E1%25BB%2591c-v%25C3%25A1c-n%25E1%25BA%25B7ng-nh%25E1%25BB%258Dc-v%25C3%25A0-ch%25E1%25BB%258Bu-nhi%25E1%25BB%2581u-thi%25E1%25BB%2587t-th%25C3%25B2i.jpg?width=545&height=556",
        },
        {
            uri: "https://images-ext-2.discordapp.net/external/CtBSrJaSLDpEHcEqD1HebX9KsFHzM8lQwcUVZGFWCHk/%3Fw%3D1200%26h%3D0%26q%3D100%26dpr%3D1%26fit%3Dcrop%26s%3D3pXkq-JuIXgn2JBctxJdqQ/https/vcdn1-vnexpress.vnecdn.net/2020/04/09/Phat-gao-tu-thien-5-1586419341.jpg?width=828&height=556",
        },
        {
            uri: "https://images-ext-1.discordapp.net/external/jw6mrWzHRx8_-h-gx_euA_QIdAYXffkxKkPdl9jk18M/%3Fq%3Dtbn%3AANd9GcTXDAQAjLOJDD8cek-z1kEAQqel0pOc0BovaA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        },
        {
            uri: "https://gaotuananh.vn/wp-content/uploads/2021/06/gao-tu-thien-1-571x400.jpg",
        },

    ];

    const renderImageHeader = () => {
        return images.map((item, index) => {
            return <Pressable key={index} onPress={() => {
                setIndex(index);
                setIsVisible(true);
            }}>
                <Image style={{ width: 200, height: 200 }} source={item} />
            </Pressable>
        })
    }


    return (
        <ScrollView style={{
            backgroundColor: '#fff'
        }}>
            <View style={{
                display: "flex",
                flexDirection: 'row'
            }}>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }}>
                    <Image style={{ width: 212, height: 200 }} source={images[0]} />

                </Pressable>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }}>
                    <Image style={{ width: 100, height: 100 }} source={images[1]} />
                    <Image style={{ width: 100, height: 100 }} source={images[2]} />
                </Pressable>
                <Pressable onPress={() => {
                    setIsVisible(true);
                }} style={{
                    position: 'relative'
                }}>
                    <Pressable onPress={() => {
                        setIsVisible(true);
                    }}>
                        <Image style={{ width: 100, height: 100 }} source={images[3]} />
                        <Image style={{ width: 100, height: 100 }} source={images[4]} />

                    </Pressable>
                    <View style={{
                        position: 'absolute',
                        backgroundColor: '#000',
                        width: 100,
                        height: 100,
                        bottom: 0,
                        opacity: .5
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: '#fff',
                            zIndex: 999,
                            elevation: 999,
                            paddingTop: 25,
                            paddingLeft: 25,
                        }}>+3</Text>
                    </View>
                </Pressable>
            </View>
            <ImageView
                images={images}
                imageIndex={index}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />

            <View style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'row'
            }}>
                <SimpleLineIcons name="note" size={24} color="black" />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: 5
                }}>Thông tin</Text>



            </View>

            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20,
                }}>
                    <Ionicons name="location-outline" size={24} color="#0F6657" />
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 5,
                        fontSize: 15
                    }}>Địa điểm thực hiện:</Text>

                </View>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 20
                }}>
                    230 đường Man Thiện, TP. thủ đức, TP. Hồ Chí Minh</Text>
            </View>
            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <AntDesign name="clockcircleo" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Thời gian: </Text>
                        19/09/2021</Text>
                </View>

            </View>
            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <MaterialIcons name="attach-money" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Tổng số tiền đã chi: </Text>
                        50,000,000 VNĐ</Text>
                </View>

            </View>
            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <MaterialIcons name="attach-money" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Nguời đăng: </Text>
                        Lê Tuấn Vũ</Text>
                </View>

            </View>

            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <AntDesign name="filetext1" size={24} color="#0F6657" />
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 5,
                        fontSize: 15
                    }}>Mô tả chi tiết:</Text>

                </View>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 5:00AM 19/09/2021 đã mua 100 bao gạo, mỗi bao 50kg giá 500.000VNĐ/bao tại tạp hóa Phương Linh Quận 9 TP HCM. Tổng cộng 50,000,000 VNĐ</Text>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20
            }}>
                <Pressable style={{
                    backgroundColor: 'white',
                    width: 120,
                    height: 40,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'red',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => {
                    setModalVisible(true);

                    // Alert.alert(
                    //     "Từ chối phê duyệt",
                    //     "Bạn muốn từ chối phê duyệt hoạt động này?",
                    //     [
                    //       {
                    //         text: "Huỷ",
                    //         style: "cancel"
                    //       },
                    //       { text: "Đồng ý", onPress: () => {
                    //           navigation.goBack('BrowseActivity')
                    //       } }
                    //     ]
                    //   );
                }}>
                    <AntDesign name="closecircleo" size={24} color="red" />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: 'red',
                        marginLeft: 5
                    }}>Từ chối</Text>
                </Pressable>
                <Pressable style={{
                    backgroundColor: 'white',
                    width: 120,
                    height: 40,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'green',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => {
                    Alert.alert(
                        "Duyệt hoạt động",
                        "Bạn muốn duyệt hoạt động này?",
                        [
                            {
                                text: "Huỷ",
                                style: "cancel"
                            },
                            {
                                text: "Đồng ý", onPress: () => {
                                    navigation.goBack('BrowseActivity')
                                }
                            }
                        ]
                    );
                }}>
                    <AntDesign name="checkcircleo" size={24} color="green" />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        color: 'green',
                        marginLeft: 5
                    }}>Duyệt</Text>
                </Pressable>
            </View>
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
                        <Text style={[styles.modalText, { fontSize: 15, fontWeight: 'bold' }]}>Bạn muốn từ chối hoạt động này?</Text>
                        <Text>Chọn lí do:</Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={{
                                borderColor: 'gray',
                                width: 300,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10
                            }}
                            placeholder='-- Chọn lí do --'
                        />

                        {value === 'khac' ? <View >
                            <Text style={{
                                marginTop: 20
                            }}>Nhập lí do khác</Text>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 300,
                                    // height: 80,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    justifyContent: 'flex-start',
                                }}
                                placeholder=""
                                multiline={true}
                                numberOfLines={7}
                            />
                        </View> : null}

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '100%',
                            marginTop: 40
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
                                    navigation.push('BrowseActivity')
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingTop: 12

                                }}>Xác nhận</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        paddingBottom: 50
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
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 50
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
