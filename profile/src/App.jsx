import React from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const users = [
    {
      id: "ul1",
      name: "Мария Ивановна",
      description: "Frontand-разработчик, любит React и котиков.",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "ul2",
      name: "Алексей Петров",
      description: "Backend-инженер, специализирующийся на Node.js.",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "ul3",
      name: "Екатерина Сидорова",
      description: "UI/UX дизайнер, создает красивые и удобные интерфейсы.",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
    }
  ]

  return (
    <div className='div-container'>
      <h1>Список профилей пользователей:</h1>
      <div className='profile-container'>
        {users.map((user) => (
          <UserProfile key={user.id} {...user} />
        ))};
      </div>
    </div>
  )
}

export default App
