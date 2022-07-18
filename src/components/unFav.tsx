import { useDispatch } from 'react-redux';
import { iBeer } from '../interfaces/iBeer';
import { updateUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';
import Swal from 'sweetalert2';
import { iUser } from '../interfaces/iUser';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/getToken';

export function ButtonUnFav({ user }: { user: iUser }, { beer }: { beer: iBeer }) {
    const dispatcher = useDispatch();
    let navigate = useNavigate();
    const token = getToken();

    function handleSubmit() {
        new UserHttpStore()
            .unFavBeer((user.id as string), (beer.id as string))
            .then((_data) => {
                dispatcher(updateUserAction(token));
                Swal.fire({
                    title: 'Not Tasted',
                    text: 'You have marked this beer as untasted',
                    icon: 'success',
                    confirmButtonText: 'Let`s taste some',
                });
            })
            .catch((_error) => {
                Swal.fire({
                    title: 'You are not logged',
                    text: 'To edit your brews you have to be logged in',
                    icon: 'error',
                    confirmButtonText: 'I`ll log in',
                });
                navigate('/login');

            });
    }
    const template = (
        <>
            <button
                className="buttonAddFav"
                onClick={() => {
                    handleSubmit();
                }}
            >
                Add Tasted Beer
            </button>
        </>
    );
    return template;
}
