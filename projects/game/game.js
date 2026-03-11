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

function UseItem() {
	clear();
	print("\nYou look through your items and come up with a plan or a few.");
	print("\nWhat plan do you think is best?");
	print("\n\t1-    Throw the cube at it, it is decently heavy and sharp. If you hit its head you might at least discombobulate/confuse it long enough to get to the path" + "\n\t2-    Use the jacket as some sort of invisibility cloak, it seems to be made of leather which is animal skin so maybe it will just think you are an animal passing by, surely this logic lacks any flaw" + "\n\t3-   Maybe it just wants the key, toss it over then hide so either way it won’t see you" + "\n\t4-   Okay, the plan is you run behind the creature and jump to put the backpack over its head to blind it long enough to get past!" + "\n\t5-   This stick looks sharp enough to spear it through the head, if you have good aim you might be able to take it down and escape!" + "\n\t6-   You have a phone… maybe throw it or something?" + "\n\t7-   You decide that you don't want to use an item, maybe something else…");
	function processInput(input){
		if (input.toLowerCase() === "1"){
			Thunk();
		}
		else if (input.toLowerCase() === "2"){
			DeadMansJacket();
		}
		else if (input.toLowerCase() === "3"){
			KeyToss();
		}
		else if (input.toLowerCase() === "4"){
			ShamefulVert();
		}
		else if (input.toLowerCase() === "5"){
			ViolentEnding();
		}
		else if (input.toLowerCase() === "6"){
			PhoneToss();
		}
		else if (input.toLowerCase() === "7"){
			Creature();
		}
	}
	waitForInput(processInput);
}
function PhoneToss() {
	clear();
	print("\nYou begin to throw your phone at the creature but you hesitate just before releasing it at the creature. You remember all the photos on it, all your memories. You have the very last photos of your dad when you were two, you have all your telescope images of your favorite stars to once again find your dad. You have your whole life in that device, the good times and the worst times. It is also quite expensive to replace and these days phones are important to employment.");
	print("\nAre you sure you want to do this?");
	print("\n\t1-   Yes" + "\n\t2-   I'd rather not actually");
	function processInput(input){
		if (input.toLowerCase() === "1"){
			PhoneTossY();
		}
		else if (input.toLowerCase() === "2"){
			PhoneTossN();
		}
	}
	waitForInput(processInput);
}

function PhoneTossN() {
	clear();
	print("\nYou put your phone back into your pocket, probably for the best. Besides, maybe another plan would be better.");
	print("\n\tPress B to go back");
	function processInput(){
		if (input.toLowerCase() === "b"){
			UseItem();
		}
	}
}

function PhoneTossY() {
	clear();
	print("\nYou throw the phone, it lands near the creature who was distracted by an owl. The creature then turns around and unknowingly steps on your phone, completely destroying it. Your stomach drops when you realize you not only lost your whole life, but that it was for nothing.");
	print("\n\tPress B to go back");

	function processInput(){
		if (input.toLowerCase() === "b"){
			UseItem();
		}
	}
	waitForInput(processInput);
}

function ShamefulVert() {
	clear();
	print("\nYou hold the backpack and break into a (slow) sprint. Panting and out of shape your vision gets blurry but you press on, you get closer and the creature appears to grow, you leap as high as possible and absolutely do not make it. You land so badly you manage to snap your left ankle the wrong way. Crying out in pain the creature looks at you with detached pity. In its eyes you feel as if you were a bug missing a wing and on the edge of its inevitable demise. The creature opts to put you out of your misery and steps on your head to crush your skull. You die quickly and the creature tosses you away as one would do with particularly icky trash.");
	print("\n\tPress C to continue");
	function processInput(){
		if (input.toLowerCase() === "c"){
			ShamefulVert2();
		}
	}
	waitForInput(processInput);
}

function ShamefulVert2() {
	clear();
	print("\nBAD ENDING: A VERTICAL TO BE ASHAMED OF" + "\nYeesh, not only can you not run, but you also can’t jump. Seeing as you also lack reason and your life now, what do you even have? Like talent or skill? I almost feel bad. Almost.");
	print("\n\tPress R to restart");

	function processInput(){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}

function KeyToss() {
	clear();
	print("\nYou throw the key over and immediately duck behind a bush to watch as the creature investigates. As it sniffs the key you feel a pang of hope in your chest, maybe this is what you needed to do! The creature continues to sniff then seems to make a decision, and then swallows the key whole. Your heart drops as you realize that key could have been actually helpful and not a metallic snack.");
	print("\nYou just lost the key. That was kinda dumb.");
	print("\n\tPress B to go back");
	//add no key variable, which triggers event upon finding locked door
	//and also erases this option, so the option DNE if you have no key
	//or if you have noKey variable, noKey variable erases key variable
	//and adds itself
	function processInput(input){
		if (input.toLowerCase() === "b"){
			UseItem();
		}
	}
	waitForInput(processInput);
}

function DeadMansJacket(){
	clear();
	print("\nYou carefully drape the jacket over yourself and ensure your whole body is covered, then you ever so slowly start to crawl by the beast hoping- no, praying that it won’t see you as a snack. The creature looks down and at first does not notice you much, as the jacket is the same color as the leaves, but then, it smells a human. Not just any human, but the one it ate weeks ago. It immediately cranes its head down and notices you are wearing the jacket of the poor sap that was just here a bit ago. After the initial shock, the creature makes quick work of you and makes sure to toss the jacket back over where it was.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			DeadMansJacket2();
		}
	}
	waitForInput(processInput);
}

