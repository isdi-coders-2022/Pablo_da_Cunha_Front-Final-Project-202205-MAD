import { useDispatch, useSelector } from 'react-redux';
import { iBrew } from '../interfaces/iBrew';
import { updateUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';
import { iStore } from '../store/store';

export function AddFav({ brew }: { brew: iBrew }) {
    const dispatch = useDispatch();
    const user = useSelector((store: iStore) => store.user);

    const handleClick = async () => {
        const token = localStorage.getItem;
        const response = await new UserHttpStore().addFavBrew(
            brew._id as string
        );

        dispatch(updateUserAction(response));
        localStorage.setItem('user', JSON.stringify({ token, user: response }));
    };
    return <button onClick={handleClick}>Add Fav</button>;
}
