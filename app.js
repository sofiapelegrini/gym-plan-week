
//jquery responsividade do botao
$(document).ready(function(){
    $("button").click(function(){
        $("button").removeClass("buttonClicked");
        $(this).addClass("buttonClicked");
    });
});

let currentDay = 1;
let currentExercise = 1;



document.getElementById('mon').addEventListener('click', function() {showDay(1); showBlock(1); showEnd(1)});
document.getElementById('tue').addEventListener('click', function() {showDay(2); showBlock(2); showEnd(2)});
document.getElementById('wed').addEventListener('click', function() {showDay(3);showBlock(3); showEnd(3)});
document.getElementById('thu').addEventListener('click', function() {showDay(4);showBlock(4); showEnd(4)});
document.getElementById('fri').addEventListener('click', function() {showDay(5);showBlock(5); showEnd(5)});

function showDay(day) {
    document.getElementById('day' + currentDay).style.display = 'none';
    document.getElementById('day' + day).style.display = 'block';
    currentDay = day;
    currentExercise = 1;
    document.getElementById('ex' + currentDay + currentExercise).style.display = 'block';
}

function showBlock(day) {
    document.getElementById('day' + currentDay).style.display = 'none';
    document.getElementById('day' + day).style.display = 'block';
    currentDay = day;
    currentExercise = 2;
    document.getElementById('ex' + currentDay + currentExercise).style.display = 'block';
}

function showEnd(day) {
    document.getElementById('day' + currentDay).style.display = 'none';
    document.getElementById('day' + day).style.display = 'block';
    currentDay = day;
    currentExercise = 3;
    document.getElementById('ex' + currentDay + currentExercise).style.display = 'block';
}

function nextExercise(currentExerciseId, nextExerciseId) {
    document.getElementById(currentExerciseId).style.display = 'none';
    document.getElementById(nextExerciseId).style.display = 'block';
    currentExercise = (currentExercise) + 1;
}
       


    
    




