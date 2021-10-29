import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const labels = ["Cart"];
const labels3 = ["Cart"];

export default function DetailMainActivity3({ navigation }) {

    const data2 = [
        {
            label: 'Phát 60 phần quà',
            dateTime: '8:00AM 22/09/2021',
            status: 30000000,
            owner: 'Đỗ Thị Thảo',
            link: 'ActivityDetail2'
        },
    ]
    const data3 = [
        {
            label: 'Phát 40 phần quà',
            dateTime: '2:00PM 22/09/2021',
            status: 20000000,
            owner: 'Đỗ Thị Thảo',
            link: 'ActivityDetail2'
        },
    ]

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

    return (
        <View style={{
            position: 'relative',
            height: '100%'
        }}>

            <View style={{
                // paddingTop: 20,
                // paddingBottom: 20,
                backgroundColor: '#fff',
                height: 150,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
                borderRadius: 10,
                marginBottom: 20,
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20
            }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels3}
                    direction="vertical"
                    renderLabel={({ position, stepStatus, label, crntPosition }) => {
                        return (
                            <Pressable style={styles.lblContainer} onPress={() => {
                                navigation.push("ActivityDetail2")
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
                            </Pressable>
                        )
                    }}
                    stepCount='1'
                />
            </View>
            <View style={{
                // paddingTop: 20,
                // paddingBottom: 20,
                backgroundColor: '#fff',
                height: 150,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
                borderRadius: 10,
                marginBottom: 20,
                marginLeft: 30,
                marginRight: 30,
            }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels3}
                    direction="vertical"
                    renderLabel={({ position, stepStatus, label, crntPosition }) => {
                        return (
                            <Pressable style={styles.lblContainer} onPress={() => {
                                navigation.push("ActivityDetail2")
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
                            </Pressable>
                        )
                    }}
                    stepCount='1'
                />
            </View>

            <Pressable style={{
                position: 'absolute',
                bottom: 30,
                right: 30,
                elevation: 99,
                backgroundColor: '#ff8224',
                width: 60,
                height: 60,
                borderRadius: 50
            }} onPress={() => {
                navigation.push('CreateSubActivity')
            }}>
                <Text style={{
                    textAlign: 'center',
                    lineHeight: 60,

                }}><AntDesign style={{
                    fontWeight: 'bold'
                }} name="plus" size={35} color="white" /></Text>
            </Pressable>

        </View>
    )
}



const styles = StyleSheet.create({


    lblContainer: {
        paddingLeft: 20,
        paddingRight: 35,
        width: width - 65,
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
