let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location



function StonePath() {
	clear();
	print("\nYou inspect the worn stone path, who placed these stones? Were there others in your own situation, or perhaps something else…?, you feel uneasy but that is probably from the absurdity of your situation, but what else is new here");
	print("\n\t1-   Turn around and do something else, the vibes are off"   +  "\n\t2-   Continue down the path, this could be the way out!" + "\n\t3-   Inspect further, maybe there’s something under the stones?");
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
function StoneInspect() {
	clear();
	print("\nThere was nothing under the stones but worms and beetles. What did you even expect? You wonder, and now you look a fool, you feel mocked by the roots of the trees and judged from the stars in the sky. Clearly your subconscious has some sort of social anxiety.");
	print("\n\tPress B to go back");
	function processInput(input){
		if (input.toLowerCase() === "b"){
			StonePath();
		}
	}
	waitForInput(processInput);
}


function StoneBend() {
	clear();
	print("\nYou continue on the path and reach a bend, beyond this you see nothing but more stone path and a guttural feeling to turn around and leave passes through you. You do not feel safe, but was any of this ever safe?");
	print("\n\t1-    Inspect the place? If nothing else it might postpone what could happen if you continue" + "\n\t2-    Keep going, this could still be the way out" + "\n\t3-    Trust your gut and turn around, this path likely leads somewhere you don’t want to go");
	function processInput(input){
		if (input.toLowerCase() === "1"){
			BendInspect();
		}
		else if (input.toLowerCase() === "2"){
			Creature();
		}
		else if (input.toLowerCase() === "3"){
			StonePath();
		}
	}
	waitForInput(processInput);
}

function Creature() {
	clear();
	print("\nYou continue down the path and see something you have never seen before. At first through the fog you see a lean, animalistic beast-like shape that looks like it is made of what you deeply desire and what you most fear." + "\nAs you approach closer and the creature itself becomes visible it reveals that it is much more physical, much more real if that makes any sense. It looks like a grotesque twisting of deer and dog with extrusions only describable as broken bones fashioned into sharp sabres, it looks painful but you see no trace of such feeling in its bright, hollow eyes. You see nothing but a reflection of your own soul but somehow you can tell it still can’t see you, but it likely will soon. But as scary this thing may seem, you catch a glimpse of a possible way out, this could be your only shot to escape.");
	print("\n\t1-    Maybe it is a nice dog-beast-deer-monstrosity creature, you could be the next disney princess with your eldritch looking companion! You want to approach it and let it sniff your hand." + "\n\n\t2-    NOPE NOPE ALL THE WAY NOPE! Get me out of here, we are turning around and finding another way" + "\n\n\t3-    Cover yourself in leaves and twigs to sneak past it, if you move slowly and methodically it might not see you." + "\n\n\t4-    If you run fast enough you might just be able to get by, It’s better than nothing at least, besides, you were the fastest runner in second grade, you probably still have it in you!" + "\n\n\t5-    Use an item you have collected");
	function processInput(input){
		if (input.toLowerCase() === "1"){
			MisplacedTrust();
		}
		else if (input.toLowerCase() === "2"){
			StoneBend();
		}
		else if (input.toLowerCase() === "3"){
			NoStealth();
		}
		else if (input.toLowerCase() === "4"){
			NotSecondGrade();
		}
		else if (input.toLowerCase() === "5"){
			ItemIdea();
		}
	}
	waitForInput(processInput);
}
function NotSecondGrade() {
	clear();
	print("\nYou back up to get more of a speedy start and run as fast as you can, your legs burning, your heart pumping. You feel like the fastest person alive -no, the fastest being alive. You soon realize you are getting worn out already… You are relatively out of shape and it is no longer second grade… you collapse to the ground after a few more feet. The creature pauses, shocked that running ~40 feet already caused you to fully eat shit. But this shock does not last long and as you get up wiping dead leaves from your pants you look up and see those hollow eyes locked in with yours. You realize you are quite doomed as the creature stomps you into human paste. It does not bother to eat you -It does not want such weakness in its body.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			NotSecondGrade2()
		}
	}
	waitForInput(processInput);
}
function NotSecondGrade2() {
	clear();
	print("\nBAD ENDING: THIS IS NOT SECOND GRADE" + "\nWow, I’m honestly impressed that you are that bad at running. You do know that you aren’t supposed to collapse until you actually make it to your target. Right?" + "\n*mumbling: my grandfather could’ve run for longer and he’s 6 feet under*");
	print("\nPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}


function NoStealth() {
	clear();
	print("\nYou cover yourself in leaves and sticks feeling very stealthy. You recall a spy movie you have watched before where the main character did something like this, you feel like a real spy! This is great! You get halfway past the thing when you realize you forgot to mask your scent somehow, you pray the creature doesn’t notice…");
	print("\nYou continue on and after a bit further you find the unsecured leaves are falling off and the creature becoming more alert by the second. You decide to just book it once it takes notice of you.");
	print("\nUnfortunately you are no longer in second grade and the fastest runner, you are pretty slow and a bit out of shape, either way the creature already noticed you. The creature snaps you up and eats you. Sucks to suck.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c");{
			NoStealth2()
		}
	}
	waitForInput(processInput);
}
function NoStealth2() {
	clear();
	print("\nBAD ENDING: STEALTH LEVEL 0" + "\nYou really should have thought this through a bit more, huh?");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}

function MisplacedTrust() {
	clear();
	print("\nYou approach slowly and respectfully, it leans down and sniffs your hand while you think you may have just made a new companion! You already have plans of keeping it and living with it forever! You would finally have someone to talk to, someone to trust, someone to live for and something to die for.");
	print("\nAs you are in your wonderland the creature immediately bites off your hand, once you snap to reality you don’t even have time to think before it opens its toothy maw and it masticates your flesh from bone and swallows you to fuel itself for the next fool that dares to approach it.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			MisplacedTrust2();
		}
	}
	waitForInput(processInput);
}
function MisplacedTrust2() {
	clear();
	print("\nBAD ENDING: MISPLACED TRUST" + "\nThose movies are fiction for a reason… This is not how abominations work, maybe dogs or cats- but definitely not that thing. Rethink your reality, this is not a kids show where everyone gets along. Did you not realize that once you woke up here? Or even after you saw that monstrosity? If the world was kind, something of that sort would not have existed in the first place");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}

