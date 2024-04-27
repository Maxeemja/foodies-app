import Link from 'next/link';
import React from 'react';

export default function Page() {
	return (
		<div>
			<span>Share</span> <br /> <Link href='/meals'>Go back</Link>
		</div>
	);
}
