import Attorneys from '@/components/Attorneys';
import Contact from '@/components/Contact';
import Countries from '@/components/Countries';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className='min-h-screen'>
			<Hero />
			<Stats />
			<Countries />
			<Services />
			<Attorneys />
			<Contact />

			{/* Footer */}
			<footer className='bg-primary/95 py-8 border-t border-primary-foreground/10'>
				<div className='container mx-auto px-4 text-center'>
					<p className='text-primary-foreground/70 text-sm'>
						© 2024 Global Law Firm. All rights reserved. | Serving clients
						across seven countries
					</p>
				</div>
			</footer>
		</div>
	);
}
