const mainStylesheet = document.styleSheets[0];

const wholeBody = document.querySelector("body")

const writingSection = document.querySelector(".writing-section")
const previewSection = document.querySelector(".preview-section")

const writingArea = document.querySelector(".writing-section textarea")
const previewButton = document.querySelector(".writing-section button")

const lightThemeButton = document.querySelector(".theme-light")
const darkThemeButton = document.querySelector(".theme-dark")

const quoteStyle = document.querySelector(".quote-block")
const quoteAuthorStyle = document.querySelector(".quote-author")

changeThemeColor("#fafafa", "#f5f5f5", "#ffffff", "#1a1a1a")

lightThemeButton.addEventListener("click", function(){
	changeThemeColor("#fafafa", "#f5f5f5", "#ffffff", "#1a1a1a")
})

darkThemeButton.addEventListener("click", function(){
	changeThemeColor("#1a1a1a", "#141414","#1e1e1e", "#f9f9f9")
})

writingArea.addEventListener("keydown", function(event){
	if (event.keyCode === 13) {
		event.preventDefault()
		writingArea.value = writingArea.value + "\n"
	}
})

previewButton.addEventListener("click", function(){
	var convertedText = writingArea.value
	convertedText = convertBbcodeToHtml(convertedText)
	previewSection.innerHTML = convertedText
})

function changeThemeColor(wrtSectionColor, prvSectionColor, textareaColor, fontColor){
	wholeBody.style.color = fontColor
	writingArea.style.color = fontColor
	writingSection.style.backgroundColor = wrtSectionColor
	previewSection.style.backgroundColor = prvSectionColor
	writingArea.style.backgroundColor = textareaColor
	writingArea.style.border = "1px solid" + prvSectionColor
	previewButton.style.backgroundColor = prvSectionColor
	previewButton.style.color = fontColor
	previewButton.style.border = "1px solid" + fontColor
	previewSection.style.color = fontColor
	mainStylesheet.cssRules[15].style.backgroundColor = wrtSectionColor
	mainStylesheet.cssRules[15].style.border = "solid 1px" + prvSectionColor
	mainStylesheet.cssRules[16].style.borderBottom = "solid 1px" + prvSectionColor
}

var convertBbcodeToHtml = function(text){
	text = text.replace(/\n/gi, "<br>")
	text = text.replace(/\[b\](.*?)\[\/b\]/gi, "<b>$1</b>")
	text = text.replace(/\[i\](.*?)\[\/i\]/gi, "<i>$1</i>")
	text = text.replace(/\[u\](.*?)\[\/u\]/gi, "<u>$1</u>")
	text = text.replace(/\[center\](.*?)\[\/center\]/gi, "<center>$1</center>")
	text = text.replace(/\[color=(.*?)\](.*?)\[\/color\]/gi, "<font color='$1'>$2</font>")
	text = text.replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, "<a href='$1'>$2</a>")
	text = text.replace(/\[img\](.*?)\[\/img\]/gi, "<img src='$1'>")
	text = text.replace(/\[quote\](.*?)\[\/quote\]/gi, "<div class=quote-block><div class=quote-author>Cytat:</div>$1</div>")
	text = text.replace(/\[quote=\"(.*?)\"\](.*?)\[\/quote\]/gi, "<div class=quote-block><div class=quote-author>$1 Napisał/a:</div>$2</div>")
	return text
}