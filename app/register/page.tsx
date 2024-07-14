'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/initSupabase';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const { error } = await supabase.auth.signUp({
				email: email,
				password: password,
			});
			if (error) throw error;
			alert('Check your email for the confirmation link!');
			router.push('/login');
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
					<h2 className='mb-6 text-2xl font-bold text-center'>Бүртгүүлэх</h2>
					{error && <p className='mb-4 text-xs italic text-red-500'>{error}</p>}
					<div className='mb-4'>
						<Label htmlFor='email'>И-Мэйл</Label>
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
						<Label htmlFor='password'>Нууц үг</Label>
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
						<Button type='submit'>Бүртгүүлэх</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
