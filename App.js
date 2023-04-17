import React, { useEffect, useState } from "react";
import { Box, Heading, AspectRatio, Image, Text,Button, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminScreen from './screens/Admin'
import ClientScreen from './screens/Client'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import {observer} from 'mobx-react-lite'
import AdminScreenBase from './screens/AdminStatic' 
import url from './components/Back'
import axiosApiInstance from './components/service/auths'
import Counter from './screens/components/MOBX/ProfileRender/ProfileMobxRener'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from "axios";

const Tab = createBottomTabNavigator();

const IsFirst =()=>{
  const [logo,setLogo]=useState('')
  useEffect(()=>{
    axios.get(url.base+url.logo).then((response)=>{

        setLogo(`${url.base2}${response.data.logo}`)
    })
  },[])
  const navigation = useNavigation();
  return(
    <Center flex={1} px="3">
    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: `${logo}`
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            RESTAURANT
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Қайырлы күн қолданушы
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Сізің қандай қоғам мүшесіне жататынын таңдауын сұраймыз
            </Text>
          </Stack>
          <Stack mb="2.5" mt="1.5" direction={{
        base: "column",
        md: "block"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>
          <Button size="sm" variant="outline" onPress={()=>navigation.navigate('Клиент')}>
            Клиент
          </Button>
          <Button size="sm" variant="outline" colorScheme="secondary" onPress={()=>navigation.navigate('Администратор')} >
            Администратор
          </Button>
   
        </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                Администрация
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Center>
  )
}



const App = observer(()=>{
  const [isAuth,setAuth] = useState(false)
  useEffect(()=>{

    axiosApiInstance.post(url.base +'api/v1/check/auth/').then((res)=>{
      console.log(res.status)
      setAuth(true);

    }).catch((err)=>{
      console.log(err);
      setAuth(false);
    })
  },[Counter.bool])


  return  (
  <>
  
  <NavigationContainer>
    {
      isAuth
      ?
      
    <Tab.Navigator>

      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" size={size} color={color} />
          ), }} name="Клиент" component={ClientScreen} />
      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="solar-panel-large" size={size} color={color} />
          ), }} name="Панель" component={AdminScreenBase} />
      </Tab.Navigator>
      
      :
      <Tab.Navigator>
      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ), }} name="Басты бет" component={IsFirst} />
      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="admin-panel-settings" size={size} color={color} />
          ), }} name="Администратор" component={AdminScreen} />

      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" size={size} color={color} />
          ), }} name="Клиент" component={ClientScreen} />
      </Tab.Navigator>
    }



  </NavigationContainer>

  </>
  )

 
});

    export default () => {
        return (
          <NativeBaseProvider>
   
                <App />
    
          </NativeBaseProvider>
        );
    };