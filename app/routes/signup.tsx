import React, { useState } from "react";
import { signup } from "../lib/api";

export default function PaginaNovoCadastro() {
  const [form, setForm] = useState({
    nome_da_empresa: "",
    nome_do_responsavel: "",
    cnpj: "",
    celular: "",
    email: "",
    senha: "",
    confirmar_senha: "",
    id_planos_painel: "",
    id_tipo_de_mensalidade: "",
    valor_da_mensalidade: "",
  });
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.senha !== form.confirmar_senha) {
      alert("Senhas não coincidem");
      return;
    }
    if (!accepted) {
      alert("É necessário aceitar os termos");
      return;
    }

    setLoading(true);
    try {
      const res = await signup(form as any);
      if (res.sucesso) {
        alert(res.mensagem || "Cadastro realizado com sucesso");
        window.location.href = "/";
      } else {
        alert(res.mensagem || "Falha ao cadastrar");
      }
    } catch (err: any) {
      alert(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-8">
          <h2 className="text-2xl font-semibold">Experimente grátis por 10 dias!</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Nome da empresa</label>
              <input name="nome_da_empresa" value={form.nome_da_empresa} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Seu nome</label>
              <input name="nome_do_responsavel" value={form.nome_do_responsavel} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">CNPJ</label>
                <input name="cnpj" value={form.cnpj} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Celular</label>
                <input name="celular" value={form.celular} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Seu e-mail</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Senha</label>
                <input name="senha" value={form.senha} onChange={handleChange} type="password" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirmar senha</label>
                <input name="confirmar_senha" value={form.confirmar_senha} onChange={handleChange} type="password" className="mt-1 w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input id="terms" type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
              <label htmlFor="terms" className="text-sm">Li e concordo com os termos de uso</label>
            </div>

            <button type="submit" className="w-full h-12 bg-blue-700 text-white rounded" disabled={loading}>
              {loading ? "Aguarde..." : "Comece Agora"}
            </button>

            <div className="text-center mt-3">
              <a href="/" className="text-sm text-blue-600">Já tem uma conta? Acessar o sistema</a>
            </div>
          </form>
        </div>

        <div className="bg-[#144272] rounded p-8 flex flex-col justify-center text-white">
          <h3 className="text-3xl font-semibold">Sua Gestão pode ser simples como um Click!</h3>
          <ul className="mt-4 space-y-2">
            <li>• Não é preciso cadastrar o cartão de crédito.</li>
            <li>• Acesso liberado a todos os módulos</li>
            <li>• Cancele a qualquer momento.</li>
          </ul>
          <div className="mt-6">
            <img src="https://gestaoclick.com.br/wp-content/uploads/gestao-simples-como-click-gck.webp" alt="Promo" className="max-h-[300px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
