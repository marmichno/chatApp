import { StyleSheet } from "react-native";
import { variables } from "../../../shared/styles/variables";

const styles = StyleSheet.create({
    bottomRectangle: {
        backgroundColor: `${variables.secondBackgroundColor}`,
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallRectangleBottom: {
        width: 48,
        height: 4,
        marginBottom: 16,
        backgroundColor: "#FFFFFF"
    }
});

export default styles;