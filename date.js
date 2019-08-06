
exports.getDate = function (){
  let today = new Date();
  let currentDay = today.getDay();
  // var day = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // res.render("list", {kindOfday: day[currentDay]});
  // if (currentDay === 6 || currentDay === 0){
  //   day = "Weekend";
  //   res.render("list", {kindOfday: day});
  // }
  // else{
  //   day = "Working day";
  //   res.render("list", {kindOfday: day});
  // }
  let options = {
    weekday: "long",
    day: "numeric",
    month:"long"
  };
  return today.toLocaleDateString("en-US", options);

}
exports.getDay = function (){
  let today = new Date();
  let currentDay = today.getDay();
  let options = {
    weekday: "long",

  };
return today.toLocaleDateString("en-US", options);

}


console.log(module.exports);
