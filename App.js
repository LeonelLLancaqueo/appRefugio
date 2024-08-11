

import Home from './src/screens/Home/Home';
import Refugio from './src/screens/Refugio/Refugio';
import PersonForm from './src/screens/PersonForm/PersonForm';

import Personas from './src/screens/Personas/Personas';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import urlApi from './src/components/urlApi';


const Drawer = createDrawerNavigator();



export default function App() {

  const [refugio, setRefugio]= useState([]);
  const[isLoading, setLoading]= useState(false);

  function fetchRefugio(){
    setLoading(true);

    try {
      fetch(urlApi+"refugios/id-name")
      .then(
      response =>{
        return response.json();
      }
      ).then(
      responseJson => {
        setRefugio((preloadElements) => {
          return [...preloadElements, ...responseJson];
        });
      }
    )  
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
    
}


  useEffect( ()=>{
    fetchRefugio();
  },[]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        

    {/*agregar arreglo y con un map crear los componentes  de drawer.screen  */}
     
      
        <Drawer.Screen name="RefugiosBariloche"  component={Home} />
        
        {refugio.map(item => <Drawer.Screen key={item.id} name={item.nombre} initialParams={{"id": item.id}} component={Refugio} />)}

        <Drawer.Screen name="Registrar Persona"  component={PersonForm} />
        <Drawer.Screen name="TablaPersonas"  component={Personas} />
      
        
      </Drawer.Navigator>
    </NavigationContainer>
    
    
  )
  
}


