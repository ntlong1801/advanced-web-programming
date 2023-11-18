import './style.scss';

import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const accessToken = localStorage.getItem('access_token');
  const user = JSON.parse(localStorage.getItem('user_profile'));

  const showProfileModal = (event) => {
    profileRef.current.toggle(event);
  };
  const handleLogout = async () => {
    localStorage.removeItem('access_token');
    navigate('/signin');
  };
  return (
    <div className="flex justify-content-end gap-2 p-2 bg-primary-600 sticky top-0">
      {!accessToken ? (
        <>
          <Link to="/signin">
            <Button
              label="Đăng nhập"
              severity="primary"
              type="button"
            />
          </Link>
          <Link to="/signup">
            <Button
              label="Đăng ký"
              severity="primary"
              type="button"
            />
          </Link>
        </>
      ) : (
        <button type="button" className="p-link layout-topbar-button" onClick={showProfileModal}>
          <i className="pi pi-user mr-2" style={{ fontSize: '2rem' }} />
          <OverlayPanel
            ref={profileRef}
            appendTo={typeof window !== 'undefined' ? document.body : null}
            showCloseIcon={false}
            id="overlay_panel_profile"
          >
            <div className="flex align-items-center p-3">
              <i className="pi pi-user text-2xl" />
              <div className="ml-4">
                <h6 className="m-0">{user.username}</h6>
                <p>
                  {user.fullName}
                </p>
              </div>
            </div>
            <hr className="my-2" />
            <ul className="profile-menu list-none p-0 m-0">
              <li>
                <Link to="/me" className="text-color">
                  <i className="pi pi-user mr-3" />
                  Profile
                </Link>
              </li>
              <hr />
              <span onClick={handleLogout} className="span-button">
                <i className="pi pi-sign-out mr-3" />
                Logout
              </span>
            </ul>
          </OverlayPanel>
        </button>
      )}

    </div>
  );
}
