var questions = [{
    question: "What does HTML stand for?",
    option: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
    correctanswer: "Hyper Text Markup Language"
},
{
    question: "Choose the correct HTML element for the largest heading:",
    option: ["<heading>", "<head>", "<h6>", "<h1>"],
    correctanswer: "<h1>"
},
{
    question: "What is the correct HTML element for inserting a line break?",
    option: ["<br>", "<break>", "<lb>", "<brk>"],
    correctanswer: "<br>"
},
{
    question: "Which character is used to indicate an end tag?",
    option: ["/", "*", "<", "^"],
    correctanswer: "/"
},
{
    question: "How can you make a numbered list?",
    option: ["<dl>", "<list>", "<ol>", "<ul>"],
    correctanswer: "<ol>"
}
]
var indexnum = 0
var marks = 0

function counter(e) {
    var done = document.getElementById("done")
    var total = document.getElementById("total")
    done.innerHTML = e + 1
    total.innerHTML = questions.length
}

function check(e) {
    var userans = e.firstChild.nodeValue
    var ans = questions[indexnum].correctanswer
    var ma = document.getElementById("marks")
    if (ans === userans) {
        marks++
        ma.innerHTML = marks / 5 * 100
        console.log(marks)
    }
}

function display() {
    var que = document.getElementById("question")
    que.innerHTML = questions[indexnum].question
    var main = document.getElementById("options")
    for (var i = 0; i < questions[indexnum].option.length; i++) {
        var div = document.createElement("div")
        div.setAttribute("class", "da")
        div.setAttribute("class", "col-md-6")
        var option = document.createElement("button")
        option.setAttribute("class", "wa")
        option.setAttribute("onclick", "check(this)")
        var btntext = document.createTextNode(questions[indexnum].option[i])
        option.appendChild(btntext)
        div.appendChild(option)
        main.appendChild(div)
    }
    
    counter(indexnum)
}
display()

function next() {
    document.getElementById("options").innerHTML = ''
    indexnum++
    display()
    var a = document.getElementById("done").innerHTML
    if (a == 5) {
        document.getElementById("next").style.display = "none"
        document.getElementById("submit").style.display = "inline-block"
    } else { }
}

function timer() {
    var a = document.getElementById("min")
    var b = document.getElementById("sec")
    b.innerHTML--
    if (b.innerHTML == -1) {
        a.innerHTML--
        b.innerHTML = 59
    } else { }
    if (a.innerHTML == 0 && b.innerHTML == 0) {
        document.getElementById("main").style.display = "none"
        document.getElementById("result").style.display = "inline-block"
    }
}
time = setInterval(timer, 1000)

function submit() {
    document.getElementById("main").style.display = "none"
    document.getElementById("result").style.display = "inline-block"
}

