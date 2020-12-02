const transformOptions = () => {
  const input = document.getElementById('input');
  const options = document.querySelectorAll('button');

  options.forEach((option) => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      if (option.id === 'sentence') {
        const textArray = input.value.toLowerCase().split('.');
        const capitalizedArray = textArray.map((word) => {
          for (let i = 0; i < word.length; i++) {
            if (word[i] === ' ') {
              continue;
            }
            return word.substring(0, i) + word[i].toUpperCase() + word.substring(i + 1);
          }
        });
        input.value = capitalizedArray.join('.');
      } else if (option.id === 'capital') {
        input.value = input.value.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
      } else if (option.id === 'lower') {
        input.value = input.value.toLowerCase();
      } else if (option.id === 'upper') {
        input.value = input.value.toUpperCase();
      }
    });
  });
};

export default transformOptions;
