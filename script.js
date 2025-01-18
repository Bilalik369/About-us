document.querySelectorAll('.circular-progress').forEach((progress) => {
    const percentage = parseInt(progress.getAttribute('data-percentage'));
    let startValue = 0;
    const speed = 30;
  
    const progressInterval = setInterval(() => {
      startValue++;
      progress.querySelector('.progress-value').textContent = `${startValue}%`;
      progress.style.background = `conic-gradient(#4caf50 ${startValue * 3.6}deg, #ededed 0deg)`;
  
      if (startValue === percentage) clearInterval(progressInterval);
    }, speed);
  });

 
  
  