function BendInspect() {
	clear();
	print("\nYou find a thick jacket made of a strong material, feeling a chill in the air you feel inclined to put it on, it smells like old cologne and leaf decay, which it matches the color of.");
	print("\nIt is very comfortable and soft on the inside, strangely you feel both protected and strengthened, and you look pretty cool.");
	print("\n\tPress B to go back");

	function processInput(input){
		if (input.toLowerCase() === "b"){
			StoneBend();
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
	print("\nI have not gotten so far as to add this arc yet, I'm just a guy");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowarCase() === "r"){
			Clearing();
		}
	}
	waitForInput(processInput);

}

function Quitter() {
    clear();
    print("A voice echoes seemingly from the trees themselves -‘You’re really gonna give up, huh?" + 
	    "\n <em>Weakling</em>" + "\n We thought you were better than the others, stronger, braver, but no you are just like all the rest. You deserve this fate. We have seen this happen enough times to know you are beyond help, but seemingly not enough times to stop our hope for something different’-" 
 + 
"\n\nYou feel the weight of what your life could have been if you kept on. It's like watching the life of another, it plays as you drift off to sleep, never to wake.");
    print("\n\tPress C to continue");
    
    function processInput(input){
        if (input.toLowerCase() === "c") {
            Quitter2();
        } else {
            stayHere();
            waitThenCall(Quitter);
        }
    }
    waitForInput(processInput);
}

function Quitter2() {
	clear();
	print("\nBAD ENDING: QUITTER" + "\nThe death of your hope leads to your own demise. You could have tried, you know that… Right?");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}




//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
	clear();
    print("Open your eyes. Enter to open your eyes.");

    function processInput(input){
            Clearing();
    }
    waitForInput(processInput);
}
