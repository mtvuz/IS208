import Button from 'components/Button';
import CourseModal from 'components/modals/CourseModal';
import useDisclosure from 'hooks/useDisclosure';
import AdminLayout from 'layouts/AdminLayout';
import supabase from 'libs/supabase';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import CourseTable from './CourseTable';

const AdminHomePage: FC = () => {
    const addController = useDisclosure();
    const { data, error } = useSWR(
        'course',
        async () => {
            let { data, error: err } = await supabase.from('Course').select('*,Register(*)');
            if (err) throw new Error(err.message);
            return data;
        },
        { onError: (err) => toast.error(err.message) }
    );
    return (
        <div className="container mx-auto px-3 mt-4">
            <div>
                <div className="flex justify-end">
                    <Button onClick={addController.onOpen}>Thêm lớp học</Button>
                </div>
                <CourseTable courses={data} isLoading={!error && !data} />
                <CourseModal isOpen={addController.isOpen} onClose={addController.onClose} />
            </div>
        </div>
    );
};

export default AdminHomePage;
AdminHomePage.Layout = AdminLayout;
AdminHomePage.Title = 'Lớp học';
