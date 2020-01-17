import React, { useState, useEffect } from 'react';
import { Form, Card, Icon, Image } from 'semantic-ui-react';
import './App.css';
import Logo from './imgs/logo_clara_200px.png';

const axios = require('axios');

function App() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [public_repos, setPublicRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [html_url, setHtmlUrl] = useState('');
  const [search_input, setInput] = useState('');
  const [error, setError] = useState(null);

  const setData = ({name, login, avatar_url, public_repos, html_url}) => {
    setName(name);
    setLogin(login);
    setAvatar(avatar_url);
    setPublicRepos(public_repos);
    setHtmlUrl(html_url);
  };

  useEffect(async () =>  {
    const apiRes = await axios.get('https://api.github.com/users/dhh');
    console.log(apiRes.data);
    setData(apiRes.data);
  }, []
  );

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    const apiRes = await axios.get(`https://api.github.com/users/${search_input}`);
    // console.log(apiRes.data);
    setData(apiRes.data);
  };

  return (
    <div className="App">
      <header>
      <img src={Logo} alt="" />
        <h1>Fluency Academy Test</h1>
      </header>
      <div className="search">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input name="github_user" placeholder="dhh" onChange={handleSearch} />
          <Form.Button content="submit" />
        </Form.Group>
      </Form>
      </div>
      <div className="card">
        <Card>
          <Image src={avatar} wrapped ui={false} />
          <Card.Content>
            <Card.Header id="dev-name">{name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className="gb-login">
              {login}
            </div>
            {public_repos} Public repositories
          </Card.Content>
          <Card.Content extra>
            <a href={html_url}>
              <Icon name='github link' />
              Github page
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default App;
