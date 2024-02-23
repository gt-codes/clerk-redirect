import AuthContent from '@/app/auth-content';

export default function DynamicPage({ params }: { params: { id: string } }) {
	return (
		<div className=''>
			<p>{params.id}</p>
			<AuthContent />
		</div>
	);
}
