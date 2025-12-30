export interface Article {
  id: string;
  slug: string;
  title: {
    en: string;
    pt: string;
  };
  excerpt: {
    en: string;
    pt: string;
  };
  image: string;
  category: {
    en: string;
    pt: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  author: string;
  content?: {
    en: string;
    pt: string;
  };
  tags?: string[];
  externalLink?: string;
}

export const articlesData: Article[] = [
  {
    id: '7',
    slug: 'de-assinante-a-criador-mercurius-vox',
    title: {
      en: 'From Subscriber to Creator: 8 Hours, One Idea, and Zero Subscriptions',
      pt: 'De Assinante a Criador: 8 Horas, Uma Ideia e Nenhuma Mensalidade'
    },
    excerpt: {
      en: 'How I stopped paying $20/month for Wispr Flow and built Mercurius.Vox, my own voice dictation system: 100% offline, private, universal, and tailored to my needs. With AI, Python, and 8 hours of focus, I replaced a silly subscription with my own tool.',
      pt: 'Como deixei de pagar US$20 por mês no Wispr Flow e construí o Mercurius.Vox, meu próprio sistema de ditado por voz: 100% offline, privado, universal e feito sob medida. Com IA, Python e 8 horas de foco, substituí uma assinatura boba por uma ferramenta minha.'
    },
    image: '/images/artigo1.png',
    category: {
      en: '✨ Generative AI → 🛠️ Stop Paying. Start Building',
      pt: '✨ IA Generativa → 🛠️ Stop Paying. Start Building'
    },
    date: '2024-12-30',
    readTime: '12',
    featured: true,
    author: 'Mateus Ribeiro',
    tags: ['AI', 'Python', 'Open Source', 'Whisper', 'Voice Transcription', 'DIY', 'Productivity'],
    externalLink: 'https://github.com/mateusdspro/mercurius.vox',
    content: {
      en: `
        <div class="article-subtitle">Stop Paying. Start Building — Part 1</div>
        
        <p class="lead">How I stopped paying $20/month for Wispr Flow—an app that only transcribed my voice—and built <strong>Mercurius.Vox</strong>, my own voice dictation system: 100% offline, private, universal, and tailored to my needs.</p>
        
        <p>With AI, Python, and 8 hours of focus, I replaced a silly subscription with my own tool.<br>
        I gained productivity, freedom, and savings: <strong>$240/year less and zero dependency</strong>.</p>
        
        <p>This is the first story in the series. The mission is simple: cancel useless subscriptions and show that you can create your own apps with AI's help—no permission needed from anyone.</p>
        
        <p>Let's start with the basics, because the obvious apparently needs to be spelled out:</p>
        
        <blockquote>
          <p><strong>In the age of constructive AI... Paying twenty dollars a month for an app to write what you say is boutique stupidity.</strong></p>
        </blockquote>
        
        <p>That's what I was doing. Every month, like a good digital cattle, I'd swipe my card for an app that basically listens to my voice and types it. And they told me this was "premium." Of course. "Premium" became the new name for obvious functionality with a pretty logo and a CEO on LinkedIn saying they're "revolutionizing productivity."</p>
        
        <p><strong>$240 per year.</strong></p>
        
        <p>All this to have a feature that, with five neurons and a bit of courage, you can build in a weekend.</p>
        
        <p><strong>And that's what I did.</strong></p>
        
        <h2>🤖 The Day I Stopped Paying to Be Stupid</h2>
        
        <p>There comes a time when it gets tiring. Not paying—accepting passivity as a lifestyle.<br>
        So I looked at this aberration of a paid app and thought:</p>
        
        <p><strong>"Screw it. I'll build my own."</strong></p>
        
        <p>I used what everyone says is "the future," but nobody actually uses for real work: AI to do actual work. No cute feed prompts, no motivational threads.<br>
        <strong>Cursor + Claude Sonnet 4.5</strong>, ChatGPT as copilot.</p>
        
        <p>No romance. No YouTube tutorial with radio voice. It was:</p>
        
        <p><strong>Problem → print → AI → code → test → broke → print again.</strong></p>
        
        <p>Ugly, messy, and real. And, in the end, functional.</p>
        
        <h2>🎙️ Mercurius.Vox Is Born: The App That Doesn't Beg the Server</h2>
        
        <p>I didn't make a "little terminal script" to show on Hacker News and get likes.<br>
        I made a voice dictation system that runs offline, 24/7, in any Mac app.<br>
        <strong>Universal. Private. Immortal. And with style.</strong></p>
        
        <p>You press a key, speak, release, and the text appears where your cursor is.<br>
        Word, Chrome, ChatGPT, Discord, Figma, Notion, whatever. Working.<br>
        No internet. No sending your voice to some intern's server.</p>
        
        <p><strong>Real push-to-talk. Visual feedback. Whisper as the engine.</strong></p>
        
        <p>And before you confuse the names:</p>
        <ul>
          <li><strong>Wispr Flow</strong>: the paid app that robbed me monthly.</li>
          <li><strong>Whisper</strong>: OpenAI's free and open-source AI that transcribes audio like a pro.</li>
          <li><strong>Mercurius.Vox</strong>: MY app, YOUR future, the END of idiotic subscriptions.</li>
        </ul>
        
        <h2>💻 Real Technology. Not Marketing.</h2>
        
        <p>I used Python because it works. And I built it like assembling a rally car:</p>
        <ul>
          <li><strong>sounddevice</strong>: microphone listening</li>
          <li><strong>pynput</strong>: key pressed = record, released = stop</li>
          <li><strong>pyperclip</strong>: text to clipboard</li>
          <li><strong>AppKit</strong>: floating indicator on macOS (because I want to KNOW when it's recording)</li>
          <li><strong>colorama</strong>: colored terminal because I like it</li>
          <li><strong>PyTorch + MPS</strong>: uses Mac's GPU to transcribe quickly</li>
        </ul>
        
        <p>It's not "pretty." It's a machine.</p>
        
        <h2>🧱 macOS Tried to Sabotage. Failed.</h2>
        
        <p>Of course Apple tried to screw me over.<br>
        Microphone permission. Keyboard permission. "This process is not trusted."</p>
        
        <p><strong>Oh, go to hell.</strong></p>
        
        <p>I went there, understood the damn TCC, configured everything, documented it better than a plane manual.<br>
        The system tried to stop me. I turned it into a step-by-step guide so nobody else needs to cry on Stack Overflow.</p>
        
        <h2>🔄 The App Closed by Itself? Not Anymore. Now It's Immortal.</h2>
        
        <p>Classic bug: app that closes out of nowhere.<br>
        Cause? Silent error in keyboard listener.<br>
        Solution? Infinite loop with try-except. Crashed? Get up. Bugged? Restart.<br>
        <strong>Now it only dies if you KILL it.</strong></p>
        
        <p>That's how you separate an experimental project from a reliable product.</p>
        
        <h2>🧠 Whisper Trying to Invent Bulgarian? Locked It Down.</h2>
        
        <p>Short audio, auto-detect enabled…<br>
        Whisper starts hallucinating: "this sounds like Romanian!"</p>
        
        <p><strong>No, dammit. It's Portuguese.</strong></p>
        
        <p>Locked it to PT/EN. Everything else? Blocked. End of drama.</p>
        
        <h2>🏛️ Why the Name Mercurius.Vox?</h2>
        
        <p>Because I have a sense of aesthetics, unlike devs who call their apps "Transcribr" or "VoiceThingy."<br>
        <strong>Mercury</strong>: messenger of the gods, swift, intermediary between worlds.<br>
        <strong>Vox</strong>: voice.<br>
        <strong>Mercurius.Vox</strong>: the bridge between thought and text.<br>
        You speak. It writes. And shuts up.</p>
        
        <h2>📉 The Result? Zero Cost. 100% Control.</h2>
        
        <ul>
          <li>From $20/month to $0/month</li>
          <li>From waiting for "new features" to molding the app to your workflow</li>
          <li>From hostage to owner</li>
        </ul>
        
        <p>Today, I have an app that:</p>
        
        <ul>
          <li>✅ runs offline</li>
          <li>✅ respects your privacy</li>
          <li>✅ works in any Mac app</li>
          <li>✅ transcribes in seconds</li>
          <li>✅ has push-to-talk</li>
          <li>✅ never closes</li>
          <li>✅ ignores crazy languages</li>
          <li>✅ is open-source</li>
        </ul>
        
        <p><strong>And it's mine.</strong></p>
        
        <h2>🪓 The Final Provocation (and the Beginning of the Series)</h2>
        
        <p>Are you still paying for an app that just copies and pastes your audio?<br>
        Are you still throwing away $50, $100 per month on functions that a Python intern makes in 12 hours?</p>
        
        <p><strong>Enough.</strong></p>
        
        <p>This is the first one. There will be more.</p>
        
        <p><strong>Every lousy app with a subscription goes to the wall.</strong></p>
        
        <p class="series-tag"><strong>Stop Paying. Start Building #1 — Mercurius.Vox.</strong></p>
        
        <p><strong>Clone. Use. Modify. Steal this idea.</strong></p>
      `,
      pt: `
        <div class="article-subtitle">Stop Paying. Start Building — Parte 1</div>
        
        <p class="lead">Como eu deixei de pagar US$20 por mês no Wispr Flow—um app que só transcrevia minha voz—e construí o <strong>Mercurius.Vox</strong>, meu próprio sistema de ditado por voz: 100% offline, privado, universal e feito sob medida pra mim.</p>
        
        <p>Com IA, Python e 8 horas de foco, substituí uma assinatura boba por uma ferramenta minha.<br>
        Ganhei produtividade, liberdade e economia: <strong>US$240/ano a menos e zero dependência</strong>.</p>
        
        <p>Essa é a primeira história da série. A missão é simples: cancelar mensalidades inúteis e mostrar que você pode criar seus próprios apps com a ajuda da IA—sem pedir permissão pra ninguém.</p>
        
        <p>Vamos começar pelo básico, porque parece que o óbvio precisa ser desenhado:</p>
        
        <blockquote>
          <p><strong>Em tempos de IA construtivas... Pagar vinte dólares por mês pra um app escrever o que você fala é burrice de boutique.</strong></p>
        </blockquote>
        
        <p>Era isso que eu fazia. Todo mês, como um bom gado digital, eu passava o cartão pra um app que basicamente ouve minha voz e digita. E me diziam que isso era "premium". Claro. "Premium" virou o novo nome pra funcionalidade óbvia com um logo bonitinho e um CEO no LinkedIn dizendo que "estão revolucionando a produtividade".</p>
        
        <p><strong>US$240 por ano.</strong></p>
        
        <p>Tudo isso pra ter uma funcionalidade que, com cinco neurônios e um pouco de coragem, dá pra construir em um fim de semana.</p>
        
        <p><strong>E foi o que eu fiz.</strong></p>
        
        <h2>🤖 O dia em que eu parei de pagar pra ser burro</h2>
        
        <p>Chega uma hora que cansa. Não de pagar—de aceitar a passividade como estilo de vida.<br>
        Aí eu olhei pra essa aberração de app pago e pensei:</p>
        
        <p><strong>"Dane-se. Eu construo o meu."</strong></p>
        
        <p>Usei o que todo mundo diz que "é o futuro", mas ninguém usa de verdade: IA pra fazer trabalho real. Nada de promozinho de feed, prompt fofo ou thread motivacional.<br>
        <strong>Cursor + Claude Sonnet 4.5</strong>, ChatGPT de copiloto.</p>
        
        <p>Sem romance. Sem tutorial de YouTube com voz de radialista. Foi:</p>
        
        <p><strong>Problema → print → IA → código → testou → quebrou → print de novo.</strong></p>
        
        <p>Feio, sujo e real. E, no fim, funcional.</p>
        
        <h2>🎙️ Nasce o Mercurius.Vox: o app que não pede esmola pro servidor</h2>
        
        <p>Não fiz um "scriptzinho de terminal" pra mostrar no Hacker News e ganhar joinha.<br>
        Fiz um sistema de ditado por voz que roda offline, 24/7, em qualquer app do Mac.<br>
        <strong>Universal. Privado. Imortal. E com estilo.</strong></p>
        
        <p>Você aperta uma tecla, fala, solta, e o texto aparece onde estiver o cursor.<br>
        Word, Chrome, ChatGPT, Discord, Figma, Notion, o cacete. Funcionando.<br>
        Sem internet. Sem mandar sua voz pra servidor de estagiário.</p>
        
        <p><strong>Push-to-talk de verdade. Feedback visual. Whisper como motor.</strong></p>
        
        <p>E antes que você confunda os nomes:</p>
        <ul>
          <li><strong>Wispr Flow</strong>: o app pago que me roubava mensalmente.</li>
          <li><strong>Whisper</strong>: a IA gratuita e open-source da OpenAI que transcreve áudio como gente grande.</li>
          <li><strong>Mercurius.Vox</strong>: o MEU app, o SEU futuro, o FIM das assinaturas idiotas.</li>
        </ul>
        
        <h2>💻 Tecnologia de verdade. Não marketing.</h2>
        
        <p>Usei Python porque funciona. E montei como quem monta um carro de rali:</p>
        <ul>
          <li><strong>sounddevice</strong>: microfone na escuta</li>
          <li><strong>pynput</strong>: tecla pressionada = grava, soltou = para</li>
          <li><strong>pyperclip</strong>: texto no clipboard</li>
          <li><strong>AppKit</strong>: indicador flutuante no macOS (porque eu quero SABER se está gravando)</li>
          <li><strong>colorama</strong>: terminal colorido porque eu gosto</li>
          <li><strong>PyTorch + MPS</strong>: usa a GPU do Mac pra transcrever rapidinho</li>
        </ul>
        
        <p>Não é "bonitinho". É máquina.</p>
        
        <h2>🧱 O macOS tentou sabotar. Não conseguiu.</h2>
        
        <p>Claro que a Apple tentou me ferrar.<br>
        Permissão pra microfone. Permissão pra teclado. "Esse processo não é confiável."</p>
        
        <p><strong>Ah, vá à merda.</strong></p>
        
        <p>Fui lá, entendi a porra do TCC, configurei tudo, documentei melhor que manual de avião.<br>
        O sistema tentou me parar. Eu transformei em passo-a-passo pra que ninguém mais precise chorar no Stack Overflow.</p>
        
        <h2>🔄 O app fechava sozinho? Não mais. Agora ele é imortal.</h2>
        
        <p>Bug clássico: app que fecha do nada.<br>
        Causa? Erro silencioso no listener de teclado.<br>
        Solução? Loop infinito com try-except. Caiu? Levanta. Bugou? Reinicia.<br>
        <strong>Agora ele só morre se você MATAR.</strong></p>
        
        <p>É assim que se separa um projeto experimental de um produto confiável.</p>
        
        <h2>🧠 Whisper tentando inventar búlgaro? Travei.</h2>
        
        <p>Áudio curto, auto-detect ativado…<br>
        Whisper começa a delirar: "isso parece romeno!"</p>
        
        <p><strong>Não, caralho. É português.</strong></p>
        
        <p>Travei no PT/EN. Todo o resto? Bloqueado. Fim do drama.</p>
        
        <h2>🏛️ Por que o nome Mercurius.Vox?</h2>
        
        <p>Porque eu tenho senso de estética, ao contrário dos devs que chamam app de "Transcribr" ou "VoiceThingy."<br>
        <strong>Mercúrio</strong>: mensageiro dos deuses, veloz, intermediário entre mundos.<br>
        <strong>Vox</strong>: voz.<br>
        <strong>Mercurius.Vox</strong>: a ponte entre o pensamento e o texto.<br>
        Você fala. Ele escreve. E cala a boca.</p>
        
        <h2>📉 O resultado? Zero de custo. 100% de controle.</h2>
        
        <ul>
          <li>De US$20/mês pra US$0/mês</li>
          <li>De esperar "feature nova" pra moldar o app pro seu fluxo</li>
          <li>De refém pra dono</li>
        </ul>
        
        <p>Hoje, eu tenho um app que:</p>
        
        <ul>
          <li>✅ roda offline</li>
          <li>✅ respeita sua privacidade</li>
          <li>✅ funciona em qualquer app do Mac</li>
          <li>✅ transcreve em segundos</li>
          <li>✅ tem push-to-talk</li>
          <li>✅ não fecha nunca</li>
          <li>✅ ignora línguas malucas</li>
          <li>✅ é open-source</li>
        </ul>
        
        <p><strong>E é meu.</strong></p>
        
        <h2>🪓 A provocação final (e o começo da série)</h2>
        
        <p>Você ainda paga por app que só copia e cola seu áudio?<br>
        Você ainda joga fora R$50, R$100 por mês por funções que um estagiário de Python faz em 12 horas?</p>
        
        <p><strong>Chega.</strong></p>
        
        <p>Esse é o primeiro. Vai ter mais.</p>
        
        <p><strong>Todo app vagabundo com mensalidade vai pro paredão.</strong></p>
        
        <p class="series-tag"><strong>Stop Paying. Start Building #1 — Mercurius.Vox.</strong></p>
        
        <p><strong>Clone. Use. Modifique. Roube essa ideia.</strong></p>
      `
    }
  },
  {
    id: '1',
    slug: 'rag-systems-redefining-ai',
    title: {
      en: 'How RAG is Redefining AI Systems',
      pt: 'Como RAG está Redefinindo Sistemas de IA'
    },
    excerpt: {
      en: 'Retrieval-Augmented Generation (RAG) is revolutionizing how AI systems access and use information. Unlike traditional models that rely solely on training data, RAG combines real-time retrieval with language generation.',
      pt: 'Retrieval-Augmented Generation (RAG) está revolucionando como sistemas de IA acessam e usam informação. Ao contrário de modelos tradicionais que dependem apenas de dados de treinamento, RAG combina recuperação em tempo real com geração de linguagem.'
    },
    image: '/images/blog1.jpg',
    category: {
      en: '✨ Generative AI',
      pt: '✨ IA Generativa'
    },
    date: '2024-11-12',
    readTime: '8',
    featured: true,
    author: 'Mateus Ribeiro'
  },
  {
    id: '2',
    slug: 'building-production-ml-pipelines',
    title: {
      en: 'Building Production-Ready ML Pipelines',
      pt: 'Construindo Pipelines ML para Produção'
    },
    excerpt: {
      en: 'Moving from experimental notebooks to production ML systems requires more than just model training. It demands robust pipelines that handle data validation, versioning, monitoring, and automated retraining.',
      pt: 'Mover de notebooks experimentais para sistemas ML de produção requer mais do que apenas treinamento de modelo. Exige pipelines robustos que lidam com validação de dados, versionamento, monitoramento e retreinamento automatizado.'
    },
    image: '/images/blog2.jpg',
    category: {
      en: '⚙️ MLOps',
      pt: '⚙️ MLOps'
    },
    date: '2024-11-08',
    readTime: '10',
    featured: true,
    author: 'Mateus Ribeiro'
  },
  {
    id: '3',
    slug: 'data-strategy-business-impact',
    title: {
      en: 'Data Strategy for Business Impact',
      pt: 'Estratégia de Dados para Impacto Empresarial'
    },
    excerpt: {
      en: 'Most organizations sit on vast amounts of data but struggle to extract meaningful value. The difference between data-rich and data-driven companies isn\'t technology—it\'s strategy.',
      pt: 'A maioria das organizações possui grandes quantidades de dados, mas luta para extrair valor significativo. A diferença entre empresas ricas em dados e empresas orientadas por dados não é tecnologia—é estratégia.'
    },
    image: '/images/blog3.jpg',
    category: {
      en: '💡 Data Strategy',
      pt: '💡 Estratégia de Dados'
    },
    date: '2024-11-05',
    readTime: '7',
    featured: true,
    author: 'Mateus Ribeiro'
  }
];

export const getFeaturedArticles = (): Article[] => {
  return articlesData.filter(article => article.featured);
};

export const getAllArticles = (): Article[] => {
  return articlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articlesData.find(article => article.slug === slug);
};
