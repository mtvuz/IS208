import { FC, Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import { Dialog, Transition } from '@headlessui/react';
import Button from 'components/Button';
import Input from 'components/Input';
import supabase from 'libs/supabase';
import { toast } from 'react-toastify';

const CourseModal: FC<CourseModalProps> = ({ isOpen, onClose, course }) => {
    const { register, handleSubmit, formState, reset } = useForm({ defaultValues: course });
    const { mutate } = useSWRConfig();

    const onSubmit = async (values: any) => {
        try {
            if (course) {
                const { error } = await supabase
                    .from('Course')
                    .update([
                        {
                            name: values.name,
                            dayOfWeek: values.dayOfWeek,
                            time: values.time,
                        },
                    ])
                    .eq('id', course.id);

                if (error) return toast.error(error.message);

                onClose();
                mutate('course');
                toast.success('Cập nhật lớp học thành công!');
            } else {
                const { error } = await supabase.from('Course').insert([
                    {
                        name: values.name,
                        dayOfWeek: values.dayOfWeek,
                        time: values.time,
                    },
                ]);
                if (error) return toast.error(error.message);

                onClose();
                mutate('course');
                toast.success('Tạo mới lớp học thành công!');
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        if (isOpen) {
            reset({
                ...course,
            });
        }
    }, [isOpen]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
                <div className="min-h-screen px-4 text-center ">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-50" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                {course ? 'Thông tin lớp học' : 'Thêm lớp học'}
                            </Dialog.Title>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-2">
                                    <Input label="Tên" {...register('name', { required: true, minLength: 2 })} />
                                </div>
                                <div className="mt-2">
                                    <Input
                                        label="Ngày trong tuần"
                                        type="number"
                                        {...register('dayOfWeek', { required: true, min: 1, max: 7 })}
                                    />
                                </div>
                                <div className="mt-2">
                                    <Input label="Thời gian" {...register('time', { required: true, minLength: 2 })} />
                                </div>

                                <div className="mt-4 flex justify-end ">
                                    <Button variant="secondary" onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="success" className="ml-2" type="submit" isLoading={formState.isSubmitting}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CourseModal;

// component props
type CourseModalProps = {
    isOpen: boolean;
    onClose: () => any;
    course?: any;
};
