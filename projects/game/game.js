let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location

function StonePath() {
	clear();
	print("\nYou inspect the worn stone path, who placed these stones? Were there others in your own situation, or perhaps something else…?, you feel uneasy but that is probably from the absurdity of your situation, but what else is new here");
	print("\n\t1-    Turn around and do something else, the vibes are off"   +  "\n\t2-   Continue down the path, this could be the way out!" + "\n\t3-   Inspect further, maybe there’s something under the stones?");
	function processInput(input){
		if (input.toLowerCase() === "1"){
			Clearing();
		}
		else if (input.toLowerCase() === "2"){
			StoneBend();
		}
		else if (input.toLowerCase() === "3"){
			StoneInspect();
		}
	}
	waitForInput(processInput);
}

function Clearing() {
    clear();
    print("\nYou wake up in a strange clearing devoid of life with nothing but the clothes on your back and a dead phone in your pocket. The clearing seems to be blocked off by a dense wall of trees other than a few possible pathways. You feel uneasy, hungry, and quite lost given you have no idea where this place could be or how you got here.");
    print("\nWhat will you do? Type the number associated with your choice" +
        "\n\n\t1-   Give up, this clearing is your new home and the trees the harbingers of your fate" 
	    + "\n\t2-   Inspect the far path with worn stone leading around a bend" + "\n\t3-   Inspect the beaten path to your left" + "\n\t4-   Inspect the clearing, there’s gotta be something, right?");
    
    function processInput(input){
        if (input.toLowerCase() === "1") {
            Quitter();
        } else if (input.toLowerCase() === "2"){
            StonePath();
        }
	  else if (input.toLowerCase() === "3"){
		Unwitten();
	  }
	  else if (input.toLowerCase() === "4"){
		Unwritten();
	  }
    }
    waitForInput(processInput);
}

function Unwritten(){
	clear();
	print("I have not gotten so far as to add this arc yet, I'm just a guy");

}

function Quitter() {
    clear();
    print("A voice echoes seemingly from the trees themselves -‘You’re really gonna give up, huh?" + 
	    "\n <em>Weakling</em>" + "\n We thought you were better than the others, stronger, braver, but no you are just like all the rest. You deserve this fate. We have seen this happen enough times to know you are beyond help, but seemingly not enough times to stop our hope for something different’-" 
 + 
"\n\nYou feel the weight of what your life could have been if you kept on. It's like watching the life of another, it plays as you drift off to sleep, never to wake.");
    print("\n\tPress C to continue");
    
    function processInput(input){
        if (input.toLowerCase() === "1") {
            Clearing();
        } else {
            stayHere();
            waitThenCall(Quitter);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome, press any key to start");

    function processInput(input){
            Clearing();
    }
    waitForInput(processInput);
}
