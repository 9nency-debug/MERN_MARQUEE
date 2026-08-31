// // let mario = document.querySelector(".mario");
// // let obstacle = document.querySelector(".obstacle");
// // let scoreText = document.querySelector(".score");
// // let gameOverBox = document.querySelector(".game-over");
// // let marioX = 50;
// // let marioY = 0;
// // let obstacleX = 800;
// // let score = 0;
// // let isJumping = false;
// // let gameRunning = true;
// // let button = document.querySelector("button");
// // document.addEventListener("keydown",(event)=>{
// //     if(gameRunning == false) {
// //         return;
// //     }
// // //  console.log(event.key);
// //     if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
// //         marioX += 10;
// //         if (marioX >= 550) {
// //             marioX = 550;
// //         }
// //         mario.style.left = marioX + "px";
// //     }
// //     if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
// //         marioX -= 10;
// //         if (marioX <= 50) {
// //             marioX = 50;
// //         }
// //         mario.style.left = marioX +"px";
// //     }

// //     if (event.key === "w" || event.key === "ArrowUp" || event.key === " " || event.key === "W") {
// //         jump();
// //     } 
  
// // })

// // function jump() {
// //     if(isJumping == true) {
// //         return;
// //     }
// //     let jumpUp = setInterval(() => {
// //         marioY += 10;
// //         mario.style.bottom = marioY + "px";
// //         if (marioY >= 150) {
// //             clearInterval(jumpUp);
// //             let jumpDown = setInterval(() => {
// //                 marioY -= 10;
// //                 mario.style.bottom = marioY + "px";
// //                 if (marioY <= 0) {
// //                     // marioY = 0;
// //                     isJumping = false;
// //                     clearInterval(jumpDown);
// //                 }
// //             }, 10);
// //         }
// //     }, 10)
// // }

// // let gameLoop = setInterval(() => {
// //     obstacleX -= 10;
// //     obstacle.style.left = obstacleX + "px"
// //     if(obstacleX <= -40) {
// //         // clearInterval(gameloop);
// //         obstacleX = 800;
// //         score++;
// //         scoreText.innerText = `Score: ${score}`
// //     }
// //     let marioBox = mario.getBoundingClientRect();
// //     let obstacle = obstacle.getBoundingClientRect();
// //     if (marioBox.right > obstacleBox.left && marioBox.left < obstacleBox.right && marioBox.bottom < obstacleBox.top && marioBox.top < obstacleBox.bottom) {
// //        gameRunning = false;
// //        gameOverBox.style.display = "flex";
// //         clearInterval(gameloop);
// //     }
// //     // console.log(marioBox);
// //     // console.log(obstacleX);
// // }, 20);


// let mario = document.querySelector(".mario");
// let obstacle = document.querySelector(".obstacle");
// let scoreText = document.querySelector(".score");
// let gameOverBox = document.querySelector(".game-over");
// let button = document.querySelector("button");

// let marioX = 50;
// let marioY = 0;
// let obstacleX = 800;
// let score = 0;

// let isJumping = false;
// let gameRunning = true;




// // ============================
// // Keyboard Controls
// // ============================

// document.addEventListener("keydown", (event) => {

//     // Don't allow controls after game over
//     if (gameRunning === false) {
//         return;
//     }


//     // ============================
//     // Move Right
//     // ============================

//     if (
//         event.key === "ArrowRight" ||
//         event.key === "d" ||
//         event.key === "D"
//     ) {
//         marioX += 10;

//         // Maximum right position
//         if (marioX >= 550) {
//             marioX = 550;
//         }

//         mario.style.left = marioX + "px";
//     }


//     // ============================
//     // Move Left
//     // ============================

//     if (
//         event.key === "ArrowLeft" ||
//         event.key === "a" ||
//         event.key === "A"
//     ) {
//         marioX -= 10;

//         // Maximum left position
//         if (marioX <= 50) {
//             marioX = 50;
//         }

//         mario.style.left = marioX + "px";
//     }


//     // ============================
//     // Jump
//     // ============================

//     if (
//         event.key === "w" ||
//         event.key === "W" ||
//         event.key === "ArrowUp" ||
//         event.key === " "
//     ) {
//         jump();
//     }
// });


// // ============================
// // Jump Function
// // ============================

// function jump() {

//     // Don't allow multiple jumps
//     if (isJumping === true) {
//         return;
//     }

//     isJumping = true;


//     // Mario goes UP
//     let jumpUp = setInterval(() => {

//         marioY += 10;

//         mario.style.bottom = marioY + "px";


//         // Reached maximum jump height
//         if (marioY >= 150) {

//             clearInterval(jumpUp);


//             // Mario comes DOWN
//             let jumpDown = setInterval(() => {

//                 marioY -= 10;

//                 mario.style.bottom = marioY + "px";


