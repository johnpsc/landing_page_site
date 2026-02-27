import React, { useState } from "react";
// Importações hipotéticas baseadas na sua estrutura de serviços e rotas
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../essencial/provedores/usuario/usuario_provedor";
// import { useFaturas } from "../../modulos/faturas/servicos/servico_faturas";
// import { useLicencas } from "../../essencial/provedores/licencas/provedor_licencas";

export interface ModalidadePlano {
    id: string;
    nome: string;
}

export interface ModeloPlanos {
    id: string;
    nome: string;
    valordoplano: string;
    maisvendido?: string;
    descricaodoplano?: string;
    quantidadedeusuario?: string;
    modalidadedosplanos?: ModalidadePlano[];
}

export interface ModeloTipoDeMensalidade {
    id: string;
    nome: string;
    percentualdedesconto: string;
    quantmeses: string;
}

interface CardPlanosPainelProps {
    item: ModeloPlanos;
    tipodemensalidadeSelecionado?: ModeloTipoDeMensalidade | null;
    targetRef?: React.RefObject<HTMLDivElement>;
    mostrarPlanoCliente: boolean;
}

export default function CardPlanosPainel({
    item,
    tipodemensalidadeSelecionado,
    targetRef,
    mostrarPlanoCliente,
}: CardPlanosPainelProps) {
    // Mock do usuário atual (Substitua pelo seu contexto real)
    const usuario = { id: "1", idtipodemensalidade: "1", idplanospainel: "1", email: "teste@teste.com", senha: "123" };

    const [carregando, setCarregando] = useState(false);

    // Guarda de segurança: se o item não existir, não tenta renderizar e evita o erro "Cannot read properties of undefined"
    if (!item) {
        return null;
    }

    // Lógica de cálculo de valores com fallback seguro ("0" se vier vazio)
    const valorString = item.valordoplano ?? "0";
    const valor = parseFloat(valorString.replace(',', '.'));
    const percentual = parseFloat(tipodemensalidadeSelecionado?.percentualdedesconto ?? "0");

    const valorPercentual = () => {
        return (valor * percentual) / 100;
    };

    const valorCalculado = () => {
        if (percentual <= 0) {
            return valor;
        }
        return valor - valorPercentual();
    };

    const quantMeses = parseInt(tipodemensalidadeSelecionado?.quantmeses ?? "1", 10);
    const total = valorCalculado() * quantMeses;

    // Formatação de valores
    const formatarRealSemSimbolo = (num: number) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formatarReal = (num: number) => num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const valorF = formatarRealSemSimbolo(valorCalculado()).split(',');
    const valorTotalF = formatarRealSemSimbolo(total).split(',');
    const valorTotal = total.toFixed(2);

    const verificarPlanoSelecionado = () => {
        if (mostrarPlanoCliente) {
            if (usuario?.idtipodemensalidade === tipodemensalidadeSelecionado?.id) {
                if (usuario?.idplanospainel === item.id) {
                    return true;
                }
            }
        }
        return false;
    };

    const isMaisVendido = item.maisvendido === 'Sim';
    const isSelecionado = verificarPlanoSelecionado();

    const escolherPlano = async (plano: ModeloPlanos, totalValor: string) => {
        const idPlanoAtual = parseInt(usuario?.idplanospainel ?? "0", 10);
        const idPlanoSelecionado = parseInt(plano.id, 10);

        const idMensalidadeAtual = parseInt(usuario?.idtipodemensalidade ?? "0", 10);
        const idMensalidadeSelecionada = parseInt(tipodemensalidadeSelecionado?.id ?? "0", 10);

        // Validações de downgrade
        if (idPlanoSelecionado < idPlanoAtual) {
            alert("Não pode selecionar um plano inferior");
            return;
        }

        if (idMensalidadeSelecionada < idMensalidadeAtual) {
            alert("Não pode selecionar um plano inferior");
            return;
        }

        if (usuario && usuario.id !== '') {
            setCarregando(true);

            try {
                // Simulação do backend
                console.log("Fatura gerada e redirecionando para /faturas");
                setCarregando(false);
            } catch (error) {
                console.error(error);
                setCarregando(false);
            }
        } else {
            console.log("Navegando para Novo Cadastro", { idplanospainel: plano.id, idtipodemensalidade: tipodemensalidadeSelecionado?.id ?? '', valordamensalidade: totalValor });
        }
    };

    const rolarParaComparacao = () => {
        if (targetRef?.current) {
            const yOffset = -50;
            const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative pt-2 pl-2 pr-2">
            {isMaisVendido && (
                <div className="absolute top-0 -right-2.5 z-10 w-25 h-7.5 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <svg className="absolute -top-px left-1/2 transform -translate-x-1/2 text-[#B21512] w-12.5 h-12.5 z-[-1]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                        <div className="w-30 bg-[#B21512] rounded-[5px] px-2.5 py-0.5 text-white text-sm text-center transform -translate-x-2.5">
                            Mais vendido
                        </div>
                    </div>
                </div>
            )}

            <div className="h-full px-5">
                <div className={`w-75 h-262.5 rounded-[10px] border ${isSelecionado ? 'border-red-500' : 'border-gray-400'} ${isMaisVendido ? 'bg-[#091D33]' : 'bg-white'}`}>
                    <div className="p-3.75 h-full flex flex-col relative">

                        {isSelecionado && (
                            <div className="absolute -top-2.5 right-5">
                                <svg className="text-red-500 w-12.5 h-12.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}

                        <div className="flex flex-col items-center grow">
                            <h3 className={`text-[24px] font-semibold ${isMaisVendido ? 'text-[#8FBDFA]' : 'text-gray-900'}`}>
                                {item.nome ?? "Plano"}
                            </h3>

                            <div className="mt-3.75 w-full">
                                <p
                                    className={`text-center line-clamp-3 text-sm ${isMaisVendido ? 'text-[#8FBDFA]' : 'text-gray-600'}`}
                                    title={item.descricaodoplano ?? ""}
                                >
                                    {item.descricaodoplano ?? "Sem descrição disponível."}
                                </p>
                            </div>

                            {valorPercentual() > 0 ? (
                                <div className="mt-7.5[30px] relative w-full flex justify-center items-center">
                                    <svg className="absolute -top-3.75 text-[#8FBDFA] w-12.5 h-12.5 z-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7 10l5 5 5-5z" />
                                    </svg>
                                    <div className="bg-[#8FBDFA] rounded-[5px] px-2.5 py-0.5 text-gray-900 text-sm font-medium z-10 whitespace-nowrap">
                                        Economize {formatarReal(valorPercentual() * quantMeses)}
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-7.5 h-7.5"></div>
                            )}

                            <div className="flex justify-center items-end mt-3.75">
                                <span className={`text-[18px] font-semibold mb-1.5 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}>R$</span>
                                <span className={`text-[50px] font-semibold leading-[1.05] mx-1 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}>{valorF[0]}</span>
                                <span className={`text-[18px] font-semibold mb-1.5 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}>,{valorF[1]}</span>
                                <span className={`text-[18px] mb-1.5 ml-1 ${isMaisVendido ? 'text-white' : 'text-gray-600'}`}>/mês</span>
                            </div>

                            <div className="mt-3.75 w-full h-12.5">
                                <button
                                    disabled={isSelecionado}
                                    onClick={() => escolherPlano(item, valorTotal)}
                                    className={`w-full h-full rounded-[3px] text-[17px] font-medium transition-colors flex items-center justify-center
                    ${isSelecionado
                                            ? 'bg-red-500 hover:bg-red-700 text-white cursor-not-allowed'
                                            : 'bg-green-600 hover:bg-green-700 text-white'}
                  `}
                                >
                                    {carregando ? (
                                        <div className="w-3.75 h-3.75 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        isSelecionado ? 'Plano Atual' : 'Comece Agora'
                                    )}
                                </button>
                            </div>

                            <div className="mt-3.75 bg-[#DAE7FD] rounded-[10px] p-2.5 w-full">
                                <div className="flex items-center mb-1.25">
                                    <svg className="text-[#2975AB] w-4.5 h-4.5 mr-1.25" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                    <span className="text-gray-800 text-sm">{item.quantidadedeusuario ?? "0"} Usuários</span>
                                </div>
                                <div className="flex items-center mb-1.25">
                                    <svg className="text-[#2975AB] w-4.5 h-4.5 mr-1.25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    <span className="text-gray-800 text-sm">Painel Administrativo</span>
                                </div>
                                <div className="flex items-center mb-1.25">
                                    <svg className="text-[#2975AB] w-4.5 h-4.5 mr-1.25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    <span className="text-gray-800 text-sm">App Android e iOS</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="text-[#2975AB] w-4.5 h-4.5 mr-1.25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                    <span className="text-gray-800 text-sm">Espaço ilimitado</span>
                                </div>
                            </div>

                            <div className="mt-3.75 w-full flex flex-col">
                                {(item.modalidadedosplanos ?? []).map((modalidade) => (
                                    <div key={modalidade.id} className="flex items-center px-2 py-1">
                                        <svg className="text-[#2975AB] w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <span className={`ml-2.5 text-sm ${isMaisVendido ? 'text-white' : 'text-gray-800'}`}>
                                            {modalidade.nome}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="grow"></div>

                            {percentual > 0 && (
                                <div className="flex justify-center items-end mt-4">
                                    <span className={`text-[18px] font-semibold mb-1.5 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}> R$</span>
                                    <span className={`text-[50px] font-semibold leading-[1.05] mx-1 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}>{valorTotalF[0]}</span>
                                    <span className={`text-[18px] font-semibold mb-1.5 ${isMaisVendido ? 'text-white' : 'text-gray-900'}`}>,{valorTotalF[1]}</span>
                                    <span className={`text-[18px] mb-1.5 ml-1 ${isMaisVendido ? 'text-white' : 'text-gray-600'}`}>/total</span>
                                </div>
                            )}

                            <button
                                onClick={rolarParaComparacao}
                                className={`mt-2 mb-2 text-[13px] underline decoration-solid leading-[1.35] bg-transparent border-none cursor-pointer
                  ${isMaisVendido ? 'text-white decoration-white hover:text-gray-200' : 'text-[#205295] decoration-[#205295] hover:text-[#194175]'}
                `}
                            >
                                Comparar os Planos
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}