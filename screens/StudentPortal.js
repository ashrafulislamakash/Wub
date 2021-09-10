import React from 'react'
import { WebView } from 'react-native-webview';

const StudentPortal = () => {
    return (<WebView
        style={{ marginTop: 30 }}
        source={{ uri: 'https://student.wub.edu.bd/' }}

    />
    )
}

export default StudentPortal


