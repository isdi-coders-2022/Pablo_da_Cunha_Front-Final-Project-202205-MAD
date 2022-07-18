import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUserAction } from "../reducers/user/user.action.creator";
import { UserHttpStore } from "../services/user.store";
import Swal from 'sweetalert2'


export function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        token: '',
        user: { id: '', name: '', email: '', password: '', role: '' },
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().loginUser(formData.user);
        console.log(response);

        if (response.token) {
            dispatch(loadUserAction(response));
            localStorage.setItem('user', JSON.stringify(response));
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
                confirmButtonText: 'Thank you so much, best page ever'
              });
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            token: '',
            user: { ...formData.user, [element.name]: element.value },
        });
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={formData.user.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.user.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Login;