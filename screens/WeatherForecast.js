import { Icon, Surface, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { weatherStyle } from "../style/weatherStyle";
import { useEffect, useState } from "react";
import { getForecast, getIcon } from "../api/weather";
import City from "../components/City";
import { ScrollView, StatusBar } from "react-native";
import LocalSvgIcon from "../components/LocalSvgIcon";
import TempCard from "../components/TempCard";
import ForecastCard from "../components/ForecastCard";

// create arrays to categorize the codes with clear or cloudy 
const grayCodes = [
    ...Array.from({ length: 27 }, (_, i) => i), // 0–26
    35,
    ...Array.from({ length: 7 }, (_, i) => i + 37), // 37–43
    ...Array.from({ length: 3 }, (_, i) => i + 45), // 45–47
];

const clearCodes = [27, 28, 29, 30, 31, 32, 33, 34, 36, 44];

// function to categorize the code
const getWeatherType = (code) => {
    if (grayCodes.includes(code)) return "gray";
    if (clearCodes.includes(code)) return "clear";
    return "unknown";
};

export default function WeatherForecast() {
    const [currently, setCurrently] = useState(null);
    const [condition, setCondition] = useState(null);
    const [code, setCode] = useState(null);
    const [fullForecast, setFullForecast] = useState(null);
    const [todayForecast, setTodayForecast] = useState(null);
    const [currentTemp, setCurrentTemp] = useState(null);
    const [tomorrowForecast, setTomorrowForecast] = useState(null);

    //
    useEffect(() => {
        const fetchForecast = async () => {
            // the API request can be made with the code below
            // const fetchedForecast = await getForecast();

            // you can test without the API request with the data below
            const fetchedForecast = {
                "by": "city_name",
                "valid_key": true,
                "results": {
                    "temp": 31,
                    "date": "24/03/2026",
                    "time": "09:01",
                    "condition_code": "29",
                    "description": "Parcialmente nublado",
                    "currently": "dia",
                    "woeid": 455824,
                    "city": "Recife, PE",
                    "img_id": "29",
                    "humidity": 62,
                    "cloudiness": 20.0,
                    "rain": 0.0,
                    "wind_speedy": "3.6 km/h",
                    "wind_direction": 100,
                    "wind_cardinal": "L",
                    "sunrise": "05:23 am",
                    "sunset": "05:28 pm",
                    "moon_phase": "waxing_crescent",
                    "condition_slug": "cloudly_day",
                    "city_name": "Recife",
                    "timezone": "-03:00",
                    "forecast": [
                        {
                            "date": "24/03",
                            "full_date": "24/03/2026",
                            "weekday": "Ter",
                            "max": 30,
                            "min": 26,
                            "humidity": 65,
                            "cloudiness": 81.0,
                            "rain": 2.03,
                            "rain_probability": 94,
                            "wind_speedy": "5.09 km/h",
                            "sunrise": "05:23 am",
                            "sunset": "05:28 pm",
                            "moon_phase": "waxing_crescent",
                            "description": "Chuvas esparsas",
                            "condition": "rain"
                        },
                        {
                            "date": "25/03",
                            "full_date": "25/03/2026",
                            "weekday": "Qua",
                            "max": 29,
                            "min": 25,
                            "humidity": 65,
                            "cloudiness": 38.0,
                            "rain": 0.35,
                            "rain_probability": 61,
                            "wind_speedy": "5.42 km/h",
                            "sunrise": "05:23 am",
                            "sunset": "05:27 pm",
                            "moon_phase": "waxing_crescent",
                            "description": "Chuvas esparsas",
                            "condition": "rain"
                        }
                    ],
                    "cref": "4b3d2f"
                },
                "execution_time": 0.02,
                "from_cache": false
            };
            setFullForecast(fetchedForecast)
            setCurrentTemp(fetchedForecast.results.temp)
            setTodayForecast(fetchedForecast.results.forecast[0])
            setTomorrowForecast(fetchedForecast.results.forecast[1])
            setCurrently(fetchedForecast.results.currently)
            setCode(Number(fetchedForecast.results.condition_code))
            setCondition(fetchedForecast.results.description)
        };
        fetchForecast();

    }, []);


    const textColor = "white";

    const backgroundMap = {
        gray: {
            dia: weatherStyle.grayDay,
            noite: weatherStyle.grayNight,
            darkerDia: weatherStyle.darkerGrayDay,  // Darker shade for gray during day
            darkerNoite: weatherStyle.darkerGrayNight,  // Darker shade for gray during night
        },
        clear: {
            dia: weatherStyle.clearDay,
            noite: weatherStyle.clearNight,
            darkerDia: weatherStyle.darkerClearDay,  // Darker shade for clear during day
            darkerNoite: weatherStyle.darkerClearNight,  // Darker shade for clear during night
        },
    };

    // get the code type, cloudy or clear
    const weatherType = getWeatherType(code);

    // get the background color according to the code type
    const backgroundStyle =
        backgroundMap[weatherType]?.[currently] || null;

    // get the darker backgroundcolor for the info containers
    const darkerBackgroundStyle =
        backgroundMap[weatherType]?.[`darker${currently.charAt(0).toUpperCase() + currently.slice(1)}`] || null;

    return (
        <ScrollView style={[weatherStyle.bigContainer, backgroundStyle]}>
            <StatusBar barStyle={"light-content"} />

            {!currently ?
                <Text>Loading...</Text> :
                <SafeAreaView style={[
                    weatherStyle.container,
                    backgroundStyle
                ]}>

                    {/* header with city name and notification bell */}
                    <Surface elevation={0} style={weatherStyle.header} >
                        <City cityName={fullForecast.results.city_name} />
                        <Icon source="bell-badge-outline" size={25} color="white" />
                    </Surface>


                    {/* current temperature, icon, and predictions */}
                    <Surface elevation={0} style={weatherStyle.mainInfo} >
                        <LocalSvgIcon condition={fullForecast.results.condition_slug} size={100} />
                        <Surface elevation={0} style={weatherStyle.mainInfoTemp} >
                            <Text style={{ textAlign: "center", fontSize: 50, color: textColor, marginLeft: 20, fontWeight: 600 }} >{fullForecast.results.temp}º</Text>
                            <Text style={{ textAlign: "center", color: textColor, marginTop: 5 }} >Previsões</Text>
                            <Surface elevation={0} style={weatherStyle.predictions} >
                                <Text style={{ color: textColor, marginTop: 5 }}>Max.: {todayForecast.max}º   Min.: {todayForecast.min}º</Text>
                            </Surface>
                        </Surface>
                    </Surface>


                    {/* containers with additional info */}
                    <SafeAreaView style={weatherStyle.containerDetails}>

                        {/* rain probability, humidity and wind speed */}
                        <Surface style={[weatherStyle.detail, darkerBackgroundStyle]} >
                            <Surface style={weatherStyle.firstDetail}>
                                <Surface elevation={0} style={weatherStyle.firstDetailItem}>
                                    <Icon source="water" size={20} color="white" /><Text style={{ color: textColor }}> {todayForecast.rain_probability}%</Text>
                                </Surface>
                                <Surface elevation={0} style={weatherStyle.firstDetailItem}>
                                    <Icon source="grain" size={20} color="white" />
                                    <Text style={{ color: textColor }}> {todayForecast.humidity}%</Text>
                                </Surface>
                                <Surface elevation={0} style={weatherStyle.firstDetailItem}>
                                    <Icon source="weather-windy" size={20} color="white" />
                                    <Text style={{ color: textColor }} >{todayForecast.wind_speedy}</Text>
                                </Surface>
                            </Surface>
                        </Surface>


                        {/* today's sunrise, current info, sunset and moon phase */}
                        <Surface style={[weatherStyle.detail, darkerBackgroundStyle]} >
                            <Surface style={weatherStyle.secondDetail} >
                                <Text style={{ color: textColor, fontWeight: 800, fontSize: 18 }}>Hoje</Text>
                                <Text style={{ color: textColor, fontWeight: 800 }}>{todayForecast.date}</Text>
                            </Surface>
                            <Surface style={weatherStyle.secondDetail} >
                                <TempCard temp={todayForecast.min} condition="sunrise" hour={todayForecast.sunrise} highlight={false} />
                                <TempCard temp={todayForecast.max} condition={todayForecast.condition} hour={fullForecast.results.time} highlight={true} />
                                <TempCard temp={todayForecast.max - 3} condition="sunset" hour={todayForecast.sunset} highlight={false} />
                                <TempCard temp={todayForecast.min} condition={todayForecast.moon_phase} hour="09:00 pm" highlight={false} />
                            </Surface>
                        </Surface>


                        {/* next days predictions with day name, icon and temperatures */}
                        <Surface style={[weatherStyle.detail, darkerBackgroundStyle]} >
                            <Surface style={weatherStyle.thirdDetailHead} >
                                <Text style={{ color: textColor, fontWeight: 800, fontSize: 18 }}>Próximos Dias</Text>
                                <Icon size={30} color="white" source="calendar-month-outline" />
                            </Surface>
                            <Surface style={weatherStyle.thirdDetail} >
                                <ForecastCard condition={todayForecast.condition} temp_min={todayForecast.min} temp_max={todayForecast.max} day_name={todayForecast.weekday} />
                                <ForecastCard condition={tomorrowForecast.condition} temp_min={tomorrowForecast.min} temp_max={tomorrowForecast.max} day_name={tomorrowForecast.weekday} />
                            </Surface>
                        </Surface>
                    </SafeAreaView>
                </SafeAreaView>
            }
        </ScrollView >
    )
}
