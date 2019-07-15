//visualize Fourier series


let time = 0;
let wave = [];

let slider;

// the slider let you increase or decrease the number of waves
// n = 1 = Sin wave


  function setup() {   //create canvas and slider
        createCanvas(600, 400);
        slider = createSlider(1, 10, 5);
      }




  function draw() {

        background(0);
        translate(150, 200); //position circle

        let x = 0;
        let y = 0;

        for (let i = 0; i < slider.value(); i++) {
                let prevx = x;
                let prevy = y;

                let n = i * 2 + 1;

                let radius = 70 * (4 / (n * PI));  //set radius
                x += radius * cos(n * time);
                y += radius * sin(n * time);

                stroke(255, 100);  //fill (draw) circles
                noFill();
                ellipse(prevx, prevy, radius * 2);

                //fill(255);
                stroke(255);
                line(prevx, prevy, x, y);  // horizontal line from the moving radius to a point to start drawing
                //ellipse(x, y, 8);
        }

          wave.unshift(y);

          translate(200, 0);
          line(x - 200, y, 0, wave[0]);
          beginShape();
          noFill();


        for (let i = 0; i < wave.length; i++) {
          vertex(i, wave[i]); // first point in loop
        }

        endShape();

        time += 0.03;  // speed

        if (wave.length > 250) {
          wave.pop();
        }
}
