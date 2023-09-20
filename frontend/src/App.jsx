import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TasksFormPage from './pages/TasksFormPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/tasks' element={<TasksPage />} />
      <Route path='/tasks/edit' element={<TasksFormPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
