import React, { useState, useEffect, useRef } from 'react'
import { Text, TextInput, View, Pressable, Alert, Image, ScrollView, SafeAreaView, LogBox } from 'react-native';
import { SimpleLineIcons, EvilIcons, MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { AssetsSelector } from 'expo-images-picker'
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateSubActivity({ navigation }) {
    const refRBSheet = useRef();

    const day = new Date();

    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [dateChoose2, setDateChoose2] = useState(day)



    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const handleConfirm2 = (date) => {
        setDateChoose2(date);
        hideDatePicker2();
    };

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const pickImageLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    const ModalPicker = () => {
        return <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
        }}>
            <View>
                <View style={{
                    backgroundColor: '#fff',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    width: 390,
                    height: 210,
                    marginTop: 10,
                    borderRadius: 20,

                }}>
                    <View>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 20,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgray',
                            paddingLeft: 30,
                            paddingBottom: 20
                        }} onPress={() => {
                            pickImageCamera();
                            refRBSheet.current.close();
                        }}>
                            <Ionicons name="camera-outline" size={30} color="#1976d2" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10
                            }}>Sử dụng máy ảnh</Text>
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 15,
                            paddingLeft: 30,
                            paddingBottom: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: 'lightgray',
                        }} onPress={() => {
                            pickImageLibrary();
                            refRBSheet.current.close();
                        }}>
                            <Ionicons name="ios-image-outline" size={30} color="#1976d2" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10
                            }}>Chọn ảnh từ thư viện</Text>
                        </Pressable>
                        <Pressable style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 15,
                            paddingLeft: 30,
                            paddingBottom: 15
                        }} onPress={() => {
                            refRBSheet.current.close();
                        }}>
                            <MaterialCommunityIcons name="cancel" size={30} color="red" />
                            <Text style={{
                                fontSize: 20,
                                marginLeft: 10,
                                color: '#e53935'
                            }}>Hủy bỏ</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Mua sắm lương thực', value: 'doan' },
        { label: 'Phát quà', value: 'qua' },
        { label: 'Thuê phương tiện', value: 'phuongtien' },
        { label: 'Tiền trợ cấp', value: 'trocap' },
        { label: 'Hoạt động khác', value: 'khac' },
    ]);

    return (
        <ScrollView>
            <View style={{
                // display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10
            }}>
                <SimpleLineIcons name="notebook" size={24} color="green" />
                <Text style={{
                    marginLeft: 5,
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>Thông tin hoạt động</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{
                    marginTop: 10,
                    // marginLeft: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.44,
                    shadowRadius: 10.32,

                    elevation: 16,
                    width: 370,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingTop: 10,
                    paddingLeft: 10
                }}>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>

                            <MaterialIcons name="campaign" size={24} color="#024f87" />
                            <Text style={{
                                marginLeft: 5
                            }}>Hoạt động  <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>

                        <SafeAreaView>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={{
                                    borderColor: 'gray',
                                    width: 310,
                                    height: 40,
                                    // borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    // marginLeft: 20
                                }}
                                containerStyle={{
                                    width: 310,
                                    marginLeft: 20
                                }}
                                placeholder='Chọn hoạt động'
                            />
                        </SafeAreaView>
                    </View>
                    {value === 'khac' ? <View >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                        <MaterialIcons name="drive-file-rename-outline" size={24} color="#024f87" />
                            <Text style={{ marginLeft: 5 }}>Tên hoạt động  <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 310,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                marginBottom: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                                marginLeft: 20
                            }}
                            placeholder="Nhập tên hoạt động"
                        />
                    </View> : null}

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 10
                        }}>
                            <EvilIcons name="location" size={24} color="#024f87" />
                            <Text>Địa điểm thực hiện hoạt động <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 310,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                marginLeft: 20,
                                borderRadius: 10
                            }}
                            placeholder="Nhập địa điểm"
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <MaterialIcons name="attach-money" size={24} color="#024f87" />
                            <Text>Tổng số tiền đã chi <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 310,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                marginLeft: 20,
                                borderRadius: 10
                            }}
                            placeholder="Nhập tổng số tiền"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 5
                        }}>
                            <AntDesign name="clockcircleo" size={20} color="#024f87" />
                            <Text style={{ marginLeft: 5 }}>Thời gian <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                        <Pressable onPress={showDatePicker2}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 310,
                                height: 40,
                                borderRadius: 10,
                                paddingTop: 10,
                                color: '#000',
                                // textAlign: 'center',
                                marginLeft: 20,
                                marginTop: 10,
                                paddingLeft: 15
                            }}>
                                Vào lúc {moment(dateChoose2).format('hh:mmA ')}
                                - {moment(dateChoose2).format('DD/MM/YYYY ')}
                            </Text>
                        </Pressable>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible2}
                            mode="datetime"
                            onConfirm={handleConfirm2}
                            onCancel={hideDatePicker2}
                            date={dateChoose2}
                        />
                    </View>
                    <View style={{
                        marginTop: 10,
                        paddingBottom: 30
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <MaterialIcons name="description" size={24} color="#024f87" />
                            <Text style={{ marginLeft: 5 }}>Mô tả chi tiết <Text style={{ color: 'red' }}>*</Text></Text>
                        </View>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <TextInput
                                multiline={true}
                                numberOfLines={100}
                                style={{
                                    borderColor: 'gray',
                                    width: 310,
                                    height: 130,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    textAlignVertical: 'top',
                                    marginTop: 10,
                                    paddingTop: 10,
                                    marginRight: 10
                                }}
                                placeholder="Nhập mô tả chi tiết"
                            />
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="camerao" size={24} color="#024f87" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Hình ảnh  <Text style={{ color: 'red' }}>*</Text>
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderStyle: 'dashed',
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 1,
                                height: 130,
                                marginTop: 15,
                                marginRight: 10
                            }}>
                                <Pressable onPress={() => refRBSheet.current.open()} style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }} >
                                    <MaterialIcons name="file-upload" size={40} color="gray" />
                                    <Text style={{
                                        marginLeft: 5,
                                        color: 'gray',
                                    }}>{image ? 'Chọn ảnh khác' : 'Thêm hình ảnh'}</Text>
                                </Pressable>
                            </View>
                            {image && <Image source={{ uri: image }} style={{ width: 350, height: 200, marginTop: 10 }} />}
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#000"
                                }}
                            >
                                <RBSheet
                                    ref={refRBSheet}
                                    height={270}
                                    closeOnDragDown={true}
                                    closeOnPressMask={false}
                                    customStyles={{
                                        wrapper: {
                                            backgroundColor: "transparent"
                                        },
                                        draggableIcon: {
                                            backgroundColor: "#000"
                                        }
                                    }}
                                    closeOnPressMask={true}
                                >
                                    <ModalPicker />
                                </RBSheet>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: 20,
                    marginBottom: 30,

                }}>
                    <Pressable style={{
                        backgroundColor: 'green',
                        width: 170,
                        height: 50,
                        borderRadius: 5
                    }} onPress={async () => {
                        await Alert.alert(
                            "Thông báo",
                            "Hoạt động của bạn đang chờ duyệt!",
                        );
                        navigation.goBack('CharityDetail');
                    }
                    }>
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingTop: 10,

                        }}>Tạo hoạt động</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView >
    )
}
