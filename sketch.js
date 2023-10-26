function setup() {
  // creatCanvas(600,600);
  let canvas = createCanvas(600,600);
  canvas.parent("game");
  background (215,229,240);
}

function draw() {
  
//hair
noStroke();
fill(101,67,33);
ellipse(300,395,500,720);

//left ear
noStroke();
fill(225,198,153);
ellipse(105,300,60,100);
fill(200,168,139);
ellipse(105,307,28,45);

//right ear
noStroke();
fill(225,198,153);
ellipse(495,300,60,100);
fill(200,168,139);
ellipse(495,307,28,45);

//head
stroke(184,151,120);
strokeWeight(1);
fill(225,198,153);
ellipse(width/2,height/2,375,450);

//nose
strokeWeight(3);
stroke(184,151,120);
fill(217,179,130);
ellipse(width/2,320,65,45);

//left eyelashes
stroke(0);
line(190,220,190,197);
line(208,205,208,190);
line(230,205,230,190);
line(250,205,250,195);

//right eyelashes
stroke(0);
line(350,220,350,197);
line(368,205,368,190);
line(410,220,410,195);
line(390,205,390,190);

//left eye
strokeWeight(1);
stroke(0);
fill(255);
ellipse(225,230,85,55);

//right eye
strokeWeight(1);
stroke(0);
fill(255);
ellipse(375,230,85,55);

//left eye iris
fill(83,70,0);
ellipse(225,230,50,55);

//right eye iris
fill(83,70,0);
ellipse(375,230,50,55);

//left eye pupil
fill(0);
ellipse(225,230,25,25);

//left eye pupil
fill(0);
ellipse(375,230,25,25);

//left cheek blush
noStroke();
fill(240,200,160);
//ellipse(185,300,75,65);

//right cheek blush
noStroke();
fill(240,200,160);
//ellipse(415,300,75,65);

//mouth
fill(194,130,133);
ellipse(300,420,150,50);
strokeWeight(2);
stroke(106,2,36);
line(226,420,373,420);

//left earrings
fill(255);
stroke(212,175,55);
ellipse(105,345,15,15);
ellipse(92,340,10,10);
ellipse(85,332,7,7);
ellipse(76,300,6,6);

//right earrings
fill(255);
stroke(212,175,55);
ellipse(495,345,15,15);
ellipse(508,340,10,10);
ellipse(515,332,7,7);
ellipse(520,280,6,6);
ellipse(522,290,6,6);

//nose piering
fill(255);
stroke(212,175,55);
ellipse(278,315,8,8);

//left eyebrow
stroke(101,67,33);
strokeWeight(9);
noFill();
beginShape();
vertex(155, 195);
bezierVertex(190, 160, 190, 160, 265, 173);
endShape();

//right eyebrow
stroke(101,67,33);
strokeWeight(9);
noFill();
beginShape();
vertex(445, 195);
bezierVertex(410, 160, 410, 160, 335, 173);
endShape();

}
