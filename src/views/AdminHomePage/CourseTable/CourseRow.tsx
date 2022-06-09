import CourseModal from 'components/modals/CourseModal';
import DeleteCourseConfirmModal from 'components/modals/DeleteCourseConfirmModal';
import useDisclosure from 'hooks/useDisclosure';
import React, { FC } from 'react';
import { definitions } from 'types/supabase';

const CourseRow: FC<CourseRowProps> = ({ course }) => {
    const editController = useDisclosure();
    const deleteController = useDisclosure();

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{course.dayOfWeek}</td>
            <td className="px-6 py-4 whitespace-nowrap">{course.time}</td>
            <td className="px-6 py-4 whitespace-nowrap">{course.Register?.length || 0}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900" onClick={editController.onOpen}>
                    Edit
                </button>
                <button className="text-red-600 hover:text-red-700 ml-3" onClick={deleteController.onOpen}>
                    Delete
                </button>
            </td>
            <CourseModal isOpen={editController.isOpen} onClose={editController.onClose} course={course} />
            <DeleteCourseConfirmModal isOpen={deleteController.isOpen} onClose={deleteController.onClose} course={course} />
        </tr>
    );
};
export default CourseRow;

type CourseRowProps = {
    course: any;
};
