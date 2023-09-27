import { Routes, Route, Outlet } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TasksFormPage from './pages/TasksFormPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

import { Loading, Container } from './components/ui/index';
import { NavBar } from './components/navbar/Navbar'
import { ProtectedRoutes } from './components/protected_routes/ProtectedRoutes';

import { useAuth } from './context/authContext';
import { TasksProvider } from './context/TasksContext';

function App() {

  const { isAuth, loading } = useAuth();

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <NavBar />
      <Container className='h-[calc(100vh-10rem)]'>
        <Routes>

          <Route element={<ProtectedRoutes isAllowed={!isAuth} redirectTo={'/tasks'} />}>
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Route>

          <Route element={<ProtectedRoutes isAllowed={isAuth} redirectTo={'/signin'} />}>
            <Route path='/' element={<HomePage />} />

            <Route element={<TasksProvider>{<Outlet />}</TasksProvider>}>
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/tasks/new' element={<TasksFormPage />} />
              <Route path='/tasks/:id/edit' element={<TasksFormPage />} />
            </Route>

            <Route path='/profile' element={<ProfilePage />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
