//-----------------------------------convert all times--------------------------------------//
export default function dateFormatter(timestamp){    
//console.log(timestamp);
let date = new Date(timestamp);
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();
let newTimeFormatted = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//console.log(newTimeFormatted)
return newTimeFormatted;
} 