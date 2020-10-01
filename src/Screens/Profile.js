import React from 'react'
import { View, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default function Profile(props) {
    Navigation.mergeOptions(props.componentId, {
        bottomTabs: {
          visible: false
        },
      });
    return (
        <View>
            <Text>Profile</Text>
            <Button
                title='Pop Profile Screen'
                color='#710ce3'
                onPress={() => Navigation.pop(props.componentId)} />
        </View>
    )
}

