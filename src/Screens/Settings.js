import React from 'react'
import { View, Text } from 'react-native'


export default function Settings(props) {
    
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

Settings.options = {
    topBar: {
      title: {
        text: 'Settings'
      }
    },
    bottomTab: {
      text: 'Settings'
    },
  }