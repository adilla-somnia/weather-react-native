import { useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { getForecast } from "../api/weather";

export default function WeatherForecast() {
    const [fullForecast, setFullForecast] = useState(null);
    const [todayForecast, setTodayForecast] = useState(null);
    const [currentTemp, setCurrentTemp] = useState(null);
    const [todayForecastDay, setTodayForecastDay] = useState(null);

    const longWeekDays = {"Seg": "Segunda-feira"}

    useEffect(() => {
        const fetchForecast = async () => {
        const fetchedForecast = await getForecast();
        setFullForecast(fetchedForecast)
        setCurrentTemp(fetchedForecast.data.results.temp)
        setTodayForecast(fetchedForecast.data.results.forecast[0])
        setTodayForecastDay(fetchedForecast.data.results.forecast[0].weekday)
        console.log(fetchedForecast)
    };
        fetchForecast();

    }, []);

    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f6ff' }}>
        <Text>Let's see where this takes us</Text>
        {currentTemp !== null ? 
        <Text>{currentTemp}</Text> : <Text>loading...</Text>}

        {todayForecast !== null ? 
        <SafeAreaView>
            <Text>Today is {todayForecast.date}, {todayForecastDay}</Text>
            
        </SafeAreaView> : <Text>...loading</Text>}

        {fullForecast ? <SafeAreaView>
            <Text>You're in {fullForecast.data.results.city}</Text>
            <Text>{fullForecast.data.results.description}</Text>
            <Text>Humidade: {fullForecast.data.results.humidity}</Text>
        </SafeAreaView> : <Text>waiting</Text>}

    </SafeAreaView>
)
}