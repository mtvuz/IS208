import LoadingIcon from 'components/LoadingIcon';
import React, { FC } from 'react';
import { definitions } from 'types/supabase';
import CourseRow from './CourseRow';

const CourseTable: FC<CourseTableProps> = ({ courses, isLoading }) => {
    return (
        <div className="flex flex-col mt-2">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tên
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Thứ
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Thời gian
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Sĩ số
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={4}>
                                            <div className="flex justify-center py-3">
                                                <LoadingIcon className="text-gray-600" />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    courses?.map((course) => <CourseRow course={course} key={course.id} />)
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTable;

// component props
type CourseTableProps = {
    courses?: definitions['Course'][] | null;
    isLoading?: boolean;
};
