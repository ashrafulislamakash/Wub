import React from 'react';
import Providers from './navigation';
import { Alert } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";


const App = () => {
  const netinfo = useNetInfo();
  if (netinfo.type != "unknown" && !netinfo.isInternetReachable) {
    Alert.alert(
      'No Internet Connection!',
      'Please Check Internet Connection',
    );

  }

  return <Providers />;
}

export default App;
