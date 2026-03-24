import { StyleSheet } from "react-native";

export const weatherStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "column",
        paddingBottom: 50
    },
    bigContainer: {
        flex: 1,
    },
    grayDay: {
        backgroundColor: "#7f8c92",
    },
    grayNight: {
        backgroundColor: "#37474F",
    },
    clearDay: {
        backgroundColor: "#378cd1",
    },
    clearNight: {
        backgroundColor: "#1b145e",
    },
    darkerGrayDay: {
        backgroundColor: "#5a6266",
    },
    darkerGrayNight: {
        backgroundColor: "#0e3144",
    },
    darkerClearDay: {
        backgroundColor: "#0e63a8",
    },
    darkerClearNight: {
        backgroundColor: "#080524",
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 80,
        padding: 10,
        paddingTop: 15,
        backgroundColor: "#ffffff00",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
    },
    cityContainer: {
        backgroundColor: "#ffffff00",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    mainInfo: {
        flexDirection: "column",
        backgroundColor: "red",
        marginTop: 100,
        backgroundColor: "#c55f5f00",
        justifyContent: "center",
        alignItems: "center"
    },
    mainInfoTemp: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#c9141400",
    },
    predictions: {
        flexDirection: "column"
    },
    containerDetails: {
        flexDirection: "column",
        flex: 1,
        marginTop: 15,
        gap: 20,
        width: "85%",
        alignSelf: "center"
    },
    firstDetail: {
        backgroundColor: "#ffffff00",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    firstDetailItem: {
        backgroundColor: "#ffffff00",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    detail: {
        borderRadius: 30,
        flex: 1,
        padding: 10
    },
    secondDetail: {
        backgroundColor: "#ff000000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        padding: 5
    },
    forecastCard: {
        backgroundColor: "#ff000000",
        alignItems: "center",
        gap: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%"
    },
    forecastCardTemp: {
        backgroundColor: "#ff000000",
        flexDirection: "row",
        gap: 5
    },
    thirdDetail: {
        flexDirection: "column",
        backgroundColor: "#ff000000",
        gap: 10,
        padding: 5
    },
    thirdDetailHead: {
        backgroundColor: "#ffffff00",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        padding: 5
    },
    highlighted: {
        borderColor: "#ffffff5e",
        borderWidth: 0.5,
        borderRadius: 15,
    }
}
);