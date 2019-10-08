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

$(document).ready(function() {
shuffle(imageArray);
  for(let i=1;i<3;i++){
    $.each(imageArray,function(index, el) {
      $("#images").append(`<div id="card${i}${index}"><img src="${el}" ></div>`)
    });
  }
});
