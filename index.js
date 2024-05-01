const numbers = document.getElementById('numbers');
const displayCalcul = document.getElementById('result');

const calculNumb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'c', '/', '*', '-', '+', '='];

calculNumb.map((item) => {
      document.body.addEventListener('keydown', (event) => {
            displayCalcul.classList.add('noDark')
            let value = event.key;

            if (value === item) {
                  displayCalcul.value += event.key;
            }

            if (value === 'Enter') {
                  displayCalcul.value = eval(displayCalcul.value).toFixed(0);
            }

            if (value === 'c' || value === 'Backspace') {
                  displayCalcul.value = '';
                  displayCalcul.classList.remove('noDark')
            }
      })

      const div = document.createElement('div');
      div.innerText = item;
      div.classList.add('stylesDiv');
      numbers.appendChild(div);

      div.addEventListener('click', (event) => {
            displayCalcul.classList.add('noDark')
            let value = event.target.innerText;

            switch (value) {
                  case 'c':
                        displayCalcul.value = '';
                        displayCalcul.classList.remove('noDark')
                        break;

                  case '=':
                        displayCalcul.value = eval(displayCalcul.value).toFixed(0);
                        break;

                  default:
                        displayCalcul.innerText += value;

                        displayCalcul.value += event.target.innerText

            }
      })
})

