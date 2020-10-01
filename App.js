import React from 'react'
import { View, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default function App(props) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alighItems: 'center'
    }}>
      <Text>App</Text>
      <Button
        title='Push Profile Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Profile',
            passProps: {
              name: 'John Doe',
              status: 'online'
            }
          }
        })} />
      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
          bottomTabs: {
            currentTabIndex: 1
          }
        })
        } />

      <Button
        title='Show Modal'
        color='#710ce3'
        onPress={() => Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  name: 'ModalScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Modal',
                      },
                    },
                  },
                },
              },
            ],
          },
        })
        } />
    </View>
  )
}

App.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};
