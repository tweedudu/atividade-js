document.getElementById('showMessage').addEventListener('click', () => {
    alert('Olá Mundo!');
  });
  
  document.getElementById('sumButton').addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    document.getElementById('sumResult').textContent = `Resultado: ${
      num1 + num2
    }`;
  });
  
  document.getElementById('changeById').addEventListener('click', () => {
    const element = document.getElementById('elementById');
    element.style.backgroundColor = '#ffcccb';
    element.textContent = 'Alterado por ID';
  });
  
  document.getElementById('changeByName').addEventListener('click', () => {
    const element = document.getElementsByName('elementByName')[0];
    element.style.backgroundColor = '#c8e6c9';
    element.textContent = 'Alterado por Name';
  });
  
  document.getElementById('changeByClass').addEventListener('click', () => {
    const element = document.querySelector('.elementByClass');
    element.style.backgroundColor = '#bbdefb';
    element.textContent = 'Alterado por Class';
  });