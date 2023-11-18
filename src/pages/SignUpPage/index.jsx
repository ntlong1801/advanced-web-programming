import './style.scss';

import TextInput from 'components/FormControl/TextInput';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import instance from 'config';
import checkSignUp from 'pages/validation';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUpPage() {
  const {
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = useForm({ mode: 'onChange', resolver: yupResolver(checkSignUp) });

  const onSubmit = (data) => {
    instance.post('/auth/signup', data).then((response) => {
      console.log(response.data);
    })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(data);
  };
  return (
    <div className="flex align-items-center justify-content-center background">
      <div
        className="surface-card p-4 shadow-2 border-round w-full lg:w-6"
        style={{ maxWidth: '400px' }}
      >
        <h1 className="text-center text-primary">Sign Up</h1>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="p-fluid justify-content-center">
          <TextInput
            type="text"
            name="username"
            autoFocus
            control={control}
            errors={errors}
            label="Username"
            isRequired
            errorMessage={errors.username?.message || ''}
          />
          <TextInput
            type="password"
            name="password"
            control={control}
            errors={errors}
            label="Password"
            isRequired
            errorMessage={errors.password?.message || ''}
          />
          <TextInput
            type="text"
            name="fullName"
            control={control}
            errors={errors}
            label="Full Name"
            isRequired
          />
          <TextInput
            type="text"
            name="email"
            control={control}
            errors={errors}
            label="Email"
            isRequired
          />
          <div className="text-center mt-4">
            <Button label="Sign In" type="submit" style={{ minWidth: '100px', width: '160px' }} />
          </div>
        </form>

        <div className="mt-2">
          Already have an account? <Link to="/signin"> Sign in here</Link>
        </div>
      </div>
    </div>
  );
}
