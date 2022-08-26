


const canvas=document.getElementById("canvas")
  const ctx=canvas.getContext("2d")

  const cw=canvas.width;
  const ch=canvas.height;

  const $bubbleCss=document.getElementById("bubbleCss")
  const $bubbleHtml=document.getElementById("bubbleHtml")
  const $bubbleJs=document.getElementById("bubbleJs")
  const $bubbleReact=document.getElementById("bubbleReact")
  const $bubbleSass=document.getElementById("bubbleSass")
  const $bubbleTs=document.getElementById("bubbleTs")
  const $backgroundSky=document.getElementById("backgroundSky")

 const bubbleSize=ch/4
//rysowanie bubbli
 class Bubble{ 
  constructor(language){
    this.speedXMinus=Math.floor(Math.random()*2)
    this.speedYMinus=Math.floor(Math.random()*2)
    this.tX=cw/((Math.random()*5)+1.2)-bubbleSize/2
    this.tY=ch/((Math.random()*5)+1.2)-bubbleSize/2
    if(this.speedXMinus===0){
      this.speedX=Math.random()
    }else if(this.speedXMinus===1){
      this.speedX=-Math.random()
    }
    if(this.speedYMinus===0){
      this.speedY=Math.random() 
    }else if(this.speedYMinus===1){
      this.speedY=-Math.random()
    }  
    this.language=language
  } 
  draw(){
    ctx.drawImage(this.language,this.tX,this.tY,bubbleSize,bubbleSize)
    this.tX+=this.speedX
    this.tY+=this.speedY
  }
  moveLoop(){
    if(this.tY<0||this.tY+bubbleSize>ch){this.speedY=-this.speedY}
    else if(this.tX<=0||this.tX+bubbleSize>=cw){this.speedX=-this.speedX}
  }
  update(){
    this.draw()  
    this.moveLoop()  
  }
 }
  
//wywołanie bubbli
bubbleCss=new Bubble($bubbleCss)
bubbleHtml=new Bubble($bubbleHtml)
bubbleJs=new Bubble($bubbleJs)
bubbleReact=new Bubble($bubbleReact)
bubbleSass=new Bubble($bubbleSass)
bubbleTs=new Bubble($bubbleTs)

//funkcja rysująca
function loopBubble(){
  ctx.drawImage(backgroundSky,0,0,cw,ch)
  bubbleCss.update()
  bubbleHtml.update()
  bubbleJs.update()
  bubbleReact.update()
  bubbleSass.update()
  bubbleTs.update()
}

const bubbleRender=setInterval(loopBubble,10)




















//DZIAŁAJĄCA WERSJA BEZ RWD
//   const canvas=document.getElementById("canvas")
//   const ctx=canvas.getContext("2d")

//   canvas.width=700;
//   canvas.height=700;

//   const cw=canvas.width;
//   const ch=canvas.height;

//   const $bubbleCss=document.getElementById("bubbleCss")
//   const $bubbleHtml=document.getElementById("bubbleHtml")
//   const $bubbleJs=document.getElementById("bubbleJs")
//   const $bubbleReact=document.getElementById("bubbleReact")
//   const $bubbleSass=document.getElementById("bubbleSass")
//   const $bubbleTs=document.getElementById("bubbleTs")
//   const $backgroundSky=document.getElementById("backgroundSky")

//  const bubbleSize=200
// //rysowanie bubbli
//  class Bubble{ 
//   constructor(language){
//     this.speedXMinus=Math.floor(Math.random()*2)
//     this.speedYMinus=Math.floor(Math.random()*2)
//     this.tX=cw/((Math.random()*5)+1.2)-bubbleSize/2
//     this.tY=ch/((Math.random()*5)+1.2)-bubbleSize/2
//     if(this.speedXMinus===0){
//       this.speedX=Math.random()
//     }else if(this.speedXMinus===1){
//       this.speedX=-Math.random()
//     }
//     if(this.speedYMinus===0){
//       this.speedY=Math.random() 
//     }else if(this.speedYMinus===1){
//       this.speedY=-Math.random()
//     }  
//     this.language=language
//   } 
//   draw(){
//     ctx.drawImage(this.language,this.tX,this.tY,bubbleSize,bubbleSize)
//     this.tX+=this.speedX
//     this.tY+=this.speedY
//   }
//   moveLoop(){
//     if(this.tY<0||this.tY+bubbleSize>ch){this.speedY=-this.speedY}
//     else if(this.tX<=0||this.tX+bubbleSize>=cw){this.speedX=-this.speedX}
//   }
//   update(){
//     this.draw()  
//     this.moveLoop()  
//   }
//  }
  
// //wywołanie bubbli
// bubbleCss=new Bubble($bubbleCss)
// bubbleHtml=new Bubble($bubbleHtml)
// bubbleJs=new Bubble($bubbleJs)
// bubbleReact=new Bubble($bubbleReact)
// bubbleSass=new Bubble($bubbleSass)
// bubbleTs=new Bubble($bubbleTs)

// //funkcja rysująca
// function loopBubble(){
//   ctx.drawImage(backgroundSky,0,0,cw,ch)
//   bubbleCss.update()
//   bubbleHtml.update()
//   bubbleJs.update()
//   bubbleReact.update()
//   bubbleSass.update()
//   bubbleTs.update()
// }

// const bubbleRender=setInterval(loopBubble,10)

 




















































