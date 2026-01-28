import React, { useState } from 'react';
import { AdminCoupons } from './pages/AdminCoupons';
import SimpleAdmin from './components/SimpleAdmin'; // Admin simplificado
import RegistrationForm from './components/RegistrationForm'; // Import from components
import { LandingPage } from './pages/LandingPage';
import { GroupBooking } from './pages/GroupBooking';
import { EarlyBird } from './pages/EarlyBird';
import { SoldOut } from './pages/SoldOut';
import { Waitlist } from './pages/Waitlist';
import { RegistrationDetails } from './pages/RegistrationDetails';
import { Checkout } from './pages/Checkout';
import { CheckoutDiscount } from './pages/CheckoutDiscount';
import { Confirmation } from './pages/Confirmation';

enum Page {
    AdminCoupons,
    AdminDashboard,
    LandingPage,
    GroupBooking,
    EarlyBird,
    SoldOut,
    Waitlist,
    RegistrationDetails,
    Checkout,
    CheckoutDiscount,
    Confirmation,
    RegistrationNew // New page
}

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.LandingPage);

    const renderPage = () => {
        switch (currentPage) {
            case Page.AdminCoupons: return <AdminCoupons />;
            case Page.AdminDashboard: return <SimpleAdmin onBack={() => setCurrentPage(Page.LandingPage)} />;
            case Page.LandingPage: return <LandingPage onNavigateToAdmin={() => setCurrentPage(Page.AdminDashboard)} />;
            case Page.GroupBooking: return <GroupBooking />;
            case Page.EarlyBird: return <EarlyBird />;
            case Page.SoldOut: return <SoldOut />;
            case Page.Waitlist: return <Waitlist />;
            case Page.RegistrationDetails: return <RegistrationDetails />;
            case Page.Checkout: return <Checkout />;
            case Page.CheckoutDiscount: return <CheckoutDiscount />;
            case Page.Confirmation: return <Confirmation />;
            case Page.RegistrationNew: return <RegistrationForm />;
            default: return <LandingPage />;
        }
    };

    return (
        <div className="min-h-screen">
            {renderPage()}
        </div>
    );
};

export default App;