function play_se(){
    var パプリカ = new Audio('パプリカ.mp3');
    パプリカ.play();
}


$(function(){
    $('#11曲目').click(play_se);
});
