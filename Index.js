import React, { Component } from 'react';
import { Text,DeviceEventEmitter,BackHandler } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import Home from './Home';
import DashBoard from './DashBoard';
import Notification from './Notification';
import Settings  from'./Settings';
import Profile from'./Profile';
import Contact from'./Contact';
import About from'./About';
import AddBuilding from './AddBuilding';
import AddTenant from './AddTenant';
import DisplayBuilding from './DisplayBuilding';
import DisplayFlats from './DisplayFlats';
import FlatDetails from './FlatDetails';
import DisplayTenant from './DisplayTenant';
import Payment from './Payment';
import Routes from'../Routes';
import AddFlatDetails from'./AddFlatDetails';
import EditBuilding from './EditBuilding';
import EditFlat from './EditFlat';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class Index extends Component<{}> {

      constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource : [] }
  }

render () {

  // Simple component to render something in place of icon


  return (
    <Router hideNavBar={true}>
      {/* Tab Container */}
      <Scene key="root" hideNavBar={true}>
          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            {/* Tab and it's scenes */}
            <Scene icon={TabIcon} key="home" component={Home} title="Home"/>
            <Scene icon={TabIcon} key="db"  component={DashBoard} title="Dash Board"/>
            <Scene icon={TabIcon} key="no"  component={Notification} title="Notification"/>
            <Scene icon={TabIcon} key="set" title="Settings"  component={Settings} title="Settings"/>
          </Scene>
          
          {/* Owner Pages */}
          <Scene key="index" component={Index} title="try"/>
          <Scene key="Profile" component={Profile} title="Profile" back={true} hideNavBar={false}/>
          <Scene key="Contact" component={Contact} title="Contact" back={true} hideNavBar={false}/>
          <Scene key="About" component={About} title="About" back={true} hideNavBar={false}/>
          <Scene key="AddBuilding" component={AddBuilding} title="Add Building" back={true} hideNavBar={false}/>
          <Scene key="AddTenant" component={AddTenant} title="Add Tenant" back={true} hideNavBar={false}/>
          <Scene key="DisplayBuilding" component={DisplayBuilding} title="Display Building" back={true} hideNavBar={false}/>
          <Scene key="DisplayFlats" component={DisplayFlats} title="Display Flats" back={true} hideNavBar={false}/>
          <Scene key="FlatDetails" component={FlatDetails} title="Flat Details" back={true} hideNavBar={false}/>
          <Scene key="DisplayTenant" component={DisplayTenant} title="Display Tenant" back={true} hideNavBar={false}/>
          <Scene key="AddFlatDetails" component={AddFlatDetails} title="Add Flat Details" back={true} hideNavBar={false}/>
           <Scene key="EditBuilding" component={EditBuilding} title="Edit Building" back={true} hideNavBar={false}/>
            <Scene key="EditFlat" component={EditFlat} title="Edit Flat" back={true} hideNavBar={false}/>
          <Scene key="pay1" component={Payment} title="Payment"/>
          <Scene key="Routes" component={Routes} title="Routes"/>
        </Scene>
    </Router>


  );
}
}