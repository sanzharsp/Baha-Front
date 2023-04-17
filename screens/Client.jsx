import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import {

    ScrollView,
    RefreshControl
  
  } from 'react-native';
import { useState } from "react";


const ClientScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  return< ScrollView 
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }>
 <Box  style={{padding:5}} alignItems="center">
<Text> 4 үстел бос 4 бос емес </Text>
</Box>
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
          <Center bg="violet.500" _dark={{
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
          <Center bg="violet.500" _dark={{
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
              4 орындық
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
    