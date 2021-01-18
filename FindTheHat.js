class Game {
    constructor(rows,columns){
      this.rows=rows
      this.columns=columns
      this.prompt = require('prompt-sync')({sigint: true});
      this.hat = '^';
      this.hole = 'O';
      this.fieldCharacter = '░';
      this.player = '*';
      this.playGround=[]
      // let playerMove=[]
      this.EndFlag=true;
      this.playerPosition=[0,0]  //[rows,columns]
      this.hatCoordinates =[Math.floor(Math.random()*rows),Math.floor(Math.random()*columns)]
    }
    addingRows(){
     for(let i=0;i< this.rows;i++){
      this.playGround.push([])}
    }
    // fill the playGround with ░ and O
    createPlayGround() {
      this.addingRows()
      for(let i=0;i<this.rows;i++){
        let holesFlag=0;  //used to make atleast 3 fieldCharacters between every 2 holds
        for(let j=0;j<this.columns;j++){
          const rand=Math.floor(Math.random()*2)+1
          if(rand===1||holesFlag < 3){
            this.playGround[i].push(this.fieldCharacter)
            holesFlag++
          }else{
            holesFlag=0;
            this.playGround[i].push(this.hole)
          }
        }
      }
    }
    //display the playGround
    displayPlayGround(){
      for(let i=0;i<this.playGround.length;i++){console.log(this.playGround[i].join(""))}
    }
    moveUpward(){
      if(this.playerPosition[0]!==0){
        this.playerPosition=[this.playerPosition[0]-1,this.playerPosition[1]]}
      else{
        console.log("out of Boundaries");
        return}
      // playerPath.push(playerPosition)  
      this.drawThePath()
    }
    moveLeftward(){
      if(this.playerPosition[1]!==0){
        this.playerPosition=[this.playerPosition[0],this.playerPosition[1]-1]}
      else{
        console.log("out of Boundaries");
        return}
      // playerPath.push(playerPosition)  
      this.drawThePath()
    }
    moveDownward(){
      if(this.playerPosition[0]!==(this.columns-1)){
        this.playerPosition=[this.playerPosition[0]+1,this.playerPosition[1]]}
      else{
        console.log("out of Boundaries")
        return}
      // playerPath.push(playerPosition)  
      this.drawThePath()
    }
    moveRightward(){
      if(this.playerPosition!==(this.rows-1)){
        this.playerPosition=[this.playerPosition[0],this.playerPosition[1]+1]}
      else{
        console.log("out of Boundaries")  
        return}
      // playerPath.push(playerPosition)  
      this.drawThePath()
    }
    drawThePath(){
      if(this.playGround[this.playerPosition[0]][this.playerPosition[1]]==="O"){
        console.log("what the fuck dude, are you an idiot?")
        this.EndFlag=false
      }else if(this.playGround[this.playerPosition[0]][this.playerPosition[1]]==="^"){
        console.log("Congratulations you are The Winner <3")
        this.EndFlag=false
      }else{
      this.playGround[this.playerPosition[0]][this.playerPosition[1]]=this.player
      this.displayPlayGround();
    }}
    //let the games begin
    runGame(){
      this.createPlayGround()
      this.playGround[0][0]=this.player
      this.playGround[this.hatCoordinates[0]][this.hatCoordinates[1]]=this.hat
      this.displayPlayGround()  
      while(this.EndFlag){
        let input=this.prompt("press Ctrl C if you want to leave\nWhich way? "  )
        switch (input){
          case "w" || "W" :
            this.moveUpward();
            break;
          case "a" || "A":
            this.moveLeftward();
            break;
          case "s" || "S":
            this.moveDownward();
            break;
          case "d" || "D":
            this.moveRightward();
            break;
          default:
            console.log("use WASD keys to move! ")
        }
      }
    }}
  let first=new Game(20,20)
  first.runGame()
  