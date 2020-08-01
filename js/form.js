class Form {
    constructor(){
    }
    display(){
        var title=createElement();
        title.html("carRacingGame");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3")

        input.position(130,160);
        button.position(230,260);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount=playerCount+1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("hello"+name);
        greeting.position(130,160);
        })
    }
}