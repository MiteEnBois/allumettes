var ALLUMETTES = 0;
var score_h = 0
var score_c = 0;
start()
function start() {
	ALLUMETTES = rand(15, 30)
	max = ALLUMETTES
	var body = "";
	var head = "";
	for (var i = 0; i < max; i++) {
		head += "<td class = \"allumette_head allumette\"id = \"alluH" + i + "\"></td>"
		body += "<td class = \"allumette_body allumette\" id = \"alluB" + i + "\"></td>"
	}

	for (var i = 0; i < max; i++) {

	}
	document.getElementById("score_h").innerHTML = score_h
	document.getElementById("score_c").innerHTML = score_c
	document.getElementById("body").innerHTML = body
	document.getElementById("head").innerHTML = head
	document.getElementById("cpus").innerHTML = "<button onclick=\"tourCPU()\" id=\"cpuStart\">Let CPU Start</button>"
	updateAllu()
	goodAnswer()

}

function updateAllu() {
	document.getElementById("allu").innerHTML = "NB Allumettes : " + ALLUMETTES
}
function rand(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
async function tourHum(num) {
	take(num, "human")
	if (ALLUMETTES <= 0) {
		alert("YA WIN")
		score_h++;
		start()
		return
	}
	await new Promise(r => setTimeout(r, 400));
	tourCPU()

}

function tourCPU() {
	document.getElementById("cpus").innerHTML = ""
	var took = ALLUMETTES % 4;
	if (took == 0)
		took = rand(1, 3)
	take(took, "cpu")
	if (ALLUMETTES <= 0) {
		alert("YA LOSE")
		score_c++;
		start()
		return
	}
	goodAnswer()
}
function goodAnswer() {
	var temp = document.getElementsByClassName("good_answer").item(0)
	if (temp != null)
		temp.classList.remove("good_answer")
	if (ALLUMETTES % 4 != 0)
		document.getElementById("but" + ALLUMETTES % 4).classList.add("good_answer")
	else
		document.getElementById("cpuStart").classList.add("good_answer")
}

function take(num, player) {
	var temp = ALLUMETTES - num;
	for (var i = temp; i < ALLUMETTES; i++) {
		document.getElementById("alluH" + i).classList.add("allumette_" + player)
		document.getElementById("alluB" + i).classList.add("allumette_" + player)

	}
	ALLUMETTES -= num;
	updateAllu()
}