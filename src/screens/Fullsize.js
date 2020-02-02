import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

class Fullsize extends Component {
    render () {
        //styles & navigation props
        const { img, size, win } = this.props.navigation.state.params
        let { width, height } = size
        if (width > height) {
            width = win.width
            height = win.height/2
        }
        else {
            width = win.width
            height = win.height
        }
        return (
            <ScrollView>
            <View>
                <Image source={{uri: img}} style={{width, height}} />
            </View>
            </ScrollView>
        )
    }
}
export default Fullsize