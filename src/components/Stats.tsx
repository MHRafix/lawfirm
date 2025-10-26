import { Award, Briefcase, Scale, Users } from 'lucide-react';

const stats = [
	{
		icon: Briefcase,
		value: '1,200+',
		label: 'Successful Projects',
		description: 'Cases resolved with excellence',
	},
	{
		icon: Users,
		value: '850+',
		label: 'Happy Clients',
		description: 'Trust built over decades',
	},
	{
		icon: Scale,
		value: '2,500+',
		label: 'Legal Cases',
		description: 'Handled professionally',
	},
	{
		icon: Award,
		value: '45+',
		label: 'Awards Won',
		description: 'Industry recognition',
	},
];

const Stats = () => {
	return (
		<section className='py-20 bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
						Our Track Record
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Delivering exceptional legal services with measurable results
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<div
							key={index}
							className='group relative bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up border border-border'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

							<div className='relative'>
								<div className='w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors'>
									<stat.icon className='w-8 h-8 text-accent' />
								</div>

								<div className='text-4xl font-bold text-primary mb-2'>
									{stat.value}
								</div>

								<h3 className='text-xl font-semibold text-foreground mb-2'>
									{stat.label}
								</h3>

								<p className='text-muted-foreground text-sm'>
									{stat.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