//                 // Mario reached the ground
//                 if (marioY <= 0) {

//                     marioY = 0;

//                     mario.style.bottom = marioY + "px";

//                     isJumping = false;

//                     clearInterval(jumpDown);
//                 }

//             }, 10);
//         }

//     }, 10);
// }


// // ============================
// // Game Loop
// // ============================

// let gameLoop = setInterval(() => {

//     // Move obstacle toward Mario
//     obstacleX -= 10;

//     obstacle.style.left = obstacleX + "px";


//     // ============================
//     // Obstacle Passed Mario
//     // ============================

//     if (obstacleX <= -40) {

//         obstacleX = 800;

//         score++;

//         scoreText.innerText = `Score: ${score}`;
//     }


//     // ============================
//     // Collision Detection
//     // ============================

//     let marioBox = mario.getBoundingClientRect();
//     let obstacleBox = obstacle.getBoundingClientRect();


//     if (
//         marioBox.right > obstacleBox.left &&
//         marioBox.left < obstacleBox.right &&
//         marioBox.bottom > obstacleBox.top &&
//         marioBox.top < obstacleBox.bottom
//     ) {

//         // Stop the game
//         gameRunning = false;

//         // Show Game Over box
//         gameOverBox.style.display = "flex";

//         // Stop game loop
//         clearInterval(gameLoop);
//     }

// }, 20);


let mario = document.querySelector(".mario");
let obstacle = document.querySelector(".obstacle");
let scoreText = document.querySelector(".score");
let gameOverBox = document.querySelector(".game-over");
let button = document.querySelector("button");

let marioX = 50;
let marioY = 0;
let obstacleX = 800;
let score = 0;

let isJumping = false;
let gameRunning = true;
let gameLoop;


// ============================
// Keyboard Controls
// ============================

document.addEventListener("keydown", (event) => {

    if (gameRunning === false) {
        return;
    }

    // Move Right
    if (
        event.key === "ArrowRight" ||
        event.key === "d" ||
        event.key === "D"
    ) {
        marioX += 10;

        if (marioX >= 550) {
            marioX = 550;
        }

        mario.style.left = marioX + "px";
    }


    // Move Left
    if (
        event.key === "ArrowLeft" ||
        event.key === "a" ||
        event.key === "A"
    ) {
        marioX -= 10;

        if (marioX <= 50) {
            marioX = 50;
        }

        mario.style.left = marioX + "px";
    }


    // Jump
    if (
        event.key === "w" ||
        event.key === "W" ||
        event.key === "ArrowUp" ||
        event.key === " "
    ) {
        jump();
    }
});


// ============================
// Jump Function
// ============================

function jump() {

    if (isJumping === true) {
        return;
    }

    isJumping = true;

    // Mario goes UP
    let jumpUp = setInterval(() => {

        marioY += 10;

        mario.style.bottom = marioY + "px";

        if (marioY >= 150) {

            clearInterval(jumpUp);

            // Mario comes DOWN
            let jumpDown = setInterval(() => {

                marioY -= 10;

                mario.style.bottom = marioY + "px";

                if (marioY <= 0) {

                    marioY = 0;

                    mario.style.bottom = marioY + "px";

                    isJumping = false;

                    clearInterval(jumpDown);
                }

            }, 10);
        }

    }, 10);
}


// ============================
// Game Loop
// ============================

function startGame() {

    gameLoop = setInterval(() => {

        // Move obstacle
        obstacleX -= 10;

        obstacle.style.left = obstacleX + "px";


        // Obstacle passed Mario
        if (obstacleX <= -40) {

            obstacleX = 800;

            score++;

            scoreText.innerText = `Score: ${score}`;
        }


        // Collision Detection
        let marioBox = mario.getBoundingClientRect();
        let obstacleBox = obstacle.getBoundingClientRect();

        if (
            marioBox.right > obstacleBox.left &&
            marioBox.left < obstacleBox.right &&
            marioBox.bottom > obstacleBox.top &&
            marioBox.top < obstacleBox.bottom
        ) {

            gameRunning = false;

            gameOverBox.style.display = "flex";

            clearInterval(gameLoop);
        }

    }, 20);
}


// ============================
// Restart Button
// ============================

button.addEventListener("click", () => {

    // Stop old game loop
    clearInterval(gameLoop);
    
    // Reset game state
    gameRunning = true;
    isJumping = false;

    // Reset Mario
    marioX = 50;
    marioY = 0;

    mario.style.left = marioX + "px";
    mario.style.bottom = marioY + "px";

    // Reset obstacle
    obstacleX = 800;
    obstacle.style.left = obstacleX + "px";

    // Reset score
    score = 0;
    scoreText.innerText = `Score: ${score}`;

    // Hide Game Over box
    gameOverBox.style.display = "none";
    
    // Start game again
    startGame();
});


// ============================
// Start Game
// ============================

startGame();
