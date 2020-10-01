/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import { ProfileScreen, SettingsScreen } from "./src/Screens";

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Profile', () => ProfileScreen);
Navigation.registerComponent('ModalScreen', () => ProfileScreen);


Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'red'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 16,
    selectedTextColor: '#4d089a'
  },
  bottomTabs: {
    tabsAttachMode: 'onSwitchToTab'
  }
});

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'App'
                  }
                },
              
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                  }
                }
              ]
            }
          }
        ]
      }
       
     }
  });
});

