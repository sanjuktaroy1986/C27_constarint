const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var myengine, myworld;
var box1,box2,box3,box4,box5;
var ground,platform;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var bird;
var backgroundImg;


function preload(){
    backgroundImg=loadImage("sprites/bg.png");
}


function setup(){
    createCanvas(1200,400);
    myengine = Engine.create();
    myworld = myengine.world;

    ground=new Ground(600,height,1200,20);
    platform =new Ground(120,300,250,200);
    box1=new Boxx(700,350,70,70);
    box2=new Boxx(900,350,70,70);
    box3=new Boxx(700,250,70,70);
    box4=new Boxx(900,250,70,70);
    box5=new Boxx(800,150,70,70);
    
    pig1=new Pig(800,350);
    pig2=new Pig(800,250);

    constrainedLog=new Log(250,200,80,PI/2);
    log1=new Log(800,300,300,PI/2);
    log2=new Log(800,200,300,PI/2);
    log3= new Log(760,100,150,PI/3)
    log4=new Log(860,100,120,-PI/4);  
    log5=new Log(250,200,80,PI/2);
    bird=new Bird(200,200);

    chain=new Chain(log5.body,bird.body);

   
}

function draw(){
    background(backgroundImg);
    Engine.update(myengine);
    ground.display();
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    
    chain.display();

    bird.display();
}