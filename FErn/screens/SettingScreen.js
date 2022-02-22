import react from "react";
import { View, Text, FlatList, ScrollView} from 'react-native';
import { RenderCampaign } from "./components/RenderCampaign";

const SettingScreen = () =>{
    const renderProfile = () => (
        <View style={{alignItems:'center'}}>
            <View style={{width:200,height:200,borderRadius:100,backgroundColor:'grey'}}/>
        </View>
    )
    const renderInformation = (info) =>(
        <View style={{flex:1,height:40,borderRadius:16,backgroundColor:'grey', justifyContent:'center'}}>
            <Text style={{marginLeft:16}}>{info}</Text>
        </View>
    )
    return(
        <ScrollView>
            <View style={{marginTop:40}}/>
            {renderProfile()}
            <View style={{marginTop:64}}/>
            {renderInformation('Name')}
            <View style={{marginTop:20}}/>
            {renderInformation('Wallet Address')}
            <View style={{marginTop:20}}/>
            {renderInformation('Wallet Price')}
            <View style={{marginTop:40}}/>
            <RenderCampaign campaignName='My Campaign' data={[1,2,3,4]} color='white'/>
        </ScrollView>
    )
};
export default SettingScreen;