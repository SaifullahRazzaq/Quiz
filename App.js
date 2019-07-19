import React,{Component} from 'react';
import Face from './src/Camera';
import Home from './src/Home';
import { TextInput, Header,StyleSheet,Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';


class App extends React.Component{
state=
{
  flag:false,

}
render()
{
  return(
  <View style={styles.container}>{!this.state.flag?<Face onPress={this.setState({flag:true})}/>:<Home/>}</View>
  
)
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
