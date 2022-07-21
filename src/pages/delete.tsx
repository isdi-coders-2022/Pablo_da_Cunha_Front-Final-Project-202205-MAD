/* eslint-disable no-restricted-globals */
import { UserHttpStore } from '../services/user.store';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { iStore } from '../store/store';

export function DeleteForm() {
    const user = useSelector((store: iStore) => store.user);

    async function handleSubmit(ev: SyntheticEvent) {
        
        const ConfirmDelete = confirm(
            'Are you sure you want to delete your User?'
        );
        if (ConfirmDelete === true) {
            ev.preventDefault();
            await new UserHttpStore().deleteUser(user._id as string);
            localStorage.clear();
            window.location.href = 'http://localhost:3000';
        } else {
            return;
        }
    }

    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <button className="DeleteButton" type="submit">
                        Delete Account
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
export default DeleteForm;
