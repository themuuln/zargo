'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/initSupabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Initialize the Supabase client

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) throw error;
			// Redirect to dashboard or home page after successful login
			router.push('/dashboard');
		} catch (error: any) {
			setError(error.message);
		}
	};

	return (
		<div className='flex items-center justify-center py-24'>
			<div className='w-full max-w-md'>
				<form
					onSubmit={handleSubmit}
					className='px-8 pt-6 pb-8 mb-4 rounded shadow-md'
				>
					<h2 className='mb-6 text-2xl font-bold text-center'>Нэвтрэх</h2>
					{error && <p className='mb-4 text-xs italic text-red-500'>{error}</p>}
					<div className='mb-4'>
						<label className='block mb-2 text-sm font-bold' htmlFor='email'>
							Имэйл
						</label>
						<Input
							id='email'
							type='email'
							placeholder='themuuln0@gmail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='mb-6'>
						<label className='block mb-2 text-sm font-bold' htmlFor='password'>
							Нууц үг
						</label>
						<Input
							id='password'
							type='password'
							placeholder='*********'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className='flex items-center justify-between'>
						<Button type='submit'>Нэвтрэх</Button>
						<Link href={'/register'}>
							<Button variant={'link'}>Бүртгэл хэрэгтэй юу?</Button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
