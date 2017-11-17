var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;

var foodLife = 0;
var foodTime = 1;
var foodHome = 2;
var foodBomb = 3;
var foodStar = 4;
var foodGod = 5;
var foodNon = 6;

var offerX = 32;
var offerY = 16;

var NON = 0;
var WALL = 1;
var GRID = 2;
var GRASS = 3;
var WATER = 4;
var ICE = 5;
var HOME = 9;
var DIE = 10;


var STATE_INIT = 1;
var STATE_PLAY = 2;
var STATE_STAGE_INIT = 3;
var STATE_GAMEOVER = 4;
var STATE_SELECT = 5;
var STATE_GAMESTART = 6;

var STATE_PAUSE = 7;  // VICTOR FANG


var K_UP = 38;
var K_DOWN = 40;
var K_RIGHT = 39;
var K_LEFT = 37;

var K_SPACE = 32;
var K_TAB = 9;
var K_ENTER = 13;
//var K_ENTER = 16;
var K_CTRL = 17;
var K_ALT = 18;

var K_0 = 48;
var K_1 = 49;
var K_2 = 50;
var K_3 = 51;
var K_4 = 52;
var K_5 = 53;
var K_6 = 54;
var K_7 = 55;
var K_8 = 56;
var K_9 = 57;
var K_A = 65;
var K_B = 66;
var K_C = 67;
var K_D = 68;
var K_E = 69;
var K_F = 70;
var K_G = 71;
var K_H = 72;
var K_I = 73;
var K_J = 74;
var K_K = 75;
var K_L = 76;
var K_M = 77;
var K_N = 78;
var K_O = 79;
var K_P = 80;
var K_Q = 81;
var K_R = 82;
var K_S = 83;
var K_T = 84;
var K_U = 85;
var K_V = 86;
var K_W = 87;
var K_X = 88;
var K_Y = 89;
var K_Z = 90;

var images = new Array();

images["home"] = [256,0];
images["map"] = [0,96];
images["tankNum"] = [0,112];
images["myTank"] = [0,0];
images["myTank2"] = [128,0];
images["tank1"] = [0,32];
images["tank2"] = [128,32];
images["tank3"] = [0,64];
images["tankRun"] = [128,96];
images["hitFx"] = [320,0];
images["bombFx"] = [0,160];
images["bullet"] = [80,96];
images["tankStart"] = [256,32];
images["food"] = [256,110];
images["score"] = [192,96];
images["num"] = [256,96];
images["shield"] = [160,96];
images["stageStart"] = [396,96];
images["gameOver"] = [384,64];

var imgStartData = " data:image/gif;base64,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";
var imgStart = new Image();
imgStart.src = imgStartData;


function GameStart()
{
	this.x = 0;
	this.y = 512;
}


GameStart.prototype.draw = function()
{
	var myCanvas = document.getElementById("upp");
	var graphics = myCanvas.getContext("2d");
	if(this.y == 512)
	{
		graphics.fillStyle = "#000";
		graphics.fillRect(0, 0, 512, 448);
	}
	graphics.drawImage(imgStart, this.x, this.y, 512, 448);

	if(this.y <= 0)
	{
		this.y = 0;
		graphics.drawImage(imgStart, this.x, this.y, 512, 448);

		graphics.fillStyle = "#FFF";
		graphics.font = "bold 20px Arial";
		graphics.fillText("AI By Jules Wang", 10, 425);
		gameState = STATE_SELECT;
		this.init();

	}

	this.y -= 5;
}

GameStart.prototype.init = function()
{
	this.y = 512;
}



function TankRun()
{
	this.x = 128;
	this.time = 0;

	this.num = 0;
	// this.ys = [248, 280, 312];
	this.ys = [248, 280];
}

TankRun.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");

	this.time ++;
	var temp;

	if( parseInt(this.time / 6) % 2 == 0)
	{
		temp = 0;
	}
	else
	{
		temp = 27;
	}
	graphics.drawImage(img, images["tankRun"][0],images["tankRun"][1] + temp, 27,27, this.x, this.ys[this.num], 27, 27 )
}

TankRun.prototype.init = function()
{

	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	graphics.clearRect(this.x, this.ys[this.num], 27, 27);

	this.time = 0;
	this.num = 0;
}

TankRun.prototype.next = function(n)
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");

	graphics.clearRect(this.x, this.ys[this.num], 27, 27);

	if(n == 1)
	{
		if(this.num == 1)
		{
			this.num = 0;
			return;
		}
		this.num ++;
	}
	else
	{
		if(this.num == 0)
		{
			this.num = 1;
			return;
		}
		this.num --;
	}
}



function GameOver()
{
	this.x = 210;
	this.y = 512;
}


GameOver.prototype.draw = function()
{
	var myCanvas = document.getElementById("stage");
	var graphics = myCanvas.getContext("2d");
	var img = document.getElementById("tankAll");

	graphics.clearRect(this.x, this.y + 2, 62, 30);
	graphics.drawImage(img, images["gameOver"][0],images["gameOver"][1], 62, 30, this.x, this.y, 62, 30);

	if(this.y <= 100)
	{
		gameState = STATE_GAMESTART;
		graphics.clearRect(this.x, this.y, 62, 30);
		this.init();
	}

	this.y -= 2;
}

GameOver.prototype.init = function()
{
	this.y = 512;
}
