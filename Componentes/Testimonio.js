import {View, Text, StyleSheet, Image} from "react-native";

function Contexto(props){
    return(
        <View style={styles.conteiner}>
            <View style={styles.conteinerImagen}>
              <Image style={styles.imagenP} source={props.imagenP}/>
            </View>

            <View style={styles.contenedorTestimonio}>
              <Text style={styles.nombre}> {props.nombre}
                  <Text style= {styles.ciudad}> en {props.ciudad} </Text>
             </Text>
              <Text style={styles.cargo}>{props.cargo} en
                 <Text style={styles.empresa}> {props.empresa}</Text>
             </Text>
              <Text style={styles.testimonio}>{props.testimonio}</Text>
            </View>
        </View>
    );
}
export default Contexto;

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        flexDirection: 'row',
        minHeight:250,
        backgroundColor: '#fff',
        marginTop:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    imagenP:{
        height:250,
        width: '100%'
    },
    nombre:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    empresa:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    ciudad:{
        fontSize: 14,
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'normal'
    },
    cargo:{
        fontSize: 14,
        marginBottom: 20,
        color: 'black',
        alignSelf: 'center'
    },
    testimonio:{
        fontSize: 13,
        color: 'black',
        alignSelf: 'center',
        textAlign: 'justify',
        marginLeft: 10,
        marginRight:10
    },
    imagenP:{
        height: 250,
        width: '100%',
        
    },
    conteinerImagen: {
        flex: 1,
        alignSelf: 'center'
    },
    contenedorTestimonio: {
        flex: 2,
        alignSelf: 'center',
        marginBottom: 30,
   },
})