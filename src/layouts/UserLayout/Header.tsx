import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import NextLink from 'components/NextLink';
import { useUser } from 'contexts/UserContext';
import supabase from 'libs/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Header = () => {
    const router = useRouter();
    const { user } = useUser();
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-3">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-stretch justify-start">
                        <div className="block">
                            <div className="flex space-x-4">
                                <Link href="/">
                                    <a
                                        className={clsx(
                                            { 'bg-gray-900': router.pathname == '/' },
                                            'text-white px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current="page"
                                    >
                                        Trang chủ
                                    </a>
                                </Link>
                                <Link href="/registed">
                                    <a
                                        className={clsx(
                                            { 'bg-gray-900': router.pathname == '/registed' },
                                            'text-white px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current="page"
                                    >
                                        Đã đăng ký
                                    </a>
                                </Link>
                                {!!user && (
                                    <Link href="/admin">
                                        <a
                                            className={clsx(
                                                { 'bg-gray-900': router.pathname == '/admin' },
                                                'text-white px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current="page"
                                        >
                                            Dashboard
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    {user && (
                        <div className="ml-3">
                            <p className="text-white">{user.email}</p>
                        </div>
                    )}
                    <div className="ml-3 relative">
                        <div>
                            {user ? (
                                <Menu as="div" className="relative text-left">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <Image src="/user.png" width={36} height={36} alt="user" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NextLink
                                                            href="/info"
                                                            className={`${
                                                                active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                        >
                                                            Thông tin
                                                        </NextLink>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${
                                                                active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                            onClick={() => {
                                                                supabase.auth.signOut();
                                                            }}
                                                        >
                                                            Đăng xuất
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            ) : (
                                <Link href="/signin">
                                    <a
                                        className={clsx(
                                            { 'bg-gray-900': router.pathname == '/signin' },
                                            'text-white px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current="page"
                                    >
                                        Sign In
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
