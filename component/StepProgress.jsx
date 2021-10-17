import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const labels = ["Cart"];
const labels3 = ["Cart"];
const customStyles = {
    stepIndicatorSize: 0,
    currentStepIndicatorSize: 5,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fff',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: 'green',
    stepStrokeUnFinishedColor: 'green',
    separatorFinishedColor: '#013459',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#013459',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#013459',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#013459',
    labelColor: '#999999',
    labelSize: 0,
    currentStepLabelColor: '#013459'
}

export default function StepProgress({ navigation }) {

    const data = [
        {
            label: 'Thuê phương tiện',
            dateTime: '1:00 PM',
            status: 10000000,
            owner: 'Nguyễn Văn An'
        },
    ]
    const data2 = [
        {
            label: 'Mua lương thực',
            dateTime: '5:00 AM',
            status: 140000000,
            owner: 'Đỗ Thị Thảo'
        },
    ]
    const data3 = [
        {
            label: 'Mua vật dụng đóng gói',
            dateTime: '7:00 AM',
            status: 2000000,
            owner: 'Đỗ Thị Thảo'
        },
    ]
    const data4 = [
        {
            label: 'Chi phí phát sinh',
            dateTime: '11:00 AM',
            status: 500000,
            owner: 'Đỗ Thị Thảo'
        },
    ]

    return (
        <View>

            <View style={{
                height: 150,
                // width: width - 70,
                paddingLeft: 10,
                paddingRight: 10,
            }}>
                <View style={styles.viewStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="calendar" size={24} color="orange" />

                        <Text style={{
                            marginTop: 10,
                            marginBottom: 10,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>  Ngày 18/09/2021</Text>
                    </View>
                    {/* <Pressable
                        onPress={() => {
                            navigation.push('UpdateChariry');
                        }}
                    >
                        <Text>Sửa</Text>
                    </Pressable> */}
                    {/* </View> */}
                </View>
                <View style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#fff',
                    height: 200,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    borderRadius: 10,
                    paddingLeft: 20,
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        labels={labels}
                        direction="vertical"
                        renderLabel={({ position, stepStatus, label, crntPosition }) => {
                            return (
                                <Pressable style={styles.lblContainer} onPress={() => {
                                    navigation.push("ActivityDetail")
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Thời gian: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data[position].dateTime}</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Số tiền đã chi: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data[position].status.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7
                                    }}>
                                        <Text>Hoạt động: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data[position].label}</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Người thực hiện:</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data[position].owner}</Text>
                                    </View>
                                    {/* <Button
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            backgroundColor: '#024f87',
                                            width: 80,
                                            marginTop: 10,
                                            marginBottom: 10,
                                            marginStart: 'auto'
                                        }}
                                        icon="cog-outline"

                                        labelStyle={{
                                            color: '#fff',
                                            // fontSize: 20
                                        }}
                                        onPress={() => {
                                            navigation.push('UpdateChariry')
                                        }}
                                    >
                                        Sửa
                                    </Button> */}
                                </Pressable>
                            )
                        }}
                        stepCount='1'
                    />
                </View>
            </View>
            <View style={{
                height: 650,
                // width: width - 70,
                marginBottom: 220,
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 110,
            }}>
                <View style={styles.viewStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="calendar" size={24} color="orange" />

                        <Text style={{
                            marginTop: 10,
                            marginBottom: 10,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>  Ngày 19/09/2021</Text>
                    </View>
                    {/* <Pressable
                        onPress={() => {
                            navigation.push('UpdateChariry');
                        }}>

                        <Text>Sửa</Text>
                    </Pressable> */}
                    {/* </View> */}
                </View>

                <View style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#fff',
                    height: 200,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    borderRadius: 10,
                    paddingLeft: 20,
                    marginBottom: 20
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        labels={labels3}
                        direction="vertical"
                        renderLabel={({ position, stepStatus, label, crntPosition }) => {
                            return (
                                <Pressable style={styles.lblContainer} onPress={() => {
                                    navigation.push("ActivityDetail")
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                        position: 'relative'
                                    }}>

                                        <Text>Thời gian: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data2[position].dateTime}</Text>

                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Số tiền đã chi: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data2[position].status.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7
                                    }}>
                                        <Text>Hoạt động: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data2[position].label}</Text>
                                    </View>


                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Người thực hiện:</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data2[position].owner}</Text>
                                    </View>
                                    {/* <Button
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            backgroundColor: '#024f87',
                                            width: 80,
                                            marginTop: 10,
                                            marginBottom: 10,
                                            marginStart: 'auto'
                                        }}
                                        icon="cog-outline"

                                        labelStyle={{
                                            color: '#fff',
                                            // fontSize: 20
                                        }}
                                        onPress={() => {
                                            navigation.push('UpdateChariry')
                                        }}
                                    >
                                        Sửa
                                    </Button> */}
                                </Pressable>
                            )
                        }}
                        stepCount='1'
                    />
                </View>
                <View style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#fff',
                    height: 200,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    borderRadius: 10,
                    paddingLeft: 20,
                    marginBottom: 20
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        labels={labels3}
                        direction="vertical"
                        renderLabel={({ position, stepStatus, label, crntPosition }) => {
                            return (
                                <Pressable style={styles.lblContainer} onPress={() => {
                                    navigation.push("ActivityDetail")
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                        position: 'relative'
                                    }}>

                                        <Text>Thời gian: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data3[position].dateTime}</Text>

                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Số tiền đã chi: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data3[position].status.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7
                                    }}>
                                        <Text>Hoạt động: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data3[position].label}</Text>
                                    </View>


                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Người thực hiện:</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data3[position].owner}</Text>
                                    </View>
                                    {/* <Button
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            backgroundColor: '#024f87',
                                            width: 80,
                                            marginTop: 10,
                                            marginBottom: 10,
                                            marginStart: 'auto'
                                        }}
                                        icon="cog-outline"

                                        labelStyle={{
                                            color: '#fff',
                                            // fontSize: 20
                                        }}
                                        onPress={() => {
                                            navigation.push('UpdateChariry')
                                        }}
                                    >
                                        Sửa
                                    </Button> */}
                                </Pressable>
                            )
                        }}
                        stepCount='1'
                    />
                </View>
                <View style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#fff',
                    height: 200,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.36,
                    shadowRadius: 6.68,

                    elevation: 11,
                    borderRadius: 10,
                    paddingLeft: 20,
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        labels={labels3}
                        direction="vertical"
                        renderLabel={({ position, stepStatus, label, crntPosition }) => {
                            return (
                                <Pressable style={styles.lblContainer} onPress={() => {
                                    navigation.push("ActivityDetail")
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                        position: 'relative'
                                    }}>

                                        <Text>Thời gian: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data4[position].dateTime}</Text>

                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Số tiền đã chi: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data4[position].status.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'lightgray',
                                        paddingBottom: 7
                                    }}>
                                        <Text>Hoạt động: </Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data4[position].label}</Text>
                                    </View>


                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingBottom: 7,
                                        paddingTop: 7,
                                    }}>
                                        <Text>Người thực hiện:</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{data4[position].owner}</Text>
                                    </View>
                                    {/* <Button
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            backgroundColor: '#024f87',
                                            width: 80,
                                            marginTop: 10,
                                            marginBottom: 10,
                                            marginStart: 'auto'
                                        }}
                                        icon="cog-outline"

                                        labelStyle={{
                                            color: '#fff',
                                            // fontSize: 20
                                        }}
                                        onPress={() => {
                                            navigation.push('UpdateChariry')
                                        }}
                                    >
                                        Sửa
                                    </Button> */}
                                </Pressable>
                            )
                        }}
                        stepCount='1'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    lblContainer: {
        // marginTop: 20,
        paddingLeft: 20,
        paddingRight: 35,
        width: width - 100,
        // marginBottom: 30
    },
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
        paddingRight: 10
    }
})