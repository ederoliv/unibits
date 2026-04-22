import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Política de Privacidade - Unibits";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 px-6 max-w-[900px] mx-auto w-full min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-10 text-white tracking-tight">
        Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32e6e2] to-[#5af3ef]">Privacidade</span>
      </h1>
      
      <div className="space-y-12 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
        <section>
          <p className="mb-4">
            Esta Política de Privacidade descreve como a <strong className="text-white">Unibits</strong> trata as informações relacionadas aos seus jogos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#32e6e2]">
            <li><strong className="text-white">Pocket Grau</strong></li>
            <li><strong className="text-white">Moto Grau Brasil</strong></li>
            <li><strong className="text-white">Grau e Chapa</strong></li>
            <li><strong className="text-white">Patrulha 244</strong></li>
            <li><strong className="text-white">Elite Carros BR 2</strong></li>
            <li><strong className="text-white">Skins Pocket Grau</strong> (aplicativo complementar que oferece skins para o jogo Pocket Grau)</li>
          </ul>
          <p className="text-white/60 text-sm">
            (denominados coletivamente como "Jogos", exceto "Skins Pocket Grau").
          </p>
          <p className="mt-4">
            Ao utilizar qualquer um dos Jogos, você concorda com os termos descritos nesta Política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">1. Informações Coletadas</h2>
          <p className="mb-6">
            A Unibits <strong className="text-white">não coleta informações pessoais identificáveis</strong> dos usuários. As únicas informações tratadas são:
          </p>

          <div className="space-y-8 pl-4 border-l-2 border-[#222]">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1.1 Dados Internos dos Jogos</h3>
              <p className="mb-3">Os Jogos podem armazenar localmente no dispositivo:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-[#555]">
                <li>Moeda virtual</li>
                <li>Veículos desbloqueados (motos, carros, carretinhas)</li>
                <li>Skins e personalizações</li>
                <li>Progresso do jogador (missões, entregas, manobras)</li>
                <li>Preferências do usuário</li>
              </ul>
              <div className="bg-[#111] p-4 rounded-lg border border-[#333] flex gap-3 items-start">
                <span className="text-xl">👉</span>
                <p className="m-0">
                  Todas essas informações são <strong className="text-white">armazenadas apenas no dispositivo do jogador</strong> e não são enviadas para servidores da Unibits.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">1.2 Publicidade</h3>
              <p className="mb-3">Os Jogos utilizam serviços de publicidade, como:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-[#555]">
                <li><strong className="text-white">Google AdMob</strong></li>
                <li><strong className="text-white">Google Analytics</strong></li>
              </ul>
              <p className="mb-3">Esses serviços podem coletar <strong className="text-white">dados anônimos</strong>, como:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-[#555]">
                <li>Visualizações de anúncios</li>
                <li>Cliques</li>
                <li>Identificadores de dispositivo (não pessoais)</li>
              </ul>
              <p className="mb-3">Essas informações são utilizadas exclusivamente para melhorar a exibição de anúncios e personalizar a experiência publicitária.</p>
              <div className="bg-[#111] p-4 rounded-lg border border-[#333] flex gap-3 items-start">
                <span className="text-xl">👉</span>
                <p className="m-0">A Unibits <strong className="text-white">não tem acesso a dados pessoais dos usuários</strong>.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">1.3 Recompensas por Anúncios</h3>
              <p className="mb-3">Alguns Jogos oferecem recompensas em troca da visualização de anúncios:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-[#555]">
                <li>No <strong className="text-white">Skins Pocket Grau</strong>, skins podem ser desbloqueadas ao assistir anúncios.</li>
                <li>Em outros Jogos, recompensas podem incluir moeda virtual ou desbloqueios.</li>
              </ul>
              <div className="bg-[#111] p-4 rounded-lg border border-[#333] flex gap-3 items-start">
                <span className="text-xl">👉</span>
                <p className="m-0">Essas interações são processadas pelos serviços de anúncios e não envolvem coleta de dados pessoais pela Unibits.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">2. Uso das Informações</h2>
          <p className="mb-3">As informações armazenadas localmente são utilizadas exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#32e6e2]">
            <li>Funcionamento correto dos Jogos</li>
            <li>Salvamento de progresso e preferências</li>
            <li>Liberação de recompensas dentro do jogo</li>
            <li>Exibição de anúncios de forma segura</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">3. Conexão com a Internet</h2>
          <p className="mb-3">Os Jogos podem funcionar <strong className="text-white">offline</strong>.</p>
          <p className="mb-3">A conexão com a internet é necessária apenas para:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#32e6e2]">
            <li>Exibição de anúncios</li>
            <li>Recebimento de recompensas vinculadas a anúncios</li>
            <li>Funcionalidade de modo online (Modo multi-jogador utilizando Mirror Network)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">4. Segurança das Informações</h2>
          <p className="mb-3">As informações são armazenadas localmente e protegidas pelo próprio sistema operacional do dispositivo. A Unibits:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#32e6e2]">
            <li>Não coleta</li>
            <li>Não armazena remotamente</li>
            <li>Não acessa esses dados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">5. Seus Direitos</h2>
          <p className="mb-3">Como não coletamos dados pessoais:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-[#32e6e2]">
            <li>Não há informações para acesso, correção ou exclusão</li>
            <li>O controle dos dados permanece no dispositivo do usuário</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">6. Alterações nesta Política</h2>
          <p>
            Esta Política pode ser atualizada a qualquer momento. Quaisquer alterações serão publicadas nesta página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">7. Contato</h2>
          <p className="mb-4">Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:</p>
          <div className="bg-[#111] p-6 rounded-xl border border-[#333] inline-block">
            <h3 className="text-xl font-bold text-white mb-4">Unibits</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-xl">🌐</span>
                <span className="text-white/60">Site:</span>
                <a href="https://unibits.com.br" className="text-[#32e6e2] hover:text-[#5af3ef] transition-colors no-underline">
                  https://unibits.com.br
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <span className="text-white/60">E-mail:</span>
                <a href="mailto:contato@unibits.com.br" className="text-white hover:text-[#32e6e2] transition-colors no-underline">
                  contato@unibits.com.br
                </a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#333] pb-2">8. Considerações Finais</h2>
          <p>
            Ao utilizar qualquer um dos Jogos da Unibits, você declara estar ciente e de acordo com esta Política de Privacidade.
          </p>
        </section>
      </div>
    </div>
  );
}
