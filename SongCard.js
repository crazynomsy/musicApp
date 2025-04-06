import React from "react";
import {Text,View,Image} from 'react-native';
import styles from './SongCardStyle';

 const SongCard = ({song}) => {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={{uri:song.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{song.title}</Text>
                 
                <View style={styles.info_container}>
                <Text style={styles.artist}>{song.artist}</Text>
                <Text style={styles.year}>{song.year}</Text>
                 
                {song.isSoldOut && (<View style={styles.container2}>
                    <Text style={styles.text2}>Tükendi</Text>
                </View>)}
              
               
                </View>   
            </View>
            
        </View>
    )
}
export default SongCard;

  


