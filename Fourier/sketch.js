//visualize Fourier series


let time = 0;
let wave = [];  // init an array for every point in the wave

let slider;

// the slider let you increase or decrease the number of circles
// n = 1 = Sin wave



  function setup() {   //create canvas and slider
        createCanvas(600, 400);
        slider = createSlider(1, 15, 4);  //  init the slider from n=1 to n=15 + starting value 4
      }




  function draw() {

        background(0);
        translate(140, 200); //draw  + position circle

        let x = 0;
        let y = 0;

        for (let i = 0; i < slider.value(); i++) {
                let prevx = x;   //add to previous position to add a new circle
                let prevy = y;

                let n = i * 2 + 1;   // 1 - 3 - 5 - 7 - 9 - .....

                let radius = 70 * (4 / (n * PI));  //set radius
                x += radius * cos(n * time);      // Dot moving around circle
                y += radius * sin(n * time);

                stroke(255, 100);  //fill (draw) circles
                noFill();  // don't show the points
                ellipse(prevx, prevy, radius * 2);

                //fill radius lines
                stroke(255);
                line(prevx, prevy, x, y);  // horizontal line from the Dot at the end of the radius to a point to start drawing

        }

          wave.unshift(y);     //unshift instead of push to always add from the beginning of the array

          // line and space between Dot & the wave
          translate(180, 0);
          line(x - 180, y, 0, wave[0]);
          beginShape();
          noFill();


        for (let i = 0; i < wave.length; i++) {   //draw the wave
          vertex(i, wave[i]);
        }

        endShape();

        time += 0.025;  // speed


        if (wave.length > 250) {   //where to stop drawing the wave
          wave.pop();
        }
}
