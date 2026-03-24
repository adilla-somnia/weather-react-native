import { Icon, Surface, Text } from "react-native-paper";
import { weatherStyle } from "../style/weatherStyle";
import { icons } from "./TempCard";

const days_full = {
    "Seg": "Segunda",
    "Ter": "Terça",
    "Qua": "Quarta",
    "Qui": "Quinta",
    "Sex": "Sexta",
    "Sáb": "Sábado",
    "Dom": "Domingo",
    "Sab": "Sábado"
}

export default function ForecastCard({ day_name, temp_min, temp_max, condition }) {
    const IconComponent = icons[condition];

    // function to show the horizontal cards with the day, icon and temperatures

    return (
        <Surface elevation={0} style={weatherStyle.forecastCard}>
            <Text style={{ color: "white", fontSize: 16 }}>{days_full[day_name]}</Text>

            {IconComponent ? (
                <IconComponent width={50} height={50} />
            ) : (
                <Text>?</Text>
            )}

            <Surface elevation={0} style={weatherStyle.forecastCardTemp}>
                <Text style={{ color: "white" }}>{temp_min}°</Text>
                <Text style={{ color: "white", opacity: 0.7 }}>{temp_max}°</Text>
            </Surface>
        </Surface>
    )
}