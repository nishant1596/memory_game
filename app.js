var imageArray=[
  "images/one.jpg",
  "images/two.jpg",
  "images/three.jpg",
  "images/four.jpg",
  "images/five.jpg",
  "images/six.jpg",
  "images/seven.jpg",
  "images/eight.jpg",
  "images/nine.jpg",
  "images/ten.jpg"
];
function concatArray(imageArray){
  newArray=$.merge($.merge([],imageArray),imageArray);
  return newArray;
}
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}



  var moves=0;
  var arrLen=0;
  var srcCount=0;
  var srcArray=[];
  var winpoint=0;
  var timer = 4;





$(document).ready(function() {
  const newArray=concatArray(imageArray);
  shuffle(newArray);
    $.each(newArray,function(index, el) {
      $("#images").append(`<div class="card"><img src="${el}" id="${index}"></div>`);
    });

    setInterval(function () {
      if (timer>0) {
        $("#timer").text(timer);
        --timer;
      }
      else{
        $("#timer").text("");
      }
    },1000)
    setTimeout(function () {
      $("#images div img").hide();
    },5000)

    $(".card").click(function(event) {
      moves++;
      $("#moves").text(moves);

        if (srcCount<3) {
          $(this).children().show();
          $source=$(this).children().attr("src");
          srcArray.push($source);
          srcCount++;
        }
      if (srcArray.length===2) {
        if (srcArray[0]!==srcArray[1]) {
          // $(`img[src="${srcArray[1]}"]:first`).show();
          for (var i = 0; i < 2; i++) {
              $(`img[src="${srcArray[i]}"]`).hide("slow");
          }
        }
        else{
          winpoint++;
        }
        if (winpoint===imageArray.length) {
          alert("congrats you win")
        }
        srcArray=[];
        srcCount=0;
      }

    });
});
