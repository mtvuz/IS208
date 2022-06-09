import Button from 'components/Button';
import { useUser } from 'contexts/UserContext';
import useDisclosure from 'hooks/useDisclosure';
import UserLayout from 'layouts/UserLayout';
import supabase from 'libs/supabase';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { definitions } from 'types/supabase';
import CourseTable from './CourseTable';

const HomePage: FC = () => {
    const addController = useDisclosure();
    const { user } = useUser();
    const { data, error } = useSWR(
        ['course', 'me'],
        async () => {
            let { data, error: err } = await supabase.from('Course').select('*,Register(*)');
            if (err) throw new Error(err.message);
            return data?.filter((course) => !course.Register.find((register: any) => register.studentId == user?.id));
        },
        { onError: (err) => toast.error(err.message) }
    );
    return (
        <div className="container mx-auto px-3 mt-4">
            <div>
                <CourseTable courses={data} isLoading={!error && !data} />
                {/* <CourseModal isOpen={addController.isOpen} onClose={addController.onClose} /> */}
            </div>
        </div>
    );
};

export default HomePage;
HomePage.Layout = UserLayout;
