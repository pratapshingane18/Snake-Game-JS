(function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Canvas Size
    const canvasSize = 680;
    const w = (canvas.width= canvasSize);
    const h = (canvas.height = canvasSize);
    const canvasStrokeColor = "rgba(211,211,211,0,0.19)";

    // Getting Elemnts 
    const scoreE1 = document.getElementById("score");
    const resetE1 = document.getElementById("reset");
    const showGridE1 = document.getElementById("show-grid");
    const highScoreE1 = document.getElementById("high-score");
    const pauseE1 = document.getElementById("pause");
    const playE1 = document.getElementById("play");


})