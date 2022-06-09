import Button from 'components/Button';
import Input from 'components/Input';
import { useUser } from 'contexts/UserContext';
import UserLayout from 'layouts/UserLayout';
import supabase from 'libs/supabase';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

const InfoPage: FC = () => {
    const { student } = useUser();
    const { register, reset, handleSubmit, formState } = useForm();
    useEffect(() => {
        if (!student) return;
        reset(student);
    }, [student]);

    const onUpdate = async (values: any) => {
        console.log(values);
        const { error } = await supabase
            .from('Student')
            .update([
                {
                    name: values.name,
                },
            ])
            .eq('id', student?.id);

        if (error) return toast.error(error.message);
        mutate('user');
    };
    return (
        <div className="mx-auto max-w-7xl px-2 pt-6 sm:px-6 lg:px-8">
            <div className="mt-2">
                <Input label="Tên" {...register('name', { required: true, minLength: 2 })} />
            </div>
            <Button className="mt-3" variant="primary" onClick={handleSubmit(onUpdate)} isLoading={formState.isSubmitting}>
                Cập nhật
            </Button>
        </div>
    );
};

export default InfoPage;
InfoPage.Layout = UserLayout;
InfoPage.Title = 'Thông tin sinh viên';
