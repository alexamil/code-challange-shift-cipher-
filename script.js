// Write class below
class ShiftCipher {
  constructor(num){
    this.num = num;
  }

  encrypt(str){
  let strUpper = str.toUpperCase();
  let newStr=[];
  for(let i = 0; i<strUpper.length; i++){
    if(strUpper[i].match(/^[a-zA-Z]+$/)){
     let charNum = strUpper.charCodeAt(i);
     let newCharnu = charNum+this.num;
     //console.log(newCharnu);
     if(newCharnu > 90){
     newCharnu = (newCharnu-90)+64;
       if(newCharnu > 90){
          newCharnu = (newCharnu-90)+64;
       }
     }
     //console.log(newCharnu);
     let finalCharnu = String.fromCharCode(newCharnu);
     newStr.push(finalCharnu);
    }else{
      newStr.push(strUpper[i]);
    }
  }

  return newStr.join('');
  }
 
  decrypt(str){
  let strLower = str.toLowerCase();
  let newStr=[];
  for(let i = 0; i<strLower.length; i++){
    if(strLower[i].match(/^[a-zA-Z]+$/)){
     let charNum = strLower.charCodeAt(i);
     let newCharn= charNum-this.num;
    //  console.log(newCharnu);
     if(newCharn < 97){
     newCharn = 122 - (96 - newCharn);
      if(newCharn < 97){
     newCharn = 122 - (96 - newCharn);
      }
     }
    let finalCharn = String.fromCharCode(newCharn);
     newStr.push(finalCharn);
    }else{
      newStr.push(strLower[i]);
    }
  }
  
  return newStr.join('');
  }
  
};


const cipher = new ShiftCipher(2);
console.log(cipher.num);
cipher.encrypt('abcdefg');
console.log(cipher.encrypt('abcdefg'));
cipher.decrypt('K <3 OA RWRRA'); 
console.log(cipher.decrypt('K <3 OA RWRRA')); 
