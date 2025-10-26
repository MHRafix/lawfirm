import HomeSkeleton from '@/components/common/GlobalSkeleton/HomeSkeleton';
import { initFacebookPixel, trackPageView } from '@/lib/fbPixel';
import ScrollToTop from '@/utils/ScrollToTop';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useEffect } from 'react';
import 'react-medium-image-zoom/dist/styles.css';

export const Route = createFileRoute('/_app')({
	// This component shows while beforeLoad is running
	pendingComponent: () => <HomeSkeleton />,
	// This component shows after beforeLoad is done
	component: () => {
		useEffect(() => {
			initFacebookPixel(
				import.meta.env.VITE_APP_PIXEL_ID || '1104740558048901'
			); // Replace with your actual ID
			trackPageView(); // Track first page load
		}, []);

		return (
			<div>
				<ScrollToTop />
				<Outlet />
			</div>
		);
	},
});
