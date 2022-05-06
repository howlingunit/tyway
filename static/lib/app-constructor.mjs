async function appConstructor() {
  let apps = await fetch('/appData');
  apps = await apps.json();
  // console.log(apps)
  const appsDiv = document.querySelector('.apps');
  for (let i = 0; i < apps.length; i++) {
    // make web app
    const webApp = document.createElement('div');
    webApp.classList.add('webApp');
    appsDiv.appendChild(webApp);

    // make iframeLink
    const iframeLink = document.createElement('a');
    iframeLink.classList.add('iframeLink');
    iframeLink.href = apps[i].Link;
    webApp.appendChild(iframeLink);

    // make appIframe
    const appIframe = document.createElement('iframe');
    appIframe.src = apps[i].Link;
    appIframe.scrolling = 'no';
    appIframe.frameBorder = '0';
    iframeLink.appendChild(appIframe);

    // make appInfo
    const appInfo = document.createElement('div');
    appInfo.classList.add('appInfo');
    iframeLink.appendChild(appInfo);

    // make appTitle
    const appTitle = document.createElement('h2');
    appTitle.classList.add('appTitle');
    appTitle.textContent = apps[i].name;
    appInfo.appendChild(appTitle);

    // make statisDiv
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('statusDiv');
    appInfo.appendChild(statusDiv);

    // make statusP1
    const statusP1 = document.createElement('p');
    statusP1.classList.add('statusP');
    statusP1.textContent = 'status:';
    statusDiv.appendChild(statusP1);

    // make statusP2
    const statusP2 = document.createElement('p');
    statusP2.classList.add('statusP');
    statusP2.classList.add(apps[i].status);
    statusP2.textContent = apps[i].status;
    statusDiv.appendChild(statusP2);

    // make gitLink
    const gitLink = document.createElement('a');
    gitLink.href = apps[i].gitLink;
    gitLink.classList.add('gitLink');
    webApp.appendChild(gitLink);
  }
}

appConstructor();
