// Get the current hour
const hour = new Date().getHours();

let greeting;
if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 16) {
  greeting = 'Good afternoon';
} else if (hour < 20) {
  greeting = 'Good evening';
} else {
  greeting = 'Good night';
}
document.getElementById('greeting').textContent = greeting;


let breakpoint;
const width = window.innerWidth;
if (width < 567) {
  breakpoint = 'You are currently on a mobile device';
} else if (width < 768) {
  breakpoint = 'You are on a tablet device';
} else if (width > 768) {
  breakpoint = 'Desktop devices are the best to view my website';
}
document.getElementById('breakpoint').textContent = breakpoint;