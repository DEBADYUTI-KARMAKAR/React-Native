import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Snackbar from 'react-native-snackbar'
import Icons from './coponent/Icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [win, setWin] = useState<string>('');
  const [gameState, setGameState] = useState<string[]>(new Array(9).fill('empty',0,9));

  const relodGame=()=>{
    setIsCross(false);
    setWin('');
    setGameState(new Array(9).fill('empty',0,9));
  }

  const checkIsWinner=()=>{
    if(gameState[0] !== 'empty' && gameState[0] === gameState[1] && gameState[0] === gameState[2]){
      setWin(`${gameState[0]} wins`);
    }else if(gameState[3] !== 'empty' && gameState[3] === gameState[4] && gameState[3] === gameState[5]){
      setWin(`${gameState[3]} wins`);
    }else if(gameState[6] !== 'empty' && gameState[6] === gameState[7] && gameState[6] === gameState[8]){
      setWin(`${gameState[6]} wins`);
    }else if(gameState[0] !== 'empty' && gameState[0] === gameState[3] && gameState[0] === gameState[6]){
      setWin(`${gameState[0]} wins`);
    }else if(gameState[1] !== 'empty' && gameState[1] === gameState[4] && gameState[1] === gameState[7]){
      setWin(`${gameState[1]} wins`);
    }else if(gameState[2] !== 'empty' && gameState[2] === gameState[5] && gameState[2] === gameState[8]){
      setWin(`${gameState[2]} wins`);
    }else if(gameState[0] !== 'empty' && gameState[0] === gameState[4] && gameState[0] === gameState[8]){
      setWin(`${gameState[0]} wins`);
    }else if(gameState[2] !== 'empty' && gameState[2] === gameState[4] && gameState[2] === gameState[6]){
      setWin(`${gameState[2]} wins`);
    }
  }
  const onChangeItem = (itemNumber)=>{
    if(win){
      return <Text>{win}</Text>
    }
    if(gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setGameState(gameState);
      setIsCross(!isCross);
      checkIsWinner();
    }else{
      return <Text>Already filled</Text>
    }

  }
  return (
    <SafeAreaView >
      <StatusBar />
      {win ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{win}</Text>
        </View>
      ) : (
        <View
        style={[
          styles.playerInfo,
          isCross ? styles.playerX : styles.playerO
        ]}
        >
          <Text style={styles.gameTurnTxt}>
            Player {isCross? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}
      {/* Game Grid */}
      <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        style={styles.card}
        onPress={() => onChangeItem(index)}
        >
          <Icons name={item} />
        </Pressable>
      )}
      />
      {/* game action */}
      <Pressable
      style={styles.gameBtn}
      onPress={relodGame}
      >
        <Text style={styles.gameBtnText}>
          {win ? 'Start new game' : 'reLoad the game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 36,
    marginHorizontal: 12,
    borderRadius: 8,


    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#8D3DAF',
  },
  winnerInfo: {
    backgroundColor: '#8D3DAF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  gameBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 36,
    marginHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#8D3DAF',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
  },
  gameBtnText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
