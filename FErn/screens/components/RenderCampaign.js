import react from "react";
import { View, Text, FlatList, ScrollView} from 'react-native';


export const RenderCampaign= ({campaignName, data, color}) =>{
    const renderFlatListItem = ({item}) =>(
        <View style={{width:280,height:200, margin:16, backgroundColor: color ? color : 'pink',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
            <Text>{item}</Text>
        </View>
    )
return(
    <View style={{height:200}}>
        <Text style={{marginLeft:16, fontSize:20}}>{campaignName}</Text>
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderFlatListItem}
        />
    </View>
)}