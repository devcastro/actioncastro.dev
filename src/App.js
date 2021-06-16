import React from 'react';
import UserProfile from './components/UserProfile/UserProfile';
import LinkList from './components/LinkList/LinkList';
import Link from './components/Link/Link';
import './App.css'


export default function App() {

  return (
    <>
    <div className = 'bg' >

      <UserProfile />
      <LinkList /> 
      <Link />

    </div>
    
    </>
  )
}

