import TextInput from 'components/FormControl/TextInput';
import { useForm } from 'react-hook-form';
import Header from 'layout/header';
import { Button } from 'primereact/button';
import { useState, useRef } from 'react';
import { checkChangeProfile } from 'pages/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import instance from 'config';
import { Toast } from 'primereact/toast';

export default function UserPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user_profile')));
  const toast = useRef(null);

  const {
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = useForm({ mode: 'onChange', resolver: yupResolver(checkChangeProfile) });

  const showSuccess = (msg) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: msg, life: 3000 });
  };

  const showError = (msg) => {
    toast.current.show({ severity: 'error', summary: 'Fail', detail: msg, life: 3000 });
  };
  const onSubmit = async (data) => {
    const response = await instance.post('users/changePassword', {
      username: user?.username,
      ...data
    });

    if (response.data?.msg) {
      showError(response.data?.msg);
    } else {
      showSuccess('Change password successful');
    }

    localStorage.setItem('user_profile', JSON.stringify(response.data));
    setUser(response.data);
  };

  return (
    <div className="background" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Toast ref={toast} />
      <div className="flex align-items-center justify-content-center" style={{ flex: 1 }}>
        <div
          className="surface-card p-4 shadow-2 border-round w-full lg:w-6"
          style={{ maxWidth: '400px', height: '50vh' }}
        >
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="p-fluid justify-content-center">
            <div className="text-center">
              <h3>{user?.username}</h3>
            </div>
            <TextInput
              type="password"
              name="oldpassword"
              autoFocus
              control={control}
              errors={errors}
              label="Old password"
              defaultValue=""
            />
            <TextInput
              type="password"
              name="newpassword"
              autoFocus
              control={control}
              errors={errors}
              label="New password"
              defaultValue=""
            />
            <TextInput
              type="password"
              name="renewpassword"
              autoFocus
              control={control}
              errors={errors}
              label="Re-New password"
              defaultValue=""
            />
            <div className="text-center mt-4">
              <Button
                label="Change"
                type="submit"
                style={{ minWidth: '100px', width: '160px' }}
              />
            </div>
          </form>
        </div>
      </div>

    </div>

  );
}
