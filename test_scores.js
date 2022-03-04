
let namesArr = ['Ben', 'Joel', 'Judy', 'Anne'];
let scoresArr = [88, 98, 77, 88];

function getAvgScore() {
    let i = 0,
        sum = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        sum += scoresArr[i];
    }
    return sum / len;
}

function getHighScore() {
    let i = 0,
        max = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        if (scoresArr[i] > max) {
            max = scoresArr[i];
            name = namesArr[i];
        }
    }
    return name + ' with score of ' + max;
}

function initializeResults() {
    let results = $('#results');
    let high = getHighScore();
    let avg = getAvgScore().toFixed(1);
    $('#highScore').html(high);
    $('#avgScore').html(avg);
}


function displayScores() {
    // Add your code here
    let scores = $('#scores'); 
    scores.toggle();  
}

function displayResults() {
    let results = $('#results');
    results.toggle();
}

function insertTableElement(scoresTable, index) {
    $('scoresTable tr:last').after('<tr> <td>' + namesArr[index] + '</td><td>' + 
    scoresArr[index] + '</td></tr>');
}

function insertNewTableElement(newName, newScore) {
    let rowCount = document.getElementById("scores_table").getElementsByTagName("tr").length;
    $('#scoresTable tr:last').append('<tr> <td>' + newName + '</td><td>' + newScore + '</td></tr>');
    rowCount = document.getElementById("scores_table").getElementsByTagName("tr").length;
}

function initializeScoresTable() {
    // Remove header row from table
    $('#scores_table tr').slice(1).remove();
    for (let i = 0; i < scoresArr.length; i++) {
        insertNewTableElement($('#scores_table tr:last').after('<tr> <td>' + 
        namesArr[i] + '</td><td>' + scoresArr[i] + '</td></tr>'));
    }
}

function resetInputs () {
    $("#name_span").text(""); 
    $("#score_span").text(""); 
}

function addScore() {
    resetInputs(); 
    let validated = true;  
    let score = $('#score');
    let name = $('#name');
    if (score.val() === '' || name.val() === '') {
        alert('Name and score must have values');
        return;
    }
    
    score.val('');
    if (name.val()===''){
        // alert('Name and score must have values')
        $("#name_span").text("Required"); 
        validated = false; 
    }
    if (score.val()===''){
        // alert('Name and score must have values')
        $("#score_span").text("Required"); 
        validated = false; 
    }
    if ( ! validated){
        return ; 
    }
    scoresArr.push(parseInt(score.val()));
    namesArr.push($("#name").val());
    initializeScoresTable();
    insertNewTableElement(name.val(), score.val()); 
    score.val(''); 
    name.val(''); 
    initializeResults();
    $('#scores').show();
    $('#results').show();

}


window.onload = function () {
    $('#display_results').on('click',  function() {
        displayResults();
    });

    $('#display_scores').on('click',  function() {
        displayScores();
    });
    $('#add').on('click',  function() {
        addScore();
    });

    let name = $('#name');
    let score = $('#score');

    name.focus();
    initializeResults();
    initializeScoresTable();
}
