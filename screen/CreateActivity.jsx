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
                            }}>S??? d???ng m??y ???nh</Text>
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
                            }}>Ch???n ???nh t??? th?? vi???n</Text>
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
                            }}>H???y b???</Text>
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

                    <Text>Ph????ng ti???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                        <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                        <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                    </Picker>
                </View>

                <View>
                    {selectedValueXe === 'dichuyen' ?
                        <>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <View>
                                    <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Ch???n lo???i xe" value="loaidichuyen" />
                                            <Picker.Item label="Xe 4 ch???" value="4cho" />
                                            <Picker.Item label="Xe 7 ch???" value="7cho" />
                                            <Picker.Item label="Xe 16 ch???" value="16cho" />
                                            <Picker.Item label="Xe 24 ch???" value="24cho" />
                                            <Picker.Item label="Xe kh??c" value="dichuyenkhac" />
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="S??? l?????ng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chi???c</Text>
                                </View>

                            </View>
                            {selectedValueDiChuyen === 'dichuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nh???p lo???i xe kh??c"
                                    />
                                </View> : null
                            }
                        </>
                        :
                        <>

                            <View>
                                <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        <Picker.Item label="Ch???n lo???i xe" value="loaivanchuyen" />
                                        <Picker.Item label="Xe t???i th??ng k??n" value="thungkin" />
                                        <Picker.Item label="Xe t???i th??ng ph??? mui b???t" value="thung" />
                                        <Picker.Item label="Xe t???i ????ng l???nh" value="donglanh" />
                                        <Picker.Item label="Xe kh??c" value="vanchuyenkhac" />

                                    </Picker>
                                </View>
                            </View>
                            {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                <View style={{ marginBottom: 10 }}>
                                    <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nh???p lo???i xe kh??c"
                                    />
                                </View> : null
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    position: 'relative'
                                }}>
                                    <Text>Tr???ng t???i <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Ch???n tr???ng t???i xe" value="loaixevanchuyen" />
                                            <Picker.Item label="0.5 - 1 T???n" value="1tan" />
                                            <Picker.Item label="2 - 6 T???n" value="6tan" />
                                            <Picker.Item label="7 - 15 T???n" value="15tan" />
                                            <Picker.Item label="Tr??n 15 t???n" value="tren15" />

                                        </Picker>
                                    </View>
                                </View>

                                <View style={{
                                    marginLeft: 10,
                                    position: 'relative'
                                }}>
                                    <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="S??? l?????ng"
                                        keyboardType="numeric"
                                    />
                                    <Text style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 40
                                    }}>Chi???c</Text>
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
                }}>Ho???t ?????ng {index + 1}</Text>

                <View style={{ marginTop: 10 }}>
                    <Text>Ho???t ?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            <Picker.Item label="Ch???n ho???t ?????ng" value="chonhd" />
                            <Picker.Item label="Mua l????ng th???c" value="doan" />
                            <Picker.Item label="Ph??t qu??" value="qua" />
                            <Picker.Item label="Thu?? ph????ng ti???n" value="phuongtien" />
                            <Picker.Item label="Ti???n tr??? c???p" value="trocap" />
                            <Picker.Item label="Ho???t ?????ng kh??c" value="khac" />
                        </Picker>
                    </View>
                </View>
                {selectedValue === 'khac' ? <View >
                    <Text>M?? t??? ho???t ?????ng</Text>
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
                        placeholder="Nh???p m?? t??? ho???t ?????ng"
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
                                <Text>Lo???i l????ng th???c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        <Picker.Item label="Ch???n lo???i l????ng th???c" value="loailuongthuc" />
                                        <Picker.Item label="G???o" value="gao" />
                                        <Picker.Item label="Rau c???" value="rau" />
                                        <Picker.Item label="M??" value="mi" />
                                        <Picker.Item label="Tr???ng" value="trung" />
                                        <Picker.Item label="Lo???i kh??c" value="loaikhac" />
                                    </Picker>
                                </View>
                                {selectedValue1 === 'loaikhac' ? <>
                                    <Text>Ho???t ?????ng kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                        placeholder="Nh???p lo???i l????ng th???c kh??c"
                                    />
                                </> : null}
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View>
                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nh???p s??? l?????ng"
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={{
                                        marginLeft: 10
                                    }}>
                                        <Text>????n v??? <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                    <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                                                    <Picker.Item label="Kg" value="kg" />
                                                    <Picker.Item label="V???" value="vi" />
                                                    <Picker.Item label="Th??ng" value="thung" />
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
                                            placeholder="Nh???p ????n v???"
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
                                    <Text>Ph????ng ti???n <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            <Picker.Item label="Ch???n ph????ng ti???n" value="chondonvi" />
                                            <Picker.Item label="Ph????ng ti???n di chuy???n" value="dichuyen" />
                                            <Picker.Item label="Ph????ng ti???n v???n chuy???n" value="vanchuyen" />
                                        </Picker>
                                    </View>

                                    <View>
                                        {selectedValueXe === 'dichuyen' ?
                                            <>
                                                <View style={{
                                                    flexDirection: 'row',

                                                }}>
                                                    <View>
                                                        <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Ch???n lo???i xe" value="loaidichuyen" />
                                                                <Picker.Item label="Xe 4 ch???" value="4cho" />
                                                                <Picker.Item label="Xe 7 ch???" value="7cho" />
                                                                <Picker.Item label="Xe 16 ch???" value="16cho" />
                                                                <Picker.Item label="Xe 24 ch???" value="24cho" />
                                                                <Picker.Item label="Xe kh??c" value="dichuyenkhac" />
                                                            </Picker>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
                                                    </View>

                                                </View>
                                                {selectedValueDiChuyen === 'dichuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                            </>
                                            :
                                            <>

                                                <View>
                                                    <Text>Lo???i xe <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            <Picker.Item label="Ch???n lo???i xe" value="loaivanchuyen" />
                                                            <Picker.Item label="Xe t???i th??ng k??n" value="thungkin" />
                                                            <Picker.Item label="Xe t???i th??ng ph??? mui b???t" value="thung" />
                                                            <Picker.Item label="Xe t???i ????ng l???nh" value="donglanh" />
                                                            <Picker.Item label="Xe kh??c" value="vanchuyenkhac" />

                                                        </Picker>
                                                    </View>
                                                </View>
                                                {selectedValueVanChuyen === 'vanchuyenkhac' ?
                                                    <View style={{ marginBottom: 10 }}>
                                                        <Text>Xe kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="Nh???p lo???i xe kh??c"
                                                        />
                                                    </View> : null
                                                }
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{
                                                        position: 'relative'
                                                    }}>
                                                        <Text>Tr???ng t???i <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                                <Picker.Item label="Ch???n tr???ng t???i xe" value="loaixevanchuyen" />
                                                                <Picker.Item label="0.5 - 1 T???n" value="1tan" />
                                                                <Picker.Item label="2 - 6 T???n" value="6tan" />
                                                                <Picker.Item label="7 - 15 T???n" value="15tan" />
                                                                <Picker.Item label="Tr??n 15 t???n" value="tren15" />

                                                            </Picker>
                                                        </View>
                                                    </View>

                                                    <View style={{
                                                        marginLeft: 10,
                                                        position: 'relative'
                                                    }}>
                                                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                                            placeholder="S??? l?????ng"
                                                            keyboardType="numeric"
                                                        />
                                                        <Text style={{
                                                            position: 'absolute',
                                                            right: 10,
                                                            top: 40
                                                        }}>Chi???c</Text>
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
                                        <Text>S??? l?????ng ph???n qu??<Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                            placeholder="Nh???p s??? l?????ng ph???n qu??"
                                            keyboardType="numeric"
                                        />
                                        <Text style={{
                                            position: 'absolute',
                                            right: 10,
                                            top: 40
                                        }}>Ph???n</Text>
                                    </View>
                                </View>
                                : null
                }

                {selectedValue === 'doan' ?
                    <View style={{ width: 300, marginBottom: 10, marginTop: 20 }}>
                        <Button title="Th??m lo???i l????ng th???c" onPress={() => {
                            onAddSubPlan();
                        }} />
                    </View>
                    : selectedValue === 'phuongtien' ?
                        <View style={{ width: 300, marginBottom: 10, marginTop: 20 }}>
                            <Button title="Th??m lo???i xe" onPress={() => {
                                onAddMove();
                            }} />
                        </View> : null

                }

                <Text>?????a ??i???m th???c hi???n ho???t ?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                    placeholder="Nh???p ?????a ??i???m"
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10
                }}>

                    <View>
                        <Text>Th???i gian <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Text>S??? ti???n d??? t??nh <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            placeholder="Nh???p s??? ti???n"
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
                    <Text>Ng?????i ph??? tr??ch <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        placeholder="Nh???p h??? v?? t??n"
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

                    <Text>Lo???i l????ng th???c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        <Picker.Item label="Ch???n lo???i l????ng th???c" value="loailuongthuc" />
                        <Picker.Item label="G???o" value="gao" />
                        <Picker.Item label="Rau c???" value="rau" />
                        <Picker.Item label="M??" value="mi" />
                        <Picker.Item label="Tr???ng" value="trung" />
                        <Picker.Item label="Lo???i kh??c" value="loaikhac" />
                    </Picker>
                </View>
                {selectedValue1 === 'loaikhac' ? <>
                    <Text>Ho???t ?????ng kh??c <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                        placeholder="Nh???p lo???i l????ng th???c kh??c"
                    />
                </> : null}
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text>S??? l?????ng <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                            placeholder="Nh???p s??? l?????ng"
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>????n v??? <Text style={{ color: '#d32f2f' }}>*</Text></Text>
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
                                    <Picker.Item label="Ch???n ????n v???" value="chondonvi" />
                                    <Picker.Item label="Kg" value="kg" />
                                    <Picker.Item label="V???" value="vi" />
                                    <Picker.Item label="Th??ng" value="thung" />
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
                            placeholder="Nh???p ????n v???"
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
                                    T??n chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
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
                                placeholder="Nh???p t??n chi???n d???ch"
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
                                    ?????a ??i???m th???c hi???n chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
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
                                placeholder="Nh???p ?????a ??i???m th???c hi???n chi???n d???ch"
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
                                    K??? ho???ch c???a chi???n d???ch <Text style={{ color: '#d32f2f' }}>*</Text>
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
                                placeholder="Nh???p k??? ho???ch"
                            /> */}
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <SimpleLineIcons name="note" size={24} color="#000" />
                                <Text style={{
                                    marginLeft: 5
                                }}>
                                    K??? ho???ch
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
                                        Th??m ho???t ?????ng
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
                                    S??? ti???n ???? k??u g???i <Text style={{ color: '#d32f2f' }}>*</Text>
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
                                placeholder="Nh???p s??? ti???n ???? k??u g???i"
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
                                    M?? t??? chi???n d???ch<Text style={{ color: '#d32f2f' }}></Text>
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
                                placeholder="Nh???p m?? t??? v??? chi???n d???ch"
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
                                    Ng??y b???t ?????u chi???n d???ch:
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
                                    Ng??y d??? ki???n ho??n th??nh:
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
                                    H??nh ???nh
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
                                    }}>{image ? 'Ch???n ???nh kh??c' : 'Th??m h??nh ???nh'}</Text>
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
                            "Th??ng b??o",
                            "B???n ???? t???o chi???n d???ch th??nh c??ng!",
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

                        }}>T???o chi???n d???ch</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )

}

