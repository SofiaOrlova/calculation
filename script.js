'use strict';

function pow(a,b) {
    return a**b;
}

let elementCollection = document.querySelectorAll('.number');
let elementDisplay = document.querySelector('.in-out');
let isJustResulted = false

for(let i=0; i<elementCollection.length;i++){
    elementCollection[i].addEventListener('click', function(ev){
        if(ev.target.innerHTML == '='){

            isJustResulted = true

            if(elementDisplay.innerHTML.indexOf('*') > 0){
                var arrayOfStrings = elementDisplay.innerHTML.split('*');
                function mult(a,b){
                    return a*b
                }
                outResult(mult(arrayOfStrings[0], arrayOfStrings[1]))
                
            }
            if(elementDisplay.innerHTML.indexOf('+') > 0){
                var arrayOfStrings = elementDisplay.innerHTML.split('+');
                function sum(a,b){
                    return Number(a)+Number(b)
                }
                outResult(sum(arrayOfStrings[0], arrayOfStrings[1]))
            }
            if(elementDisplay.innerHTML.indexOf('/') > 0){
                var arrayOfStrings = elementDisplay.innerHTML.split('/');
                function div(a,b){
                    return a/b
                }
                outResult(div(arrayOfStrings[0], arrayOfStrings[1]))
            }
            if(elementDisplay.innerHTML.indexOf('-') > 0){
                var arrayOfStrings = elementDisplay.innerHTML.split('-');
                function sub(a,b){
                    return a-b
                }
                outResult(sub(arrayOfStrings[0], arrayOfStrings[1]))
            }
        }
        else{
            if(isJustResulted){
                isJustResulted = false
                elementDisplay.innerHTML = ''
            }
            elementDisplay.innerHTML = elementDisplay.innerHTML + ev.target.innerHTML
        }
        
        function outResult(number){
            elementDisplay.innerHTML = number
        }
        
    })
}

