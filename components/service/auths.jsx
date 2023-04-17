import axios from 'axios';
import url from '../Back' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Counter from '../../screens/components/MOBX/ProfileRender/ProfileMobxRener'


const axiosApiInstance = axios.create();
axiosApiInstance.interceptors.request.use(
  
  async (config) => {

   config.headers = { 
     'Authorization': `Bearer ${await AsyncStorage.getItem('@access')}`

   }
   return config;
 },
 async (error) => {
    return Promise.reject(error)
 }
         
        
       );


axiosApiInstance.interceptors.response.use(
 undefined,
  async(err) => {
  const error = err.response;
  const originalRequest = error.config;


    console.log(error.status)
  // if error is 401 
  if (error.status === 401) {

    console.log(await AsyncStorage.getItem('@refresh'))
    axios.post(url.base + url.refresh,{refresh: await AsyncStorage.getItem('@refresh')}).then(async(response)=>{


      await AsyncStorage.setItem('@access',response.data.access);

      error.config.headers["Authorization"]  = `Bearer ${ await AsyncStorage.getItem('@access')}`
    
      
    
    
        return  axiosApiInstance(originalRequest);
       
    }).catch( (error_data)=>{
      Counter.trigger();
    })
 } 

 return   Promise.reject(error)

});


export default axiosApiInstance;







        
