var gFirstBallDiameter = 400
var gSecondBallDiameter = 250


function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.innerText
    ballSize += getRandomInt(20, 60)
    if (ballSize > maxDiameter) ballSize = 100
    const rndColor = getRandomColor()
    elBall.style.backgroundColor = rndColor
    setBallSize(elBall, ballSize)
    elBall.innerText = ballSize
}
function swapBalls() {
    const firstBall = document.querySelector('.ball')
    const secondBall = document.querySelector('.ball2')
    const tempColor = getComputedStyle(firstBall).backgroundColor
    const tempSize = firstBall.innerText
    firstBall.style.backgroundColor =
        getComputedStyle(secondBall).backgroundColor
    secondBall.style.backgroundColor = tempColor

    setBallSize(firstBall, secondBall.innerText)
    setBallSize(secondBall, tempSize)
    firstBall.innerText = secondBall.innerText
    secondBall.innerText = tempSize
}

function reduceDiameter() {
   gFirstBallDiameter -= getRandomInt(20, 60)
   gSecondBallDiameter -= getRandomInt(20, 60)
   if(gFirstBallDiameter < 100 ) gFirstBallDiameter = 100
   if(gSecondBallDiameter < 100 ) gSecondBallDiameter = 100
}