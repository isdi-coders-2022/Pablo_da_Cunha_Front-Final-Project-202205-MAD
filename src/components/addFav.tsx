import { useDispatch } from 'react-redux';
import { iBrew } from '../interfaces/iBrew';
import { updateUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';

export function AddFav({ brew }: { brew: iBrew }) {
    const dispatch = useDispatch();

    const handleClick = async () => {
        const response = await new UserHttpStore().addFavBrew(
            brew._id as string
        );

        dispatch(updateUserAction(response));
    };
    return <button onClick={handleClick}>Add Fav</button>;
}
