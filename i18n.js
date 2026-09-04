const LANG_KEY = 'alpha1_lang';
const DEFAULT_LANG = 'en';

const LANGS = [
  {code:'en', label:'English', flag:'\u{1F1EC}\u{1F1E7}', dir:'ltr'},
  {code:'fr', label:'Fran\u00e7ais', flag:'\u{1F1EB}\u{1F1F7}', dir:'ltr'},
  {code:'es', label:'Espa\u00f1ol', flag:'\u{1F1EA}\u{1F1F8}', dir:'ltr'},
  {code:'pt', label:'Portugu\u00eas', flag:'\u{1F1E7}\u{1F1F7}', dir:'ltr'},
  {code:'ar', label:'\u0627\u0644\u0639\u0631\u0628\u064a\u0629', flag:'\u{1F1E6}\u{1F1F7}', dir:'rtl'},
  {code:'ha', label:'Hausa', flag:'\u{1F1F3}\u{1F1EC}', dir:'ltr'},
  {code:'tw', label:'Twi', flag:'\u{1F1EC}\u{1F1ED}', dir:'ltr'},
  {code:'sw', label:'Kiswahili', flag:'\u{1F1F0}\u{1F1EA}', dir:'ltr'}
];

const TRANS = {
en: {
navHome:'Home',navApps:'Apps',navWiki:'Wiki',navProjects:'Projects',navMission:'Mission',navFAQ:'FAQ',
openAppsBtn:'Open Apps',pressEsc:'Press',toClose:'to close',shortcuts:'Shortcuts',
heroBadge:'Global Technology Studio \u00b7 Ghana',
heroH1:'Building the Future.<br/>From Ghana,<br/>For the World.',
heroP:'Privacy tools, AI products and developer utilities \u2014 free, open and built for everyone. No accounts. No tracking. Just powerful technology.',
openApps:'Open Apps',ourMission:'Our Mission',
statProducts:'Apps',statRepos:'Repos',statToolsLabel:'Tools Built',statLanguages:'Languages',statBuilding:'Still Building',
featuredProduct:'Featured Product',
samAtlasTag:'AI Agent Builder. Digital products to help you build and sell AI agents. No login required.',
alpha1DesignTag:'AI writing, image compression, and color palette tools. Powered by Claude API.',
privacyToolkitTag:'17 browser-based security tools. Phishing detection, AES-256 encryption, JWT decoder.',
toolboxTag:'700+ curated web tools across 50+ categories. Your complete developer toolkit.',
openApp:'Open App',
openSource:'Open Source',projectsTitle:'Projects',
projectsSub:'Public repositories from alpha-1-design',
viewOnGitHub:'View on GitHub',searchProjects:'Search projects...',
  liveDemo:'Live Demo',demoTitle:'See Alpha-1 in Action',demoAssistant:'Assistant',demoUser:'You',demoThinking:'thinking...',demoToolCall:'\u23F3 Running tools...',demoWelcome:'Hello! I\'m Alpha-1. How can I help you today?',demoResponse:'I can help you build AI agents, generate code, analyze data, or just chat. What would you like to explore?',
  ourMissionLabel:'Our Mission',
missionH:'Technology built for <em>everyone</em> \u2014 not just those with resources.',
missionP1:'Alpha-1 Studio is a global technology studio building privacy tools, AI products and developer utilities \u2014 free, open and accessible to everyone.',
missionP2:'Built from Ghana. Used worldwide. Improving every day.',
founderRole:'Founder \u00b7 Full-Stack Developer \u00b7 Ghana',
statSecurity:'Security Tools',
faqLabel:'FAQ',faqTitle:'Questions?<br/>Answered.',
faqSub:'Everything you need to know about Alpha-1 Studio.',
emailUs:'Email Us',
faqQ1:'What is Alpha-1 Studio?',
faqA1:'Alpha-1 Studio is a global technology studio building privacy tools, AI products and developer utilities. Founded by Samuel Mensah in Ghana.',
faqQ2:'What is Sam Atlas?',
faqA2:'Sam Atlas is an AI Agent Builder platform. We sell digital products \u2014 guides, templates, and courses \u2014 to help you build, configure, and launch your own AI agents.',
faqQ3:'Is my data safe?',
faqA3:'Absolutely. All products are privacy-first. Privacy Toolkit runs 100% in your browser \u2014 nothing ever sent to a server. No tracking, no analytics, no accounts required.',
faqQ4:'Are the tools free?',
faqA4:'Yes \u2014 most products are completely free. Alpha-1 Design requires your own Claude API key for AI features. Sam Atlas products have regional pricing based on your location.',
faqQ5:'Can I collaborate or hire?',
faqA5:'Yes. We\u2019re open to collaborations, freelance work and interesting projects. Email alphariansamuel@gmail.com or WhatsApp +233553016346.',
footerDesc:'Global technology studio building privacy tools, AI products and developer utilities. Free for everyone.',
quickLinks:'Quick Links',resources:'Resources',portfolio:'Portfolio',faqs:'FAQs',follow:'Follow',
copyright:'\u00a9 2026 Alpha-1 Studio. All rights reserved.',
builtFrom:'Built from Ghana for the world.',
launcherTitle1:'Your',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'Select an app to launch it instantly. All apps run seamlessly in your browser.',
statApps:'Apps',statTools:'Tools',statFree:'Free',
launcherHint:'Apps load full-screen \u2014 no downloads required',
backToApps:'Back to Apps',embedded:'Embedded',openInNewTab:'Open in new tab',
backToStudio:'Back to Studio',
wikiTitle:'Project Wiki',
wikiSub:'Detailed pages for every Alpha-1 Studio project.',
backToWiki:'Back to Wiki',
wikiOverview:'Overview',
wikiDetails:'Details',
},
fr: {
navHome:'Accueil',navApps:'Apps',navProjects:'Projets',navMission:'Mission',navFAQ:'FAQ',
openAppsBtn:'Ouvrir les Apps',pressEsc:'Appuyez sur',toClose:'pour fermer',shortcuts:'Raccourcis',
heroBadge:'Studio Technologique Mondial \u00b7 Ghana',
heroH1:'Construire le futur.<br/>Du Ghana,<br/>Pour le Monde.',
heroP:'Outils de confidentialit\u00e9, produits IA et utilitaires d\u00e9veloppeur \u2014 gratuits, ouverts et pour tous. Pas de comptes. Pas de pistage. Que de la technologie puissante.',
openApps:'Ouvrir les Apps',ourMission:'Notre Mission',
statProducts:'Apps',statToolsLabel:'Outils Cr\u00e9\u00e9s',statLanguages:'Langues',statBuilding:'Toujours en Construction',
featuredProduct:'Produit Vedette',
samAtlasTag:'Constructeur d\'agents IA. Produits num\u00e9riques pour cr\u00e9er et vendre des agents IA. Aucune connexion requise.',
alpha1DesignTag:'R\u00e9daction IA, compression d\'images et palettes de couleurs. Propuls\u00e9 par Claude API.',
privacyToolkitTag:'17 outils de s\u00e9curit\u00e9 navigateur. D\u00e9tection phishing, chiffrement AES-256, d\u00e9codeur JWT.',
toolboxTag:'700+ outils web organis\u00e9s en 50+ cat\u00e9gories. Votre kit d\u00e9veloppeur complet.',
openApp:'Ouvrir l\'App',
openSource:'Open Source',projectsTitle:'Projets',
projectsSub:'D\u00e9p\u00f4ts publics de alpha-1-design',
viewOnGitHub:'Voir sur GitHub',searchProjects:'Rechercher des projets...',
ourMissionLabel:'Notre Mission',
missionH:'La technologie construite pour <em>tout le monde</em> \u2014 pas seulement ceux qui ont des moyens.',
missionP1:'Alpha-1 Studio est un studio technologique mondial cr\u00e9ant des outils de confidentialit\u00e9, des produits IA et des utilitaires d\u00e9veloppeur.',
missionP2:'Construit du Ghana. Utilis\u00e9 dans le monde entier. Am\u00e9lior\u00e9 chaque jour.',
founderRole:'Fondateur \u00b7 D\u00e9veloppeur Full-Stack \u00b7 Ghana',
statSecurity:'Outils de S\u00e9curit\u00e9',
faqLabel:'FAQ',faqTitle:'Des questions?<br/>R\u00e9ponses.',
faqSub:'Tout ce que vous devez savoir sur Alpha-1 Studio.',
emailUs:'Envoyez-nous un Email',
faqQ1:'Qu\'est-ce qu\'Alpha-1 Studio?',
faqA1:'Alpha-1 Studio est un studio technologique mondial. Fond\u00e9 par Samuel Mensah au Ghana.',
faqQ2:'Qu\'est-ce que Sam Atlas?',
faqA2:'Sam Atlas est une plateforme de construction d\'agents IA. Nous vendons des produits num\u00e9riques.',
faqQ3:'Mes donn\u00e9es sont-elles s\u00fbres?',
faqA3:'Absolument. Tous les produits sont ax\u00e9s sur la confidentialit\u00e9. Privacy Toolkit fonctionne 100% dans votre navigateur.',
faqQ4:'Les outils sont-ils gratuits?',
faqA4:'Oui \u2014 la plupart des produits sont enti\u00e8rement gratuits.',
faqQ5:'Puis-je collaborer ou embaucher?',
faqA5:'Oui. Nous sommes ouverts aux collaborations. Email alphariansamuel@gmail.com ou WhatsApp +233553016346.',
footerDesc:'Studio technologique mondial cr\u00e9ant des outils de confidentialit\u00e9, produits IA et utilitaires d\u00e9veloppeur.',
quickLinks:'Liens Rapides',resources:'Ressources',portfolio:'Portfolio',faqs:'FAQs',follow:'Suivez-nous',
copyright:'\u00a9 2026 Alpha-1 Studio. Tous droits r\u00e9serv\u00e9s.',
builtFrom:'Construit du Ghana pour le monde.',
launcherTitle1:'Vos',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'S\u00e9lectionnez une app pour la lancer instantan\u00e9ment.',
statApps:'Apps',statTools:'Outils',statFree:'Gratuit',
launcherHint:'Les apps chargent en plein \u00e9cran \u2014 aucun t\u00e9l\u00e9chargement requis',
backToApps:'Retour aux Apps',embedded:'Int\u00e9gr\u00e9',openInNewTab:'Ouvrir dans un nouvel onglet',
backToStudio:'Retour au Studio',
},
es: {
navHome:'Inicio',navApps:'Apps',navProjects:'Proyectos',navMission:'Misi\u00f3n',navFAQ:'FAQ',
openAppsBtn:'Abrir Apps',pressEsc:'Presiona',toClose:'para cerrar',shortcuts:'Atajos',
heroBadge:'Estudio Tecnol\u00f3gico Global \u00b7 Ghana',
heroH1:'Construyendo el futuro.<br/>Desde Ghana,<br/>Para el Mundo.',
heroP:'Herramientas de privacidad, productos de IA y utilidades para desarrolladores \u2014 gratis, abiertas y para todos. Sin cuentas. Sin rastreo. Solo tecnolog\u00eda potente.',
openApps:'Abrir Apps',ourMission:'Nuestra Misi\u00f3n',
statProducts:'Productos',statToolsLabel:'Herramientas',statLanguages:'Idiomas',statBuilding:'Seguimos Construyendo',
featuredProduct:'Producto Destacado',
samAtlasTag:'Creador de Agentes IA. Productos digitales para crear y vender agentes IA. Sin inicio de sesi\u00f3n.',
alpha1DesignTag:'Escritura IA, compresi\u00f3n de im\u00e1genes y paletas de colores. Impulsado por Claude API.',
privacyToolkitTag:'17 herramientas de seguridad. Detecci\u00f3n de phishing, cifrado AES-256, decodificador JWT.',
toolboxTag:'700+ herramientas web en 50+ categor\u00edas. Tu kit de desarrollador completo.',
openApp:'Abrir App',
openSource:'C\u00f3digo Abierto',projectsTitle:'Proyectos',
projectsSub:'Repositorios p\u00fablicos de alpha-1-design',
viewOnGitHub:'Ver en GitHub',searchProjects:'Buscar proyectos...',
ourMissionLabel:'Nuestra Misi\u00f3n',
missionH:'Tecnolog\u00eda creada para <em>todos</em> \u2014 no solo para quienes tienen recursos.',
missionP1:'Alpha-1 Studio es un estudio tecnol\u00f3gico global que crea herramientas de privacidad, productos IA y utilidades para desarrolladores.',
missionP2:'Construido desde Ghana. Usado mundialmente. Mejorando cada d\u00eda.',
founderRole:'Fundador \u00b7 Desarrollador Full-Stack \u00b7 Ghana',
statSecurity:'Herramientas de Seguridad',
faqLabel:'FAQ',faqTitle:'\u00bfPreguntas?<br/>Respuestas.',
faqSub:'Todo lo que necesitas saber sobre Alpha-1 Studio.',
emailUs:'Env\u00edanos un Email',
faqQ1:'\u00bfQu\u00e9 es Alpha-1 Studio?',
faqA1:'Alpha-1 Studio es un estudio tecnol\u00f3gico global. Fundado por Samuel Mensah en Ghana.',
faqQ2:'\u00bfQu\u00e9 es Sam Atlas?',
faqA2:'Sam Atlas es una plataforma creadora de agentes IA. Vendemos productos digitales.',
faqQ3:'\u00bfEst\u00e1n seguros mis datos?',
faqA3:'Absolutamente. Todos los productos priorizan la privacidad. Privacy Toolkit funciona 100% en tu navegador.',
faqQ4:'\u00bfSon gratuitas las herramientas?',
faqA4:'S\u00ed \u2014 la mayor\u00eda de los productos son completamente gratuitos.',
faqQ5:'\u00bfPuedo colaborar o contratar?',
faqA5:'S\u00ed. Estamos abiertos a colaboraciones. Email alphariansamuel@gmail.com o WhatsApp +233553016346.',
footerDesc:'Estudio tecnol\u00f3gico global creando herramientas de privacidad, productos IA y utilidades para desarrolladores.',
quickLinks:'Enlaces R\u00e1pidos',resources:'Recursos',portfolio:'Portafolio',faqs:'FAQs',follow:'S\u00edguenos',
copyright:'\u00a9 2026 Alpha-1 Studio. Todos los derechos reservados.',
builtFrom:'Construido desde Ghana para el mundo.',
launcherTitle1:'Tus',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'Selecciona una app para lanzarla instant\u00e1neamente.',
statApps:'Apps',statTools:'Herramientas',statFree:'Gratis',
launcherHint:'Las apps cargan a pantalla completa \u2014 sin descargas',
backToApps:'Volver a Apps',embedded:'Integrada',openInNewTab:'Abrir en nueva pesta\u00f1a',
backToStudio:'Volver al Estudio',
},
pt: {
navHome:'In\u00edcio',navApps:'Apps',navProjects:'Projetos',navMission:'Miss\u00e3o',navFAQ:'FAQ',
openAppsBtn:'Abrir Apps',pressEsc:'Pressione',toClose:'para fechar',shortcuts:'Atalhos',
heroBadge:'Est\u00fadio Tecnol\u00f3gico Global \u00b7 Gana',
heroH1:'Construindo o futuro.<br/>De Gana,<br/>Para o Mundo.',
heroP:'Ferramentas de privacidade, produtos de IA e utilit\u00e1rios para desenvolvedores \u2014 gr\u00e1tis, abertos e para todos. Sem contas. Sem rastreio. Apenas tecnologia poderosa.',
openApps:'Abrir Apps',ourMission:'Nossa Miss\u00e3o',
statProducts:'Produtos',statToolsLabel:'Ferramentas',statLanguages:'Idiomas',statBuilding:'Ainda Construindo',
featuredProduct:'Produto em Destaque',
samAtlasTag:'Construtor de Agentes IA. Produtos digitais para criar e vender agentes IA. Sem login.',
alpha1DesignTag:'Escrita IA, compress\u00e3o de imagens e paletas de cores. Alimentado pela Claude API.',
privacyToolkitTag:'17 ferramentas de seguran\u00e7a. Detec\u00e7\u00e3o de phishing, criptografia AES-256, decodificador JWT.',
toolboxTag:'700+ ferramentas web em 50+ categorias. Seu kit de desenvolvedor completo.',
openApp:'Abrir App',
openSource:'C\u00f3digo Aberto',projectsTitle:'Projetos',
projectsSub:'Reposit\u00f3rios p\u00fablicos de alpha-1-design',
viewOnGitHub:'Ver no GitHub',searchProjects:'Pesquisar projetos...',
ourMissionLabel:'Nossa Miss\u00e3o',
missionH:'Tecnologia constru\u00edda para <em>todos</em> \u2014 n\u00e3o apenas para quem tem recursos.',
missionP1:'Alpha-1 Studio \u00e9 um est\u00fadio tecnol\u00f3gico global criando ferramentas de privacidade, produtos IA e utilit\u00e1rios.',
missionP2:'Constru\u00eddo de Gana. Usado mundialmente. Melhorando cada dia.',
founderRole:'Fundador \u00b7 Desenvolvedor Full-Stack \u00b7 Gana',
statSecurity:'Ferramentas de Seguran\u00e7a',
faqLabel:'FAQ',faqTitle:'Perguntas?<br/>Respostas.',
faqSub:'Tudo que voc\u00ea precisa saber sobre Alpha-1 Studio.',
emailUs:'Envie-nos um Email',
faqQ1:'O que \u00e9 Alpha-1 Studio?',
faqA1:'Alpha-1 Studio \u00e9 um est\u00fadio tecnol\u00f3gico global. Fundado por Samuel Mensah em Gana.',
faqQ2:'O que \u00e9 Sam Atlas?',
faqA2:'Sam Atlas \u00e9 uma plataforma de constru\u00e7\u00e3o de agentes IA. Vendemos produtos digitais.',
faqQ3:'Meus dados est\u00e3o seguros?',
faqA3:'Absolutamente. Todos os produtos priorizam a privacidade. Privacy Toolkit funciona 100% no seu navegador.',
faqQ4:'As ferramentas s\u00e3o gratuitas?',
faqA4:'Sim \u2014 a maioria dos produtos s\u00e3o completamente gratuitos.',
faqQ5:'Posso colaborar ou contratar?',
faqA5:'Sim. Estamos abertos a colabora\u00e7\u00f5es. Email alphariansamuel@gmail.com ou WhatsApp +233553016346.',
footerDesc:'Est\u00fadio tecnol\u00f3gico global criando ferramentas de privacidade, produtos IA e utilit\u00e1rios.',
quickLinks:'Links R\u00e1pidos',resources:'Recursos',portfolio:'Portf\u00f3lio',faqs:'FAQs',follow:'Siga',
copyright:'\u00a9 2026 Alpha-1 Studio. Todos os direitos reservados.',
builtFrom:'Constru\u00eddo de Gana para o mundo.',
launcherTitle1:'Suas',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'Selecione uma app para lan\u00e7\u00e1-la instantaneamente.',
statApps:'Apps',statTools:'Ferramentas',statFree:'Gr\u00e1tis',
launcherHint:'Apps carregam em tela cheia \u2014 sem downloads',
backToApps:'Voltar para Apps',embedded:'Incorporado',openInNewTab:'Abrir em nova aba',
backToStudio:'Voltar ao Est\u00fadio',
},
ar: {
navHome:'\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',navApps:'\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a',navProjects:'\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639',navMission:'\u0627\u0644\u0631\u0633\u0627\u0644\u0629',navFAQ:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629',
openAppsBtn:'\u0641\u062a\u062d \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a',pressEsc:'\u0627\u0636\u063a\u0637',toClose:'\u0644\u0644\u0625\u063a\u0644\u0627\u0642',shortcuts:'\u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a',
heroBadge:'\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0639\u0627\u0644\u0645\u064a \u00b7 \u063a\u0627\u0646\u0627',
heroH1:'\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644.<br/>\u0645\u0646 \u063a\u0627\u0646\u0627\u060c<br/>\u0644\u0644\u0639\u0627\u0644\u0645.',
heroP:'\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0648\u0645\u0646\u062a\u062c\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0648\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0645\u0637\u0648\u0631\u064a\u0646 \u2014 \u0645\u062c\u0627\u0646\u064a\u0629 \u0648\u0645\u0641\u062a\u0648\u062d\u0629 \u0644\u0644\u062c\u0645\u064a\u0639.',
openApps:'\u0641\u062a\u062d \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a',ourMission:'\u0631\u0633\u0627\u0644\u062a\u0646\u0627',
statProducts:'\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a',statToolsLabel:'\u0627\u0644\u0623\u062f\u0648\u0627\u062a',statLanguages:'\u0627\u0644\u0644\u063a\u0627\u062a',statBuilding:'\u0644\u0627 \u0632\u0627\u0644 \u0646\u0628\u0646\u064a',
featuredProduct:'\u0645\u0646\u062a\u062c \u0645\u0645\u064a\u0632',
samAtlasTag:'\u0628\u0646\u0627\u0621 \u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a. \u0645\u0646\u062a\u062c\u0627\u062a \u0631\u0642\u0645\u064a\u0629 \u0644\u0625\u0646\u0634\u0627\u0621 \u0648\u0628\u064a\u0639 \u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.',
alpha1DesignTag:'\u0643\u062a\u0627\u0628\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a\u060c \u0636\u063a\u0637 \u0627\u0644\u0635\u0648\u0631\u060c \u0648\u0644\u0648\u062d\u0627\u062a \u0627\u0644\u0623\u0644\u0648\u0627\u0646.',
privacyToolkitTag:'17 \u0623\u062f\u0627\u0629 \u0623\u0645\u0627\u0646 \u0641\u064a \u0627\u0644\u0645\u062a\u0635\u0641\u062d. \u0643\u0634\u0641 \u0627\u0644\u062a\u0635\u064a\u062f\u060c \u062a\u0634\u0641\u064a\u0631 AES-256\u060c \u0641\u0643 JWT.',
toolboxTag:'700+ \u0623\u062f\u0627\u0629 \u0648\u064a\u0628 \u0641\u064a 50+ \u0641\u0626\u0629. \u0645\u062c\u0645\u0648\u0639\u062a\u0643 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0637\u0648\u0631\u064a\u0646.',
openApp:'\u0641\u062a\u062d \u0627\u0644\u062a\u0637\u0628\u064a\u0642',
openSource:'\u0645\u0635\u062f\u0631 \u0645\u0641\u062a\u0648\u062d',projectsTitle:'\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639',
projectsSub:'\u0627\u0644\u0645\u0633\u062a\u0648\u062f\u0639\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0640 alpha-1-design',
viewOnGitHub:'\u0639\u0631\u0636 \u0639\u0644\u0649 GitHub',searchProjects:'\u0628\u062d\u062b \u0639\u0646 \u0645\u0634\u0627\u0631\u064a\u0639...',
ourMissionLabel:'\u0631\u0633\u0627\u0644\u062a\u0646\u0627',
missionH:'\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0645\u0628\u0646\u064a\u0629 \u0644\u0640<em>\u0627\u0644\u062c\u0645\u064a\u0639</em> \u2014 \u0644\u064a\u0633 \u0641\u0642\u0637 \u0644\u0623\u0635\u062d\u0627\u0628 \u0627\u0644\u0645\u0648\u0627\u0631\u062f.',
missionP1:'Alpha-1 Studio \u0647\u0648 \u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0639\u0627\u0644\u0645\u064a \u064a\u0628\u0646\u064a \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629.',
missionP2:'\u0628\u0646\u064a \u0645\u0646 \u063a\u0627\u0646\u0627. \u064a\u0633\u062a\u062e\u062f\u0645 \u0639\u0627\u0644\u0645\u064a\u0627\u064b. \u064a\u062a\u062d\u0633\u0646 \u0643\u0644 \u064a\u0648\u0645.',
founderRole:'\u0627\u0644\u0645\u0624\u0633\u0633 \u00b7 \u0645\u0637\u0648\u0631 \u0643\u0627\u0645\u0644 \u00b7 \u063a\u0627\u0646\u0627',
statSecurity:'\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u0623\u0645\u0627\u0646',
faqLabel:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629',faqTitle:'\u0623\u0633\u0626\u0644\u0629\u061f<br/>\u0625\u062c\u0627\u0628\u0627\u062a.',
faqSub:'\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c \u0645\u0639\u0631\u0641\u062a\u0647 \u0639\u0646 Alpha-1 Studio.',
emailUs:'\u0631\u0627\u0633\u0644\u0646\u0627 \u0628\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a',
faqQ1:'\u0645\u0627 \u0647\u0648 Alpha-1 Studio\u061f',
faqA1:'Alpha-1 Studio \u0647\u0648 \u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0639\u0627\u0644\u0645\u064a. \u0623\u0633\u0633\u0647 \u0633\u0627\u0645\u0648\u064a\u0644 \u0645\u0646\u0633\u0627\u0647 \u0641\u064a \u063a\u0627\u0646\u0627.',
faqQ2:'\u0645\u0627 \u0647\u0648 Sam Atlas\u061f',
faqA2:'Sam Atlas \u0647\u0648 \u0645\u0646\u0635\u0629 \u0628\u0646\u0627\u0621 \u0648\u0643\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.',
faqQ3:'\u0647\u0644 \u0628\u064a\u0627\u0646\u0627\u062a\u064a \u0622\u0645\u0646\u0629\u061f',
faqA3:'\u0628\u0627\u0644\u0637\u0628\u0639. \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u062a\u0639\u0637\u064a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0623\u0648\u0644\u0648\u064a\u0629.',
faqQ4:'\u0647\u0644 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0645\u062c\u0627\u0646\u064a\u0629\u061f',
faqA4:'\u0646\u0639\u0645 \u2014 \u0645\u0639\u0638\u0645 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0645\u062c\u0627\u0646\u064a\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644.',
faqQ5:'\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0623\u0648 \u0627\u0644\u062a\u0648\u0638\u064a\u0641\u061f',
faqA5:'\u0646\u0639\u0645. \u0646\u062d\u0646 \u0645\u0646\u0641\u062a\u062d\u0648\u0646 \u0644\u0644\u062a\u0639\u0627\u0648\u0646. \u0623\u0631\u0633\u0644 \u0625\u0644\u0649 alphariansamuel@gmail.com \u0623\u0648 WhatsApp +233553016346.',
footerDesc:'\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0639\u0627\u0644\u0645\u064a \u064a\u0628\u0646\u064a \u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629.',
quickLinks:'\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629',resources:'\u0627\u0644\u0645\u0648\u0627\u0631\u062f',portfolio:'\u0627\u0644\u0645\u062d\u0641\u0638\u0629',faqs:'\u0627\u0644\u0623\u0633\u0626\u0644\u0629',follow:'\u062a\u0627\u0628\u0639\u0646\u0627',
copyright:'\u00a9 2026 Alpha-1 Studio. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
builtFrom:'\u0628\u0646\u064a \u0645\u0646 \u063a\u0627\u0646\u0627 \u0644\u0644\u0639\u0627\u0644\u0645.',
launcherTitle1:'\u062a\u0637\u0628\u064a\u0642\u0627\u062a\u0643',launcherTitle2:'Alpha-1',launcherTitle3:'\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a',
launcherSub:'\u0627\u062e\u062a\u0631 \u062a\u0637\u0628\u064a\u0642\u0627\u064b \u0644\u062a\u0634\u063a\u064a\u0644\u0647 \u0641\u0648\u0631\u0627\u064b.',
statApps:'\u062a\u0637\u0628\u064a\u0642\u0627\u062a',statTools:'\u0623\u062f\u0648\u0627\u062a',statFree:'\u0645\u062c\u0627\u0646\u064a',
launcherHint:'\u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u062a\u0639\u0645\u0644 \u0628\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629',
backToApps:'\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a',embedded:'\u0645\u0636\u0645\u0646',openInNewTab:'\u0641\u062a\u062d \u0641\u064a \u0644\u0648\u062d\u0629 \u062c\u062f\u064a\u062f\u0629',
backToStudio:'\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0627\u0633\u062a\u0648\u062f\u064a\u0648',
},
ha: {
navHome:'Gida',navApps:'Apps',navProjects:'Ayyukan',navMission:'Manufa',navFAQ:'FAQ',
openAppsBtn:'Bude Apps',pressEsc:'Danna',toClose:'don rufe',shortcuts:'Gajartawa',
heroBadge:'Cibiyar Fasaha ta Duniya \u00b7 Ghana',
heroH1:'Gina gaba.<br/>Daga Ghana,<br/>Domin Duniya.',
heroP:'Kayan aikin sirri, samfuran AI da kayan aikin masu ha\u0199\u0199i \u2014 kyauta, bu\u0257e \u2019ya ga kowa.',
openApps:'Bude Apps',ourMission:'Manufar Mu',
statProducts:'Samfura',statToolsLabel:'Kayan Aiki',statLanguages:'Harsuna',statBuilding:'Har Yanzu Muna Gina',
featuredProduct:'Fitaccen Samfur',
samAtlasTag:'Maginin Wakilan AI. Samfuran dijital don gina da siyar da wakilan AI. Babu shiga.',
alpha1DesignTag:'Rubutun AI, matsar hotuna, da palette launi. Aiki da Claude API.',
privacyToolkitTag:'17 kayan aikin tsaro na browser. Gano phishing, AES-256 \u0257ari\u0257a, JWT decoder.',
toolboxTag:'700+ kayan aikin web a cikin 50+ rukunoni. Cikakken kayan aikin mai ha\u0199\u0199i.',
openApp:'Bude App',
openSource:'Budadden Tushe',projectsTitle:'Ayyukan',
projectsSub:'Ma\u0199ajiyar jama\'a daga alpha-1-design',
viewOnGitHub:'Duba akan GitHub',searchProjects:'Nemo ayyukan...',
ourMissionLabel:'Manufar Mu',
missionH:'Fasaha don <em>kowa</em> \u2014 ba kawai masu albarkatu ba.',
missionP1:'Alpha-1 Studio cibiyar fasaha ce ta duniya mai gina kayan aikin sirri.',
missionP2:'An gina daga Ghana. Ana amfani dashi a duniya. Ana inganta kowace rana.',
founderRole:'Wanda ya Kafa \u00b7 Mai Ha\u0199\u0199i Cikakke \u00b7 Ghana',
statSecurity:'Kayan Tsaro',
faqLabel:'FAQ',faqTitle:'Tambayoyi?<br/>Amsoshi.',
faqSub:'Duk abin da kuke bukata ku sani game da Alpha-1 Studio.',
emailUs:'Turo mana Imel',
faqQ1:'Menene Alpha-1 Studio?',
faqA1:'Alpha-1 Studio cibiyar fasaha ce ta duniya. Samuel Mensah ya kafa ta a Ghana.',
faqQ2:'Menene Sam Atlas?',
faqA2:'Sam Atlas dandali ne na gina wakilan AI. Muna siyar da samfuran dijital.',
faqQ3:'Bayanan na lafiya?',
faqA3:'Tabbas. Privacy Toolkit yana aiki 100% a cikin browser naka.',
faqQ4:'Kayan aikin kyauta ne?',
faqA4:'E \u2014 yawancin samfuran kyauta ne gabaki \u0257aya.',
faqQ5:'Zan iya ha\u0257a kai ko hayar?',
faqA5:'E. Muna bude don ha\u0257in gwiwa. Imel alphariansamuel@gmail.com ko WhatsApp +233553016346.',
footerDesc:'Cibiyar fasaha ta duniya mai gina kayan aikin sirri, samfuran AI da kayan aikin masu ha\u0199\u0199i.',
quickLinks:'Hanyoyi Saurin',resources:'Abubuwan',portfolio:'Fayil',faqs:'Tambayoyi',follow:'Bi Mu',
copyright:'\u00a9 2026 Alpha-1 Studio. Duk ha\u0199\u0199i na mallaka.',
builtFrom:'An gina daga Ghana don duniya.',
launcherTitle1:'App naka',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'Za\u0257i app don bu\u0257e ta nan take.',
statApps:'Apps',statTools:'Kayan Aiki',statFree:'Kyauta',
launcherHint:'Apps suna bu\u0257e cikin cikakken allo',
backToApps:'Koma Apps',embedded:'Ha\u0257a\u0257e',openInNewTab:'Bude a sabon shafi',
backToStudio:'Koma Studio',
},
tw: {
navHome:'Fie',navApps:'Apps',navProjects:'Nkuma',navMission:'Ns\u025bm',navFAQ:'FAQ',
openAppsBtn:'Bue Apps',pressEsc:'Hini',toClose:'atu\u0254 mu',shortcuts:'Nkwarewan',
heroBadge:'Studio T\u025bk\u0272nalo\u0254yi Wiata \u00b7 Ghana',
heroH1:'Y\u025bn Future no.<br/>Fir\u025b Ghana,<br/>Ma Wiata.',
heroP:'Nk\u0272ma ahotse\u00f0, AI \u00f0 ne developer utilities \u2014 kwa\u00e7, h\u025b ma obiara.',
openApps:'Bue Apps',ourMission:'Ns\u025bm Y\u025bn',
statProducts:'Nkuma',statToolsLabel:'Nk\u0272ma',statLanguages:'Kasa',statBuilding:'Da Y\u025bn So',
featuredProduct:'Nkuma B\u00f2so',
samAtlasTag:'AI Agent Builder. Nkuma digital ma boa wo k\u025b wo ns\u025b y\u025bna ten wo AI agents. Wonhia wo login.',
alpha1DesignTag:'AI twer, mpatade ho, ne color palette tools. Claude API na boa.',
privacyToolkitTag:'17 browser-based security tools. Phishing detection, AES-256, JWT decoder.',
toolboxTag:'700+ web tools w\u025b 50+ categories mu. Developer toolkit a ma wo hia.',
openApp:'Bue App',
openSource:'Source a h\u025b',projectsTitle:'Nkuma',
projectsSub:'Repositories a \u0254f\u025b fir\u025b alpha-1-design',
viewOnGitHub:'Hwe w\u025b GitHub',searchProjects:'Hwehw\u025b nkuma...',
ourMissionLabel:'Ns\u025bm Y\u025bn',
missionH:'T\u025bk\u0272nalo\u0254yi a <em>obiara</em> \u2014 nk\u025b mm\u025bf\u025b a w\u025bnya nsa nk\u025b nk\u025b.',
missionP1:'Alpha-1 Studio y\u025b studio t\u025bk\u0272nalo\u0254yi wiata a \u0254y\u025b nk\u0272ma ahotse\u00f0.',
missionP2:'Y\u025bn fir\u025b Ghana. Wiata nyinaa di dwuma. Da biara da biara y\u025bma y\u025b y\u025b no yie.',
founderRole:'Nyimpa a \u0254hyeae\u00ad \u00b7 Developer Full-Stack \u00b7 Ghana',
statSecurity:'Security Nk\u0272ma',
faqLabel:'FAQ',faqTitle:'Ns\u025bmmisa?<br/>Mmuae.',
faqSub:'Biribiara a wo hia s\u025b w\u025bnyim fa Alpha-1 Studio ho.',
emailUs:'M\u025b wo Email',
faqQ1:'S\u025bn ne Alpha-1 Studio?',
faqA1:'Alpha-1 Studio y\u025b studio t\u025bk\u0272nalo\u0254yi wiata. Samuel Mensah na \u0254hyeae w\u025b Ghana.',
faqQ2:'S\u025bn ne Sam Atlas?',
faqA2:'Sam Atlas y\u025b AI Agent Builder platform. Y\u025bt\u0254n nkuma digital.',
faqQ3:'Me data w\u025b ase?',
faqA3:'Ampa. Privacy Toolkit di dwuma 100% w\u025b wo browser mu.',
faqQ4:'Nk\u0272ma no y\u025b kwa\u00e7?',
faqA4:'Yiw \u2014 nkuma pii y\u025b kwa\u00e7 koraa.',
faqQ5:'Metumi aboa ana m\u025b aten?',
faqA5:'Yiw. Y\u025b\u0103 h\u025b ma nk\u0257y\u025bk. Email alphariansamuel@gmail.com or WhatsApp +233553016346.',
footerDesc:'Studio t\u025bk\u0272nalo\u0254yi wiata a \u0254y\u025b nk\u0272ma ahotse\u00f0, AI \u00f0 ne developer utilities.',
quickLinks:'Link Sen',resources:'Nk\u0272ma',portfolio:'Portfolio',faqs:'NSB',follow:'Di Y\u025bn Akyi',
copyright:'\u00a9 2026 Alpha-1 Studio. Nyinaa hokwan da wo nky\u025bn.',
builtFrom:'Y\u025bn fir\u025b Ghana ma wiata.',
launcherTitle1:'Wo',launcherTitle2:'Alpha-1',launcherTitle3:'Apps',
launcherSub:'Yi app bi di dwuma seesei ara.',
statApps:'Apps',statTools:'Nk\u0272ma',statFree:'Kwa\u00e7',
launcherHint:'Apps no bue w\u025b full-screen mu',
backToApps:'San k\u025b Apps',embedded:'Hy\u025b mu',openInNewTab:'Bue w\u025b tab fofor mu',
backToStudio:'San k\u025b Studio',
},
sw: {
navHome:'Nyumbani',navApps:'Programu',navProjects:'Miradi',navMission:'Dhamira',navFAQ:'Maswali',
openAppsBtn:'Fungua Programu',pressEsc:'Bonyeza',toClose:'kufunga',shortcuts:'Njia za Mkato',
heroBadge:'Studio ya Teknolojia ya Dunia \u00b7 Ghana',
heroH1:'Kujenga maisha ya baadaye.<br/>Kutoka Ghana,<br/>Kwa Dunia.',
heroP:'Zana za faragha, bidhaa za AI na vifaa vya wasanidi programu \u2014 bure, wazi na kwa kila mtu.',
openApps:'Fungua Programu',ourMission:'Dhamira Yetu',
statProducts:'Bidhaa',statToolsLabel:'Zana',statLanguages:'Lugha',statBuilding:'Bado Tunajenga',
featuredProduct:'Bidhaa Inayoangaziwa',
samAtlasTag:'Kijenzi cha Wakala wa AI. Bidhaa za digital kukusaidia kujenga na kuuza wakala wa AI. Hakuna kuingia.',
alpha1DesignTag:'Uandishi wa AI, kubana picha, na zana za rangi. Inaendeshwa na Claude API.',
privacyToolkitTag:'Zana 17 za usalama kwenye kivinjari. Ugunduzi wa hadaa, usimbaji AES-256, kikosi JWT.',
toolboxTag:'700+ zana za wavuti katika kategoria 50+. Kifaa chako kamili cha wasanidi.',
openApp:'Fungua Programu',
openSource:'Chanzo Wazi',projectsTitle:'Miradi',
projectsSub:'Hazina za umma kutoka alpha-1-design',
viewOnGitHub:'Tazama kwenye GitHub',searchProjects:'Tafuta miradi...',
ourMissionLabel:'Dhamira Yetu',
missionH:'Teknolojia iliyojengwa kwa <em>kila mtu</em> \u2014 si wale walio na rasilimali tu.',
missionP1:'Alpha-1 Studio ni studio ya teknolojia ya kimataifa inayojenga zana za faragha.',
missionP2:'Imejengwa kutoka Ghana. Inatumika duniani kote. Inaboreshwa kila siku.',
founderRole:'Mwanzilishi \u00b7 Msanidi Programu \u00b7 Ghana',
statSecurity:'Zana za Usalama',
faqLabel:'Maswali',faqTitle:'Maswali?<br/>Majibu.',
faqSub:'Kila unachohitaji kujua kuhusu Alpha-1 Studio.',
emailUs:'Tuma Barua Pepe',
faqQ1:'Alpha-1 Studio ni nini?',
faqA1:'Alpha-1 Studio ni studio ya teknolojia ya kimataifa. Ilianzishwa na Samuel Mensah nchini Ghana.',
faqQ2:'Sam Atlas ni nini?',
faqA2:'Sam Atlas ni jukwaa la kujenga wakala wa AI. Tunaauza bidhaa za digital.',
faqQ3:'Je data yangu iko salama?',
faqA3:'Kabisa. Privacy Toolkit inafanya kazi 100% kwenye kivinjari chako.',
faqQ4:'Zana ni bure?',
faqA4:'Ndiyo \u2014 bidhaa nyingi ni bure kabisa.',
faqQ5:'Naweza kushirikiana au kuajiri?',
faqA5:'Ndiyo. Tuko wazi kwa ushirikiano. Email alphariansamuel@gmail.com au WhatsApp +233553016346.',
footerDesc:'Studio ya teknolojia ya kimataifa inayojenga zana za faragha, bidhaa za AI na vifaa vya wasanidi.',
quickLinks:'Viungo vya Haraka',resources:'Rasilimali',portfolio:'Kwingineo',faqs:'Maswali',follow:'Tufuate',
copyright:'\u00a9 2026 Alpha-1 Studio. Haki zote zimehifadhiwa.',
builtFrom:'Imejengwa kutoka Ghana kwa dunia.',
launcherTitle1:'Programu',launcherTitle2:'Alpha-1',launcherTitle3:'Zako',
launcherSub:'Chagua programu ili kuifungua mara moja.',
statApps:'Programu',statTools:'Zana',statFree:'Bure',
launcherHint:'Programu hufungua skrini nzima',
backToApps:'Rudi kwa Programu',embedded:'Iliyopachikwa',openInNewTab:'Fungua katika kichupo kipya',
backToStudio:'Rudi kwa Studio',
}
};

