import React from 'react';
import { TextInput, Header,StyleSheet,Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { RadioButton, Text ,Appbar} from 'react-native-paper';

export default class Home extends React.Component {
  state = {
  data:[],
  index:0,
  value:'',
  checked:'',
  uservalue:[],
  correct_answer:[],
  results:0,
  flag:false,
  }
  async componentDidMount() {
  this.fetchdata();
  
  }

  NextQuestion(e)
  {
    console.log('value=========================?',this.state.value)
    console.log("next question==========>")
    this.setState({index:this.state.index+1})
    !this.state.flag?<Button onPress={()=>{this.Score()}}>Get Score</Button>:<View><Text>Some thing Wrong</Text></View>
    

  
  
  }
Score()
{
  const {correct_answer,uservalue}=this.state;
for(var key in uservalue[key])
{
  if(correct_answer.match(uservalue[key]))
  {
    this.setState({results:results+1})
console.log("============================>",this.state.results)
  }
  else
  {
    this.setState({results:results-1})

  }


}
}

fetchdata()
  {
    fetch('https://opentdb.com/api.php?amount=10').then((resp)=>{ return resp.json()}).then((resp)=>
    {
        
       const data=resp.results
     this.setState({data:data}) 
     for(var key in data)
     {
       let correctkey=data[key].correct_answer
      this.state.correct_answer.push(data[key].correct_answer)
      }
   
      console.log("=====================================================>",this.state.correct_answer)
      })
}


  
  render()
  {
    return(     
  
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>      
   <Text>Quiz App</Text>
       <Text>{!!this.state.data.length && this.state.data[this.state.index].question}</Text>
       <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
        
      >
        <View >
          <Text>{!!this.state.data.length &&this.state.data[this.state.index].correct_answer}</Text>
          <RadioButton
          value={!!this.state.data.length &&this.state.data[this.state.index].correct_answer}
        
    
    />

        </View>
        <View>
          <Text>{!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[0]}</Text>
          <RadioButton value={!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[0]}/>
        </View>

          <View>
          <Text>{!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[1]}</Text>
          <RadioButton value={!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[1]} />
        </View>


          <View>
          <Text>{!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[2]}</Text>
          <RadioButton value={!!this.state.data.length &&this.state.data[this.state.index].incorrect_answers[2]} />
        </View>
      </RadioButton.Group>

      <Button style={{flex:'1',justifyContent:'center',alignItems:'center',backgroundColor:'purple'}}
      title='Next'
      onPress={()=>{this.NextQuestion()}}>
      </Button>
  
       

    </View>


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
