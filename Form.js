class Form {
    constructor(){
       }
    display(){
        var title = createElement('h2');
        title.html("car race");
        title.position(130,0);
        var input = createInput("NAME");
        input.position(130,160);
        var button = createButton('PLAY');
        button.position(250,200);
        var greeting = createElement('h3');
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.updateName(name);
            player.updateCount(playerCount);
            greeting.html("HELLO "+name);
            greeting.position(130,160);
       })
    }   
}