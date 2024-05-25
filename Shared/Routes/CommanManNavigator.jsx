import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppDrawer from '../../Commonman/Routes/AppDrawer';
import Eventdetail from '../Screen/Activities/ActivityDetail';
import Followers from '../Screen/Followers/Followers';
import Changenumber from '../../Commonman/Screen/Settings/ChangeNumber';
import ChangeNumberAuth from '../../Commonman/Screen/Settings/ChangeNumberAuth';
import Createnewpassword from '../Screen/Createnewpassword';
import Editprofile from '../../Commonman/Screen/Settings/Editprofile';
import UserDetail from '../Screen/User Detail/UserDetail';
import Myissues from '../../Leader/Screen/My Issues/Myyissues';
import CreatPostShared from '../Screen/Post Files/CreatPostShared';
import Profile from '../Screen/Profile/Profile';
import EditPostShared from '../Screen/Post Files/EditPostShared';
import ChangePassword from '../Screen/Profile/ChangePassword';
import Leaderdetailshared from '../Screen/Leaders/Leaderdetailshared';
import Resolvedissues from '../../Leader/Screen/Resolved Issues/Resolvedissues';
import Myteam from '../../Leader/Screen/My Team/Myteam';
import Issueresolveby from '../../Commonman/Screen/Issue Resolved/Issueresolvedby';
import LeaderActivityList from '../Screen/Activities/LeaderActivityList';
import SelectLeaderList from '../Screen/Post Files/SelectLeaderList';
import TakeSurvey from '../../Leader/Screen/Survey/TakeSurvey';
import TakeSurveyList from '../../Leader/Screen/Survey/TakeSurveyList';

const Stack = createNativeStackNavigator();

export const CommanManNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        key={'AppDrawer'}
        name={'AppDrawer'}
        component={AppDrawer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        key={'Eventdetail'}
        name={'Eventdetail'}
        component={Eventdetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'UserDetail'}
        name={'UserDetail'}
        component={UserDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Followers'}
        name={'Followers'}
        component={Followers}
        options={{headerShown: false}}
      />

      <Stack.Screen
        key={'Changenumber'}
        name={'Changenumber'}
        component={Changenumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'ChangeNumberAuth'}
        name={'ChangeNumberAuth'}
        component={ChangeNumberAuth}
        options={{headerShown: false}}
      />

      <Stack.Screen
        key={'Createnewpassword'}
        name={'Createnewpassword'}
        component={Createnewpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Editprofile'}
        name={'Editprofile'}
        component={Editprofile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        key={'Myissues'}
        name={'Myissues'}
        component={Myissues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Createpostshared'}
        name={'Createpostshared'}
        component={CreatPostShared}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Profile'}
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'EditPostShared'}
        name={'EditPostShared'}
        component={EditPostShared}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Leaderdetailshared'}
        name={'Leaderdetailshared'}
        component={Leaderdetailshared}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'ChangePassword'}
        name={'ChangePassword'}
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Resolvedissues'}
        name={'Resolvedissues'}
        component={Resolvedissues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Myteam'}
        name={'Myteam'}
        component={Myteam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Issueresolveby'}
        name={'Issueresolveby'}
        component={Issueresolveby}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Leaderactivitylist'}
        name={'Leaderactivitylist'}
        component={LeaderActivityList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'SelectLeaderList'}
        name={'SelectLeaderList'}
        component={SelectLeaderList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'TakeSurvey'}
        name={'TakeSurvey'}
        component={TakeSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'TakeSurveyList'}
        name={'TakeSurveyList'}
        component={TakeSurveyList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
