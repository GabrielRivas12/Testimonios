import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Testimonio from './Componentes/Testimonio';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedorLogo}>
      <Image style={styles.logo} source={require('./assets/Imagenes/Logo.png')}/>
      
      </View>
      <Text style={styles.titulo}> Esto es lo que nuestros alumnos dicen sobre freeCodeCamp: </Text>

 <ScrollView style={styles.scrol}>  
      <View style={styles.contenedorTestimonio}>
        <View style={styles.contenedorImagen}>
           <Testimonio
            imagenP = {require('./assets/Imagenes/chino.png')}/>   
            <Testimonio           
          imagenP = {require('./assets/Imagenes/negra.png')}/>  
          <Testimonio           
          imagenP = {require('./assets/Imagenes/chela.png')}/>  
           </View>
           

        <View style={styles.contenedorTexto}>
          <Testimonio
           ciudad = 'Wang Shawn en Singapur'
           cargo = 'Ingeniero de Software en Amazonas'
           testimonio = '"Es aterrador cambiar de carrera. Solo gané la confianza de que podía codificar trabajando a través de las cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tuve un trabajo de seis cifras como Ingeniero de Software. freeCodeCamp cambió mi vida."'
          />

          <Testimonio
           ciudad = 'Sarah Chima en Nigeria'
           cargo = 'Ingeniero de Software en ChatDesk'
           testimonio = '"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble."'
          />

          <Testimonio
           ciudad = 'Emma Bostiana en Suecia'
           cargo = 'Ingeniero de Software en Spotify'
           testimonio = '"Siempre he luchado por aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
          />

           </View>



        </View> 
        </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrol: {
width:'100%'
  },
  contenedorLogo: {
    height:80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  logo: {
    height:80,
    width: "100%"
  },
  contenedorTestimonio:{
    flex: 1,
    flexDirection: 'row',
    minHeight: 250,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenedorImagen: {
flex: 1,
justifyContent: 'flex-start'

  },

  contenedorTexto: {
    flex: 2,
    justifyContent: 'flex-start'
     },
});

