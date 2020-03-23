import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../Component/Main';
import ToDoMain from '../Component/ToDoMain';
import Alarm from '../Component/Alarm';
import DDay from '../Component/DDay';
import Wise from '../Component/Wise';

const Navigator=createStackNavigator({
    Main: Main,
    ToDoMain: ToDoMain,
    DDay:DDay,
    Alarm:Alarm,
    Wise:Wise,
})

export default createAppContainer(Navigator)