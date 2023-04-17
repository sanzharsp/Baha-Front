

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Heading, Switch, Text, Center,Button, Stack, NativeBaseProvider } from "native-base";
import { ScrollView } from "react-native";
import Counter from './components/MOBX/ProfileRender/ProfileMobxRener' 
const AdminScreenBase = () => {
  return( 
     <ScrollView>
       <Box  style={{padding:10}} alignItems="center">
      <Box style={{width:'100%'}}   maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
 
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
             Жүйеден шығу
            </Heading>
  
          </Stack>
       
          <Button onPress={async()=>{await AsyncStorage.removeItem('@access'); Counter.trigger();}} size="sm" variant="subtle" colorScheme="secondary">
            Шығу
          </Button>
    
      
        </Stack>
      </Box>
      </Box>


      <Box style={{padding:10}}  alignItems="center">
      <Box   maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
 
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Жаарықты сөндіру немесе жағу
            </Heading>
  
          </Stack>
       
          <Switch offTrackColor="orange.100" onTrackColor="orange.200" onThumbColor="orange.500" offThumbColor="orange.50" />
    
      
        </Stack>
      </Box>
      </Box>

     
    </ScrollView>
    )
};

    export default () => {
        return (
          <NativeBaseProvider>
           
                <AdminScreenBase />
          
          </NativeBaseProvider>
        );
    };
    