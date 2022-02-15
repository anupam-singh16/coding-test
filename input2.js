const  arr=['cat','cats','catsdogcats','catxdogcatsrat','dog' ,'elephantzebra','dogcatsdog','hippopotamuses','rat','ratcatdogcat',];
let minChar=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
if(element.length>0 && index===0){
    minChar.push(element);
}else if(element.length>minChar[0].length){
    minChar.splice(0,1);
    minChar.push(element)
}   
}
console.log('result',minChar[0]);