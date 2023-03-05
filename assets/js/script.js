const windowElement = document.getElementById('window');
const delay = miliseconds => new Promise(resolved => setTimeout(resolved, miliseconds));

windowElement.addEventListener('keypress', async event => {
    if (event.key === 'Enter') {
        await delay(150);
        getInputValue();
        
        removeInput();
        
        await delay(150);
        newLine();
    };
});

windowElement.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.focus();
});

async function loadTerminal() {
    await delay(500);
    createText('Welcome!');
    
    await delay(500);
    createText('Starting the server...');

    await delay(2000);
    createText('Available commands:');

    await delay(500);
    createCode('whoami', 'Who am I?');
    createCode('help', 'Output list of available commands.');
    createCode('social', 'Output list of my social networks.');
    createCode('clear', 'Clear the terminal.');

    await delay(500);
    newLine();
};

function getInputValue() {
    const inputElementValue = document.querySelector('input').value;

    if (inputElementValue === 'whoami') {
        trueValue(inputElementValue);
        
        createText('Hoi. My name is Islabre.');
        createText('I am a beginner who like programming, and also a tech geek.');
        createText('I am looking forward to learning from others!');

    } else if (inputElementValue === 'help') {
        trueValue(inputElementValue);

        createText('Available commands:');

        createCode('whoami', 'Who am I?');
        createCode('help', 'Output list of available commands.');
        createCode('social', 'Output list of my social networks.');
        createCode('clear', 'Clear the terminal.');

    } else if (inputElementValue === 'social') {
        trueValue(inputElementValue);

        createText('<i class="fa-brands fa-github"></i><a href="https://github.com/islabre1426" target="_blank" title="Link to my Github Profile">github.com/islabre1426</a>');

    } else if (inputElementValue === 'clear') {
        document.querySelectorAll('p').forEach(element => element.parentNode.removeChild(element));
        document.querySelectorAll('section').forEach(element => element.parentNode.removeChild(element));
        document.querySelectorAll('table').forEach(element => element.parentNode.removeChild(element));

    } else {
        falseValue(inputElementValue);

        createText(`${inputElementValue}: command not found`);

    };
};

function removeInput() {
    const typeElement = document.querySelector('.type');

    windowElement.removeChild(typeElement);
};

function trueValue(value) {
    const sectionElement = document.createElement('section');
    const spanElement = document.createElement('span');
    const h1Element = document.createElement('h1');

    sectionElement.setAttribute('class', 'type2');
    spanElement.setAttribute('class', 'prompt material-icons');
    h1Element.setAttribute('class', 'success');

    spanElement.textContent = 'trending_flat';
    h1Element.textContent = value;

    sectionElement.appendChild(spanElement);
    sectionElement.appendChild(h1Element);
    windowElement.appendChild(sectionElement);
};

function falseValue(value) {
    const sectionElement = document.createElement('section');
    const spanElement = document.createElement('span');
    const h1Element = document.createElement('h1');

    sectionElement.setAttribute('class', 'type2');
    spanElement.setAttribute('class', 'prompt material-icons');
    h1Element.setAttribute('class', 'error');

    spanElement.textContent = 'trending_flat';
    h1Element.textContent = value;

    sectionElement.appendChild(spanElement);
    sectionElement.appendChild(h1Element);
    windowElement.appendChild(sectionElement);
};

function newLine() {
    const divElement = document.createElement('div');
    const pElement = document.createElement('p');
    const spanElementUser = document.createElement('span');
    const spanElementPosition = document.createElement('span');
    const spanElementPath = document.createElement('span');
    const spanElementPrompt = document.createElement('span');
    const inputElement = document.createElement('input');

    divElement.setAttribute('class', 'type');
    pElement.setAttribute('class', 'prompt-string');
    spanElementUser.setAttribute('class', 'user');
    spanElementPosition.setAttribute('class', 'position');
    spanElementPath.setAttribute('class', 'path');
    spanElementPrompt.setAttribute('class', 'prompt material-icons');

    spanElementUser.textContent = '#User';
    spanElementPosition.textContent = 'in';
    spanElementPath.textContent = '~/Islabre';
    spanElementPrompt.textContent = 'trending_flat';

    pElement.appendChild(spanElementUser);
    pElement.appendChild(spanElementPosition);
    pElement.appendChild(spanElementPath);
    divElement.appendChild(spanElementPrompt);
    divElement.appendChild(inputElement);
    windowElement.appendChild(pElement);
    windowElement.appendChild(divElement);

    inputElement.focus();
};

function createText(text) {
    const pElement = document.createElement('p');

    pElement.innerHTML = text;

    windowElement.appendChild(pElement);
};

function createCode(code, text) {
    const tableElement = document.createElement('table');
    const trElement = document.createElement('tr');
    const tdElementCommand = document.createElement('td');
    const tdElementText = document.createElement('td');

    tdElementCommand.setAttribute('class', 'command');
    tdElementText.setAttribute('class', 'text');

    tdElementCommand.textContent = code;
    tdElementText.textContent = text;

    trElement.appendChild(tdElementCommand);
    trElement.appendChild(tdElementText);
    tableElement.appendChild(trElement);
    windowElement.appendChild(tableElement);
};

loadTerminal();