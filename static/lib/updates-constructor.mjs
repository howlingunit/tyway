
async function appConstructor() {
  let updates = await fetch('/updateData');
  updates = await updates.json();
  const updateDiv = document.querySelector('main');
  for (let i = 0; i < updates.length; i++) {
    // make update
    const update = document.createElement('section');
    update.classList.add(`${updates[i].type}`);
    updateDiv.appendChild(update);

    // make update text
    const updateText = document.createElement('h2');
    updateText.textContent = `${updates[i].service}>${updates[i].date.replace(/-/ig, '/')}: ${updates[i].description}`;
    update.appendChild(updateText);

    // make link P
    const updateLinkP = document.createElement('p');
    update.appendChild(updateLinkP);

    // make link a
    const updateLinkA = document.createElement('a');
    updateLinkA.textContent = 'Link';
    updateLinkA.href = `${updates[i].link}`;
    updateLinkP.appendChild(updateLinkA);
  }
}

appConstructor();
