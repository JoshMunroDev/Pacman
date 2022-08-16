const canvas = document.querySelector('canvas');


//Canvas context
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;


class Boundary {
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

//boundaries

const map = [
    ['-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-']
]



const boundaries = [
    
]

map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(new Boundary({
                    position: {
                        x: 40 * j,
                        y: 40 * i
                    }
                }))
                break
        }
    })
})

boundaries.forEach((boundary) => {
    boundary.draw();
})

//Testing
console.log('canvas');