function preload()
{

}

function setup()
{
    canvas=createCanvas(640,450);
    canvas.position(250,250);
    video=createCapture(VIDEO);
    video.hide();

    
}
function draw()
{
    image(video,100,20,300,300)
    fill(0,128,0);
    stroke(0,128,0);
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50,168,82);
    fill(50,168,82);
    Rect(63,27,375,25);
    
}

function take_snapshot()
{
    save('filter_photo.png')
}

