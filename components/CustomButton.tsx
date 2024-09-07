import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface buttonProps extends TouchableOpacityProps{
    label:string
}

const CustomButton = (props:buttonProps) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50
    }
})
export default CustomButton