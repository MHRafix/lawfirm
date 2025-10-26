import { Building, FileText, Globe, Scale, Shield, Users } from 'lucide-react';

const services = [
	{
		icon: Scale,
		title: 'Corporate Law',
		description:
			'Comprehensive legal advisory for business operations, mergers, acquisitions, and corporate governance.',
	},
	{
		icon: Building,
		title: 'Real Estate Law',
		description:
			'Expert guidance on property transactions, leasing agreements, and real estate development projects.',
	},
	{
		icon: FileText,
		title: 'Contract Law',
		description:
			'Draft, review, and negotiate contracts to protect your interests in all business dealings.',
	},
	{
		icon: Globe,
		title: 'International Trade',
		description:
			'Navigate complex international regulations and cross-border trade agreements with confidence.',
	},
	{
		icon: Users,
		title: 'Employment Law',
		description:
			'Ensure compliance with labor laws and resolve workplace disputes effectively.',
	},
	{
		icon: Shield,
		title: 'Intellectual Property',
		description:
			'Protect your innovations, trademarks, patents, and creative works globally.',
	},
];

const Services = () => {
	return (
		<section className='py-20 bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
						Our Legal Services
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Comprehensive legal solutions tailored to your unique needs
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
					{services.map((service, index) => (
						<div
							key={index}
							className='group relative bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up border border-border hover:border-accent/50'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

							<div className='relative'>
								<div className='w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md'>
									<service.icon className='w-8 h-8 text-primary-foreground' />
								</div>

								<h3 className='text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors'>
									{service.title}
								</h3>

								<p className='text-muted-foreground leading-relaxed'>
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
