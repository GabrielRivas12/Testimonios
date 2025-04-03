import {View, Text, StyleSheet, Image} from "react-native";

function Contexto(props){
    return(
        <View style={styles.conteiner}>
            <View style={styles.conteinerImagen}>
              <Image style={styles.imagenP} source={props.imagenP}/>
            </View>

            <View style={styles.contenedorTestimonio}>
              <Text style={styles.ciudad}>{props.ciudad}</Text>
              <Text style={styles.cargo}>{props.cargo}</Text>
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

    },
    imagenP:{
        height:250,
        width: '100%'

    },
    ciudad:{
        fontSize: 12,
        marginTop: 20,
        color: 'black',
        alignSelf: 'center'
        
    },
    cargo:{
        fontSize: 12,
        marginBottom: 5,
        color: 'black',
         alignSelf: 'center'
    },
    testimonio:{
        fontSize: 12,
        color: 'black',
        alignSelf: 'center',
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
        alignItems: 'center'
   },


})