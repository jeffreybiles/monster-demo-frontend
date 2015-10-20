export default function(errorHash, flashMessages){
  var errorKeys = Object.keys(errorHash);
  flashMessages.clearMessages();
  errorKeys.forEach((key)=>{
    errorHash[key].forEach((error)=>{
      flashMessages.danger(`${key} ${error}`, {sticky: true})
    })
  })
}
