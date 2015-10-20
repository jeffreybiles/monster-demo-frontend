export default function(errorHash){
  var errorKeys = Object.keys(errorHash);
  this.get('flashMessages').clearMessages();
  errorKeys.forEach((key)=>{
    errorHashes[key].forEach((error)=>{
      this.get('flashMessages').danger(`${key} ${error}`, {sticky: true})
    })
  })
}
