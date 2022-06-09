import CourseModal from 'components/modals/CourseModal';
import DeleteCourseConfirmModal from 'components/modals/DeleteCourseConfirmModal';
import CancelRegisterConfirmModal from 'components/modals/CancelRegisterConfirmModal';
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
                    <button className="text-red-600 hover:text-red-700" onClick={editController.onOpen}>
                        Hủy đăng ký
                    </button>
                </td>
            </tr>
            {/* <CourseModal isOpen={editController.isOpen} onClose={editController.onClose} course={course} /> */}
            <CancelRegisterConfirmModal isOpen={editController.isOpen} onClose={editController.onClose} course={course} />
        </>
    );
};
export default CourseRow;

type CourseRowProps = {
    course: any;
};
