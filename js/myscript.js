var persons = [
  	{
		name: 'John',
		surname: 'Doe',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 31,
	   	myPhoto: "img/boy1.jpg",	
		likes: 0    // numeric property used to store likes
	},

	{
		name: 'Ana',
		surname: 'Mayer',
		favoritePerformers: ["Beyonce", "Madona", "Rihanna"],
		age: 29,
		myPhoto: "img/girl1.jpg",
		likes: 0
	},

	{
		name: 'Maria',
		surname: 'Amadeus',
		favoritePerformers: ["Coldplay", "Metallica", "Ramstein"],
		age: 27,
		myPhoto: "img/girl2.jpg",
		likes: 0
	},

	{
		name: 'Bromo',
		surname: 'Baly',
		favoritePerformers: ["Eminem", "Ricky Martin", "Adele"],
		age: 29,
		myPhoto: "img/boy2.jpg",
		likes: 0
	}
];

/*for(var i=0; i<persons.length; i++){
 document.getElementById("profiles").innerHTML +=('<div class="column" id="column"><div class="container"><img src=' +
 													persons[i].myPhoto + '" alt="' + persons[i].name + '" class="image">'+
 													'<div class="overlay">'+
 													'<div class="text">'+
 													'<div class="name" id="name"> Name :    ' + persons[i].name + '</div>'+
 													'<div class="surname"> Surename:     ' + persons[i].surname + '</div>'+
 													'<div class="age">Age    : ' + persons[i].age + '</div>' +
 													'</div>'+
 													'</div>'+
 													'</div>'+
 													'</div>')
}*/
//Tried this way but something is not good. I got lost in CSS. I will figure that out over the holidays. Sorry

$("#name1").append("Name: " + persons[0].name);
$("#surname1").append("Surname: " + persons[0].surname);
$("#age1").append("Age: " + persons[0].age);
$('#img1').html('<img src=' + persons[0].myPhoto + ' width="100%">');

$("#name2").append("Name: " + persons[1].name);
$("#surname2").append("Surname: " + persons[1].surname);
$("#age2").append("Age: " + persons[1].age);
$('#img2').html('<img src=' +persons[1].myPhoto + ' width="100%">');

$("#name3").append("Name: " + persons[2].name);
$("#surname3").append("Surname: " + persons[2].surname);
$("#age3").append("Age " + persons[2].age);
$('#img3').html('<img src=' + persons[2].myPhoto + ' width="100%">');

$("#name4").append("Name: " + persons[3].name);
$("#surname4").append("Surname: " + persons[3].surname);
$("#age4").append("Age: " + persons[3].age);
$('#img4').html('<img src=' + persons[3].myPhoto + ' width="100%">');


//HIER  ARE  THE  LIKES 
var click = 0; 
$("#like1").click(function() { 
	click++; 
	$('#l1').html(click);
});

var like = 0; 
$("#like2").click(function() { 
	like++; 
	$('#l2').html(like);
});

var gef = 0;
$("#like3").click(function() { 
	gef++; 
	$('#l3').html(gef);
});

var likes = 0;
$("#like4").click(function() { 
	likes++; 
	$('#l4').html(likes);
});