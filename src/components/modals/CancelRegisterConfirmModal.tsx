import { FC, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import supabase from 'libs/supabase';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
import Button from 'components/Button';
import { useUser } from 'contexts/UserContext';
import { definitions } from 'types/supabase';

const CancelRegisterConfirmModal: FC<CancelRegisterConfirmModalProps> = ({ course, isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { mutate } = useSWRConfig();
    const { user } = useUser();

    const onCancel = async () => {
        try {
            setIsLoading(true);

            const { data, error } = await supabase
                .from<definitions['Register']>('Register')
                .delete()
                .eq('studentId', user?.id || '')
                .eq('courseId', course.id);
            if (!error) {
                onClose();
                mutate(['course', 'me']);
                mutate(['course', 'registed']);
                toast.success('Hủy ký lớp học thành công!');
            } else {
                toast.error(error.message);
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

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
                        <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            className="h-6 w-6 text-red-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Hủy đăng ký lớp học
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Bạn có chắc chắn muốn hủy đăng ký lớp học này không?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Button className="sm:ml-3 sm:w-auto w-full" variant="danger" onClick={onCancel} isLoading={isLoading}>
                                    Hủy đăng ký
                                </Button>
                                <Button className="sm:ml-3 sm:w-auto w-full mt-3 sm:mt-0" variant="secondary" onClick={onClose}>
                                    Hủy
                                </Button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CancelRegisterConfirmModal;

// component props
type CancelRegisterConfirmModalProps = {
    course: any;
    isOpen: boolean;
    onClose: () => any;
};
