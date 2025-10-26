import ceoImage from '@/assets/ceo-portrait.jpg';
import directorImage from '@/assets/director-portrait.jpg';
import { MapPin } from 'lucide-react';

const branches = [
	{ name: 'United States', x: '25%', y: '35%', size: 'base' },
	{ name: 'United Kingdom', x: '48%', y: '28%', size: 'base' },
	{ name: 'Singapore', x: '77%', y: '58%', size: 'base' },
	{ name: 'Malaysia', x: '76%', y: '60%', size: 'base' },
	{ name: 'Vietnam', x: '75%', y: '53%', size: 'base' },
	{ name: 'India', x: '70%', y: '50%', size: 'base' },
	{ name: 'Bangladesh', x: '72%', y: '48%', size: 'large' },
];

const Hero = () => {
	return (
		<section className='relative bg-primary overflow-hidden'>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary' />
			</div>

			<div className='container mx-auto px-4 py-20 relative z-10'>
				<div className='text-center mb-12 animate-fade-in'>
					<h1 className='text-5xl md:text-6xl font-bold text-primary-foreground mb-4'>
						Global Legal Excellence
					</h1>
					<p className='text-xl text-primary-foreground/90 max-w-2xl mx-auto'>
						Trusted legal expertise spanning across seven countries
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto'>
					{/* CEO Column */}
					<div className='flex flex-col items-center animate-fade-up'>
						<div className='relative group'>
							<div className='absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300' />
							<img
								src={ceoImage}
								alt='CEO'
								className='relative w-78 h-78 rounded-full object-cover border-4 border-accent shadow-2xl'
							/>
						</div>
						<h3 className='mt-6 text-2xl font-bold text-accent'>
							Mehedi H. Rafiz{' '}
						</h3>
						<p className='text-primary-foreground/80 text-sm'>
							Chief Executive Officer
						</p>
						<p className='text-primary-foreground/70 text-xs mt-2 max-w-xs text-center'>
							30+ years of international legal experience
						</p>
					</div>

					{/* World Map Column */}
					<div className='relative h-[400px] lg:h-[500px] bg-card/10 rounded-xl p-8 backdrop-blur-sm border border-primary-foreground/10 animate-scale-in'>
						<div className='relative w-full h-full'>
							{/* Simplified World Map SVG */}
							<svg viewBox='0 0 1000 500' className='w-full h-full opacity-20'>
								<path
									d='M150,100 Q200,80 250,100 L300,120 L350,100 L400,110 L450,100 L500,120 L550,110 L600,130 L650,120 L700,140 L750,130 L800,150 L850,140 L900,160 L950,150 L900,200 L850,210 L800,200 L750,220 L700,210 L650,230 L600,220 L550,240 L500,230 L450,250 L400,240 L350,260 L300,250 L250,270 L200,260 L150,280 L100,270 Z'
									fill='currentColor'
									className='text-primary-foreground'
								/>
							</svg>

							{/* Branch Markers */}
							{branches.map((branch) => (
								<div
									key={branch.name}
									className='absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer'
									style={{ left: branch.x, top: branch.y }}
								>
									{/* Pulsing rings */}
									<div className='absolute inset-0'>
										<div className='absolute inset-0 rounded-full bg-accent animate-pulse-ring' />
										<div
											className='absolute inset-0 rounded-full bg-accent animate-pulse-ring'
											style={{ animationDelay: '1s' }}
										/>
									</div>

									{/* Marker */}
									<div
										className={`relative ${
											branch.size === 'large' ? 'scale-150' : 'scale-100'
										} transition-transform group-hover:scale-125`}
									>
										<MapPin
											className={`${
												branch.size === 'large' ? 'w-8 h-8' : 'w-6 h-6'
											} text-accent drop-shadow-lg animate-pulse-slow`}
											fill='currentColor'
										/>
									</div>

									{/* Label */}
									<div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
										<div className='bg-accent text-accent-foreground px-3 py-1 rounded-lg text-xs font-semibold shadow-lg'>
											{branch.name}
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='absolute bottom-4 left-4 right-4 text-center'>
							<p className='text-primary-foreground/60 text-sm font-medium'>
								7 Strategic Locations Worldwide
							</p>
						</div>
					</div>

					{/* Director Column */}
					<div
						className='flex flex-col items-center animate-fade-up'
						style={{ animationDelay: '0.2s' }}
					>
						<div className='relative group'>
							<div className='absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300' />
							<img
								src={directorImage}
								alt='Director'
								className='relative w-78 h-78 rounded-full object-cover border-4 border-accent shadow-2xl'
							/>
						</div>
						<h3 className='mt-6 text-2xl font-bold text-accent'>
							Mehedi H. Rafiz{' '}
						</h3>
						<p className='text-primary-foreground/80 text-sm'>
							Managing Director
						</p>
						<p className='text-primary-foreground/70 text-xs mt-2 max-w-xs text-center'>
							Expert in international corporate law
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
