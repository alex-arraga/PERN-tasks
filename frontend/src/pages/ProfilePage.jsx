import { useAuth } from '../context/authContext';

function ProfilePage() {
    const { user } = useAuth()
    return (
        <div className='m-10'>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>

    )
}

export default ProfilePage;