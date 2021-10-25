import React, { useState, useEffect, useRef, Children } from 'react'
import { Text, View, TextInput, Pressable, Platform, Button, ScrollView, StatusBar, Image, Alert, SafeAreaView, LogBox, Picker } from 'react-native';
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


    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [selectedValue3, setSelectedValue3] = useState("");
    const [selectedValue4, setSelectedValue4] = useState("");
    const [selectedValueXe, setSelectedValueXe] = useState("");
    const [selectedValueDiChuyen, setSelectedValueDiChuyen] = useState("");
    const [selectedValueVanChuyen, setSelectedValueVanChuyen] = useState("");
    const [selectedValueLoaiVanChuyen, setSelectedValueLoaiVanChuyen] = useState("");

    const [isDisplay, setIsDisplay] = useState('none');


    const renderPlan = () => {
        return "a";
    }

    const renderSubPlan = () => {
        return "b";
    }
    let [subPlanList, setSubPlanList] = useState([]);
    const onAddSubPlan = () => {
        setSubPlanList(subPlanList.concat(renderSubPlan()));
    }
    const onRemoveSubPlan = (key) => {
        // alert(key);
        let plan1 = [...subPlanList];
        // console.log(plan1)
        const plans = plan1.splice(0, key);
        setSubPlanList(plans);
    }
    const renderMove = () => {
        return "c";
    }
    let [moveList, setMoveList] = useState([]);
    const onAddMove = () => {
        setMoveList(moveList.concat(renderMove()));
    }
    const onRemoveMove = (key) => {
        // alert(key);
        let plan1 = [...moveList];
        // console.log(plan1)
        const plans = plan1.splice(0, key);
        setMoveList(plans);
    }

    const renderAllMove = () => {
        return moveList.map((item, index) => {
            return <View key={index} style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                width: 300,
                paddingBottom: 10,
                paddingTop: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <Text>Phương tiện <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <Pressable onPress={() => {
                        // alert(index)
                        onRemoveMove(index);
                    }}>
                        <Ionicons name="ios-close-circle-outline" size={30} color="black" />
                    </Pressable>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 300,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Picker
                        selectedValue={selectedValueXe}
                        onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                        pickerStyleType={{
                            paddingBottom: 10
                        }}
                    >
                        <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                        <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                        <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                    </Picker>
                </View>

                <View>
                    {selectedValueXe === 'dichuyen' ?
                        <>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <View>
                                    <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 140,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueDiChuyen}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Chọn loại xe" value="loaidichuyen" />
                                            <Picker.Item label="Xe 4 chỗ" value="4cho" />
                                            <Picker.Item label="Xe 7 chỗ" value="7cho" />
                                            <Picker.Item label="Xe 16 chỗ" value="16cho" />
                                            <Picker.Item label="Xe 24 chỗ" value="24cho" />
                                            <Picker.Item label="Xe khác" value="dichuyenkhac" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 150,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Số lượng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chiếc</Text>
                                </View>

                            </View>
                            {selectedValueDiChuyen === 'dichuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 300,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nhập loại xe khác"
                                    />
                                </View> : null
                            }
                        </>
                        :
                        <>

                            <View>
                                <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    width: 300,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Picker
                                        selectedValue={selectedValueVanChuyen}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValueVanChuyen(itemValue)}
                                        pickerStyleType={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <Picker.Item label="Chọn loại xe" value="loaivanchuyen" />
                                        <Picker.Item label="Xe tải thùng kín" value="thungkin" />
                                        <Picker.Item label="Xe tải thùng phủ mui bạt" value="thung" />
                                        <Picker.Item label="Xe tải đông lạnh" value="donglanh" />
                                        <Picker.Item label="Xe khác" value="vanchuyenkhac" />

                                    </Picker>
                                </View>
                            </View>
                            {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 300,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Nhập loại xe khác"
                                    />
                                </View> : null
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    position: 'relative'
                                }}>
                                    <Text>Trọng tải <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 160,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueLoaiVanChuyen}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueLoaiVanChuyen(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Chọn trọng tải xe" value="loaixevanchuyen" />
                                            <Picker.Item label="0.5 - 1 Tấn" value="1tan" />
                                            <Picker.Item label="2 - 6 Tấn" value="6tan" />
                                            <Picker.Item label="7 - 15 Tấn" value="15tan" />
                                            <Picker.Item label="Trên 15 tấn" value="tren15" />

                                        </Picker>
                                    </View>
                                </View>

                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <TextInput
                                        style={{
                                            borderColor: 'gray',
                                            width: 130,
                                            height: 40,
                                            borderWidth: 1,
                                            paddingLeft: 15,
                                            paddingRight: 70,
                                            marginTop: 10,
                                            // marginLeft: 20,
                                            borderRadius: 10
                                        }}
                                        placeholder="Số lượng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chiếc</Text>
                                </View>
                            </View>

                        </>

                    }
                </View>

            </View>
        })
    }

    const renderAllPlan = () => {
        return planList.map((item, index) => {
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
                    <Text>Hoạt động <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 300,
                        marginTop: 10,
                        borderRadius: 10,
                        marginBottom: 10,
                        height: 40,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            pickerStyleType={{
                                paddingBottom: 10
                            }}
                        >
                            <Picker.Item label="Chọn hoạt động" value="chonhd" />
                            <Picker.Item label="Mua lương thực" value="doan" />
                            <Picker.Item label="Phát quà" value="qua" />
                            <Picker.Item label="Thuê phương tiện" value="phuongtien" />
                            <Picker.Item label="Tiền trợ cấp" value="trocap" />
                            <Picker.Item label="Hoạt động khác" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View >
                    <Text>Mô tả hoạt động</Text>
                    <TextInput
                        style={{
                            borderColor: 'gray',
                            width: 300,
                            // height: 40,
                            borderWidth: 1,
                            paddingLeft: 15,
                            paddingRight: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            // marginLeft: 20,
                            borderRadius: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Nhập mô tả hoạt động"
                        multiline={true}
                        numberOfLines={5}
                    />
                </View> :
                    selectedValue === 'doan' ?
                        <View>
                            <View style={{
                                borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                borderStyle: 'dotted',
                                width: 300,
                                paddingBottom: 10
                            }}>
                                <Text>Loại lương thực <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    width: 300,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    marginBottom: 10,
                                    height: 40,
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <Picker
                                        selectedValue={selectedValue1}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedValue1(itemValue)
                                            if (itemValue === 'gao' || itemValue === 'rau') {
                                                setSelectedValue2('kg');
                                            } else if (itemValue === 'mi') {
                                                setSelectedValue2('thung');
                                            } else if (itemValue === 'trung') {
                                                setSelectedValue2('vi');
                                            }
                                        }
                                        }
                                        pickerStyleType={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <Picker.Item label="Chọn loại lương thực" value="loailuongthuc" />
                                        <Picker.Item label="Gạo" value="gao" />
                                        <Picker.Item label="Rau củ" value="rau" />
                                        <Picker.Item label="Mì" value="mi" />
                                        <Picker.Item label="Trứng" value="trung" />
                                        <Picker.Item label="Loại khác" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Hoạt động khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nhập loại lương thực khác"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 150,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nhập số lượng"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>Đơn vị <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        {selectedValue1 !== 'loaikhac' ? <>
                                            <View style={{
                                                borderWidth: 1,
                                                borderColor: 'gray',
                                                width: 140,
                                                marginTop: 10,
                                                borderRadius: 10,
                                                marginBottom: 10,
                                                height: 40,
                                                flexDirection: 'column',
                                                justifyContent: 'center'
                                            }}>
                                                <Picker
                                                    selectedValue={selectedValue2}
                                                    onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                                                    pickerStyleType={{
                                                        paddingBottom: 10
                                                    }}
                                                >
                                                    <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="Vỉ" value="vi" />
                                                    <Picker.Item label="Thùng" value="thung" />
                                                </Picker>
                                            </View>
                                        </> : <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 140,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 20,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10,
                                            }}
                                            placeholder="Nhập đơn vị"
                                        />}
                                    </View>
                                </View>
                            </View>
                            {renderAllSubPlan()}

                        </View> :
                        selectedValue === 'phuongtien' ?
                            <View >
                                <View style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    width: 300,
                                    paddingBottom: 10
                                }}>
                                    <Text>Phương tiện <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        width: 300,
                                        marginTop: 10,
                                        borderRadius: 10,
                                        marginBottom: 10,
                                        height: 40,
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Picker
                                            selectedValue={selectedValueXe}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValueXe(itemValue)}
                                            pickerStyleType={{
                                                paddingBottom: 10
                                            }}
                                        >
                                            <Picker.Item label="Chọn phương tiện" value="chondonvi" />
                                            <Picker.Item label="Phương tiện di chuyển" value="dichuyen" />
                                            <Picker.Item label="Phương tiện vận chuyển" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 140,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueDiChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueDiChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Chọn loại xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 chỗ" value="4cho" />
                                                                <Picker.Item label="Xe 7 chỗ" value="7cho" />
                                                                <Picker.Item label="Xe 16 chỗ" value="16cho" />
                                                                <Picker.Item label="Xe 24 chỗ" value="24cho" />
                                                                <Picker.Item label="Xe khác" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 150,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 300,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Loại xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                    <View style={{
                                                        borderWidth: 1,
                                                        borderColor: 'gray',
                                                        width: 300,
                                                        marginTop: 10,
                                                        borderRadius: 10,
                                                        marginBottom: 10,
                                                        height: 40,
                                                        flexDirection: 'column',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <Picker
                                                            selectedValue={selectedValueVanChuyen}
                                                            onValueChange={(itemValue, itemIndex) => setSelectedValueVanChuyen(itemValue)}
                                                            pickerStyleType={{
                                                                paddingBottom: 10
                                                            }}
                                                        >
                                                            <Picker.Item label="Chọn loại xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe tải thùng kín" value="thungkin" />
                                                            <Picker.Item label="Xe tải thùng phủ mui bạt" value="thung" />
                                                            <Picker.Item label="Xe tải đông lạnh" value="donglanh" />
                                                            <Picker.Item label="Xe khác" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 300,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Nhập loại xe khác"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Trọng tải <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <View style={{
                                                            borderWidth: 1,
                                                            borderColor: 'gray',
                                                            width: 160,
                                                            marginTop: 10,
                                                            borderRadius: 10,
                                                            marginBottom: 10,
                                                            height: 40,
                                                            flexDirection: 'column',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Picker
                                                                selectedValue={selectedValueLoaiVanChuyen}
                                                                onValueChange={(itemValue, itemIndex) => setSelectedValueLoaiVanChuyen(itemValue)}
                                                                pickerStyleType={{
                                                                    paddingBottom: 10
                                                                }}
                                                            >
                                                                <Picker.Item label="Chọn trọng tải xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 Tấn" value="1tan" />
                                                                <Picker.Item label="2 - 6 Tấn" value="6tan" />
                                                                <Picker.Item label="7 - 15 Tấn" value="15tan" />
                                                                <Picker.Item label="Trên 15 tấn" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                                        <TextInput
                                                            style={{
                                                                borderColor: 'gray',
                                                                width: 130,
                                                                height: 40,
                                                                borderWidth: 1,
                                                                paddingLeft: 15,
                                                                paddingRight: 70,
                                                                marginTop: 10,
                                                                // marginLeft: 20,
                                                                borderRadius: 10
                                                            }}
                                                            placeholder="Số lượng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chiếc</Text>
                                                    </View>
                                                </View>

                                            </>

                                        }
                                    </View>
                                </View>
                                {renderAllMove()}
                            </View>

                            :
                            selectedValue === 'qua' ?
                                <View>
                                    <View style={{
                                        position: 'relative',
                                        marginBottom: 10
                                    }}>
                                        <Text>Số lượng phần quà<Text style={{ color: '#d32f2f' }}>*</Text></Text>
                                        <TextInput
                                            style={{
                                                borderColor: 'gray',
                                                width: 300,
                                                height: 40,
                                                borderWidth: 1,
                                                paddingLeft: 15,
                                                paddingRight: 70,
                                                marginTop: 10,
                                                // marginLeft: 20,
                                                borderRadius: 10
                                            }}
                                            placeholder="Nhập số lượng phần quà"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 40
                                        }}>Phần</Text>
                                    </View>
                                </View>
                                : null
                }

                {selectedValue === 'doan' ?
                    <View style={{ width: 300, marginBottom: 10, marginTop: 20 }}>
                        <Button title="Thêm loại lương thực" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 300, marginBottom: 10, marginTop: 20 }}>
                            <Button title="Thêm loại xe" onPress={() => {
                                onAddMove();
                            }} />
                        </View> : null

                }

                <Text>Địa điểm thực hiện hoạt động <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Text>Thời gian <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        marginLeft: 10,
                        position: 'relative'
                    }}>
                        <Text>Số tiền dự tính <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 180,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 70,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nhập số tiền"
                            keyboardType="numeric"
                        />
                        <Text style={{
                            position: 'absolute',
                            right: 10,
                            top: 40
                        }}>VND</Text>
                    </View>

                </View>
                <View style={{
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <Text>Người phụ trách <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
    const renderAllSubPlan = () => {
        return subPlanList.map((item, index) => {
            return <View key={index} style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                borderStyle: 'dotted',
                width: 300,
                paddingBottom: 10,
                paddingTop: 10,
                position: 'relative'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <Text>Loại lương thực <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                    <Pressable onPress={() => {
                        // alert(index)
                        onRemoveSubPlan(index);
                    }}>
                        <Ionicons name="ios-close-circle-outline" size={30} color="black" />
                    </Pressable>
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 300,
                    marginTop: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    height: 40,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Picker
                        selectedValue={selectedValue3}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedValue3(itemValue)
                            if (itemValue === 'gao' || itemValue === 'rau') {
                                setSelectedValue4('kg');
                            } else if (itemValue === 'mi') {
                                setSelectedValue4('thung');
                            } else if (itemValue === 'trung') {
                                setSelectedValue4('vi');
                            }
                        }
                        }
                        pickerStyleType={{
                            paddingBottom: 10
                        }}
                    >
                        <Picker.Item label="Chọn loại lương thực" value="loailuongthuc" />
                        <Picker.Item label="Gạo" value="gao" />
                        <Picker.Item label="Rau củ" value="rau" />
                        <Picker.Item label="Mì" value="mi" />
                        <Picker.Item label="Trứng" value="trung" />
                        <Picker.Item label="Loại khác" value="loaikhac" />
                    </Picker>
                </View>
                {selectedValue1 === 'loaikhac' ? <>
                    <Text>Hoạt động khác <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        placeholder="Nhập loại lương thực khác"
                    />
                </> : null}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text>Số lượng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 150,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nhập số lượng"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>Đơn vị <Text style={{ color: '#d32f2f' }}>*</Text></Text>
                        {selectedValue1 !== 'loaikhac' ? <>
                            <View style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width: 140,
                                marginTop: 10,
                                borderRadius: 10,
                                marginBottom: 10,
                                height: 40,
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Picker
                                    selectedValue={selectedValue4}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                                    pickerStyleType={{
                                        paddingBottom: 10
                                    }}
                                >
                                    <Picker.Item label="Chọn đơn vị" value="chondonvi" />
                                    <Picker.Item label="Kg" value="kg" />
                                    <Picker.Item label="Vỉ" value="vi" />
                                    <Picker.Item label="Thùng" value="thung" />
                                </Picker>
                            </View>
                        </> : <TextInput
                            style={{
                                borderColor: 'gray',
                                width: 140,
                                height: 40,
                                borderWidth: 1,
                                paddingLeft: 15,
                                paddingRight: 20,
                                marginTop: 10,
                                // marginLeft: 20,
                                borderRadius: 10,
                            }}
                            placeholder="Nhập đơn vị"
                        />}
                    </View>
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
                            {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
                            /> */}
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    Kế hoạch
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
                            marginBottom: 10,
                            position: 'relative'
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
                                    borderRadius: 10,
                                    paddingRight: 70
                                }}
                                placeholder="Nhập số tiền đã kêu gọi"
                                keyboardType="numeric"
                            />
                            <Text style={{
                                position: 'absolute',
                                right: 0,
                                top: 43
                            }}>VND</Text>
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

