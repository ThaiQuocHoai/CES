import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import StepProgress from "../component/StepProgress";
import { Button } from "react-native-paper";

export default function CharityDetail({ navigation, route }) {
  const { item } = route.params;

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <View
        style={{
          marginTop: 30,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          color: "#000",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,

          elevation: 10,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("MainScreen");
          }}
        >
          <AntDesign name="left" size={20} color="black" />
        </Pressable>
        <Text
          style={{
            fontSize: 17,
            color: "#000",
          }}
        >
          {item.title}
        </Text>
        <Pressable
          onPress={() => {
            navigation.push("InfoActivity");
          }}
        >
          <AntDesign name="infocirlceo" size={20} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
          }}
        >
          <Image
            style={{
              height: 200,
            }}
            source={{ uri: item.imgURL }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: 'center'
              marginBottom: 10,
            }}
          >
            <MaterialCommunityIcons
              name="file-document-outline"
              size={30}
              color="green"
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 7,
                marginLeft: 5,
              }}
            >
              Thông tin chiến dịch từ thiện
            </Text>
          </View>

          <View style={styles.viewStyle}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Người phụ trách:{" "}
              <Text style={{ fontWeight: "bold" }}>{item.owner}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Trạng thái:{" "}
              <Text style={{ fontWeight: "bold" }}>{item.status}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Tổng số tiền:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                VNĐ
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Tiến độ giải ngân:{" "}
              <Text style={{ fontWeight: "bold" }}>{item.progress}%</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Số tiền còn lại:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {(item.total - (item.total * item.progress) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VNĐ
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Ngày bắt đầu chiến dịch:{" "}
              <Text style={{ fontWeight: "bold" }}>{item.date}</Text>
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                lineHeight: 22,
                marginLeft: 15,
              }}
            >
              • Dự kiến hoàn thành chiến dịch:{" "}
              <Text style={{ fontWeight: "bold" }}>10/10/2021</Text>
            </Text>
            <Button
              mode="contained"
              color="green"
              onPress={() => {
                Alert.alert(
                  "Hoàn thành chiến dịch",
                  "Bạn có muốn hoàn thành chiến dịch ngay?",
                  [
                    {
                      text: "Hủy",
                    },
                    {
                      text: "Xác nhận",
                      onPress: () => {
                        navigation.goBack("MainScreen3");
                      },
                    },
                  ]
                );
              }}
              style={{
                marginHorizontal: 20,
                marginTop: 30,
              }}
            >
              Hoàn thành chiến dịch
            </Button>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: 'center'
              marginTop: 20,
            }}
          >
            <MaterialIcons name="campaign" size={30} color="blue" />
            <Text
              style={{
                marginTop: 10,
                fontSize: 19,
                fontWeight: "bold",
                marginBottom: 7,
                marginLeft: 5,
              }}
            >
              Các hoạt động chi tiêu của chiến dịch
            </Text>
          </View>
          <View>
            <Pressable onPress={() => {
              navigation.push('detailmain1');
            }} style={[styles.viewStyle, { marginBottom: 10, marginTop: 10 }]}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Hoạt động: </Text>
                <Text style={{ fontWeight: 'bold' }}>Thuê phương tiện</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số lượng - Loại phương tiện: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>5 chiếc - Xe tải 1 tấn</Text>
                </View>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số tiền dự tính: </Text>
                <Text style={{ fontWeight: 'bold' }}>10,000,000 VNĐ</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày bắt đầu: </Text>
                <Text style={{ fontWeight: 'bold' }}>18/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày kết thúc: </Text>
                <Text style={{ fontWeight: 'bold' }}>19/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                // paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Người phụ trách: </Text>
                <Text style={{ fontWeight: 'bold' }}>Nguyễn Văn An</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => {
              navigation.push('detailmain2');
            }} style={[styles.viewStyle, { marginBottom: 10, marginTop: 10 }]}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Hoạt động: </Text>
                <Text style={{ fontWeight: 'bold' }}>Mua lương thực</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số lượng - Loại lương thực: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>1400 thùng - Mì</Text>
                  <Text style={{ fontWeight: 'bold' }}>1000 kg - Gạo</Text>
                </View>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số tiền dự tính: </Text>
                <Text style={{ fontWeight: 'bold' }}>190,000,000 VNĐ</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày bắt đầu: </Text>
                <Text style={{ fontWeight: 'bold' }}>19/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày kết thúc: </Text>
                <Text style={{ fontWeight: 'bold' }}>21/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                // paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Người phụ trách: </Text>
                <Text style={{ fontWeight: 'bold' }}>Đỗ Thị Thảo</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => {
              navigation.push('detailmain3');
            }} style={[styles.viewStyle, { marginBottom: 200, marginTop: 10 }]}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Hoạt động: </Text>
                <Text style={{ fontWeight: 'bold' }}>Phát quà</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số lượng: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>100 phần quà</Text>
                </View>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Số tiền dự tính: </Text>
                <Text style={{ fontWeight: 'bold' }}>50,000,000 VNĐ</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Địa điểm: </Text>
                <Text style={{ fontWeight: 'bold' }}>UBND phường 18 - Quận 4</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày bắt đầu: </Text>
                <Text style={{ fontWeight: 'bold' }}>22/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Ngày kết thúc: </Text>
                <Text style={{ fontWeight: 'bold' }}>23/09/2021</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                // paddingBottom: 10,
                marginRight: 20,
                marginLeft: 20
              }}>
                <Text>Người phụ trách: </Text>
                <Text style={{ fontWeight: 'bold' }}>Đỗ Thị Thảo</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={{
          position: "absolute",
          bottom: 100,
          right: 30,
          elevation: 99,
          backgroundColor: "#ff8224",
          width: 60,
          height: 60,
          borderRadius: 50,
        }}
        onPress={() => {
          navigation.push("CreateRoute");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            lineHeight: 60,
          }}
        >
          <AntDesign
            style={{
              fontWeight: "bold",
            }}
            name="plus"
            size={35}
            color="white"
          />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: 355,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    paddingBottom: 20,
    paddingTop: 5,
    borderRadius: 10,
  },
});
