const output = document.querySelector('.output');
output.textContent = "";

for (let i = 10; i >= 0; i--) {
if (i == 10) {

const para = document.createElement('p');
para.textContent = 'FUCK!';
output.appendChild(para);

} else if (i == 0) {

const para = document.createElement('p');
para.textContent = 'Blast Off';
output.appendChild(para);
} else {

const para = document.createElement('p');
para.textContent = i;
output.appendChild(para);

}

}



console.log('test')


// const output = document.querySelector('.output');
// output.textContent = "";

// // Change the loop condition here
// for (let i = 10; i >= 0; i--) {
//     if (i === 10) {
//         const para = document.createElement('p');
//         para.textContent = 'Countdown 10';
//         output.appendChild(para);
//     } else if (i === 0) {
//         const para = document.createElement('p');
//         para.textContent = 'Countdown 0'; // Adjusted for clarity
//         output.appendChild(para);
//     } else {
//         const para = document.createElement('p');
//         para.textContent = i;
//         output.appendChild(para);
//     }
// }
