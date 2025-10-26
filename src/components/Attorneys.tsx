import attorney1 from '@/assets/attorney-1.jpg';
import attorney2 from '@/assets/attorney-2.jpg';
import attorney3 from '@/assets/attorney-3.jpg';
import attorney4 from '@/assets/attorney-4.jpg';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const attorneys = [
	{
		name: 'Arjun Patel',
		specialty: 'Corporate & Commercial Law',
		image: attorney1,
		social: {
			linkedin: '#',
			twitter: '#',
			email: 'arjun.patel@lawfirm.com',
		},
	},
	{
		name: 'Mei Chen',
		specialty: 'International Trade Law',
		image: attorney2,
		social: {
			linkedin: '#',
			twitter: '#',
			email: 'mei.chen@lawfirm.com',
		},
	},
	{
		name: 'Marcus Williams',
		specialty: 'Real Estate & Property Law',
		image: attorney3,
		social: {
			linkedin: '#',
			twitter: '#',
			email: 'marcus.williams@lawfirm.com',
		},
	},
	{
		name: 'Layla Hassan',
		specialty: 'Intellectual Property Rights',
		image: attorney4,
		social: {
			linkedin: '#',
			twitter: '#',
			email: 'layla.hassan@lawfirm.com',
		},
	},
];

const Attorneys = () => {
	return (
		<section className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
						Our Expert Attorneys
					</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Meet our team of distinguished legal professionals
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
					{attorneys.map((attorney, index) => (
						<div
							key={index}
							className='group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up border border-border'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className='relative overflow-hidden'>
								<img
									src={attorney.image}
									alt={attorney.name}
									className='w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity' />

								{/* Social icons overlay */}
								<div className='absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
									<div className='flex justify-center gap-3'>
										<a
											href={attorney.social.linkedin}
											className='w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors'
											aria-label='LinkedIn'
										>
											<Linkedin className='w-5 h-5 text-accent-foreground' />
										</a>
										<a
											href={attorney.social.twitter}
											className='w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors'
											aria-label='Twitter'
										>
											<Twitter className='w-5 h-5 text-accent-foreground' />
										</a>
										<a
											href={`mailto:${attorney.social.email}`}
											className='w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors'
											aria-label='Email'
										>
											<Mail className='w-5 h-5 text-accent-foreground' />
										</a>
									</div>
								</div>
							</div>

							<div className='p-6'>
								<h3 className='text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors'>
									{attorney.name}
								</h3>
								<p className='text-muted-foreground text-sm'>
									{attorney.specialty}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Attorneys;
