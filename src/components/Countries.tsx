import { MapPin } from 'lucide-react';

const countries = [
	{
		name: 'United States',
		flag: '🇺🇸',
		description:
			'Comprehensive corporate and commercial legal services across all 50 states.',
	},
	{
		name: 'United Kingdom',
		flag: '🇬🇧',
		description:
			'Expert guidance in European business law and international trade regulations.',
	},
	{
		name: 'Singapore',
		flag: '🇸🇬',
		description:
			'Leading practice in Asian Pacific commercial law and maritime legal services.',
	},
	{
		name: 'Malaysia',
		flag: '🇲🇾',
		description:
			'Specialized in Southeast Asian investment law and corporate transactions.',
	},
	{
		name: 'Vietnam',
		flag: '🇻🇳',
		description:
			'Growing expertise in foreign investment and intellectual property rights.',
	},
	{
		name: 'India',
		flag: '🇮🇳',
		description:
			'Extensive knowledge in Indian corporate law and cross-border transactions.',
	},
	{
		name: 'Bangladesh',
		flag: '🇧🇩',
		description:
			'Flagship office with comprehensive legal services and deep local expertise.',
	},
];

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

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
					{countries.map((country, index) => (
						<div
							key={country.name}
							className={`group relative bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up border border-border ${
								country.name === 'Bangladesh'
									? 'lg:col-span-2 xl:col-span-1'
									: ''
							}`}
							style={{ animationDelay: `${index * 0.05}s` }}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

							<div className='relative'>
								<div className='flex items-start justify-between mb-4'>
									<div className='w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform'>
										{country.flag}
									</div>
									<MapPin className='w-5 h-5 text-accent' />
								</div>

								<h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors'>
									{country.name}
								</h3>

								<p className='text-muted-foreground text-sm leading-relaxed'>
									{country.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Countries;
