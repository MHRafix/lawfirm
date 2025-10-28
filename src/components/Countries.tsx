import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Countries = () => {
	return (
		<section className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
						Global Presence
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Strategic offices across continents to serve you better
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto'>
					{services.map((service, index) => (
						<Card
							key={index}
							className='py-0 flex flex-col h-full overflow-hidden rounded-xl shadow-lg text-primary cursor-pointer transition-all hover:shadow-xl'
						>
							<div className='relative'>
								<img
									src={service.image}
									alt={`${service.country} Legal Aid`}
									className='w-full h-48 object-cover opacity-90'
								/>
								<div className='font-bold absolute bottom-3 left-3 bg-primary px-4 py-1 rounded-full text-sm shadow-md text-white'>
									{service.country}
								</div>
							</div>
							<CardContent className='flex flex-col flex-grow px-4 pb-4 space-y-4'>
								<h2 className='text-xl font-bold tracking-tight'>
									Legal Aid Services in {service.country}
								</h2>
								<ul className='space-y-3 flex-grow'>
									{service.points.map((point, i) => (
										<li key={i} className='flex items-center gap-3'>
											<CheckCircle className='text-teal-500 w-5 h-5' />
											{point}
										</li>
									))}
								</ul>
								<div className='mt-auto'>
									<Button className='py-3 w-full flex items-center justify-center gap-2 bg-primary cursor-pointer font-semibold rounded-xl shadow-md transition-all text-lg text-white'>
										Learn More
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Countries;

const services = [
	{
		country: 'United States',
		image:
			'https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxlZ2FsJTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
		points: [
			'Expert legal advisors',
			'Free consultation',
			'Nationwide coverage',
		],
	},
	{
		country: 'United Kingdom',
		image:
			'https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxlZ2FsJTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
		points: [
			'Qualified solicitors',
			'Affordable assistance',
			'Fast legal solutions',
		],
	},
	{
		country: 'Canada',
		image:
			'https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxlZ2FsJTIwYWlkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
		points: [
			'Bilingual legal support',
			'Trusted professionals',
			'Accessible nationwide',
		],
	},
	{
		country: 'Australia',
		image:
			'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
		points: [
			'Community legal services',
			'24/7 support',
			'Expert lawyers network',
		],
	},
];