function tr(key) {
  const lang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  if (TRANS[lang] && TRANS[lang][key]) return TRANS[lang][key];
  if (TRANS[DEFAULT_LANG] && TRANS[DEFAULT_LANG][key]) return TRANS[DEFAULT_LANG][key];
  return key;
}

function getFlag(code) {
  const l = LANGS.find(x=>x.code===code);
  return l ? l.flag : '\u{1F1EC}\u{1F1E7}';
}

function getDir(code) {
  const l = LANGS.find(x=>x.code===code);
  return l ? l.dir : 'ltr';
}

function getLabel(code) {
  const l = LANGS.find(x=>x.code===code);
  return l ? l.label : 'English';
}

let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

function setLang(code) {
  currentLang = code;
  localStorage.setItem(LANG_KEY, code);
  document.documentElement.lang = code;
  document.documentElement.dir = getDir(code);
  translatePage();
  renderLangDropdown();
  updateLangSwitcher(code);
  if (typeof loadApps === 'function') loadApps();
}

function updateLangSwitcher(code) {
  const flag = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flag) flag.textContent = getFlag(code);
  if (codeEl) codeEl.textContent = code.toUpperCase();
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.innerHTML = tr(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = tr(key);
  });
  const title = document.getElementById('pageTitle');
  if (title) title.textContent = 'Alpha-1 Studio' + (currentLang !== DEFAULT_LANG ? ' | ' + getLabel(currentLang) : '');
}

function renderLangDropdown() {
  const dd = document.getElementById('langDropdown');
  if (!dd) return;
  dd.innerHTML = LANGS.map(l => `
    <button class="lang-option${l.code === currentLang ? ' active' : ''}"
            onclick="setLang('${l.code}');toggleLangDropdown(event)">
      <span class="lo-flag">${l.flag}</span>
      <span class="lo-name">${l.label}</span>
      <span class="lo-code">${l.code.toUpperCase()}</span>
    </button>
  `).join('');
}

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('langDropdown');
  const chev = document.querySelector('.lang-chev');
  if (!dd) return;
  if (dd.querySelector('.lang-option') === null) {
    renderLangDropdown();
  }
  dd.classList.toggle('open');
  if (chev) chev.classList.toggle('open');
}

document.addEventListener('click', () => {
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
  const chev = document.querySelector('.lang-chev');
  if (chev) chev.classList.remove('open');
});

(function initI18n() {
  const saved = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  currentLang = saved;
  document.documentElement.lang = saved;
  document.documentElement.dir = getDir(saved);
})();
