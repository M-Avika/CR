class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting = createElement('h1');
    }

    hide(){

        this.title.hide();
        this.input.hide();
        this.greeting.hide();
    }
        display(){

        
            this.title.html("Multiplayer Car Racing Game");
            this.title.position(340,50);

    
            this.input.position( 300,200);

        
            this.button.position(300,290);

        

            this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();
                 player.name=this.input.value();
                //player.update(name);
                playerCount+=1;
                player.updateCount(playerCount);
                this.greeting.html("Hello"+" " +player.name);
                this.greeting.position(270,330);
            })
                

            
            


        }
    
}