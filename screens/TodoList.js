import React, { useState } from 'react';
import {
    Text,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    Button
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TaskItem = (props) => {
    return (
        <View style={styles.taskItemcontainer}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name="delete" size={20} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.taskInputFieldcontainer}>
            <TextInput style={styles.taskInputFieIinputField} value={task}
                onChangeText={text => setTask(text)}
                placeholder={'Write a task'}
                placeholderTextColor={'#8B9EB0'} />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.taskInputbutton}>
                    <MaterialIcons name="send" size={30} color="white" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}


const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
    }

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }

    return (
        <View style={styles.appcontainer}>
            <Text style={styles.appHeading}>TODO LIST</Text>
            <ScrollView style={styles.scrollView}>
                {
                    tasks.map((task, index) => {
                        return (
                            <View key={index} style={styles.apptaskContainer}>
                                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
                            </View>
                        );
                    })
                }
            </ScrollView>
            <TaskInputField addTask={addTask} />
        </View>
    );
}


export default TodoList

const styles = StyleSheet.create({

    taskItemcontainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#50CAFF',
        borderRadius: 4,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#50CAFF',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 5,
    },


    // TaskInputField

    taskInputFieldcontainer: {
        borderColor: '#fff',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    taskInputFieIinputField: {
        color: '#8B9EB0',
        height: 50,
        flex: 1,
    },
    taskInputbutton: {
        height: 40,
        width: 40,
        borderRadius: 4,
        backgroundColor: '#50CAFF',
        alignItems: 'center',
        justifyContent: 'center'
    },




    // App 

    appcontainer: {
        flex: 1,
        backgroundColor: '#E3EDF7',
        marginTop: "10%"
    },
    appHeading: {
        color: '#50CAFF',
        fontSize: 24,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        alignSelf: 'center'
    },
    scrollView: {
        marginBottom: 70,
    },

    apptaskContainer: {
        marginTop: 20,
    }

})
