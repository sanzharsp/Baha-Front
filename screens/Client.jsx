import React, { useEffect } from "react";
import { 
  Box,
  Pressable,
   Heading, 
   Modal,
   Button 
   ,Progress,
    AspectRatio,
    Badge,Flex, 
    Image,Spacer,
     Text, Center,
      HStack, Stack, 
      NativeBaseProvider
     } from "native-base";
import {

    ScrollView,
    RefreshControl
  
  } from 'react-native';
import { useState } from "react";
import axios from "axios";
import url from "../components/Back";


const ClientScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [ref, setRef] = useState(false);
    const [data, setData] = useState(false);
    const [data2, setData2] = useState(false);

    const [modalVisible, setModalVisible] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    useEffect(()=>{
      axios.get(url.base+url.stol).then((res)=>{
        setData(res.data)
        setTimeout(()=>setRef(!ref), 2000);
      })
    },[ref])

    useEffect(()=>{
      axios.get(url.base+url.parking).then((res)=>{
        setData2(res.data)
      })
    },[ref])

    const MenuOrder=(id)=>{
      console.log(id)
      setModalVisible(!modalVisible);
    }
  return< ScrollView 
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
     <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="center" size="lg">
        <Modal.Content>
        
          <Modal.Header>Тапсырыс беру</Modal.Header>
          <Modal.Body>
            Бірінші екінші тағамды таңдап тапсырыс беріңіздер

          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setModalVisible(false);
          }}>
              Тапсырыс беру
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>


    <Box alignItems="center">
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
        <Box>
          <HStack alignItems="center">
            <Badge colorScheme="darkBlue" _text={{
            color: "white"
          }} variant="solid" rounded="4">
              Business
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              Қазір
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Паркингтегі бос орындар саны
          </Text>
      
  

            <Progress bg="coolGray.100" value={data2.number} max={12}/>
            <Text fontSize={10} color="coolGray.800">12/{data2.number}</Text>
     

   
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Толығырақ
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>


 <Box  style={{padding:5}} alignItems="center">

</Box>
{
  data.stol1 == false
  ?   
<Pressable  onPress={() => {
          MenuOrder(1);
      }} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              1 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            1 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}



{
  data.stol2 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              2 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            2 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol3 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              3 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            3 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol4 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              4 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            4 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol5 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              5 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            5 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol6 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              6 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            6 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol7 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              7 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            7 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


{
  data.stol8 == false
  ?
<Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
  <Box  style={{padding:5}} alignItems="center">
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
            uri: "https://img.freepik.com/free-photo/indoor-with-elegant-wooden-dining-table-chairs_116348-100.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="green.700" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            БОС
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              8 үстел
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              5 орындық
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                RESTAURANT
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Pressable>
    :
    <Box style={{padding:5}} alignItems="center">
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
        <AspectRatio  w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS6M05AJWve2bYNBYKRnFKzKSAN3Oicmj3Q&usqp=CAU"
        }} alt="image" />
        </AspectRatio>
        <Center bg="red.800" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          БОС ЕМЕС
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            8 үстел
          </Heading>
          <Text fontSize="xs" _light={{
          color: "violet.500"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="-0.5" mt="-1">
            5 орындық
          </Text>
        </Stack>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              RESTAURANT
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
}


    </ScrollView>
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <ClientScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    