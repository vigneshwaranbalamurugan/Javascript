const content = document.getElementById('content');

const state = {
  home: 0,
  about: 0,
  contact:0
};

const routes = {
  home: () => {
    state.home++;
    return `<h1>Home</h1>
            <p>Welcome! Visits: ${state.home}</p>`;
  },
  about: () => {
    state.about++;
    return `<h1>About</h1>
            <p>This is a simple SPA using hash routing.</p>
            <p>Welcome! Visits: ${state.about}</p>`;
  },
  contact: () => {
    state.contact++;
    return `<h1>Contact</h1>
            <p>Email: example@mail.com</p>
            <p>Welcome! Visits: ${state.contact}</p></p>`;
  }
};

function router() {
  const hash = window.location.hash.replace('#', '');
  const view = routes[hash];
  if (view) {
    content.innerHTML = view();
  } else {
    content.innerHTML = `<h1>404</h1><p>Page not found</p>`;
  }
}

window.addEventListener('hashchange', router);

