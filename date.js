module.exports= gDate;
function gDate(){


var today= new Date();
var options={weekday:"long",day:"numeric",month:"long"};
var n= today.toLocaleDateString("en-US",options);
return n;
}
