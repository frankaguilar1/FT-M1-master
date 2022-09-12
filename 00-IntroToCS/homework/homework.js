function BinarioADecimal(num) {
  // tu codigo aca
  let str = num.toString();
  let result = 0;
  for(let i = 0; i < str.length; i++){
    str[i] == 1 ? result += 2 ** (str.length - 1 - i) : [];
  }
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = '';
  do {
      if(num == 2){
          result = '10' + result;
          break;
      } else {
          num % 2 == 0 ? result = '0' + result : result = '1' + result;
      }
      num = Math.floor(num/2);
  } while(num >= 1);
  return result;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}