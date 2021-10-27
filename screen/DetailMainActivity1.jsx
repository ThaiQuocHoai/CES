import React from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import StepProgress from '../component/StepProgress'
import { Feather, AntDesign } from '@expo/vector-icons';
import StepIndicator from 'react-native-step-indicator';

export default function DetailMainActivity1({navigation}) {

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



    const data = [
        {
            label: 'Thuê phương tiện',
            dateTime: '1:00PM 18/09/2021',
            status: 10000000,
            owner: 'Nguyễn Văn An',
            link: 'ActivityDetail1'
        },
    ]

    return (
        <ScrollView>
            <View style={styles.viewStyle}>
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
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 10
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        labels={labels}
                        direction="vertical"
                        renderLabel={({ position, stepStatus, label, crntPosition }) => {
                            return (
                                <Pressable style={styles.lblContainer} onPress={() => {
                                    navigation.push("ActivityDetail1")
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
        </ScrollView>
    )
}

const { width, height } = Dimensions.get('window');

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
        paddingRight: 10,
    }
})
