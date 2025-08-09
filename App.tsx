import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import SchemaMarkup from './components/SchemaMarkup.tsx';

const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const ServicesHubPage = lazy(() => import('./pages/ServicesHubPage.tsx'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage.tsx'));
const LocationsHubPage = lazy(() => import('./pages/LocationsHubPage.tsx'));
const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-blue-500"></div>
    </div>
);

const App: React.FC = () => {
    return (
        <HashRouter>
            <SchemaMarkup />
            <Header />
            <main>
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesHubPage />} />
                        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                        <Route path="/locations" element={<LocationsHubPage />} />
                        <Route path="/locations/:locationId" element={<LocationDetailPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <Analytics />
        </HashRouter>
    );
};

export default App;