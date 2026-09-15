import { BarChart3, Clock3, Database, LockKeyhole, MessageCircleMore } from "lucide-react";

const reach = [
  { label: "Base trabalhada", value: "300 mil", note: "contatos segmentados" },
  { label: "Entrega estimada", value: "80–90%", note: "das mensagens enviadas" },
  { label: "Leitura potencial", value: "até 270 mil", note: "visualizações estimadas" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark"><MessageCircleMore size={20} /></span>
          <span>Plano de comunicação</span>
        </a>
        <nav aria-label="Seções da proposta">
          <a href="#alcance">Alcance</a><a href="#investimento">Investimento</a><a href="#estrategia">Estratégia</a><a href="#dados">Dados</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">PROPOSTA DE COMUNICAÇÃO REGIONAL</p>
          <h1>Presença regional.<br /><span>Mensagem que chega.</span></h1>
          <p className="hero-text">Uma operação completa para organizar a base, criar mensagens relevantes e acompanhar cada resultado com clareza.</p>
          <div className="hero-tags" aria-label="Frentes do projeto"><span>Lista de 300 mil</span><span>Extração de leads</span><span>CRM próprio</span></div>
        </div>
        <div className="reach-card" id="alcance">
          <div className="reach-head"><div><p>Projeção de alcance</p><strong>300.000</strong></div><BarChart3 size={28} /></div>
          <div className="reach-visual" aria-label="Estimativa de 80 a 90 por cento de entrega">
            <div className="ring"><span>80–90%</span><small>entrega</small></div>
            <div className="bars">{[62, 78, 70, 86, 82, 90].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          </div>
          <p className="reach-note">Entre <strong>240 mil e 270 mil</strong> mensagens potencialmente entregues.</p>
        </div>
      </section>

      <section className="metric-strip" aria-label="Resumo de métricas">
        {reach.map((item) => <article key={item.label}><p>{item.label}</p><strong>{item.value}</strong><span>{item.note}</span></article>)}
      </section>

      <section className="section" id="investimento">
        <div className="section-heading"><p className="eyebrow">INVESTIMENTO POR VOLUME</p><h2>Quanto maior a base,<br />menor o custo por envio.</h2><p>Valores diretos para facilitar a comparação e o planejamento.</p></div>
        <div className="pricing-grid">
          <article className="price-card featured"><span>MAIOR ESCALA</span><h3>300 mil</h3><p>contatos</p><strong>R$ 0,45</strong><small>por disparo</small><hr /><b>Total estimado: R$ 135.000</b></article>
          <article className="price-card"><h3>200 mil</h3><p>contatos</p><strong>R$ 0,50</strong><small>por disparo</small><hr /><b>Total estimado: R$ 100.000</b></article>
          <article className="price-card"><h3>100 mil</h3><p>contatos</p><strong>R$ 0,65</strong><small>por disparo</small><hr /><b>Total estimado: R$ 65.000</b></article>
        </div>
      </section>

      <section className="schedule-band"><div><Clock3 size={25}/><span>Janelas de envio</span></div><strong>08h — 12h</strong><i>e</i><strong>18h — 22h</strong></section>

      <section className="section strategy" id="estrategia">
        <div className="section-heading"><p className="eyebrow">ESTRATÉGIA DO DISPARO</p><h2>Primeiro, relevância.<br />Depois, relacionamento.</h2><p>Em regiões onde a mensagem ainda é nova, a comunicação começa pela realidade local — não por um pedido direto.</p></div>
        <div className="steps">
          <article><span>01</span><h3>Captar com permissão</h3><p>Anúncios locais, links de lideranças e entrada pelo WhatsApp criam uma base com interesse real.</p></article>
          <article><span>02</span><h3>Entender a prioridade</h3><p>Uma pesquisa simples identifica cidade e tema: saúde, emprego, moradia ou infraestrutura.</p></article>
          <article><span>03</span><h3>Enviar a mensagem certa</h3><p>Templates regionais apresentam resultados concretos e conectam experiência de gestão à dor local.</p></article>
          <article><span>04</span><h3>Medir e melhorar</h3><p>Entrega, leitura, resposta e interesse ficam disponíveis ao vivo para orientar os próximos envios.</p></article>
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-copy"><p className="eyebrow">ESTUDO DE CASO COMO VITRINE</p><h2>Desenvolvimento regional contado por resultados.</h2><p>A região metropolitana de Campinas e Jaguariúna entram como referência de atração de empresas, geração de empregos, responsabilidade fiscal e gestão pública.</p><div className="focus-list"><span>Força regional</span><span>Minha Casa, Minha Vida</span><span>Emprego e empresas</span><span>Responsabilidade fiscal</span></div></div>
        <blockquote><span>ÂNGULO DA MENSAGEM</span><p>“Você viu como uma região forte atraiu empresas e gerou empregos nos últimos anos? Esse movimento foi construído com liderança regional. Agora, esse mesmo modelo de desenvolvimento pode chegar a uma nova região.”</p></blockquote>
      </section>

      <section className="section regions">
        <div className="section-heading"><p className="eyebrow">PRIORIDADE TERRITORIAL</p><h2>Reativar onde há espaço<br />para crescer.</h2><p>Foco em cidades com menor índice de eleitores e necessidade de retomada de presença.</p></div>
        <div className="region-grid">{["Aguaí", "Atibaia", "Limeira", "Águas de São Pedro", "Estiva Gerbi", "Pedra Bela", "Pinhalzinho", "Piracaia", "Rio das Pedras", "Saltinho", "Santa Maria da Serra", "São Pedro"].map((city, index) => <div key={city}><span>{String(index + 1).padStart(2, "0")}</span>{city}</div>)}</div>
      </section>

      <section className="data-section" id="dados">
        <div className="data-copy"><p className="eyebrow">CONTROLE COMPLETO</p><h2>Dados ao vivo.<br />Decisões mais rápidas.</h2><p>Um CRM interno reúne toda a operação antes, durante e depois de cada disparo.</p><ul><li><Database size={19}/>Resultados e métricas em tempo real</li><li><LockKeyhole size={19}/>Dados sigilosos e criptografados</li><li><BarChart3 size={19}/>Relatórios completos pós-envio</li></ul></div>
        <div className="dashboard" aria-label="Exemplo visual de painel de métricas"><div className="dash-top"><span>VISÃO DO DISPARO</span><i>AO VIVO</i></div><div className="dash-numbers"><div><small>Enviadas</small><strong>300.000</strong></div><div><small>Entregues</small><strong>264.012</strong></div></div><div className="progress"><i /></div><div className="dash-chart">{[35, 48, 44, 62, 56, 76, 68, 88, 80, 91].map((height, index) => <i key={index} style={{height: `${height}%`}} />)}</div><div className="dash-legend"><span><i/>Entregues 88%</span><span><i/>Em processamento 12%</span></div></div>
      </section>

      <footer><span>PLANO DE COMUNICAÇÃO REGIONAL</span><p>Estratégia • Tecnologia • Controle</p></footer>
    </main>
  );
}
