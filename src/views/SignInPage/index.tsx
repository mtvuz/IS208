import supabase from 'libs/supabase';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm, useWatch } from 'react-hook-form';
import Input from 'components/Input';
import Button from 'components/Button';
import { useUser } from 'contexts/UserContext';
import { useRouter } from 'next/router';

const SignInPage: FC = () => {
    const { register, handleSubmit, formState, control } = useForm();
    const router = useRouter();
    const [isSignining, setIsSignining] = useState(true);
    const { user } = useUser();
    const password = useWatch({ control, name: 'password' });

    useEffect(() => {
        if (user) router.push('/');
    }, [user]);

    const onSubmit = async (values: any) => {
        var error;
        if (isSignining) error = (await supabase.auth.signIn(values)).error;
        else {
            const res = await supabase.auth.signUp(values);
            error = res.error;
            if (!res.error) {
                error = (await supabase.from('Student').insert({ id: res.user?.id, name: values.name })).error;
            }
        }
        if (error) toast.error(error.message);
    };
    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {!isSignining && (
                                <div className="mb-6">
                                    <Input label="Tên" type="text" {...register('name', { required: true, minLength: 6 })} />
                                </div>
                            )}
                            <div className="mb-6">
                                <Input label="Email" type="email" {...register('email', { required: true })} />
                            </div>
                            <div className="mb-6">
                                <Input label="Mật khẩu" type="password" {...register('password', { required: true })} />
                            </div>
                            {!isSignining && (
                                <div className="mb-6">
                                    <Input
                                        label="Nhập lại mật khẩu"
                                        type="password"
                                        {...register('repassword', { required: true, validate: (value) => value == password })}
                                    />
                                </div>
                            )}
                            {/* <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-gray-800">
                                    Forgot password?
                                </a>
                            </div> */}
                            <div className="text-center lg:text-left">
                                <Button type="submit" className="w-full" isLoading={formState.isSubmitting}>
                                    {isSignining ? 'Đăng nhập' : 'Đăng ký'}
                                </Button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    {isSignining ? 'Không có tài khoản? ' : 'Đã có tài khoản? '}
                                    <button
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out font-medium"
                                        onClick={() => {
                                            setIsSignining((x) => !x);
                                        }}
                                        type="button"
                                    >
                                        {isSignining ? 'Đăng ký' : 'Đăng nhập'}
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
SignInPage.Title = 'Đăng nhập';
