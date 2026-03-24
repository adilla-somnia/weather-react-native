import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { getIcon } from "../api/weather";

export default function SvgIcon({ condition }) {
    const [svg, setSvg] = useState(null);

    // function to handle the SVG from the API request

    useEffect(() => {
        const fetchIcon = async () => {
            try {
                const fetchedIcon = await getIcon(condition);


                let xml = fetchedIcon.data;

                // sanitize problematic SVG features
                xml = xml
                    .replace(/xlink:href/g, "href")
                    .replace(/xmlns:xlink="[^"]*"/g, "");

                setSvg(xml);
            } catch (err) {
                console.error(err);
            }
        };

        fetchIcon();
    }, []);

    return (
        <View>
            {svg ? (
                <SvgXml xml={svg} width={size} height={size} preserveAspectRatio="xMidYMid meet" />
            ) : (
                <Text>loading icon...</Text>
            )}
        </View>
    );
}