var sq = document.querySelectorAll(".square")
var colorSelect = document.getElementById("colorSelected")
var topp = document.getElementById("top")
var message = document.querySelector("#message")
var choice = document.querySelector("#choice")
var color
var selected
var totColor = []
var colors = colorAll(6)
colorChoose()
colorSq()
var ss = "RGB( "+totColor[selected][0]+" , "+totColor[selected][1]+" , "+totColor[selected][2]+" )"
colorSelect.textContent = ss



choice.addEventListener("click", function()
{
	colors = colorAll(3)
	colorChoose()
    colorSq()
	for(var i=3;i<6;i++)
	{
		sq[i].style.display = "none";
	}
    var ss1 =  "RGB( "+totColor[selected][0]+" , "+totColor[selected][1]+" , "+totColor[selected][2]+" )"
	colorSelect.textContent=ss1;
	message.textContent = "Choose Corresponding Palette"
	cnt=0
	fl=0
	cc1=0
	cc2=0
}
)

for(var i=0 ; i<colors.length ; i++)
{
    var cnt=0;
	var fl=0;
	var cc1=0,cc2=0;
	sq[i].addEventListener("click", function()
	{
		var clickedColor = (this.style.backgroundColor)
		if(clickedColor === color)
		{
			if(cc1==0)
			{
				new Audio("./leee-goo.mp3").play()
				cc1++;
			}
			topp.style.backgroundColor = color;
			for(var i=0 ; i<sq.length ; i++)
			{
				sq[i].style.backgroundColor = color;
			}
			message.textContent = "Correct Color!"
			reload.textContent = "PLAY AGAIN"
			cnt=0
		}
		else
		{
			++cnt
			if(cnt === colors.length-1 && cc2==0)
			{	
				--cnt
				this.style.backgroundColor = "#161618"
				message.textContent = "You Lose Noob"
				new Audio("./NOOB-SOUND EFFECT!!!!!.mp3").play()
				reload.textContent = "PLAY AGAIN"
				for(var i=0 ; i<sq.length ; i++)
				{
					sq[i].style.backgroundColor = "#161618";
				}
				cnt=0
				fl=1
				cc2=1;
			}	
			else
			{
				this.style.backgroundColor = "#161618"
				if(cc2==0)
				{
					new Audio("./suss.mp3").play()
					if(fl==0)
					{
						message.textContent = "Wrong Choice, Try Again"
					}
					else
					{
						message.textContent = "You Lose Noob"
						fl=0
					}
				}
			}
		}
	}
	)
}



function colorChoose()	
{
	var a = Math.floor((Math.random()*colors.length));
	color = colors[a]
    selected = a
}

function colorAll(num)	
{
	var arr = []
	totColor = []
	for(var i=0; i<num; i++)
	{
		var k = rnd()
		arr.push(k)
	}
	return arr
}

function rnd()	
{
    var ar = []
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
    ar.push(r)
    ar.push(g)
    ar.push(b)
    totColor.push(ar)
	return ("rgb("+r+", "+g+", "+b+")");	
}

function colorSq()	
{
	for(var i=0;i<6;i++)
	{
		sq[i].style.backgroundColor=colors[i]
	}	
}
