import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Link href='/user/123'>Go to Dynamic User</Link>
		</div>
	);
}
