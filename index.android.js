import React, {Component} from 'react';

import PresetScene from './PresetScene';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import CounterScene from "./CounterScene";

export default class DebercCounter extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Counter',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <PresetScene/>
        );
    }
}

const App = StackNavigator({
    PresetScreen: { screen: PresetScene },
    CounterScreen: { screen: CounterScene },
});
AppRegistry.registerComponent('DebercCounter', () => App );
