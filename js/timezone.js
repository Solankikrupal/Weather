function convertTime(timeZone){

  var d = new Date();
  localTime = d.getTime();//local time in milliseconds
  localOffset = d.getTimezoneOffset() * 60000;//localoffset in minutes convert into milliseconds
  //negative return values of ofset means it is ahead of utc,while positive return values are behind of utc;
  //60000 multply fact is 1sec = 1000mili ,1min = 60sec ,1 min = 60000millisec
  var utc = localTime + localOffset;

  //console.log(utc)//at this point utc contain the current utc time its like d.getTime() things both same;
  var timeOffsetDestination = ((timeZone/60)/60);

  //timeOffsetDestination will give timeoffset of destination timezone and its in minutes we want in hours
  var destnationTime = new Date(utc + (timeOffsetDestination * 3600000))

  return destnationTime;

}
// https://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/
