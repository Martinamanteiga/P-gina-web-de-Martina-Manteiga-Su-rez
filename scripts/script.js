  // Función para cambiar la imagen
  function changeImage(sport) {
    const images = {
      soccer: 'https://www.bubblefootball.es/wp-content/uploads/2016/07/por-que-se-juega-11-jugadores-equipo-futbol.jpg',
      basketball: 'https://jimsports.com/wp-content/uploads/2023/04/baloncesto-historia-curiosidades.jpg',
      tennis: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/800px-Tennis_Racket_and_Balls.jpg',
      baseball: 'https://static.vecteezy.com/system/resources/previews/028/668/229/non_2x/baseball-ball-generate-ai-photo.jpg'
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
