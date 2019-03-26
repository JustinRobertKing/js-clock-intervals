setInterval(tickSecond, 1000)
var now = new Date();
var second = now.getSeconds();
var minute = now.getMinutes();
var hour = now.getHours();
var secondHand = document.getElementById('second')
var minuteHand = document.getElementById('minute')
var hourHand = document.getElementById('hour')

function secondRotation(second) {
	return (second / 60) * 360
}
function minuteRotation(minute) {
	return (minute / 60) * 360
}
function hourRotation(hour) {
	return (hour / 12) * 360
}

function tickSecond() {
	var degreeSecond = secondRotation(second)
	second++
	if (second === 61) {
		tickMinute(minute)
		second = 1
	} 
	secondHand.style.transform = "rotate(" + degreeSecond + "deg)"
}

function tickMinute() {
	var degreeMinute = minuteRotation(minute)
	minute++
	if (minute === 61) {
		tickHour(hour)
		minute = 1
	} 
	minuteHand.style.transform = "rotate(" + degreeMinute + "deg)"
}

function tickHour() {
	var degreeHour = hourRotation(hour)
	hour++
	if (hour === 12) {
		hour = 1
	} 
	hourHand.style.transform = "rotate(" + degreeHour + "deg)"
}
tickSecond()
tickMinute()
tickHour()