import { UserHttpStore } from '../services/user.store';
import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { iStore } from '../store/store';

export function ModifyForm() {
    const user = useSelector((store: iStore) => store.user.user);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        passwd: '',

        rol: 'User',
    });
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        await new UserHttpStore().updateUser(formData.email, user.id as string);
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <p className="titleInput">New name</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">New email</p>
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="buttonLogin" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </>
    );

    return template;
}
export default ModifyForm;
