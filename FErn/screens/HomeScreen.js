import react from "react";
import { View, Text, FlatList, ScrollView} from 'react-native';
import { RenderCampaign } from "./components/RenderCampaign";

const HomeScreen = () =>{
    const renderBanner = () =>(
        <View style={{flex:1, height:200, margin:16, borderRadius:16, backgroundColor:'white'}}>
            <Text style={{margin:8, fontSize:20}}>배너</Text>
        </View>
    )

    return(
        <ScrollView>
            <View style={{marginTop:20}}/>
            {renderBanner()}
            <View style={{marginTop:20}}/>
            <RenderCampaign campaignName='New Campaign' data={[1,2,3,4]}/>
            <View style={{marginTop:20}}/>
            <RenderCampaign campaignName='Popular Campaign' data={[1,2,3,4]} color='blue'/>
            <View style={{marginTop:20}}/>
            <RenderCampaign campaignName='My Campaign' data={[1,2,3,4]} color='white'/>
            <View style={{marginTop:20}}/>
        </ScrollView>
    )
};
export default HomeScreen;