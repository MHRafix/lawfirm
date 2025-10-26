import Navigation from '@/components/Navigation';
import WorldMap from '@/components/WorldMap';
import ServiceCard from '@/components/ServiceCard';
import LawyerCard from '@/components/LawyerCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Scale, 
  Building2, 
  Users, 
  FileText, 
  Shield, 
  Briefcase,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';
import chairmanImage from '@/assets/chairman.jpg';
import directorImage from '@/assets/director.jpg';

const Index = () => {
  const services = [
    {
      icon: Scale,
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses, including mergers, acquisitions, and corporate governance.'
    },
    {
      icon: Building2,
      title: 'Real Estate Law',
      description: 'Expert guidance on property transactions, leasing, and real estate development projects.'
    },
    {
      icon: FileText,
      title: 'Contract Law',
      description: 'Drafting, reviewing, and negotiating contracts to protect your business interests.'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protection and enforcement of patents, trademarks, copyrights, and trade secrets.'
    },
    {
      icon: Briefcase,
      title: 'Employment Law',
      description: 'Comprehensive employment and labor law services for employers and employees.'
    },
    {
      icon: TrendingUp,
      title: 'Tax Law',
      description: 'Strategic tax planning and compliance services for individuals and corporations.'
    }
  ];

  const lawyers = [
    {
      name: 'Michael Chen',
      position: 'Senior Partner',
      specialization: 'Corporate Law',
      location: 'Singapore',
      email: 'michael.chen@globallegal.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
    },
    {
      name: 'Sarah Williams',
      position: 'Partner',
      specialization: 'Intellectual Property',
      location: 'United States',
      email: 'sarah.williams@globallegal.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Senior Associate',
      specialization: 'Tax Law',
      location: 'India',
      email: 'rajesh.kumar@globallegal.com',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop'
    },
    {
      name: 'Emma Thompson',
      position: 'Associate',
      specialization: 'Employment Law',
      location: 'United Kingdom',
      email: 'emma.thompson@globallegal.com',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Chairman */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 flex flex-col items-center justify-center border border-border">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg mb-6">
                  <img 
                    src={chairmanImage} 
                    alt="Chairman" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">John Mitchell</h3>
                <p className="text-accent font-semibold mb-2">Chairman</p>
                <p className="text-center text-muted-foreground text-sm">
                  Leading with 35+ years of legal excellence across international jurisdictions.
                </p>
              </div>
            </div>

            {/* Map Center */}
            <div className="lg:col-span-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-full min-h-[500px] rounded-lg overflow-hidden border border-border shadow-2xl">
                <WorldMap />
              </div>
            </div>

            {/* Director */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 flex flex-col items-center justify-center border border-border">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg mb-6">
                  <img 
                    src={directorImage} 
                    alt="Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Lisa Anderson</h3>
                <p className="text-accent font-semibold mb-2">Managing Director</p>
                <p className="text-center text-muted-foreground text-sm">
                  Driving innovation and excellence in global legal services.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Global Legal Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Providing world-class legal services across 10+ countries with a team of expert attorneys dedicated to your success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/5">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: '10+', label: 'Countries' },
              { icon: Users, value: '150+', label: 'Lawyers' },
              { icon: Award, value: '500+', label: 'Cases Won' },
              { icon: Building2, value: '25+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Global Legal</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Global Legal is an international law firm with a presence in major business centers across the globe. 
            With over 25 years of experience, we provide comprehensive legal solutions to individuals, businesses, 
            and governments. Our team of expert attorneys combines deep local knowledge with international expertise 
            to deliver exceptional results for our clients.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We pride ourselves on our commitment to excellence, integrity, and client satisfaction. Our global network 
            enables us to provide seamless legal services across borders, ensuring your interests are protected wherever 
            you do business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to meet your unique needs across various practice areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lawyers Section */}
      <section id="lawyers" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Legal Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our distinguished team of legal professionals dedicated to achieving the best outcomes for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lawyers.map((lawyer, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <LawyerCard {...lawyer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-primary-foreground/80">
              Have a legal question? Our team is ready to help you navigate complex legal matters.
            </p>
          </div>
          <form className="space-y-6 bg-background/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Your Name" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Input 
                placeholder="Your Email" 
                type="email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <Input 
              placeholder="Subject" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Textarea 
              placeholder="Your Message" 
              rows={6}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary/5 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Global Legal</h3>
              <p className="text-sm text-muted-foreground">
                International law firm providing excellence in legal services worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#lawyers" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@globallegal.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>24/7 Emergency Line</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Global Legal International Law Firm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
