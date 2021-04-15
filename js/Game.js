class Game{
    constructor(){}

    getState(){
        var dbRef=database.ref("/");
        dbRef.on("value",(data)=>{
            gameState=data.val()
        })
    }

    update(state){
        database.ref("/").update({

            gameState:state
        })
    }

    async start(){

        if(gameState===0){
            

            player=new Player();

            var playerCountRef=await database.ref("playerCount").once("value");
            

                if(playerCountRef.exists()){
                    playerCount=playerCountRef.val();
                    player.getCount();
                }
            
            

            form=new Form();
            form.display();
        }
    }

    play(){

        form.hide();

        textSize(30);
        text("Game Start",150,100);
    }
}

