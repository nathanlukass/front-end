// //Lukas, Jonathan

//IIFE (Immediately Invoked Function Expression)

(function(){
    let number = -21; 
    if (number> 0) {
        console.log(number , "is", "Positive number");
         } 
         else {
            console.log(number , "is", "Negative number");
         }
})();

//Callback function

function check(result) {
    console.log(result);
    }
function checkPositiveNegativeNumbers(number, callback) {
    if (number> 0) {
        result = (number + " is Positive number");
         } 
         else {
            result = (number + " is Negative number");
         }
         callback (result);
};
checkPositiveNegativeNumbers(21, check);
checkPositiveNegativeNumbers(-21, check);

 

    
    