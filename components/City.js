import { Icon, Surface, Text } from "react-native-paper";
import { weatherStyle } from "../style/weatherStyle";


export default function City({ cityName }) {

    // show the city name plus the icons

    return (
        <Surface elevation={0} style={weatherStyle.cityContainer} >
            <Icon source="map-marker-outline" color="white" size={20} />
            <Text style={{ color: "white", fontSize: 15, fontWeight: 500, marginRight: 10 }}>{cityName}</Text>
            <Icon source="menu-down" color="white" size={25} />
        </Surface>
    )
}