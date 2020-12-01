const transformOptions = () => {
  const input = document.getElementById('input');
  const options = document.querySelectorAll('[type="radio"]');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      if (option.id === 'uppercase') {
        input.style = 'text-transform: uppercase';
      } else if (option.id === 'lowercase') {
        input.style = 'text-transform: lowercase';
      } else if (option.id === 'capitalize') {
        input.style = 'text-transform: capitalize';
      }
    });
  });
};

export default transformOptions;
