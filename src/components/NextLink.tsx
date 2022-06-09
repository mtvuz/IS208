/* eslint-disable react/display-name */
import Link from 'next/link';
import React, { forwardRef } from 'react';

const NextLink = forwardRef((props: any, ref) => {
    const { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest} ref={ref}>
                {children}
            </a>
        </Link>
    );
});

export default NextLink;
