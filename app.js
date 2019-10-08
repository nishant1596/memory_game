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

$(document).ready(function() {
  for(let i=1;i<3;i++){
    $.each(imageArray,function(index, el) {
      $("#images").append(`<div id="card${i}${index}"><img src="${el}" ></div>`)
    });
  }
});
