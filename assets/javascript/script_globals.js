
/*  Global variables  for Crystals Game  */

/* These are al of the scripts to control the 

    These are all the global variables used 
    throughout the game.  Placed in separate 
    file so that can find them there.

    Will probably only work with Hangman game
    the routines are all element id driven 

    */


const constWordLenMax = 20;



var gameGuess = {
    resultsChr: [], //char array
    resultsDispStr: "",  //result display string
    lettersPicked: [],
    lettersPickedStr: "",  //string value of letter picked
    lettersGoodChr: [],
    lettersGoodStr: "",
    lettersBadChr: [],
    lettersBadStr: "",
    state: 0,               //-1=init  0=input data  1=rdy to play  2=started play  3=guessing started  4=guess timing  5=guess timed out  10=evaluating  15=display result
    numGuesses: 0,
    numWrong: 0,
    numCorrect: 0,
    numLeft: 0,
    numLimit: 7,
    numCharRight: 0,
    timeStart: "",
    timeElapsedDT: "",
    timeElapsedSec: 0,
    timeLimit: 0,
    isGameOverMatch: false,     //game is over because a match
    isGameOverLost: false,      //game is over because ran out of guesses
    isGameOverTimeOut: false,  //game is over, timed out
    isCharInDuplicate: false,


    clearDisp: function () {
        //clear out the disp strings
        //clear results array
        var stopVal = this.resultsChr.length;
        for (i = 0; i < stopVal; i++) {
            this.resultsChr.pop();
        }
        this.resultsDispStr = "";

        stopVal = this.lettersBadChr.length;
        for (i = 0; i < stopVal; i++) {
            this.lettersBadChr.pop();
        }
        this.lettersBadStr = "";

        stopVal = this.lettersGoodChr.length;
        for (i = 0; i < stopVal; i++) {
            this.lettersGoodChr.pop();
        }
        this.lettersGoodStr = "";
    },

    init: function () {
        this.clearDisp();
        //clear letters picked array
        var stopVal = this.lettersPicked.length;
        for (var i = 0; i < stopVal; i++) {
            this.lettersPicked.pop();
        }
        this.lettersPickedStr = "";
        this.state = -1;
        this.numGuesses = 0;
        this.numWrong = 0;
        this.numCorrect = 0;
        this.numLeft = this.numLimit;
        this.numCharRight = 0;
        this.timeStart = "";
        this.timeElapsedDT = ""
        this.timeElapsedSec = 0;
        this.timeLimit = 0;
        this.isGameOverLost = false;
        this.isGameOverMatch = false;
        this.isGameOverTimeOut = false;
        this.isCharInDuplicate = false;
    },

    compPicksToAnswer: function (answerIn) {
     
    },

    redrawResultsStr: function (answerIn) {
        //redraw (refill) the results str
        this.clearDisp();
     
        //put strings out to display
        document.querySelector("#Disp-Results").textContent = this.resultsDispStr;
        document.querySelector("#Disp-PicksGood").textContent = this.lettersGoodStr;
        document.querySelector("#Disp-PicksBad").textContent = this.lettersBadStr;

        //update stats on display
        document.querySelector("#lblStatNumGuesses").textContent = this.numGuesses;
        document.querySelector("#lblStatGuessesLeft").textContent = this.numLeft;
        document.querySelector("#lblStatNumCorrect").textContent = this.numCorrect;
        document.querySelector("#lblStatNumWrong").textContent = this.numWrong;
    },


    pushLetterPicked: function (chrIn, answerStrIn) {
         }

};



var playObj = {
    //play object 
    //items associated with game play

    playState: 0,  //wat state is the game in
    imgLoc: "assets/",
    imgNames: [
        "ManFree_01.png",   //"he's free"
        "Man_05.png",   //head = 1 wrong
        "Man_06.png",   //body
        "Man_07.png",   //left foot
        "Man_08.png",   //right foot
        "Man_09.png",   //left arm
        "Man_10.png",   //right arm
        "Man_lost.png",   //dead        
        "Init_pic.png",  //on loading
        "Ready_pic.png",        //1 = ready
        "Start_02.png",  //press any letter  when bad && good both = 0
    ],  //array of image names

    displayCorrectPic: function (gameGuessObjIn) {
        //put the correct picture onto the display
        var imgName = "";  //name of the pict file to pull up
        imgName = this.imgLoc + this.imgNames[4];
        if (gameGuessObjIn.numGuesses == 0 && gameGuessObjIn.numCorrect == 0 && gameGuessObjIn.numWrong == 0) {
            imgName = this.imgLoc + this.imgNames[10];
        } else {
            if (gameGuessObjIn.numWrong == 0) {
                //special case, the # guess wrong is still zero, but picked a char already
                imgName = this.imgLoc + this.imgNames[0];
            } else {
                //so game has started, need offset to picture
                var imgOffsetNum = 0;
                var imgNumToPull = imgOffsetNum + gameGuessObjIn.numWrong;
                imgName = this.imgLoc + this.imgNames[imgNumToPull];
            }
        }
        var imgElem = document.getElementById('manPic');
        imgElem.src = imgName;
    },

    init: function () {
        //reset the variables for play
        this.playState = 0;
    },

    startNewGame: function () {
        //everything needed for a new game
        this.init();
        gameGuess.init();
        gameGuess.isGameOverLost = false;
        gameGuess.isGameOverMatch = false;
        wordListObj.pickNextWordFromDict( wordListDict );
        playObj.displayCorrectPic(gameGuess);
    }
};

/*
var statsDisp = {

};

//all the settings for a gamw
var gameSettings = {

};
*/



