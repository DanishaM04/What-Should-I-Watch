let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
for(let film of horror){
	$(".horror-recommend").append("<p>"+film+"</p>");
}
});

//declare your new array here
let action =["Apocalypse Now","The Matrix","Gladiator"];
let comedy =["Game Night","Scary Movie","Mrs. Doubtfire"];

$(".action").click(function() {
for(let film of action){
	$(".action-recommend").append("<p>"+film+"</p>");
}
});

$(".comedy").click(function() {
for(let film of comedy){
	$(".comedy-recommend").append("<p>"+film+"</p>");
}
});
