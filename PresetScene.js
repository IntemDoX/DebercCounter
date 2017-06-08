import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';

export default class PresetScene extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Preset',
    };

    static get defaultProps() {
        return {
            title: 'PresetScene'
        };
    }

    render() {
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        );
    }
}