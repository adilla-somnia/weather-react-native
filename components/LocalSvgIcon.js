import { Text } from "react-native-paper";
import Rain from "../assets/conditions_icons/rain.svg";
import ClearDay from "../assets/conditions_icons/clear_day.svg";
import ClearNight from "../assets/conditions_icons/clear_night.svg";
import Cloud from "../assets/conditions_icons/cloud.svg";
import CloudyDay from "../assets/conditions_icons/cloudly_day.svg";
import CloudyNight from "../assets/conditions_icons/cloudly_night.svg";
import Fog from "../assets/conditions_icons/fog.svg";
import Hail from "../assets/conditions_icons/hail.svg";
import NoneDay from "../assets/conditions_icons/none_day.svg";
import NoneNight from "../assets/conditions_icons/none_night.svg";
import Snow from "../assets/conditions_icons/snow.svg";
import Storm from "../assets/conditions_icons/storm.svg";

const icons = {
    rain: Rain,
    clear_day: ClearDay,
    clear_night: ClearNight,
    cloud: Cloud,
    cloudly_day: CloudyDay,
    cloudly_night: CloudyNight,
    fog: Fog,
    hail: Hail,
    none_day: NoneDay,
    none_night: NoneNight,
    snow: Snow,
    storm: Storm,
};

export default function LocalSvgIcon({ condition, size }) {
    const IconComponent = icons[condition];

    // function to retrieve the local SVG for testing purposes 

    // if the condition doesn't match, show fallback text
    if (!IconComponent) {
        return <Text>Icon not found for {condition}</Text>;
    }

    return <IconComponent width={size} height={size} />;
}