function DeadMansJacket2(){
	clear();
	print("\nBAD ENDING: DEAD MAN’S JACKET" + "\nDid you seriously forget the creature had a sense of smell? And did you also think that jacket was just there for fun? Like, just spawned in or something? You bless me with your intellect");
	print("\n\tPress R to restart");
	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
}

function Thunk() {
	clear();
	print("\nYou throw the cube, and for what it’s worth, you get a good angle and hit its head, so if nothing else at least you have accuracy… As the cube hit the thing it let out an awful noise, maybe this noise means you defeated it! But after the noise left its mouth it immediately snaps its head in the direction the cube is thrown, toward you. You put on a look of pure terror as its flashlight looking eyes meet yours. You squit due to the brightness but through the squint you see the creature break into a sprint at you. It is impressive, really, at least it is much faster than you could ever go (even in second grade)." + "\nThe creature finally meets you and consumes you, not leaving you any time to shake off your shock and say your goodbyes. But who would you even say bye to in the first place? There is nobody here for you, nor was there ever. Maybe the stars? They are the only presences in your life that have ever been there for you.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			Thunk2();
		}
	}
	waitForInput(processInput);
}

function Thunk2(){
	clear();
	print("\nBAD ENDING: THUNK" + "\nWhat are you? Eight? You are just throwing things like a kid in a temper tantrum! What has gotten into you? Rhetorical question- it was teeth. Teeth got into you, and chewed you up, you unloved fool. Not even the stars will accept you.");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
		}
	}
	waitForInput(processInput);
}

function ViolentEnding(){
	clear();
	print("\nYou swing your arm back and aim. You pray to whatever higher being that could listen to you that your aim is true, but nobody but the trees are listening and they are deaf to your cause. You throw the stick with all the strength you can muster and a bit more, the stick strikes true and gets the creature through its bright glowing eyes. You feel a bit squeamish but the creature falls, it is not dead but is on its way.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			ViolentEnding2();
		}
	}
	waitForInput(processInput);
}
function ViolentEnding2() {
	clear();
	print("\nYou look with pity, wondering if it even wanted to be stuck like this, if it was ever like you, but then you think even if it didn’t want to be like this, it lost any humanity it could have had, lost in its animalistic mind. You still feel bad and walk over to it, you stroke its head as it lets out a sad, defeated cry. A tear falls from its eye and you decide that no matter how evil, nothing deserves a slow death like this.");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			ViolentEnding3();
		}
	}
	waitForInput(processInput);
}
function ViolentEnding3() {
	clear();
	print("\nYou quickly take the stick out of its eye and as the creature seems to settle into the fate that has befallen it you stab, again, and again, and again, until you hear nothing but the rush of the wind through the trees, not a breath, not a heartbeat");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			ViolentEnding4();
		}
	}
	waitForInput(processInput);
}
function ViolentEnding4() {
	clear();
	print("\nYou have done it, you have made it to the path and defeated the creature. Taking a life does not feel good, you hope that its soul is in the stars now, you hope it has found comfort, and you start to wonder why you even wanted to go back. There is no comfort for you, there is nothing left. Nobody misses you, nothing is waiting for you in your freedom but a sad apartment in a bleak polluted city. You wonder if you even deserve this freedom, and if this is even freedom at all, but no matter what it is, you have it once again. Can you ever truly escape? Can true freedom exist?");
	print("\n\tPress C to continue");

	function processInput(input){
		if (input.toLowerCase() === "c"){
			ViolentEnding5();
		}
	}
	waitForInput(processInput);
}

