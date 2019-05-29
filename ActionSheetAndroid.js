'use strict';
import { BackHandler } from 'react-native';
var {
  NativeModules: { ActionSheetAndroid }
} = require('react-native');

const addBackPressListener = () => {
  //显示前监听
  BackHandler.addEventListener("hardwareBackPress", handleBackPress);
}

const removeBackPressListener = () => {
  BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
}

const handleBackPress = () => {
    ActionSheetAndroid.dismiss()
    return true
}

const showActionSheetWithOptions = (options, callback) => {
  addBackPressListener()
  ActionSheetAndroid.showActionSheetWithOptions(options, (buttonIndex) => {
    removeBackPressListener()
    callback(buttonIndex)
  })
}

module.exports = {
  showActionSheetWithOptions
};
