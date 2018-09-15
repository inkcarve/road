import { StyleSheet } from 'react-native';
let map_data = {
  t:"Top",
  b:"Bottom",
  l:"Left",
  r:"Right",
  m:"margin",
  p:"padding",
  o:"opticy"
}

let dynamicStyle = key=>{
  // console.warn(key)
    let keyArray = key.split('_');
    let first = keyArray[0];
    let value = keyArray.slice(-1)[0];
    let result = {}
    keyArray.pop();
    if(!isNaN(value))value = parseFloat(value);
          // console.log(keyArray)
    if(keyArray.length<2 && first.match(/^[pm]$/g)){
      result[map_data[first]+map_data.t]=result[map_data[first]+map_data.b]=result[map_data[first]+map_data.r]=result[map_data[first]+map_data.l]=value
// console.log(result)
      return result
    }
    // console.warn(keyArray)
    
    
    let rKey_fn = (last,current,i)=>{
        // console.warn("last: "+last);
        // console.warn("current: "+current);
        if(i===1){return (map_data[last]?map_data[last]:last) + (map_data[current]?map_data[current]:current)}
      return (last?last:"") + (map_data[current]?map_data[current]:current)
    }
    let rKey = keyArray.reduce(rKey_fn);
    result[rKey] = value;
    // console.warn(result)
    return result;
}

export default dynamicStyle;
