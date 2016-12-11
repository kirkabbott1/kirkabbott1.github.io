
// grab the background Pic element
// var backgroundPic = document.getElementById('garage');


// when a page loads, call the getCurrScreenWidth function
window.onload = getCurrScreenWidth;
// when a page is resized,
window.onresize = getCurrScreenWidth;

function getCurrScreenWidth() {
  // find the current screen width
  var currScreenWidth = window.innerWidth;
  // if the screen width is less than 748px, set the image to the floor pic
  if (currScreenWidth < 748) {
    backgroundPic.setAttribute('src', 'images/floor.jpg');
  } else {
    // grab the background Pic element
    var backgroundPic = document.getElementById('garage');
    // if screen is greater than or equal to 748, set the image to the garage pic
    backgroundPic.setAttribute('src', 'images/skillsbackground.png');
  }
}

// 'images/skillsbackground.png'
// 'images/background_cat.png'

// #garage {
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
