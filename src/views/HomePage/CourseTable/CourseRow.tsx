import CourseModal from 'components/modals/CourseModal';
import RegisterConfirmModal from 'components/modals/RegisterConfirmModal';
import useDisclosure from 'hooks/useDisclosure';
import React, { FC } from 'react';
import { definitions } from 'types/supabase';

const CourseRow: FC<CourseRowProps> = ({ course }) => {
    const editController = useDisclosure();

    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.dayOfWeek}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{course.Register?.length}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900" onClick={editController.onOpen}>
                        Đăng ký
                    </button>
                </td>
            </tr>
            {/* <CourseModal isOpen={editController.isOpen} onClose={editController.onClose} course={course} /> */}
            <RegisterConfirmModal isOpen={editController.isOpen} onClose={editController.onClose} course={course} />
        </>
    );
};
export default CourseRow;

type CourseRowProps = {
    course: any;
};
