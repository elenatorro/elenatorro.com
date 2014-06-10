var cats = {};

Leap.loop(function(frame) {
 frame.hands.forEach(function(hand, index) {
  cats[0].setTransform(hand.screenPosition(), hand.roll());
  });
}).use('screenPosition', {scale: 0.25});


var Cat = function() {
  var cat = this;
  var img = document.createElement('img');
  var mybody = document.createElement('img');
  img.id = "myhead";
  mybody.id = "mybody";
  img.src = 'http://pinkhope.org.au/wp-content/uploads/2013/05/imdb_angelina_-jolie.jpg';
  mybody.src = 'img/oktoberfest.png';
  mybody.className = 'normal';
  img.style.position = 'absolute';
  mybody.style.position = 'absolute';
  img.onload = function () {
    cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
        document.getElementById("canvas").appendChild(img);
        document.getElementById("canvas").appendChild(mybody);
  }
  
  cat.setTransform = function(position, rotation) {

    img.style.left = position[0] - img.width  / 2 + 'px';
    img.style.top  = position[1] - img.height / 2 + 'px';

	   img.style.transform = 'rotate(' + -rotation + 'rad)';
	
    img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
    img.style.OTransform = img.style.transform;


    mybody.style.left = position[0] - mybody.width  / 2 + 'px';
    mybody.style.top  = position[1] - mybody.height / 2 + 'px';

    mybody.style.transform = 'rotate(' + -rotation + 'rad)';
  
    mybody.style.webkitTransform = mybody.style.MozTransform = mybody.style.msTransform =
    mybody.style.OTransform = mybody.style.transform;

  };

};

cats[0] = new Cat();

// This allows us to move the cat even whilst in an iFrame.
Leap.loopController.setBackground(true)