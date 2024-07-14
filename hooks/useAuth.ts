'use client';

import { supabase } from '@/lib/initSupabase';
import { useEffect, useState } from 'react';

type Auth = {
	user: {
		id: string;
		role: 'authenticated';
	};
	loading: any;
};

const useAuth = (): Auth => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState<any>(true);

	useEffect(() => {
		const session: any = supabase.auth.getSession();
		setUser(session?.user ?? null);
		setLoading(false);

		const { data: listener } = supabase.auth.onAuthStateChange(
			async (event: any, session: any) => {
				setUser(session?.user ?? null);
				setLoading(false);
			},
		);

		// return () => {
		//   listener?.unsubscribe();
		// };
	}, []);

	return { user, loading };
};

export default useAuth;
