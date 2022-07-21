import { ReactNode } from 'react';
import { iRouterItem } from '../interfaces/iRouterItem';
import { Footer } from './footer';
import { Header } from './header';

export function Layout({
    children,
    menuOptions,
}: {
    children: ReactNode;
    menuOptions: Array<iRouterItem>;
}) {
    const template = (
        <>
            <Header menuOptions={menuOptions}/>
            <main>{children}</main>
            <Footer menuOptions={menuOptions}/>
        </>
    );
    return template;
}