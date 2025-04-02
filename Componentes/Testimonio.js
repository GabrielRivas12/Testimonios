import {View, Text, StyleSheet, Image} from "react-native";

function Contexto(props){
    return(
        <View>
            <Text style={styles.ciudad}>{props.ciudad}</Text>
            <Text style={styles.cargo}>{props.cargo}</Text>
            <Text style={styles.testimonio}>{props.testimonio}</Text>
            <Image style={styles.imagenP} source={props.imagenP}/>
                
        </View>

    );
        
    

}
export default Contexto;

const styles = StyleSheet.create({
    ciudad:{
        fontSize: 12,
        color: 'black',
         alignSelf: 'center'

    },
    cargo:{
        fontSize: 12,
        color: 'black',
         alignSelf: 'center'
    },
    testimonio:{
        fontSize: 12,
        color: 'black',
        alignSelf: 'center'
        
    },
    imagenP:{
        height: 250,
        width: '100%',
        alignSelf: 'center'
    }


})