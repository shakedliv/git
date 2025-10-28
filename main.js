function onBallClick(elBall) {
   var ballSize = +elBall.innerText
   ballSize += 50
   elBall.style.width = ballSize + 'px'
   elBall.style.height = ballSize + 'px'
   elBall.innerText = ballSize
}