import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppDrawerLeader from '../../Leader/Routes/AppDrawerLeader';
import Eventdetail from '../Screen/Activities/ActivityDetail';
import Followers from '../Screen/Followers/Followers';
import Changenumber from '../../Commonman/Screen/Settings/ChangeNumber';
import ChangeNumberAuth from '../../Commonman/Screen/Settings/ChangeNumberAuth';
import Createnewpassword from '../Screen/Createnewpassword';
import Editprofile from '../../Commonman/Screen/Settings/Editprofile';
import Buildteam from '../../Leader/Screen/Build Team/Buildteam';
import Removeteam from '../../Leader/Screen/Build Team/Removeteam';
import HelpRequested from '../../Leader/Screen/Help Requested/Helprequested';
import UserDetail from '../Screen/User Detail/UserDetail';
import Openissues from '../../Leader/Screen/Open Issues/Openissues';
import Acceptedissues from '../../Leader/Screen/Accepted Issues/Acceptedissues';
import Resolvedissues from '../../Leader/Screen/Resolved Issues/Resolvedissues';
import Exitassociatedto from '../../Leader/Screen/Associated To/Exitassociatedto';
import Socialcomservices from '../../Leader/Screen/Social/Socialcomservices';
import Politicalgather from '../../Leader/Screen/Political Gathering/Politicalgather';
import Privatemeeting from '../../Leader/Screen/Private Meeting/Privatemeeting';
import CreatPostShared from '../Screen/Post Files/CreatPostShared';
import Profile from '../Screen/Profile/Profile';
import EditPostShared from '../Screen/Post Files/EditPostShared';
import ChangePassword from '../Screen/Profile/ChangePassword';
import Leaderdetailshared from '../Screen/Leaders/Leaderdetailshared';
import Postbyme from '../Screen/User Detail/Postbyme';
import EditActivity from '../Screen/Activities/EditActivity';
import Issueresolveby from '../../Commonman/Screen/Issue Resolved/Issueresolvedby';
import LeaderActivityList from '../Screen/Activities/LeaderActivityList';
import Invitedmeetings from '../../Leader/Screen/Invited Metings/Invitedmeetings';
import CreateActivityShared from '../Screen/Activities/CreateActivityShared';
import InvitedLeaderList from '../Screen/Activities/InvtedLeadersList';
import CreatePrivateMeeting from '../../Leader/Screen/Private Meeting/CreatePrivateMeeting';
import SelectLeaderList from '../Screen/Post Files/SelectLeaderList';
import CreateManifesto from '../../Leader/Screen/Manifesto/CreateManifesto';
import ManifestoList from '../../Leader/Screen/Manifesto/ManifestoList';
import SurveyResult from '../../Leader/Screen/Survey/SurveyResult';
import CreateSurvey from '../../Leader/Screen/Survey/CreateSurvey';
import MyManifesto from '../../Leader/Screen/Manifesto/MyManifesto';
import EditManifesto from '../../Leader/Screen/Manifesto/EditManifesto';
import TestCreateSurvey from '../../Leader/Screen/Survey/TestCreateSurvey';
import MySurveyList from '../../Leader/Screen/Survey/MySurveyList';
import SurveyDetail from '../../Leader/Screen/Survey/SurveyDetail';
import TakeSurvey from '../../Leader/Screen/Survey/TakeSurvey';
import TakeSurveyList from '../../Leader/Screen/Survey/TakeSurveyList';
import CreatePoll from '../../Leader/Screen/Manage Poll/CreatePoll';
import MyManagePoll from '../../Leader/Screen/Manage Poll/MyManagePoll';
import StatePoll from '../../Leader/Screen/Manage Poll/StatePoll';
import DistrictPoll from '../../Leader/Screen/Manage Poll/DistrictPoll';
import CityPoll from '../../Leader/Screen/Manage Poll/CityPoll';
import WardPoll from '../../Leader/Screen/Manage Poll/WardPoll';
import PollActivitycard from '../../Leader/Screen/Manage Poll/PollActivities/PollActivityCard';
import CreatePollActivity from '../../Leader/Screen/Manage Poll/PollActivities/CreatePollActivity';

const Stack = createNativeStackNavigator();

export const LeaderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        key={'AppDrawerLeader'}
        name={'AppDrawerLeader'}
        component={AppDrawerLeader}
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
        key={'Buildteam'}
        name={'Buildteam'}
        component={Buildteam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Removeteam'}
        name={'Removeteam'}
        component={Removeteam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Helprequested'}
        name={'Helprequested'}
        component={HelpRequested}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Openissues'}
        name={'Openissues'}
        component={Openissues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Acceptedissues'}
        name={'Acceptedissues'}
        component={Acceptedissues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Resolvedissues'}
        name={'Resolvedissues'}
        component={Resolvedissues}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Exitassociatedto'}
        name={'Exitassociatedto'}
        component={Exitassociatedto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Socialcomservices'}
        name={'Socialcomservices'}
        component={Socialcomservices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Politicalgather'}
        name={'Politicalgather'}
        component={Politicalgather}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Privatemeeting'}
        name={'Privatemeeting'}
        component={Privatemeeting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Postbymestack'}
        name={'Postbymestack'}
        component={Postbyme}
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
        key={'EditActivity'}
        name={'EditActivity'}
        component={EditActivity}
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
        key={'Invitedmeetings'}
        name={'Invitedmeetings'}
        component={Invitedmeetings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CreateActivityShared'}
        name={'CreateActivityShared'}
        component={CreateActivityShared}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'InvitedLeaderList'}
        name={'InvitedLeaderList'}
        component={InvitedLeaderList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CreatePrivateMeeting'}
        name={'CreatePrivateMeeting'}
        component={CreatePrivateMeeting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'SelectLeaderList'}
        name={'SelectLeaderList'}
        component={SelectLeaderList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CreateManifesto'}
        name={'CreateManifesto'}
        component={CreateManifesto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'EditManifesto'}
        name={'EditManifesto'}
        component={EditManifesto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'ManifestoList'}
        name={'ManifestoList'}
        component={ManifestoList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'MyManifesto'}
        name={'MyManifesto'}
        component={MyManifesto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'SurveyResult'}
        name={'SurveyResult'}
        component={SurveyResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CreateSurvey'}
        name={'CreateSurvey'}
        component={CreateSurvey}
        options={{headerShown: false}}
      />

      {/* TestCreateSurvey */}
      <Stack.Screen
        key={'TestCreateSurvey'}
        name={'TestCreateSurvey'}
        component={TestCreateSurvey}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'MySurveyList'}
        name={'MySurveyList'}
        component={MySurveyList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'SurveyDetail'}
        name={'SurveyDetail'}
        component={SurveyDetail}
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
      <Stack.Screen
        key={'CreatePoll'}
        name={'CreatePoll'}
        component={CreatePoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'MyManagePoll'}
        name={'MyManagePoll'}
        component={MyManagePoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'StatePoll'}
        name={'StatePoll'}
        component={StatePoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'DistrictPoll'}
        name={'DistrictPoll'}
        component={DistrictPoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CityPoll'}
        name={'CityPoll'}
        component={CityPoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'WardPoll'}
        name={'WardPoll'}
        component={WardPoll}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'PollActivitycard'}
        name={'PollActivitycard'}
        component={PollActivitycard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'CreatePollActivity'}
        name={'CreatePollActivity'}
        component={CreatePollActivity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
