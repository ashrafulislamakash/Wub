import React from 'react'
import { WebView } from 'react-native-webview';

const TeacherPortal = () => {
  return (<WebView

    style={{ marginTop: "10%" }}
    source={{ uri: 'https://cse.wub.edu.bd/main/faculty_member' }}

  />
  )
}

export default TeacherPortal


