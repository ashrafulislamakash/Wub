import React from 'react'
import { WebView } from 'react-native-webview';

const WebWub = () => {
  return (<WebView
    style={{ marginTop: "10%"}}
    source={{ uri: 'https://wub.edu.bd/' }}

  />
  )
}

export default WebWub


