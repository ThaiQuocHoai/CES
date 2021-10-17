import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";
import { SimpleLineIcons, Ionicons, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';

export default function ActivityDetail(props) {

    const [visible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        {
            uri: "https://images-ext-1.discordapp.net/external/DHgkr_nCEBVoUn0FsFD0R3OXXT2vufE49aFyg3phwFM/%3Fq%3Dtbn%3AANd9GcTCSaVJVzQ--6QfWHYmy7vPwkpel14FAaVZjw%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        },
        {
            uri: "https://images-ext-1.discordapp.net/external/cdW_T_wG9YYREMrXy_hL8-v6vsU413f9x5QNyNkoCJo/%3Fq%3Dtbn%3AANd9GcQ-_wSZ1H1M0G0Q9emGHiEGqD5wAf7CIZ_zqhfJCNftEsNLzK4rD4_Pu1e7VjUqYWRM3Zc%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        },
        {
            uri: "https://images-ext-2.discordapp.net/external/G9k5N0yeiJuI7Z6Hp0xzDP6TOhvw2JVFsoYgq5ShFN8/%3Fq%3Dtbn%3AANd9GcQXF_ST1VMxJZhPB8TBqYB_5ksAMpaWWy4Vqw%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images",
        },
        {
            uri: "https://images-ext-1.discordapp.net/external/-XJ8r8o7Kp7VWORk9hA2rOv34VJ14khK3_QiDLPNJlI/https/tieudung.vn/upload_images/images/2021/08/23/anh%25207%281%29.jpeg?width=783&height=557",
        },
        {
            uri: "https://i.ytimg.com/vi/gv7-Px62pAw/maxresdefault.jpg",
        },
        {
            uri: "https://bizweb.dktcdn.net/100/057/061/articles/1-5d577fe7-41bb-4a48-a111-6c794eaca24a.jpg?v=1499325275443",
        },
        {
            uri: "https://cdn.vietnambiz.vn/stores/news_dataimages/thuongnt/032018/05/06/tp-hcm-tap-hoa-truyen-thong-song-lay-lat-22-.7466.jpg",
        },
        {
            uri: "https://images-ext-1.discordapp.net/external/Qq7qhGXcErrhPDUUDk6dAt_lk0sMS5XJs_ST-lAYfkE/https/dongsaigonplas.com/vnt_upload/File/06_2019/vi-tri-cua-hang.jpg",
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
                    <MaterialIcons  name="attach-money" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Tổng số tiền đã chi: </Text>
                        140,000,000 VNĐ</Text>
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
                    •  Vào lúc 5:00AM 19/09/2021 đã mua 1400 thùng mì giá 100.000VNĐ/thùng tại tạp hóa Thành Tín TP HCM.</Text>
                {/* <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 7:00AM 19/09/2021 đã mua 40KG túi ni lông loại 10KG giá 50.000VNĐ/KG tại đại lí túi nilông Ngọc Hoa.</Text>
                <Text style={{
                    marginLeft: 50,
                    fontSize: 15,
                    paddingRight: 25,
                    paddingBottom: 10
                }}>
                    •  Vào lúc 11:00AM 19/09/2021 đã mua 10 thùng nước suối tại tạp hoá Thành Tín cho đoàn công tác từ thiện.</Text> */}
            </View>

            <View style={{
                paddingBottom: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 20
                }}>
                    <SimpleLineIcons name="user" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Người đăng: </Text>
                        Đỗ Thị Thảo</Text>
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
                    <SimpleLineIcons name="user-following" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Người kiểm duyệt: </Text>
                        Lê Duy Tuấn Vũ</Text>
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
                    <Feather name="check-circle" size={24} color="#0F6657" />
                    <Text style={{

                        marginLeft: 5,
                        fontSize: 15
                    }}><Text style={{ fontWeight: 'bold', }}>Trạng thái: </Text>
                        Đã hoàn thành</Text>
                </View>

            </View>


        </ScrollView>
    )
}
