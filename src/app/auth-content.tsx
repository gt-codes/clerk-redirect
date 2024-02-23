'use client';

import { SignIn } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export default function AuthContent() {
	const pathname = usePathname();
	return <SignIn redirectUrl={pathname} />;
}
