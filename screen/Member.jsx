import * as React from 'react';
import { View, useWindowDimensions, Text, Pressable, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { AntDesign } from '@expo/vector-icons';


const FirstRoute = () => (

    <View style={{ flex: 1, backgroundColor: '#fff' }} >
        <Pressable style={{
            width: '100%',
            height: 40,
            paddingTop: 15,
            paddingBottom: 20,
        }}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}><AntDesign name="adduser" size={24} color="green" />  Thêm thành viên</Text>
        </Pressable>
        <View style={{
            marginTop: 20,
            paddingLeft: 20
        }}>
            <Pressable style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=3' }} />
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Lê Duy Tuấn Vũ</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Trưởng nhóm</Text>
                </View>
            </Pressable>
            <Pressable style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=4' }} />
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Nguyễn Văn An</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Thành viên</Text>
                </View>
            </Pressable>
            <Pressable style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=5' }} />
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Đỗ Thị Thảo</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Thành viên</Text>
                </View>
            </Pressable>
        </View>

    </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
        <Pressable style={{
            width: '100%',
            height: 40,
            paddingTop: 15,
            paddingBottom: 20,
        }}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}><AntDesign name="adduser" size={24} color="green" />  Thêm quản trị viên</Text>
        </Pressable>
        <View style={{
            marginTop: 20,
            paddingLeft: 20
        }}>
            <Pressable style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: 'https://i.pravatar.cc/300?img=3' }} />
                <View>
                    <Text style={{ fontSize: 20, paddingLeft: 20 }}>Lê Duy Tuấn Vũ</Text>
                    <Text style={{ fontSize: 12, paddingLeft: 20, fontStyle: 'italic' }}>Trưởng nhóm</Text>
                </View>
            </Pressable>
        </View>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function Member({ navigation }) {


    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tất cả' },
        { key: 'second', title: 'Quản trị viên' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#000' }}
            style={{ backgroundColor: 'white' }}
            activeColor='black'
            inactiveColor='black'
        />
    );

    return (
        // <View>


        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}

        />
        // </View >
    );
}
