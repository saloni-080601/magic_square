var magic_square = [[8, 3, 4],[1, 5, 9],[6, 7, 2]]
var row=0
var colomn=0
var d=0
var d2=0
var dia=2
for (var i=0;i<magic_square.length;i++){  
    for(var j=0; j<magic_square[i].length;j++){
        row=row+magic_square[i][j]
        colomn=colomn+magic_square[j][i]}
    d=d+magic_square[i][i]
    d2=d2+magic_square[i][dia]
    dia--
}if (row===colomn && d===d2){
    console.log("it is magic square")
}else{
    console.log("it is not magic square")
}
