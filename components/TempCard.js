import { Surface, Text } from "react-native-paper";
import ClearDay from "../assets/small_conditions_icons/clear_day.svg";
import ClearNight from "../assets/small_conditions_icons/clear_night.svg";
import Cloud from "../assets/small_conditions_icons/cloud.svg";
import CloudyDay from "../assets/small_conditions_icons/cloudly_day.svg";
import CloudyNight from "../assets/small_conditions_icons/cloudly_night.svg";
import Fog from "../assets/small_conditions_icons/fog.svg";
import Hail from "../assets/small_conditions_icons/hail.svg";
import NoneDay from "../assets/small_conditions_icons/none_day.svg";
import NoneNight from "../assets/small_conditions_icons/none_night.svg";
import Rain from "../assets/small_conditions_icons/rain.svg";
import Snow from "../assets/small_conditions_icons/snow.svg";
import Storm from "../assets/small_conditions_icons/storm.svg";
import Sunrise from "../assets/small_conditions_icons/sunrise.svg";
import Sunset from "../assets/small_conditions_icons/sunset.svg";
import FirstQuarter from "../assets/small_conditions_icons/first_quarter.svg";
import Full from "../assets/small_conditions_icons/full.svg";
import LastQuarter from "../assets/small_conditions_icons/last_quarter.svg";
import New from "../assets/small_conditions_icons/new.svg";
import WaningCrescent from "../assets/small_conditions_icons/waning_crescent.svg";
import WaningGibbous from "../assets/small_conditions_icons/waning_gibbous.svg";
import WaxingCrescent from "../assets/small_conditions_icons/waxing_crescent.svg";
import WaxingGibbous from "../assets/small_conditions_icons/waxing_gibbous.svg";
import { weatherStyle } from "../style/weatherStyle";

export const icons = {
    clear_day: ClearDay,
    clear_night: ClearNight,
    cloud: Cloud,
    cloudly_day: CloudyDay,
    cloudly_night: CloudyNight,
    fog: Fog,
    hail: Hail,
    none_day: NoneDay,
    none_night: NoneNight,
    rain: Rain,
    snow: Snow,
    storm: Storm,
    sunrise: Sunrise,
    sunset: Sunset,
    first_quarter: FirstQuarter,
    full: Full,
    last_quarter: LastQuarter,
    new: New,
    waning_crescent: WaningCrescent,
    waning_gibbous: WaningGibbous,
    waxing_crescent: WaxingCrescent,
    waxing_gibbous: WaxingGibbous
};

export default function TempCard({ temp, hour, condition, highlight }) {
    const IconComponent = icons[condition];

    // function to show the cards with temperature, icons and time

    return (
        <Surface elevation={0} style={[highlight === true && weatherStyle.highlighted]}>
            <Text style={{ color: "white", textAlign: "center", marginBottom: 6, fontWeight: 600 }}>
                {temp}ºC
            </Text>

            {IconComponent ? (
                <IconComponent width={50} height={50} />
            ) : (
                <Text>?</Text>
            )}


            <Text style={{ color: "white", textAlign: "center", marginTop: 6 }}>
                {hour.slice(0, 5)}
            </Text>
            <Text style={{ color: "white", textAlign: "center" }}>
                {hour.slice(6, 8)}
            </Text>
        </Surface>
    );
}