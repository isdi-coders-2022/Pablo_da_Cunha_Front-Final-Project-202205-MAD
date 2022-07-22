import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserHttpStore } from '../services/user.store';

export function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rptpassword: '',
        role: '',
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const response = await new UserHttpStore().registerUser(formData);
        
        
        if (response.name) {
            Swal.fire({
                title: 'You created your account correctly',
                text: 'Now is the time to find your Brew',
                icon: 'success',
                confirmButtonText: 'Take me forward!',
            });
            navigate('/login');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'You couldn`t create your account correctly',
                icon: 'error',
                confirmButtonText: 'Thank you so much, best page ever',
            });
        }
    };

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;

        setFormData({ ...formData, [element.name]: element.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    autoComplete="off"
                />
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="off"
                />
                <input
                    className="input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    autoComplete="off"
                />
                <input
                    className="input"
                    type="password"
                    name="rptpassword"
                    value={formData.rptpassword}
                    onChange={handleChange}
                    placeholder="Repeat Password"
                    autoComplete="off"
                />

                <select
                    className="input"
                    value={formData.role}
                    onChange={handleChange}
                    name="role"
                >
                    <option value="Owner" selected>
                        Owner
                    </option>
                </select>

                <button type="submit" className="registerButton">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
