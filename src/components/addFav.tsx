import { useDispatch } from 'react-redux';
import { iBeer } from '../interfaces/iBeer';
import { updateUserAction } from '../reducers/user/user.action.creator';
import { UserHttpStore } from '../services/user.store';
import Swal from 'sweetalert2';
import { iUser } from '../interfaces/iUser';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/getToken';

export function ButtonAddFav({ user }: { user: iUser }, { beer }: { beer: iBeer }) {
    const dispatcher = useDispatch();
    let navigate = useNavigate();
    const token = getToken();

    function handleSubmit() {
        new UserHttpStore()
            .addFavBeer((user.id as string), (beer.id as string))
            .then((_data) => {
                dispatcher(updateUserAction(token));
                Swal.fire({
                    title: 'Tasted',
                    text: 'You have tasted this beer',
                    icon: 'success',
                    confirmButtonText: 'Let`s go',
                });
            })
            .catch((_error) => {
                Swal.fire({
                    title: 'You are not logged',
                    text: 'To complete your brews you have to be logged in',
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