function ViolentEnding5() {
	clear();
	print("\nGOOD ENDING: VIOLENCE WAS THE ANSWER THIS TIME" + "\nWow, I’m shocked you could manage this. You defeated her, you freed her. She shines in the stars now, but the stars do not wait for you. Something else awaits you at your end, something even I can’t see. As much as I dislike you, I hope you will find something too. Something to make you happy, so your soul does not become what she had to be. I hope there is a better place for you when you are gone, better than where I sit.");
	print("\n\tPress R to restart");

	function processInput(input){
		if (input.toLowerCase() === "r"){
			start();
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
			UseItem();
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
		BeatenPath();
	  }
	  else if (input.toLowerCase() === "4"){
		Unwritten();
	  }
    }
    waitForInput(processInput);
}

function BeatenPath() {
	clear();
	print("\nYou look over to the beaten path and see it goes for a long while, but it could be your escape. You almost feel drawn to it, as if you have been missing it for a long, long time. You look down the path once more and make a choice, but which will you make?");
	print("\n\tPress W to walk down the path" + "\n\tPress B to return to the clearing");

	function processInput(input){
		if (input.toLowerCase() === "w"){
			BeatenPath2();
		}
		else if (input.toLowerCase() === "b"){
			Clearing();
		}
	}
	waitForInput(processInput);
}

function BeatenPath2() {
        clear();
        print("\nYou are a bit down the path and you see a strange flowering tree. It is similar to a pine tree, but if it was shaved kinda like a poodle. The flowers near the top let out a sweet but musty scent, and the ones near the bottom have begun to bear bright green spiky fruit resembling a bug that you have yet to see. The path continues on, but will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath3();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }
        }
        waitForInput(processInput);
}

function BeatenPath3() {
        clear();
        print("\nYou have gotten further down the path and hear the wind through the leaves once more. (if w/o jacket. You get chilly, if only you had something to warm you up. Either way it is not that bad.)(If w/ jacket. You feel a chill in the wind, thankfully you have a warm jacket.). After a bit you find that the whooshing of the wind in the trees is beginning to sound familiar, you must be going crazy, which is less surprising to you than it should be, but maybe the insanity was already a long time coming. Maybe your mom was right, you always were destined to fail. The path goes on, will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath4();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }   
        }     
        waitForInput(processInput);
}

function BeatenPath4() {
        clear();
        print("\nYou press on and spot a tree that looks as old as time itself, it seems to have been a while since the branches bore leaves but deep inside you can see that the tree still lives. The branches leave the trunk above the canopy of the younger trees with knots all the way up. It is strange, you think to yourself, why you find that these knots seem to resemble eyes. There are similar trees further along. You feel watched, but the path goes further still, will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath5();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }   
        }     
        waitForInput(processInput);
}

function BeatenPath5() {
        clear();
        print("\nYou continue onward and see something move in the distance, but it is too far away to tell what it was. Was there anything there at all? You hope not, these are the woods and you are not trained on woods survival, beyond reality TV that is. If it was something, it could easily kill you, you are vulnerable, alone, and far too trusting. You feel thankful that whatever that was hasn’t approached you because dying was not on your roster for the evening. The path goes onward, will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath6();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }   
        }     
        waitForInput(processInput);
}

function BeatenPath6() {
        clear();
        print("\nAfter continuing on the path, a dense fog falls over you, you can barely see the trees next to you. You estimate you can see around 8 feet into the distance, but nothing more as the fog is far too dense. You feel particularly scared due to your lack of sight, anything quiet enough could sneak up on you at any angle. The movies were wrong, your senses aren’t heightened, the only things that have grown stronger are your fear and your heartbeat, but hey, at least it still beats. The path persists, will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath7();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }   
        }     
        waitForInput(processInput);
}

function BeatenPath7() {
        clear();
        print("\nAfter a while the fog lifts but your fears persist. You decide to take a rest, you have been walking for a while you think, but there is no true way to tell how long you have been walking as the twilight sky has yet to change. As you look up to the moonless sky you think it very strange that the sky has maintained its hue, it feels as if time has stopped for the sky, or maybe just for you. Or maybe you have not been here as long as you think, you are pretty out of shape. The path has yet to stop, but will you?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath8();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
                }   
        }     
        waitForInput(processInput);
}

function BeatenPath8() {
        clear();
        print("\nAs you trek onwards you pass by a freshwater stream, thankfully knowledge of what water is drinkable happens to be something you know quite well and is the only forest survival knowledge you have. You look into the flowing water and can tell that; A) The water is running which keeps bacteria growth at bay, and B) You ensured there were no dead animals upstream (there were none). You take a refreshing sip of the water and feel much less worn out. The path presses onward still, but will you follow?");
        print("\n\tPress W to walk" + "\n\tPress B to go back");

        function processInput(input){
                if (input.toLowerCase() === "w"){
                        BeatenPath2();
                }
                else if (input.toLowerCase() === "b"){
                        Clearing();
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
