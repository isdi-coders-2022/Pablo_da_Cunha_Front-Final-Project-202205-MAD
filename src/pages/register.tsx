import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserHttpStore } from '../services/user.store';


export function Register() {
    
       
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rptpassword: '',
        role: ''
    });
    let navigate = useNavigate();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
    const response = await new UserHttpStore().registerUser(formData);

        if (response.name) {
            navigate('/login');
        }
    };

    function handleChange(ev: SyntheticEvent) {
        
        const element = ev.target as HTMLFormElement;
             
        setFormData({ ...formData, [element.name]: element.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="rptpassword"
                    value={formData.rptpassword}
                    onChange={handleChange}
                    placeholder="Repeat Password"
                />

                <select
                    value={formData.role}
                    onChange={handleChange}
                    name="role"
                >
                    <option value="Taster" selected>
                        Taster
                    </option>
                    <option value="Owner">
                        Owner
                    </option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
