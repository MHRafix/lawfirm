import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
	return (
		<section className='py-20 bg-primary relative overflow-hidden'>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary' />
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-16 animate-fade-in'>
					<h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-4'>
						Get In Touch
					</h2>
					<p className='text-primary-foreground/90 text-lg max-w-2xl mx-auto'>
						Let's discuss how we can help with your legal needs
					</p>
				</div>

				<div className='lg:flex justify-between items-start gap-12 mx-auto'>
					{/* Contact Information */}
					<div className='w-12/12 lg:w-5/12 space-y-8 animate-fade-up'>
						<div className='bg-card/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10'>
							<h3 className='text-2xl font-bold text-accent mb-6'>
								Contact Information
							</h3>

							<div className='space-y-6'>
								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0'>
										<Phone className='w-6 h-6 text-accent' />
									</div>
									<div>
										<h4 className='text-primary-foreground font-semibold mb-1'>
											Phone
										</h4>
										<p className='text-primary-foreground/80'>
											+880 1234-567890
										</p>
										<p className='text-primary-foreground/80'>
											+1 (555) 123-4567
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0'>
										<Mail className='w-6 h-6 text-accent' />
									</div>
									<div>
										<h4 className='text-primary-foreground font-semibold mb-1'>
											Email
										</h4>
										<p className='text-primary-foreground/80'>
											info@lawfirm.com
										</p>
										<p className='text-primary-foreground/80'>
											contact@lawfirm.com
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0'>
										<MapPin className='w-6 h-6 text-accent' />
									</div>
									<div>
										<h4 className='text-primary-foreground font-semibold mb-1'>
											Headquarters
										</h4>
										<p className='text-primary-foreground/80'>
											123 Legal Avenue
											<br />
											Dhaka 1000, Bangladesh
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='bg-card/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10'>
							<h3 className='text-2xl font-bold text-accent mb-4'>
								Office Hours
							</h3>
							<div className='space-y-2 text-primary-foreground/80'>
								<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
								<p>Saturday: 10:00 AM - 4:00 PM</p>
								<p>Sunday: Closed</p>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className='w-12/12 mt-8 lg:mt-0 lg:w-7/12 bg-card rounded-xl p-8 shadow-2xl animate-fade-up'
						style={{ animationDelay: '0.2s' }}
					>
						<h3 className='text-2xl font-bold text-foreground mb-6'>
							Send Us a Message
						</h3>

						<form className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='firstName'
										className='block text-sm font-medium text-foreground mb-2'
									>
										First Name
									</label>
									<Input id='firstName' placeholder='John' className='w-full' />
								</div>
								<div>
									<label
										htmlFor='lastName'
										className='block text-sm font-medium text-foreground mb-2'
									>
										Last Name
									</label>
									<Input id='lastName' placeholder='Doe' className='w-full' />
								</div>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-foreground mb-2'
								>
									Email
								</label>
								<Input
									id='email'
									type='email'
									placeholder='john.doe@example.com'
									className='w-full'
								/>
							</div>

							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-foreground mb-2'
								>
									Phone Number
								</label>
								<Input
									id='phone'
									type='tel'
									placeholder='+1 (555) 123-4567'
									className='w-full'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-foreground mb-2'
								>
									Message
								</label>
								<Textarea
									id='message'
									placeholder='Tell us about your legal needs...'
									rows={5}
									className='w-full'
								/>
							</div>

							<Button
								type='submit'
								className='w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6 text-lg'
							>
								Submit Inquiry
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
