import React, { useState, useEffect, useRef, Children } from 'react'
import { Text, View, TextInput, Pressable, Platform, Button, ScrollView, StatusBar, Image, Alert, SafeAreaView, LogBox } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome, SimpleLineIcons, Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateActivity({ navigation }) {

    const refRBSheet = useRef();
    //
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
    //
    const day = new Date();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
    const [dateChoose, setDateChoose] = useState(day)
    const [dateChoose2, setDateChoose2] = useState(day)
    const [dateChoose3, setDateChoose3] = useState(day)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };
    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const showDatePicker3 = () => {
        setDatePickerVisibility3(true);
    };
    const hideDatePicker3 = () => {
        setDatePickerVisibility3(false);
    };
    const handleConfirm = (date) => {
        setDateChoose(date);
        hideDatePicker();
    };
    const handleConfirm2 = (date) => {
        setDateChoose2(date);
        hideDatePicker2();
    };
    const handleConfirm3 = (date) => {
        setDateChoose3(date);
        hideDatePicker3();
    };

    let [planList, setPlanList] = useState([]);
    const onAddPlan = () => {
        setPlanList(planList.concat(renderPlan()));
    }
    const onRemovePlan = (key) => {
        let plan1 = [...planList];
        const plans = plan1.splice(0, key);
        setPlanList(plans);
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

    const [isDisplay, setIsDisplay] = useState('none');


    const renderPlan = () => {
        return <View key={planList.length} style={{
            margin: 10,
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            borderStyle: 'dashed',
            position: 'relative'
        }}>
            <Pressable style={{
                position: 'absolute',
                top: 5,
                right: 10
            }} onPress={() => {
                onRemovePlan(planList.length);
            }}>
                <Ionicons name="ios-close-circle-outline" size={40} color="black" />
            </Pressable>
            <Text style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: 'bold'
            }}>Hoạt động {planList.length + 1}</Text>

            <View style={{ marginTop: 10 }}>
                <Text>Hoạt động</Text>
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
                />
            </View>

            <Text>Địa điểm</Text>
            <TextInput
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
                placeholder="Nhập địa điểm"
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10
            }}>

                <View>
                    <Text>Thời gian</Text>
                    <Pressable onPress={showDatePicker2}>
                        <Text style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            width: 110,
                            height: 40,
                            borderRadius: 10,
                            paddingTop: 10,
                            color: '#000',
                            textAlign: 'center',
                            marginTop: 10
                        }}>
                            {moment(dateChoose2).format('DD/MM/YYYY')}
                        </Text>
                    </Pressable>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible2}
                        mode="date"
                        onConfirm={handleConfirm2}
                        onCancel={hideDatePicker2}
                        date={dateChoose2}
                    />
                </View>
                <View style={{
                    marginLeft: 10
                }}>
                    <Text>Số tiền dự tính</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 180,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            // marginLeft: 20,
                            borderRadius: 10,
                        }}
                        placeholder="Nhập số tiền"
                        keyboardType="numeric"
                    />
                </View>

            </View>
            <View style={{
                marginTop: 10,
                marginBottom: 20
            }}>
                <Text>Người thực hiện</Text>
                <TextInput
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
                    placeholder="Nhập họ và tên"
                />
            </View>
        </View>
    }

    const renderAllPlan = () => {
        return planList.map((plan, index) => {
            return <View key={index} style={{
                margin: 10,
                marginLeft: 20,
                marginRight: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                borderStyle: 'dashed',
                position: 'relative'
            }}>
                <Pressable style={{
                    position: 'absolute',
                    top: 5,
                    right: 10
                }} onPress={() => {
                    onRemovePlan(index);
                }}>
                    <Ionicons name="ios-close-circle-outline" size={40} color="black" />
                </Pressable>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>Hoạt động {index + 1}</Text>

                <View style={{ marginTop: 10 }}>
                    <Text>Hoạt động</Text>
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
                                width: 300,
                                height: 40,
                                // borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                                marginBottom: 10,
                            }}
                            containerStyle={{
                                width: 300
                            }}
                            placeholder='Chọn hoạt động'
                        />
                    </SafeAreaView>
                </View>
                {value === 'khac' ? <View >
                    <Text>Tên hoạt động</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 300,
                            height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            // marginLeft: 20,
                            borderRadius: 10
                        }}
                        placeholder="Nhập hoạt động"
                    />
                </View> : null}
                
                <Text>Địa điểm thực hiện hoạt động</Text>
                <TextInput
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
                    placeholder="Nhập địa điểm"
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10
                }}>

                    <View>
                        <Text>Thời gian</Text>
                        <Pressable onPress={showDatePicker2}>
                            <Text style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 110,
                                height: 40,
                                borderRadius: 10,
                                paddingTop: 10,
                                color: '#000',
                                textAlign: 'center',
                                marginTop: 10
                            }}>
                                {moment(dateChoose2).format('DD/MM/YYYY')}
                            </Text>
                        </Pressable>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible2}
                            mode="date"
                            onConfirm={handleConfirm2}
                            onCancel={hideDatePicker2}
                            date={dateChoose2}
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>Số tiền dự tính</Text>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 180,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nhập số tiền"
                            keyboardType="numeric"
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <Text>Người thực hiện</Text>
                    <TextInput
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
                        placeholder="Nhập họ và tên"
                    />
                </View>
            </View>
        })
    }





    return (
        <View>
            <StatusBar backgroundColor="#013459" />
            <ScrollView>
                <View style={{
                    backgroundColor: '#fff',
                    margin: 10,
                    marginRight: 12,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                }}>
                    <View style={{
                        margin: 20
                    }}>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="drive-file-rename-outline" size={24} color="orange" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Tên chiến dịch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    borderRadius: 10
                                }}
                                placeholder="Nhập tên chiến dịch"
                            />
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="location" size={24} color="red" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Địa điểm thực hiện chiến dịch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    borderRadius: 10
                                }}
                                placeholder="Nhập địa điểm thực hiện chiến dịch"
                            />
                        </View>

                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Kế hoạch của chiến dịch <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10
                                }}
                                placeholder="Nhập kế hoạch"
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Chi tiết kế hoạch
                                </Text>
                            </View>
                            {renderAllPlan()}
                            {/* {planList} */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 20
                            }}>
                                <Pressable style={{
                                    marginTop: 10,
                                    height: 40,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#024f87',
                                    width: 150,
                                    borderRadius: 5
                                }} onPress={() => {
                                    onAddPlan();
                                }}>

                                    <SimpleLineIcons name="plus" size={24} color="white" />
                                    <Text style={{
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        color: 'white'
                                    }}>
                                        Thêm hoạt động
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name="attach-money" size={24} color="green" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Số tiền đã kêu gọi <Text style={{ color: '#d32f2f' }}>*</Text>
                                </Text>
                            </View>
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 40,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    marginTop: 10,
                                    // marginLeft: 20,
                                    borderRadius: 10
                                }}
                                placeholder="Nhập số tiền đã kêu gọi"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Foundation name="clipboard-notes" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10
                                }}>
                                    Mô tả chiến dịch<Text style={{ color: '#d32f2f' }}></Text>
                                </Text>
                            </View>
                            <TextInput
                                multiline={true}
                                numberOfLines={100}
                                style={{
                                    borderColor: 'gray',
                                    width: 350,
                                    height: 130,
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    paddingRight: 20,
                                    // marginLeft: 20,
                                    borderRadius: 10,
                                    textAlignVertical: 'top',
                                    marginTop: 10,
                                    paddingTop: 10
                                }}
                                placeholder="Nhập mô tả về chiến dịch"
                            />
                        </View>

                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginRight: 15
                                }}>
                                    Ngày bắt đầu chiến dịch:
                                </Text>
                                <Pressable onPress={showDatePicker3}>
                                    <Text style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 182,
                                        height: 40,
                                        borderRadius: 10,
                                        paddingTop: 10,
                                        color: '#000',
                                        textAlign: 'center'
                                    }}>
                                        {moment(dateChoose3).format('DD/MM/YYYY')}
                                    </Text>
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible3}
                                    mode="date"
                                    onConfirm={handleConfirm3}
                                    onCancel={hideDatePicker3}
                                    date={dateChoose3}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginRight: 10
                                }}>
                                    Ngày dự kiến hoàn thành:
                                </Text>
                                <Pressable onPress={showDatePicker}>
                                    <Text style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 182,
                                        height: 40,
                                        borderRadius: 10,
                                        paddingTop: 10,
                                        color: '#000',
                                        textAlign: 'center'
                                    }}>
                                        {moment(dateChoose).format('DD/MM/YYYY')}
                                    </Text>
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                    date={dateChoose}
                                />
                            </View>
                        </View>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="camerao" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Hình ảnh
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
                                marginTop: 15
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
                        backgroundColor: '#ff8224',
                        width: 170,
                        height: 50,
                        borderRadius: 5
                    }} onPress={async () => {
                        await Alert.alert(
                            "Thông báo",
                            "Bạn đã tạo chiến dịch thành công!",
                        );
                        navigation.goBack('MainScreen');
                    }
                    }>
                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingTop: 10,

                        }}>Tạo chiến dịch</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )

}

