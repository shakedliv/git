function onBallClick(elBall, maxDiameter) {

    var ballSize = +elBall.innerText
    ballSize += getRandomInt(20, 60)
   if (ballSize > maxDiameter) ballSize = 100
    const rndColor = getRandomColor()
    elBall.style.backgroundColor = rndColor
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}
