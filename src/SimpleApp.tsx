import React, { useState } from 'react';
import SimpleRegistration from './src/components/SimpleRegistration';
import SimpleAdmin from './src/components/SimpleAdmin';

const SimpleApp: React.FC = () => {
    const [currentView, setCurrentView] = useState<'registration' | 'admin'>('registration');

    return (
        <div className="min-h-screen">
            {/* Navegação simples */}
            <div className="fixed top-0 right-0 z-50 p-4">
                <button
                    onClick={() => setCurrentView(currentView === 'registration' ? 'admin' : 'registration')}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm font-medium shadow-lg"
                >
                    {currentView === 'registration' ? '🔒 Admin' : '📝 Inscrição'}
                </button>
            </div>

            {/* Conteúdo */}
            {currentView === 'registration' ? (
                <SimpleRegistration />
            ) : (
                <SimpleAdmin onBack={() => setCurrentView('registration')} />
            )}
        </div>
    );
};

export default SimpleApp;
