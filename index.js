// longest string first  way

const  arr=['cat','cats','catsdogcats','catxdogcatsrat','dog' ,'elephantzebra','dogcatsdog','hippopotamuses','rat','ratcatdogcat'];
let maxChar=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element.length>0 && index===0){
     maxChar.push(element)
    }else if(element.length>maxChar[0].length){
        maxChar.splice(0,1,)
        maxChar.push(element)
    }   
}
  console.log('result',maxChar[0]);

//  2= longest string second way

 const arr='cat cats  catsdogcats catxdogcatsrat dog  dogcatsdog hippopotamuses rat ratcatdogcat';
 const longWord = (arr) =>{
 const strArr=arr.split(' ');
 const sortArr = strArr.sort((strA,strB) =>{
    return strB.length - strA.length;
 });
  return sortArr[0];
}
console.log(longWord(arr));




