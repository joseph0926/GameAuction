import { FC, ReactElement } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { lowerCase } from '@/shared/utils/utils.service';
import { useAppDispatch } from '@/store/store';

import { IHomeHeaderProps } from '@/shared/interfaces/header.interface';
import { updateCategoryContainer } from './reducers/category.reducer';
import { updateHeader } from './reducers/header.reducer';
import { useAuthLogout } from '@/features/auth/hooks/useAuthLogout';

const SettingsDropdown: FC<IHomeHeaderProps> = ({ seller, authUser, buyer, type, setIsDropdownOpen }): ReactElement => {
  const { logoutFn } = useAuthLogout();
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    if (setIsDropdownOpen) {
      setIsDropdownOpen(false);
    }
    logoutFn(dispatch);
    navigate('/');
  };

  return (
    <div className="border-grey w-44 divide-y divide-gray-100 rounded border bg-white shadow-md">
      <ul className="text-gray-700s py-2 text-sm" aria-labelledby="avatarButton">
        {buyer && buyer.isSeller && (
          <li className="mx-3 mb-1">
            <Link
              to={`${type === 'buyer' ? `/${lowerCase(`${authUser?.username}`)}/${seller?._id}/seller_dashboard` : '/'}`}
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('sellerDashboard'));
                dispatch(updateCategoryContainer(true));
              }}
              className="px-4s block w-full cursor-pointer rounded bg-orange-500 py-2 text-center font-bold text-white hover:bg-orange-400 focus:outline-none"
            >
              {type === 'buyer' ? 'Switch to Selling' : 'Switch to Buying'}
            </Link>
          </li>
        )}
        {buyer && buyer.isSeller && type === 'buyer' && (
          <li>
            <Link
              to={`/manage_gigs/new/${seller?._id}`}
              className="block px-4 py-2 hover:text-orange-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                dispatch(updateCategoryContainer(true));
              }}
            >
              Add a new gig
            </Link>
          </li>
        )}
        {type === 'buyer' && (
          <li>
            <Link
              to={`/users/${buyer?.username}/${buyer?._id}/orders`}
              className="block px-4 py-2 hover:text-orange-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                dispatch(updateCategoryContainer(true));
              }}
            >
              Dashboard
            </Link>
          </li>
        )}
        {buyer && buyer.isSeller && type === 'buyer' && (
          <li>
            <Link
              to={`/seller_profile/${lowerCase(`${seller?.username}`)}/${seller?._id}/edit`}
              className="block px-4 py-2 hover:text-orange-400"
              onClick={() => {
                if (setIsDropdownOpen) {
                  setIsDropdownOpen(false);
                }
                dispatch(updateHeader('home'));
                dispatch(updateCategoryContainer(true));
              }}
            >
              Profile
            </Link>
          </li>
        )}
        <li>
          <Link
            to={`${lowerCase(`${buyer?.username}/edit`)}`}
            className="block px-4 py-2 hover:text-orange-400"
            onClick={() => {
              if (setIsDropdownOpen) {
                setIsDropdownOpen(false);
              }
              dispatch(updateHeader('home'));
              dispatch(updateCategoryContainer(false));
            }}
          >
            Settings
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <div onClick={() => onLogout()} className="block px-4 py-2 text-sm hover:text-orange-400">
          Sign out
        </div>
      </div>
    </div>
  );
};

export default SettingsDropdown;
