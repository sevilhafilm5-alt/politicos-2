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
          <span>Plano de comunicação · Camozzato</span>
        </a>
        <nav aria-label="Seções da proposta">
          <a href="#alcance">Alcance</a><a href="#investimento">Investimento</a><a href="#estrategia">Estratégia</a><a href="#dados">Dados</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">PROPOSTA DE COMUNICAÇÃO · FELIPE CAMOZZATO</p>
          <h1>Do mandato para o Rio Grande.<br /><span>Uma mensagem que presta contas.</span></h1>
          <p className="hero-text">Uma operação para transformar atuação, propostas e entregas em conversas diretas com quem trabalha, empreende e quer um Estado mais eficiente.</p>
          <div className="hero-tags" aria-label="Frentes do projeto"><span>Alcance estadual</span><span>Segmentação por pauta</span><span>CRM próprio</span></div>
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
        <div className="section-heading"><p className="eyebrow">INVESTIMENTO POR VOLUME</p><h2>Escala para chegar a todo o RS.<br />Controle para medir cada resposta.</h2><p>Faixas objetivas para a assessoria dimensionar alcance, recorrência e investimento.</p></div>
        <div className="pricing-grid">
          <article className="price-card featured"><span>MAIOR ESCALA</span><h3>300 mil</h3><p>contatos</p><strong>R$ 0,45</strong><small>por disparo</small><hr /><b>Total estimado: R$ 135.000</b></article>
          <article className="price-card"><h3>200 mil</h3><p>contatos</p><strong>R$ 0,50</strong><small>por disparo</small><hr /><b>Total estimado: R$ 100.000</b></article>
          <article className="price-card"><h3>100 mil</h3><p>contatos</p><strong>R$ 0,65</strong><small>por disparo</small><hr /><b>Total estimado: R$ 65.000</b></article>
        </div>
      </section>

      <section className="schedule-band"><div><Clock3 size={25}/><span>Janelas de envio</span></div><strong>08h — 12h</strong><i>e</i><strong>18h — 22h</strong></section>

      <section className="section strategy" id="estrategia">
        <div className="section-heading"><p className="eyebrow">ESTRATÉGIA DO DISPARO</p><h2>Não é panfleto digital.<br />É uma conversa com motivo para existir.</h2><p>Cada contato parte de uma pauta reconhecível do Camozzato e termina com uma pergunta capaz de abrir diálogo, medir adesão e orientar a próxima mensagem.</p></div>
        <div className="steps">
          <article><span>01</span><h3>Separar públicos, não apenas listas</h3><p>Empreendedores, apoiadores da liberdade econômica, cidadãos atentos ao gasto público e eleitores ligados à segurança recebem jornadas próprias.</p></article>
          <article><span>02</span><h3>Abrir com uma prova concreta</h3><p>Economia de verba de gabinete, revogação de leis e atuação por menos burocracia dão substância à primeira mensagem.</p></article>
          <article><span>03</span><h3>Conectar prova e proposta</h3><p>O histórico explica a credibilidade; liberdade econômica, combate a privilégios e segurança apontam o próximo passo.</p></article>
          <article><span>04</span><h3>Devolver inteligência à equipe</h3><p>Entrega, leitura, resposta e tema de interesse entram no CRM para a assessoria saber quem ouviu, o que mobilizou e como continuar.</p></article>
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-copy"><p className="eyebrow">ATUAÇÃO QUE VIRA NARRATIVA</p><h2>Camozzato não precisa prometer eficiência no abstrato.</h2><p>A comunicação parte de sinais verificáveis do mandato: economia de recursos, enfrentamento da burocracia e defesa de quem produz — e traduz isso para a vida prática do eleitor.</p><div className="focus-list"><span>Liberdade econômica</span><span>Menos burocracia</span><span>Combate a privilégios</span><span>Responsabilidade fiscal</span></div></div>
        <blockquote><span>ÂNGULO DA MENSAGEM</span><p>“Em três anos de mandato, devolvemos mais de R$ 745 mil em verba de gabinete. Dinheiro público precisa voltar para a população — não virar privilégio de quem ocupa um cargo.”</p></blockquote>
        <div className="case-details">
          <article className="copy-angle">
            <span>EXEMPLO · RESPONSABILIDADE COM O DINHEIRO PÚBLICO</span>
            <p>“Eu sou Felipe Camozzato. Nos três primeiros anos do mandato, economizei mais de R$ 745 mil da verba de gabinete — recurso que voltou ao Estado. Se você também acredita que política deve custar menos e entregar mais, quero ouvir quais gastos e privilégios mais incomodam você.”</p>
          </article>
          <article>
            <span>EXEMPLO · LIBERDADE PARA TRABALHAR</span>
            <p>“Quem abre uma empresa no Brasil aprende cedo: antes de conquistar o primeiro cliente, precisa vencer uma fila de licenças, taxas e regras. Meu trabalho é tirar o Estado do caminho de quem produz. Na sua rotina, qual burocracia mais atrapalha trabalhar e crescer?”</p>
          </article>
          <article>
            <span>EXEMPLO · PESQUISA QUE QUALIFICA A CONVERSA</span>
            <p>“O Rio Grande do Sul pode ser exemplo para o Brasil, mas precisa escolher por onde começar. Qual pauta deve avançar primeiro? 1. Menos impostos e burocracia 2. Fim dos supersalários e privilégios 3. Segurança com leis mais firmes.” A resposta organiza o próximo contato por interesse real — sem repetir a mesma mensagem para todo mundo.</p>
          </article>
        </div>
      </section>

      <section className="data-section" id="dados">
        <div className="data-copy"><p className="eyebrow">CONTROLE COMPLETO</p><h2>Dados ao vivo.<br />Decisões mais rápidas.</h2><p>Um CRM interno reúne toda a operação antes, durante e depois de cada disparo.</p><ul><li><Database size={19}/>Resultados e métricas em tempo real</li><li><LockKeyhole size={19}/>Dados sigilosos e criptografados</li><li><BarChart3 size={19}/>Relatórios completos pós-envio</li></ul></div>
        <div className="dashboard" aria-label="Exemplo visual de painel de métricas"><div className="dash-top"><span>VISÃO DO DISPARO</span><i>AO VIVO</i></div><div className="dash-numbers"><div><small>Enviadas</small><strong>300.000</strong></div><div><small>Entregues</small><strong>264.012</strong></div></div><div className="progress"><i /></div><div className="dash-chart">{[35, 48, 44, 62, 56, 76, 68, 88, 80, 91].map((height, index) => <i key={index} style={{height: `${height}%`}} />)}</div><div className="dash-legend"><span><i/>Entregues 88%</span><span><i/>Em processamento 12%</span></div></div>
      </section>

      <footer><span>PLANO DE COMUNICAÇÃO · FELIPE CAMOZZATO</span><p>Estratégia • Tecnologia • Controle</p></footer>
    </main>
  );
}
