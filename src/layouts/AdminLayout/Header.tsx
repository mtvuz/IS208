import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useUser } from 'contexts/UserContext';
import supabase from 'libs/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Header = () => {
    const router = useRouter();
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-3">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-stretch justify-start">
                        <div className="block">
                            <div className="flex space-x-4">
                                <Link href="/admin">
                                    <a
                                        className={clsx(
                                            { 'bg-gray-900': router.pathname == '/admin' },
                                            'text-white px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current="page"
                                    >
                                        Lớp học
                                    </a>
                                </Link>
                                <Link href="/admin/student">
                                    <a
                                        className={clsx(
                                            { 'bg-gray-900': router.pathname == '/admin/student' },
                                            'text-white px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current="page"
                                    >
                                        Học viên
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
