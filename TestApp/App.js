import React from 'react';
import { Text,TextInput, View} from 'react-native';

const Cat = () => {
  const name ="Bunty";
  return (
     <View>
    <Text>Hello, I am your cat!  {name}</Text>
    <TextInput
      style = {{
        height:40,
        width:100,
        alignContent:'center',
        borderColor:'black',
        borderWidth:1
      }}
    />
    </View>
  );
}

export default Cat;