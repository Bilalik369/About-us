document.querySelectorAll('.circular-progress').forEach((progress) => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const percentage = parseInt(progress.getAttribute('data-percentage'));
                    let startValue = 0;
                    const speed = 30;

                    
                    progress.querySelector('.progress-value').textContent = '0%';
                    progress.style.background = `conic-gradient(#ededed 0deg, #ededed 0deg)`;

                    const progressInterval = setInterval(() => {
                        startValue++;
                        progress.querySelector('.progress-value').textContent = `${startValue}%`;
                        progress.style.background = `conic-gradient(#4caf50 ${startValue * 3.6}deg, #ededed 0deg)`;

                        if (startValue === percentage) clearInterval(progressInterval);
                    }, speed);
                }
            });
        },
        { threshold: 0.5 } 
    );

    observer.observe(progress);
});

  

 
  
  