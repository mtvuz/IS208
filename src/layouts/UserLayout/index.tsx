import Header from './Header';
import { useUser } from 'contexts/UserContext';
import { isBrowser } from 'libs/utils';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren, useEffect } from 'react';

const UserLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (isBrowser && !isLoading && !user) router.push('/sign-in');
    }, [user, isLoading]);

    if (!user) return <></>;
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default UserLayout;
