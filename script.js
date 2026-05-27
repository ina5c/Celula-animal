// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
document.querySelector('model-viewer').addEventListener('load', () => {
  const spots = document.querySelectorAll('.Hotspot');
  spots.forEach(spot => {
    spot.addEventListener('click', e => {
      e.stopPropagation();
      const isActive = spot.classList.contains('active');
      spots.forEach(s => s.classList.remove('active'));
      if (!isActive) spot.classList.add('active');
    });
  });
});
