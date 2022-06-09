import { FC, PropsWithChildren } from 'react';
import Header from './Header';

const AdminLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default AdminLayout;
