import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { useSafeLayoutEffect } from 'libs/utils';
import { definitions } from 'types/supabase';
import useSWR from 'swr';
import supabase from 'libs/supabase';

export interface UserSession {
    user: User | null;
    session: Session | null;
    student: definitions['Student'] | null;
    isLoading: boolean;
}

const UserContext = createContext<UserSession>({ user: null, session: null, isLoading: true, student: null });
export interface UserContextProps {
    supabaseClient: SupabaseClient;
    [propName: string]: any;
}

export const UserContextProvider = (props: UserContextProps) => {
    const { supabaseClient } = props;
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const { data, error, isLoading } = useSWR(user?.id ? 'user' : null, async () => {
        const { data, error } = await supabase.from('Student').select('*').eq('id', user?.id);
        if (error) throw new Error(error.message);
        return data[0];
    });

    useSafeLayoutEffect(() => {
        const ss = supabaseClient.auth.session();
        if (ss) {
            setSession(ss);
            setUser(ss?.user);
        }
        console.log(ss);
    }, []);

    useEffect(() => {
        const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
        });

        return () => {
            authListener?.unsubscribe();
        };
    }, []);

    const value = {
        session,
        user,
        isLoading: !error && isLoading,
        student: data || null,
    };
    return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error(`useUser must be used within a UserContextProvider.`);
    }
    return context;
};
