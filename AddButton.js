import React, {Component} from 'react';
import {Text, ToastAndroid, StyleSheet, TouchableHighlight} from 'react-native';

export default class AddButton extends Component {

    constructor(props) {
        super(props);
        this.state = {pressStatus: false};
    }

    _handlePress() {
        ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    render() {
        return (
            <TouchableHighlight style={styles.buttonContainer}
                                underlayColor='red'
                                onPress={() => this._handlePress()}>
                <Text>Add points</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    addButton: {
        fontSize: 30
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#2E9298',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
});
