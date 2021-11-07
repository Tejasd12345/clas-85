var canvas = new fabric.Canvas("myCanvas");
block_height=30;
block_width=30;
block_object="";
player_object="";
playerx=10;
playery=10;

function player_update(){
fabric.Image.fromURL('player.png',function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playery,left:playerx
});
canvas.add(player_object);
});

}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top:playery,left:playerx
    });
    canvas.add(block_object);
    });
    
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e)
    {
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("cw").innerHTML = block_width;
        document.getElementById("ch").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("cw").innerHTML = block_width;
        document.getElementById("ch").innerHTML = block_height;
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    } if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == '67'){
        new_image("cloud.jpg");
        console.log("c");
    }
    if(keyPressed == '68'){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed == '71'){
        new_image("ground.png");
        console.log("g");
    }
    if(keyPressed == '76'){
        new_image("light_green.png");
        console.log("l");
    }
    if(keyPressed == '82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed == '84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == '85'){
        new_image("unique.png");
        console.log("u");
    }
    if(keyPressed == '87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == '89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    }
