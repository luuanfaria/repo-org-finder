import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { Container } from 'react-bootstrap';


import Header from './components/Header';
import Profile from './components/Profile';
import Search from './components/Search';
import Repos from './components/Repos';

function App() {
  const [query, setQuery] = useState('')
  const [profileData, setProfileData] = useState([])
  const [reposData, setReposData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/orgs/facebook`)
        const repos = await axios.get(`https://api.github.com/orgs/facebook/repos?per_page20`)
        setProfileData(data)
        setReposData(repos.data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchApi()
  }, [])

  useEffect(() => {
    const fetchApi = async () => {
      if (query !== '') {
        try {
          const { data } = await axios.get(`https://api.github.com/users/${query}`)
          const repos = await axios.get(`https://api.github.com/users/${query}/repos?per_page20`)
          setProfileData(data)
          setReposData(repos.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchApi()
  }, [query])

  return (
    <body>
      <Container>
        <Header />
        <Search inputQ={setQuery} />
        <Profile data={profileData} />
        <Repos data={reposData} />
      </Container>      
    </body>
  );
}

export default App;
