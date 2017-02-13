var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var birthday = new Date();
var dayOfweek = birthday.getDay();
var whatDay = day[dayOfweek];
console.log(whatDay);
