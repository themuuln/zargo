'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAuth from '@/hooks/useAuth';
import { supabase } from '@/lib/initSupabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { ThemeToggler } from './ThemeToggler';

const Header = () => {
  const { user } = useAuth();
  const router = useRouter();

  const onSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className='h-20 border-b justify-center flex items-center'>
      <div className='container items-center justify-between flex'>
        <Link href={user?.role === 'authenticated' ? '/dashboard' : '/'}>
          <div className='uppercase font-bold text-lg'>Logo</div>
        </Link>
        <div className='flex flex-row space-x-4'>
          <ThemeToggler />
          {user?.role === 'authenticated' ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={''} />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    router.push('/profile');
                  }}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSignOut}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='flex space-x-4 items-center'>
              <Link href={'/login'}>
                <Button variant={'secondary'}>Нэвтрэх</Button>
              </Link>
              <Link href={'/register'}>
                <Button>Бүртгүүлэх</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
