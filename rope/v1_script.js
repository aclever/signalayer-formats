let points = [], sticks = [];
let accelIndex, accel;

function setup() {
    canvas = createCanvas(200, 500);
    for (let i = 0; i < 10; i ++) {
        points.push(new VerletPoint( createVector(i * 16, i * 16)) );
        if (i != 0) {
            sticks.push(new VerletStick(points[i - 1], points[i]));
        }
    }
    let p0 = points[points.length - 1];
    let p1 = new VerletPoint( p0.position.copy().add(createVector(32, 0)) );
    let p2 = new VerletPoint( p0.position.copy().add(createVector(32, 32)) );
    let p3 = new VerletPoint( p0.position.copy().add(createVector(0, 32)) );
    sticks.push(new VerletStick(p0, p1));
    sticks.push(new VerletStick(p1, p2));
    // sticks.push(new VerletStick(p2, p3));
    // sticks.push(new VerletStick(p3, p0));
    // sticks.push(new VerletStick(p0, p2));
    // sticks.push(new VerletStick(p1, p3));
    points.push(p1);
    points.push(p2);
    // points.push(p3);
}

function draw() {
    console.log('draw');
    clear();
    points.forEach((p, i)=>{
        p.update();
        if (i != 0) {
            p.position.y += 1;
        }
    });

    for (let i = 0; i < 5; i ++) {
        sticks.forEach((s)=>{
            s.update();
        });
        points[0].position.x = points[0].position.y = 0;
    }

    let f = (frameCount - 1) % 120;
    if (f == 0) {
        accelIndex = points.length - 2;
        accel = createVector((random() < 0.5) ? -random(1,3) : random(1,3), -random(0,3));
    }

    push();
    translate(width / 2, 0);
    fill(255); stroke(0); strokeWeight(3);

    if (f > 90) {
    //     points[accelIndex].position.add(accel);
    //     let p0 = points[accelIndex].position;
    //     let p1 = points[accelIndex].position.copy().add(accel.copy().mult(40));
    //     drawArrow(p0.x, p0.y, p1.x, p1.y);
    }
   strokeWeight(1);
    sticks.forEach((s)=>{s.draw();});
    // points.forEach((p)=>{p.draw();});
    pop();
}

function random2D() {
    return createVector(random(-1, 1), random(-1, 1)).normalize();
}

function drawArrow(x0, y0, x1, y1) {
    line(x0, y0, x1, y1);
    let v = createVector(x1 - x0, y1 - y0).normalize();
    line(x1, y1, x1 - v.y * 4 - v.x * 4, y1 + v.x * 4 - v.y * 4);
    line(x1, y1, x1 + v.y * 4 - v.x * 4, y1 - v.x * 4 - v.y * 4);
}

class VerletPoint {
    constructor(p) {
        this.setPosition(p);
    }

    setPosition(p) {
        this.position = p;
        this.prevPosition = this.position.copy();
    }

    update() {
        let temp = this.position.copy();
        this.position.add(this.getVelocity());
        this.prevPosition = temp;
    }

    setVelocity(v) {
        this.prevPosition = this.position.copy().sub(v);
    }

    getVelocity() {
        return this.position.copy().sub(this.prevPosition);
    }

    draw() {
        ellipse(this.position.x, this.position.y, 8, 8);
    }
}


class VerletStick {
    constructor(a, b) {
        this.pa = a;
        this.pb = b;
        this.length = this.pa.position.dist(this.pb.position);
    }

    update() {
        let dist = this.pa.position.dist(this.pb.position);
        let diff = this.length - dist;
        let offset = this.pa.position.copy().sub(this.pb.position).mult(diff / dist / 2);
        this.pa.position.add(offset);
        this.pb.position.sub(offset);
    }

    draw() {
        let p0 = this.pa.position;
        let p1 = this.pb.position;
        line(p0.x, p0.y, p1.x, p1.y);
    }
}
