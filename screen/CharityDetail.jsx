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
              Th??ng tin chi???n d???ch t??? thi???n
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
              ??? Ng?????i ph??? tr??ch:{" "}
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
              ??? Tr???ng th??i:{" "}
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
              ??? T???ng s??? ti???n:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                VN??
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
              ??? Ti???n ????? gi???i ng??n:{" "}
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
              ??? S??? ti???n c??n l???i:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {(item.total - (item.total * item.progress) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                VN??
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
              ??? Ng??y b???t ?????u chi???n d???ch:{" "}
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
              ??? D??? ki???n ho??n th??nh chi???n d???ch:{" "}
              <Text style={{ fontWeight: "bold" }}>10/10/2021</Text>
            </Text>
            <Button
              mode="contained"
              color="green"
              onPress={() => {
                Alert.alert(
                  "Ho??n th??nh chi???n d???ch",
                  "B???n c?? mu???n ho??n th??nh chi???n d???ch ngay?",
                  [
                    {
                      text: "H???y",
                    },
                    {
                      text: "X??c nh???n",
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
              Ho??n th??nh chi???n d???ch
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
              C??c ho???t ?????ng chi ti??u c???a chi???n d???ch
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
                <Text>Ho???t ?????ng: </Text>
                <Text style={{ fontWeight: 'bold' }}>Thu?? ph????ng ti???n</Text>
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
                <Text>S??? l?????ng - Lo???i ph????ng ti???n: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>5 chi???c - Xe t???i 1 t???n</Text>
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
                <Text>S??? ti???n d??? t??nh: </Text>
                <Text style={{ fontWeight: 'bold' }}>10,000,000 VN??</Text>
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
                <Text>Ng??y b???t ?????u: </Text>
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
                <Text>Ng??y k???t th??c: </Text>
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
                <Text>Ng?????i ph??? tr??ch: </Text>
                <Text style={{ fontWeight: 'bold' }}>Nguy???n V??n An</Text>
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
                <Text>Ho???t ?????ng: </Text>
                <Text style={{ fontWeight: 'bold' }}>Mua l????ng th???c</Text>
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
                <Text>S??? l?????ng - Lo???i l????ng th???c: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>1400 th??ng - M??</Text>
                  <Text style={{ fontWeight: 'bold' }}>1000 kg - G???o</Text>
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
                <Text>S??? ti???n d??? t??nh: </Text>
                <Text style={{ fontWeight: 'bold' }}>190,000,000 VN??</Text>
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
                <Text>Ng??y b???t ?????u: </Text>
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
                <Text>Ng??y k???t th??c: </Text>
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
                <Text>Ng?????i ph??? tr??ch: </Text>
                <Text style={{ fontWeight: 'bold' }}>????? Th??? Th???o</Text>
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
                <Text>Ho???t ?????ng: </Text>
                <Text style={{ fontWeight: 'bold' }}>Ph??t qu??</Text>
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
                <Text>S??? l?????ng: </Text>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>100 ph???n qu??</Text>
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
                <Text>S??? ti???n d??? t??nh: </Text>
                <Text style={{ fontWeight: 'bold' }}>50,000,000 VN??</Text>
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
                <Text>?????a ??i???m: </Text>
                <Text style={{ fontWeight: 'bold' }}>UBND ph?????ng 18 - Qu???n 4</Text>
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
                <Text>Ng??y b???t ?????u: </Text>
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
                <Text>Ng??y k???t th??c: </Text>
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
                <Text>Ng?????i ph??? tr??ch: </Text>
                <Text style={{ fontWeight: 'bold' }}>????? Th??? Th???o</Text>
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
