import Main from "./Main";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from "expo-status-bar";
import {Button, Text, View} from "react-native";
import {RootStackParamList, UsersScreeProps} from "./navigationTypes";


const Stack = createNativeStackNavigator<RootStackParamList>();

const Users = ({navigation}: UsersScreeProps) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User1</Text>
            <Button title={'Jump to home Screen'} onPress={() => navigation.navigate('Home', {
                id: 1,
                name: 'koda',
                isMarried: false
            })}/>
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main}/>
                <Stack.Screen name="Users" component={Users}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

