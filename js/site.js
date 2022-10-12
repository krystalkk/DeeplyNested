const Denzel ={
name: "Denzel",
gender: "he/his",
age:"22",
dateofbith:"01/31/2000",
nationality:"chinese",
brithplace:["Beijing,china"],
haircolor:["black,brown"],
isStudent: true,
isKind: true,
isShortsighted: true,
earringCount:"1",
glassCount:"1",
braceletCount:"2",
annoyinglevel:[
{
    month:"0",
    level:"0/10"
},
{
    month:"2",
    level:"0/10"
},
{
    month:"4",
    level:"0/10"
},
{
    month:"6",
    level:"1/10"
},
{
    month:"8",
    level:"2/10"
},
{
    month:"10",
    level:"3/10"
},
{
    month:"12",
    level:"5/10"
},
{
    month:"14",
    level:"7/10"
},
{
    month:"16",
    level:"9/10"
},
{
    month:"18",
    level:"10/10"
},
{
    month:"20",
    level:"10/10"
},
{
    month:"22",
    level:"10/10"
},
{
    month:"24",
    level:"10/10"
},
],

eat: function(hungry){
    if(!hungry){
    console.log("have to eat right now!");
    return;
    }
    console.log("eating"+hungry);
},
doing: function(homework){
    if(!homework){
        console.log("have to finish right a way");
        return;
    }
    console.log("doing"+homework);
    },
}
const cook = function(dinner){
    console.log("cook",dinner);
};
const drink = function(hennessy) {
    console.log("drink",hennessy);
}
let favoritefood = [
    "sushi", "seafood", "soup"
]
favoritefood.forEach(function(item, i) {
	console.log(i, item);
});
let  necklace= {
	color: "gold",
	shape:"round",
    letter:"DK",
	size: {
		x: 2,
		y: 1
	}
};

