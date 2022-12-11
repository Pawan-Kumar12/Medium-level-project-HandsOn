
var quizData = [{que:'Which of the following is not used in JavaScript?', 
                 opA: 'const',
                 opB: 'var',
                 opC: 'let',
                 opD: 'char',
                 correctopt: 'opD'},
    
                {que:'Which of the following is correct about JavaScript?', 
                 opA: 'JavaScript is an Object-Based language',
                 opB: 'JavaScript is Assembly-language',
                 opC: 'JavaScript is an Object-Oriented language',
                 opD: 'JavaScript is a High-level language',
                 correctopt: 'opA'},
                 
                 {que:'Arrays in JavaScript are defined by which of the following statements?', 
                 opA: 'It is an ordered list of values',
                 opB: 'It is an ordered list of objects',
                 opC: 'It is an ordered list of string',
                 opD: 'It is an ordered list of functions',
                 correctopt: 'opB'},

                 {que:' Which of these is known as the Equality operator used for checking whether both the values are equal?', 
                 opA: '=',
                 opB: '==',
                 opC: '===',
                 opD: 'A & B',
                 correctopt: 'opB'},

                 {que:'Which of these symbols is used to create comments in JavaScript?',
                 opA: '//',
                 opB: '\\',
                 opC: '\* */',
                 opD: '--',
                 correctopt: 'opA'}
                ]
    
    var que = document.getElementById('que');
    var ans = document.querySelectorAll('.answer');
    var opA = document.getElementById('op-a');
    var opB = document.getElementById('op-b');
    var opC = document.getElementById('op-c');
    var opD = document.getElementById('op-d');
    var queNo = 0;
    var score = 0;
    var selectedANS;

window.addEventListener("load", onloadque);

function onloadque(){

   que.innerText = quizData[queNo].que;
   que.innerText = quizData[queNo].que;
   opA.innerText = quizData[queNo].opA;
   opB.innerText = quizData[queNo].opB;
   opC.innerText = quizData[queNo].opC;
   opD.innerText = quizData[queNo].opD;

}

 document.getElementById ("submitButton").addEventListener ("click", (NextQueOpt), false);



function NextQueOpt(){
    
    ans.forEach((item) => {

   { if(item.checked){
        selectedANS = item;
    }}});


    if(queNo <= quizData.length){

        if(selectedANS.id === quizData[queNo].correctopt){
            score += 1;
        }

        if(queNo == quizData.length-1){
        document.querySelector("body").innerHTML = `<h1 style="display:grid; place-items:center"> ${score} Que are correct out of ${queNo+1}</h1>`
        }
        else{
            queNo += 1;
            que.innerText = quizData[queNo].que;
            opA.innerText = quizData[queNo].opA;
            opB.innerText = quizData[queNo].opB;
            opC.innerText = quizData[queNo].opC;
            opD.innerText = quizData[queNo].opD;    
        }
       
    }


    
    

   

 
}
