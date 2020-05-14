paper.install(window)
paper.setup('myCanvas')
const screenW = view.size.width
const screenH = view.size.height
const random = (min, max) => {
    const num = parseInt(Math.random() * (max - min) + min)
    return num
};

const makeBubble = (fillColor) => {
    var bubble = new Path.Circle({
        center: new Point(random(0, screenW), random(0, screenH)),
        radius: random(5, 40),
        strokeColor: '#FFF',
        fillColor: fillColor
    });
    return bubble
};

const colors = [
    '#41E3D4',
    '#34CBB8',
    '#1EB197',
    '#048E98',
    '#046899'
]

/* TODO: instead of repeating makeBubble(colorVal);
   over and over again, use a for loop to repeat it
   as many times as you like. Hint, you'll figure out
   how to change the index of the colors array each time.
   Hint. Try using the random function defined above
*/
makeBubble(colors[3])
makeBubble(colors[1])
makeBubble(colors[4])
makeBubble(colors[0])
makeBubble(colors[2])
makeBubble(colors[0])

let counter = 0;
while (counter < 200) {
  makeBubble(colors[random(0, 4)]);
  counter++
};

view.draw()
