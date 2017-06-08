import React, { Component } from 'react';
import {View, Text,  StyleSheet,ListView} from 'react-native';

export default class GameHistoryList extends Component {
    constructor() {
        super();
        const teamOne = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: teamOne.cloneWithRows(gameHistory),
        };
    }

    render() {
        return (
            <ListView style={styles.gameList}
                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <View style={styles.listRow}>
                          <Text style={styles.textListRow}>
                              {rowData.teamOnePoints}
                          </Text>
                          <Text style={styles.textListRow}>
                              {rowData.gameNumber}
                          </Text>
                          <View style={separatorsStyles.separatorVertical}/>
                          <Text style={styles.textListRow}>
                              {rowData.teamTwoPoints}
                          </Text>
                      </View>}
                      renderSeparator={(sectionId, rowId) =>
                          <View key={rowId} style={separatorsStyles.separatorHorizontal}/>}
            />
        );
    }
}
class Distribution {
    constructor(gameNumber, totalPoints, teamOnePoints, teamTwoPoints) {
        this.gameNumber = gameNumber;
        this.totalPoints = totalPoints;
        this.teamOnePoints = teamOnePoints;
        this.teamTwoPoints = teamTwoPoints;
    }
}

const separatorsStyles = StyleSheet.create({
    separatorHorizontal: {
        flex: 1,
        height: 1,
        backgroundColor: '#8E8E8E',
    },
    separatorVertical: {
        // flex: 1,
        // width: 1,
        // backgroundColor: '#8E8E8E',
    },
});

var gameHistory = [
    new Distribution(1, 162, 100, 62),
    new Distribution(2, 182, 120, 62),
    new Distribution(3, 162, 52, 110),
    new Distribution(4, 162, 42, 120),
    new Distribution(5, 252, 2, 250),
];

const styles = StyleSheet.create({
    gameList: {
        marginTop: 20,
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    textListRow: {
        flex:1,
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent:'center',
    },
});