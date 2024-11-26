import getElement from './getElement.js';

const container = getElement('.container');

const display = (followers) => {
  const newFollower = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `
    <article class="card">
      <img src="${avatar_url}" alt="${login}"/>
      <h4>${login}</h4>
      <a href="${html_url}" class="btn">view profile</a>
    </article>
    `;
    })
    .join('');
  container.innerHTML = newFollower;
};

export default display;
