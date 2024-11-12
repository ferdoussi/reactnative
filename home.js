import React from 'react';
import { View ,Text} from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  let count= useSelector(state=>{
    return state.counter.value;
  })
  return (
    <View>
      <Text>{count}</Text>
      <Button style={{backgroundColor:'red'}} onPress={()=>{
        dispatch({type:"counter/increment"})
      }} >Plus</Button>
      <Button style={{backgroundColor:'red'}} onPress={()=>{
        dispatch({type:"counter/decrement"});
      }}>Minus</Button>
    </View>
  );
}

export default Home;
