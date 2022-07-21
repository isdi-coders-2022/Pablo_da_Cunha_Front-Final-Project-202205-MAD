import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';
import Swal from 'sweetalert2';


export function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        role: '',
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().loginUser(formData);
       

        if (response) {
            dispatch(loadUserAction(response));
            localStorage.setItem('token', response.token as string);
            Swal.fire({
                title: 'You entered your account correctly',
                text: 'Let`s get Brewing',
                icon: 'success',
                confirmButtonText: 'Take me forward!',
            });
            navigate('/');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Email or password are incorrect',
                icon: 'error',
                confirmButtonText: 'Thank you so much, best page ever',
            });
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            ...formData,
            [element.name]: element.value,
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="off"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    autoComplete="off"
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Login;
