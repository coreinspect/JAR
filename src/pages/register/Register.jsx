import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/index/users';
import toast from 'react-hot-toast';
import './register.css';

const Register = () => {
  //creating a mutation for registering a users
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },

    //after getting the data from the mutation this function run
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  //getting the data from the form
  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({
      name,
      email,
      password,
    });
  };

  //monitor the input from the password input
  const password = watch('password');

  return (
    <MainLayout>
      <section className="register">
        <div className="register-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            {/* For NAME */}
            <div className="name">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                // creating validation for the NAME
                {...register('name', {
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters',
                  },
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
                placeholder="Enter your name"
                className={`${errors.name ? 'error-border' : 'no-error'}`}
              />
              {errors.name?.message && (
                <p className="error-reg">{errors.name.message}</p>
              )}
            </div>

            {/* FOR EMAIL */}
            <div className="email">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                // creating validation for the EMAIL
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Enter a valid email',
                  },
                })}
                placeholder="Enter your email"
                className={`${errors.name ? 'error-border' : 'no-error'}`}
              />
              {errors.email?.message && (
                <p className="error-reg">{errors.email.message}</p>
              )}
            </div>

            {/* FOR PASSWORD */}
            <div className="password">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                })}
                placeholder="Enter your password"
                className={`${errors.password ? 'error-border' : 'no-error'}`}
              />
              {errors.password?.message && (
                <p className="error-reg">{errors.password.message}</p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="password">
              <label htmlFor="confirm-password">Confirm Password</label>

              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: 'Confirm Password is required',
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return 'Passwords do not match';
                    }
                  },
                })}
                placeholder="Confirm your password"
                className={`${
                  errors.confirmPassword ? 'error-border' : 'no-error'
                }`}
              />
              {errors.confirmPassword?.message && (
                <p className="error-reg">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* FOR FORGOT PASSWORD */}
            <Link to="/forgot-password" className="forgot">
              Forgot Password
            </Link>

            {/* FOR SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`btn-register ${isValid ? 'enabled' : 'disabled'}`}>
              Register
            </button>

            {/* FOR ALREADY HAVE AN ACCOUNT */}
            <p className="have-account">
              Already have an account?{' '}
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Register;
