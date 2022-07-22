/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iStore } from '../store/store';
import { updateUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';
import Swal from 'sweetalert2';

export default function ProfilePage() {
    const user = useSelector((store: iStore) => store.user);
    const userStore = new UserHttpStore();
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    const initialState = {
        name: '',
        email: '',
        password: '',
        role: '',
    };

    const userDelete = {
        name: '',
        email: '',
        password: '',
        role: '',
    };
    useEffect(() => {
        setFormData({
            name: user?.name,
            email: user?.email,
            password: user?.password,
            role: user?.role,
        });
    }, []);

    const [formData, setFormData] = useState(initialState);

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        const value = element.value;
        setFormData({ ...formData, [element.name]: value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        userStore.updateUser(user._id as string, formData).then((user) => {
            dispatcher(updateUserAction(user));

            navigate(`/`);
        });
    };
    const handleDelete = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        userStore.deleteUser(user._id as string).then((user) => {
            dispatcher(updateUserAction(userDelete));
            Swal.fire({
                title: 'YOU ARE OUT',
                text: 'You`ll have to register again, dummy',
                icon: 'success',
                confirmButtonText: 'Let´s register again!',
            });
            localStorage.clear();
            navigate(`/register`);
        });
    };

    return (
        <div>
            <form data-testid="1" onSubmit={handleSubmit}>
                <div>
                    <h1 data-testid="1">PROFILE:</h1>
                    <p className="info">Name: {user.name}</p>
                    <p className="info">Email: {user.email}</p>
                    <div>
                        <label htmlFor="">Name:</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit}
                            className="SubmitButton"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                    <div></div>
                </div>
            </form>
            <button
                onClick={handleDelete}
                className="deleteButton"
                type="button"
            >
                Delete Profile
            </button>
        </div>
    );
}
