import React, {Component} from 'react';
import GameHistoryList from './GameHistoryList';
import TotalPointsContainer from './TotalPointsContainer';
import TeamsContainer from './TeamsContainer';
import AddButton from './AddButton';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class CounterScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TeamsContainer teamNameOne="We" teamNameTwo="They"/>
                <TotalPointsContainer teamOneTotalPoints="900" teamTwoTotalPoints="800"/>
                <GameHistoryList />
                <AddButton/>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
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
