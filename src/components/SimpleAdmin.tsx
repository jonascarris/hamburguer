import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Registration {
    id: string;
    name: string;
    birthDate: string;
    whatsapp: string;
    cellName: string;
    status: string;
    createdAt: string;
}

const SimpleAdmin: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showRefundModal, setShowRefundModal] = useState(false);
    const [registrationToDelete, setRegistrationToDelete] = useState<string | null>(null);
    const [registrationToRefund, setRegistrationToRefund] = useState<string | null>(null);

    const calculateAge = (birthDate: string) => {
        if (!birthDate) return 0;
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    const formatDateBR = (dateStr: string) => {
        if (!dateStr) return '';
        // dateStr is usually yyyy-mm-dd
        const parts = dateStr.split('-');
        if (parts.length !== 3) return dateStr;
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Login do desenvolvedor
        if (email === 'jonascarris@gmail.com' && password === 'abcd,1234') {
            setIsAuthenticated(true);
            loadRegistrations();
        }
        // Login do cliente
        else if (email === 'redelaranja@ibatitude.com.br' && password === 'redelaranja2026') {
            setIsAuthenticated(true);
            loadRegistrations();
        }
        else {
            alert('Credenciais inválidas');
        }
    };

    const loadRegistrations = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/registrations');
            setRegistrations(response.data);
        } catch (error) {
            console.error('Erro ao carregar inscrições:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteRegistration = async (id: string) => {
        setRegistrationToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!registrationToDelete) return;

        try {
            console.log('Excluindo inscrição:', registrationToDelete);
            await axios.delete(`/api/registrations/${registrationToDelete}`);
            setShowDeleteModal(false);
            setRegistrationToDelete(null);
            loadRegistrations();
        } catch (error: any) {
            console.error('Erro ao excluir inscrição:', error);
            alert(`Erro ao excluir inscrição: ${error.response?.data?.error || error.message}`);
            setShowDeleteModal(false);
        }
    };

    const handleRefund = async (id: string) => {
        setRegistrationToRefund(id);
        setShowRefundModal(true);
    };

    const confirmRefund = async () => {
        if (!registrationToRefund) return;

        setLoading(true);
        try {
            console.log('Estornando inscrição:', registrationToRefund);
            await axios.post(`/api/refund/${registrationToRefund}`);
            setShowRefundModal(false);
            setRegistrationToRefund(null);
            alert('💳 Estorno realizado com sucesso no Mercado Pago!');
            loadRegistrations();
        } catch (error: any) {
            console.error('Erro ao estornar inscrição:', error);
            alert(`Erro ao estornar: ${error.response?.data?.error || error.message}`);
            setShowRefundModal(false);
        } finally {
            setLoading(false);
        }
    };

    const handleSyncStatus = async (id: string) => {
        setLoading(true);
        try {
            console.log('Sincronizando status via Mercado Pago:', id);
            const response = await axios.post(`/api/sync/${id}`);
            alert(`Sincronização concluída! Status atual: ${response.data.status}`);
            loadRegistrations();
        } catch (error: any) {
            console.error('Erro ao sincronizar status:', error);
            alert(`Erro ao sincronizar: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleManualStatusChange = async (id: string, newStatus: string) => {
        setLoading(true);
        try {
            console.log(`Alterando status manualmente: ${id} para ${newStatus}`);
            await axios.patch(`/api/status/${id}`, { status: newStatus });
            alert(`✅ Status atualizado para ${newStatus === 'approved' ? 'PAGO' : 'PENDENTE'}`);
            loadRegistrations();
        } catch (error: any) {
            console.error('Erro ao alterar status:', error);
            alert(`Erro: ${error.response?.data?.error || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const printAll = () => {
        if (registrations.length === 0) {
            alert('Nenhuma inscrição para imprimir');
            return;
        }

        const confirmed = registrations.filter(r => r.status === 'approved');
        const pending = registrations.filter(r => r.status === 'pending');

        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Lista de Inscrições - Rodízio de Hambúrguer</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #ff6b35; text-align: center; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                    th { background-color: #ff6b35; color: white; }
                    tr:nth-child(even) { background-color: #f9f9f9; }
                    .status-approved { background-color: #d4edda; color: #155724; padding: 4px 8px; border-radius: 4px; font-weight: bold; }
                    .status-pending { background-color: #fff3cd; color: #856404; padding: 4px 8px; border-radius: 4px; font-weight: bold; }
                    .summary { display: flex; justify-content: center; gap: 30px; margin: 20px 0; }
                    .summary-item { text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px; }
                    .footer { margin-top: 30px; text-align: center; color: #666; }
                    @media print { button { display: none; } }
                </style>
            </head>
            <body>
                <h1>🍔 Rodízio de Hambúrguer - Rede Laranja</h1>
                <h2 style="text-align: center; color: #666;">Lista Completa de Inscrições</h2>
                <div class="summary">
                    <div class="summary-item">
                        <strong>Total Geral</strong><br>
                        <span style="font-size: 24px; color: #ff6b35;">${registrations.length}</span>
                    </div>
                    <div class="summary-item">
                        <strong>Confirmados</strong><br>
                        <span style="font-size: 24px; color: #28a745;">${confirmed.length}</span>
                    </div>
                    <div class="summary-item">
                        <strong>Pendentes</strong><br>
                        <span style="font-size: 24px; color: #ffc107;">${pending.length}</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                            <th>WhatsApp</th>
                            <th>Célula</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${registrations.map((reg, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${reg.name}</td>
                                <td>${reg.birthDate}</td>
                                <td>${reg.whatsapp}</td>
                                <td>${reg.cellName || '-'}</td>
                                <td>
                                    <span class="${reg.status === 'approved' ? 'status-approved' : 'status-pending'}">
                                        ${reg.status === 'approved' ? '✓ Pago' : '⏳ Pendente'}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div class="footer">
                    <p>Impresso em: ${new Date().toLocaleString('pt-BR')}</p>
                    <p>© 2026 Rede Laranja - Igreja Batista Atitude</p>
                </div>
                <div style="text-align: center; margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
                    <button onclick="window.close()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        ← Voltar
                    </button>
                    <button onclick="window.print()" style="padding: 10px 20px; background: #ff6b35; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        🖨️ Imprimir
                    </button>
                </div>
            </body>
            </html>
        `;

        printWindow.document.write(html);
        printWindow.document.close();
    };

    const totalPaid = registrations.filter(r => r.status === 'approved').length * 30;
    const totalPending = registrations.filter(r => r.status === 'pending').length * 30;

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="absolute top-4 left-4 text-gray-600 hover:text-orange-600 font-medium"
                    >
                        ← Voltar
                    </button>
                )}
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
                        🔒 Área Administrativa
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Senha</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700"
                        >
                            Entrar
                        </button>
                        {onBack && (
                            <button
                                type="button"
                                onClick={onBack}
                                className="w-full border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all"
                            >
                                Cancelar
                            </button>
                        )}
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        {onBack && (
                            <button
                                onClick={onBack}
                                className="text-gray-600 hover:text-orange-600 font-medium"
                            >
                                ← Site
                            </button>
                        )}
                        <h1 className="text-3xl font-bold text-gray-800">Painel Administrativo</h1>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="text-red-600 hover:text-red-700 font-medium"
                    >
                        Sair
                    </button>
                </div>

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <p className="text-gray-500 text-sm uppercase font-medium">Total Arrecadado</p>
                        <p className="text-3xl font-bold text-gray-800 mt-2">R$ {totalPaid.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            {registrations.filter(r => r.status === 'approved').length} confirmados
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
                        <p className="text-gray-500 text-sm uppercase font-medium">Pendente</p>
                        <p className="text-3xl font-bold text-gray-800 mt-2">R$ {totalPending.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            {registrations.filter(r => r.status === 'pending').length} aguardando
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <p className="text-gray-500 text-sm uppercase font-medium">Inscritos Confirmados</p>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{registrations.filter(r => r.status === 'approved').length}</p>
                        <p className="text-sm text-gray-500 mt-1">participantes pagos</p>
                    </div>
                </div>

                {/* Tabela de Inscrições */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Lista de Inscrições</h2>
                        <div className="flex gap-3">
                            <button
                                onClick={printAll}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">print</span>
                                Imprimir Lista
                            </button>
                            <button
                                onClick={loadRegistrations}
                                className="flex items-center gap-2 px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white font-medium transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">refresh</span>
                                Atualizar
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Carregando...</div>
                    ) : registrations.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">Nenhuma inscrição ainda</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">WhatsApp</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Célula</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {registrations.map((reg) => (
                                        <tr key={reg.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="font-medium text-gray-900">{reg.name}</div>
                                                <div className="text-sm text-gray-500">
                                                    {formatDateBR(reg.birthDate)} ({calculateAge(reg.birthDate)} anos)
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {reg.whatsapp}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                {reg.cellName || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${reg.status === 'approved'
                                                    ? 'bg-green-100 text-green-800'
                                                    : reg.status === 'refunded'
                                                        ? 'bg-purple-100 text-purple-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {reg.status === 'approved' ? '✓ Pago' : reg.status === 'refunded' ? '↺ Estornado' : '⏳ Pendente'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                R$ 30,00
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                                {/* Botão de Estorno (Mercado Pago) */}
                                                {reg.status === 'approved' && (
                                                    <button
                                                        onClick={() => handleRefund(reg.id)}
                                                        className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs font-medium transition-all"
                                                        title="Realizar estorno no Mercado Pago"
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>payments</span>
                                                        Estornar
                                                    </button>
                                                )}

                                                {/* Confirmação Manual (Check) - Se estiver pendente ou estornado */}
                                                {reg.status !== 'approved' && (
                                                    <button
                                                        onClick={() => handleManualStatusChange(reg.id, 'approved')}
                                                        className="p-1 bg-green-100 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                                                        title="Confirmar Pagamento MANUAL (Dinheiro/Pix)"
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span>
                                                    </button>
                                                )}

                                                {/* Reverter para Pendente (Undo) - Se estiver aprovado */}
                                                {reg.status === 'approved' && (
                                                    <button
                                                        onClick={() => handleManualStatusChange(reg.id, 'pending')}
                                                        className="p-1 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-all"
                                                        title="Marcar como NÃO PAGO (Pendente)"
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>undo</span>
                                                    </button>
                                                )}

                                                {/* Botão de Sincronizar (Mercado Pago) - Disponível para todos agora */}
                                                <button
                                                    onClick={() => handleSyncStatus(reg.id)}
                                                    className="p-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                                    title="Sincronizar status com Mercado Pago"
                                                >
                                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>sync</span>
                                                </button>

                                                {/* Botão de Exclusão */}
                                                <button
                                                    onClick={() => deleteRegistration(reg.id)}
                                                    className="p-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                                    title="Excluir da lista"
                                                >
                                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal de Confirmação de Exclusão */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-red-600 text-2xl">warning</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Confirmar Exclusão</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Tem certeza que deseja excluir esta inscrição? Esta ação não pode ser desfeita.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setRegistrationToDelete(null);
                                }}
                                className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition-all"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-all"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal de Confirmação de Estorno */}
            {showRefundModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-purple-600 text-2xl">payments</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Confirmar Estorno</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Deseja realizar o estorno desta inscrição? O dinheiro será devolvido ao cliente através do Mercado Pago e o status será atualizado.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => {
                                    setShowRefundModal(false);
                                    setRegistrationToRefund(null);
                                }}
                                className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium transition-all"
                                disabled={loading}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={confirmRefund}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-all flex items-center gap-2"
                                disabled={loading}
                            >
                                {loading ? 'Processando...' : 'Confirmar Estorno'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimpleAdmin;
