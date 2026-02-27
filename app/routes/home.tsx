import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function PaginaHome() {
  // Lista gerada para o scroll infinito simulando o código original
  const listItems = Array.from({ length: 20 }, (_, i) => i.toString());

  return (
    <div className="w-full h-full flex flex-col">
      {/* Seção Principal Azul */}
      <section className="w-full bg-blue-700 min-h-[80vh] flex justify-center py-10 lg:py-0">
        <div className="w-[90%] lg:w-[65%] h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

          {/* Lado Esquerdo - Formulário e Textos */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <h1 className="text-white text-[40px] lg:text-[50px] font-bold leading-[1.1]">
              Gestão de projetos facilitada
            </h1>

            <p className="text-white text-[16px] mt-7.5">
              Das ideias à execução: planeje, acompanhe e execute projetos colaborativos de sucesso no Jira
            </p>

            <div className="w-full lg:w-full mt-[30px] flex flex-col">
              <label className="flex flex-col text-white font-medium mb-[2px]">
                E-mail
                <input
                  type="email"
                  placeholder="voce@hotmail.com"
                  className="mt-1 h-[40px] px-[10px] text-black bg-white border-0 rounded-[5px] focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </label>

              <p className="text-white text-[12px] mt-[5px]">
                Encontre colegas de equipe e mantenha trabalho e vida separados usando seu e-mail comercial.
              </p>

              <button className="w-full h-[40px] bg-orange-500 hover:bg-orange-600 text-black font-medium text-[17px] rounded-[5px] mt-[20px] transition-colors">
                Fazer cadastro
              </button>

              <div className="flex items-center justify-between w-full mt-[20px]">
                <div className="flex-1 h-[1px] bg-gray-400"></div>
                <span className="text-white mx-[15px] text-sm">Ou continue com</span>
                <div className="flex-1 h-[1px] bg-gray-400"></div>
              </div>

              {/* Botões Sociais */}
              <div className="flex flex-col sm:flex-row gap-[20px] mt-[20px]">
                <button className="flex-1 h-[40px] bg-white text-black rounded-[5px] flex items-center justify-center gap-[10px] hover:bg-gray-100 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-[16px] h-[16px]" />
                  <span className="text-[16px] font-medium">Google</span>
                </button>
                <button className="flex-1 h-[40px] bg-white text-black rounded-[5px] flex items-center justify-center gap-[10px] hover:bg-gray-100 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="Microsoft" className="w-[16px] h-[16px]" />
                  <span className="text-[16px] font-medium">Microsoft</span>
                </button>
              </div>

              {/* Scroll Infinito das Empresas */}
              <div className="w-full h-[35px] mt-[30px] overflow-hidden flex whitespace-nowrap mask-gradient">
                <div className="flex animate-infinite-scroll w-max">
                  {/* Renderizamos a lista duas vezes para garantir a continuidade da animação de scroll */}
                  {[...listItems, ...listItems].map((item, index) => (
                    <div key={index} className="w-[70px] h-[35px] mx-[5px] flex items-center justify-center flex-shrink-0">
                      <ShieldAlert size={30} className="text-white" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Lado Direito - Imagem Banner */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src="https://images.ctfassets.net/xjcz23wx147q/2oiMdOggDxqcAwWPBbWrOZ/4878055b6393fc21431ac68d3ffdcc36/Hero_screenshot_image_with_brand_refresh_border_treatment_2x_pt-BR.webp"
              alt="Banner"
              className="w-full max-w-[600px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* Seção Branca Inferior */}
      <section className="w-full bg-white min-h-[80vh]">
        {/* Conteúdo futuro da seção branca */}
      </section>
    </div>
  );
}