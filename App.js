import React,{useState} from 'react';

import { FlatList, SafeAreaView, View, Text, StyleSheet} from 'react-native';

import muzik_data from './muzik-data.json';
import SongCard from './src/components/SongCard';
import SearchBar from './SearchBar/SearchBar';

export default function App () {

    const [list,setList] = useState(muzik_data)
    const renderSong = ({item}) => <SongCard song={item}/>
    const renderKey = (item => item.id)
    const separator = () => <View style={styles.sep}/>

   const handleSearch = text => {
    const searchHeader = muzik_data.filter(song =>{
        const searchText = text.toLowerCase();
        const searchSong = song.title.toLowerCase();

        return searchSong.indexOf(searchText) > -1

    })
       setList(searchHeader);                        
   }
    

   

    return (
        <SafeAreaView style={styles.view} >
            <View >
                <SearchBar onSearch={handleSearch}/>
                <FlatList 
                keyExtractor={renderKey}
                data={list}
                renderItem={renderSong} 
                ItemSeparatorComponent={separator} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create ({
    view:{backgroundColor:'white',
        flex:1

    },
    sep:{
        borderWidth:1,
        borderColor:'#ccc',
    }
   
})