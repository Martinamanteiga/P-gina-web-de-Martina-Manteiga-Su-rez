  // Función para cambiar la imagen
  function changeImage(sport) {
    const images = {
      soccer: 'images/futbol2.jpg',
      basketball: 'images/baloncesto2.jpg',
      tennis: 'images/tenis2.jpg',
      baseball: 'images/beisbol2.jpg'
    };

    const imageElement = document.getElementById(sport).querySelector('img');
    imageElement.src = images[sport];
  }

  // Función para cambiar el texto al escribir en el campo
  const textInput = document.getElementById('text-input');
  const changedText = document.getElementById('changed-text');

  textInput.addEventListener('input', function() {
    changedText.textContent = textInput.value;
  });

  // Función para mover el objeto
  let position = 0;
  const movingObject = document.getElementById('moving-object');

  setInterval(() => {
    position += 100;
    if (position > window.innerWidth) position = -100;
    movingObject.style.left = `${position}px`;
  }, 1000);
