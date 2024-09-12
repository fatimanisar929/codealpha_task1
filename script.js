 // Handle image click to open in full screen
 const overlay = document.getElementById('fullscreen-overlay');
 const fullscreenImg = document.getElementById('fullscreen-img');
 const closeBtn = document.querySelector('.close-btn');

 document.querySelectorAll('.images img').forEach(img => {
     img.addEventListener('click', () => {
         fullscreenImg.src = img.src;
         overlay.style.display = 'flex';
     });
 });

 // Close the full-screen overlay
 closeBtn.addEventListener('click', () => {
     overlay.style.display = 'none';
 });

 // Close the full-screen overlay when clicking outside the image
 overlay.addEventListener('click', (e) => {
     if (e.target === overlay) {
         overlay.style.display = 'none';
     }
 });