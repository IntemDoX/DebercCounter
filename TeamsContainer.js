import React, {Component} from 'react';
import {Text,  StyleSheet,View,} from 'react-native';

export default class TeamsContainer extends Component {
    render() {
        return (
            <View style={teamStyles.teamContainer}>
                <Text style={teamStyles.teamField}>{this.props.teamNameOne}</Text>
                <Text style={teamStyles.teamField}>{this.props.teamNameTwo}</Text>
            </View>
        );
    }
}

const teamStyles = StyleSheet.create({
    teamContainer: {
        // flex: 1,
        flexDirection: 'row',
        // marginBottom: 10,
        // height:30,
        // marginTop: 10,
    },
    teamField: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 30,
        textAlign: 'center',
    },
});