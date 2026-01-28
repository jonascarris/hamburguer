import React, { useState, useEffect } from 'react';

// Mock Data incase Firebase is empty
const MOCK_ATTENDEES = [
    { id: 1, name: 'João Silva', cell: 'Águias', leader: 'Pr. Carlos', status: 'approved', amount: 30 },
    { id: 2, name: 'Maria Oliveira', cell: 'Leões', leader: 'Pra. Ana', status: 'pending', amount: 30 },
];

const AdminDashboard: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [attendees, setAttendees] = useState(MOCK_ATTENDEES);
    const [coupons, setCoupons] = useState([{ code: 'LARANJA10', discount: 10 }]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'jonascarris@gmail.com' && password === 'abcd,1234') {
            setIsAuthenticated(true);
        } else {
            alert('Credenciais inválidas');
        }
    };

    const totalRevenue = attendees
        .filter(a => a.status === 'approved')
        .reduce((acc, curr) => acc + curr.amount, 0);

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
                <button
                    onClick={onNavigate}
                    className="absolute top-4 left-4 text-gray-600 hover:text-orange-600 flex items-center gap-2"
                >
                    &larr; Voltar ao Site
                </button>
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Admin Login</h2>
                    <input
                        className="w-full mb-4 p-2 border rounded"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="w-full mb-6 p-2 border rounded"
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700">Entrar</button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <button onClick={onNavigate} className="text-gray-500 hover:text-orange-600 font-medium">Site Principal</button>
                        <span className="text-gray-300">|</span>
                        <h1 className="text-3xl font-bold text-gray-800">Painel Administrativo</h1>
                    </div>
                    <button onClick={() => setIsAuthenticated(false)} className="text-red-500 hover:text-red-700">Sair</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <h3 className="text-gray-500 text-sm uppercase">Total Arrecadado</h3>
                        <p className="text-3xl font-bold text-gray-800">R$ {totalRevenue.toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <h3 className="text-gray-500 text-sm uppercase">Inscritos Pagos</h3>
                        <p className="text-3xl font-bold text-gray-800">{attendees.filter(a => a.status === 'approved').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
                        <h3 className="text-gray-500 text-sm uppercase">Pendentes</h3>
                        <p className="text-3xl font-bold text-gray-800">{attendees.filter(a => a.status === 'pending').length}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800">Inscritos</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="p-4">Nome</th>
                                    <th className="p-4">Célula</th>
                                    <th className="p-4">Líder</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Valor</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {attendees.map((attendee) => (
                                    <tr key={attendee.id}>
                                        <td className="p-4 font-medium">{attendee.name}</td>
                                        <td className="p-4">{attendee.cell}</td>
                                        <td className="p-4">{attendee.leader}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${attendee.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {attendee.status === 'approved' ? 'Pago' : 'Pendente'}
                                            </span>
                                        </td>
                                        <td className="p-4">R$ {attendee.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Gerenciar Cupons</h2>
                    <div className="space-y-4">
                        {coupons.map((c, i) => (
                            <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                <span className="font-mono font-bold">{c.code}</span>
                                <span className="text-green-600">- R$ {c.discount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
