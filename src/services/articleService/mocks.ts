import { Article, ArticleDetails, Category } from './types'

export const articlesMock: Article[] = [
  {
    author: 'John Doe',
    authorId: '123',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Technology',
    categoryId: '456',
    description: 'This is a dummy article about technology.',
    id: '789',
    tags: ['Bez laktózy', 'Hlavný chod', 'Polievky'],
    title: 'Olivový hummus',
    dateAdded: '2023-06-01',
  },
  {
    author: 'Jane Smith',
    authorId: '456',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    category: 'Science',
    categoryId: '789',
    description: 'A dummy article discussing scientific discoveries.',
    id: '012',
    tags: ['Bez lepku', 'Hlavný chod'],
    title: 'Famózne paradajkové rizoto',
    dateAdded: '2023-05-28',
  },
  {
    author: 'David Johnson',
    authorId: '789',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    category: 'Business',
    categoryId: '123',
    description: 'A dummy article on business strategies.',
    id: '345',
    tags: ['Predjedlá', 'Bez lepku'],
    title: 'Chrumkavá paradajková bruschetta',
    dateAdded: '2023-06-02',
  },
  {
    author: 'Sarah Williams',
    authorId: '012',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    category: 'Health',
    categoryId: '234',
    description: 'A dummy article about maintaining a healthy lifestyle.',
    id: '567',
    tags: ['Hlavný chod'],
    title: 'Zeleninový tart z lístkového cesta',
    dateAdded: '2023-05-30',
  },
  {
    author: 'Michael Brown',
    authorId: '345',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    category: 'Education',
    categoryId: '345',
    description: 'A dummy article discussing the importance of education.',
    id: '890',
    tags: ['Bez lepku', 'Šaláty'],
    title: 'Jednoduchý grécky šalát',
    dateAdded: '2023-06-03',
  },
  {
    author: 'Emily Davis',
    authorId: '567',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Technology',
    categoryId: '456',
    description: 'This is another dummy article about technology.',
    id: '123',
    tags: ['Bez lepku', 'Sladké', 'Dezert'],
    title: 'Arašidové brownies s malinami',
    dateAdded: '2023-06-04',
  },
  {
    author: 'James Wilson',
    authorId: '890',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    category: 'Science',
    categoryId: '789',
    description: 'A dummy article on scientific experiments.',
    id: '456',
    tags: ['Bez laktózy', 'Hlavný chod'],
    title: 'Paella s morskými plodmi',
    dateAdded: '2023-06-02',
  },
  {
    author: 'Olivia Taylor',
    authorId: '123',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    category: 'Business',
    categoryId: '123',
    description: 'A dummy article on effective business communication.',
    id: '787',
    tags: ['Bez lepku', 'Hlavný chod'],
    title: 'Tikka Masala',
    dateAdded: '2023-05-29',
  },
  {
    author: 'Benjamin Martin',
    authorId: '456',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    category: 'Health',
    categoryId: '234',
    description: 'A dummy article about the benefits of regular exercise.',
    id: '011',
    tags: ['Sladké', 'Dezert'],
    title: 'Čokoládový tart',
    dateAdded: '2023-06-01',
  },
  {
    author: 'Sophia Thompson',
    authorId: '789',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    category: 'Education',
    categoryId: '345',
    description: 'A dummy article discussing innovative teaching methods.',
    id: '341',
    tags: ['Hlavný chod', 'Bez lepku'],
    title: 'Špagety Bolognese',
    dateAdded: '2023-05-31',
  },
]

export const categoriesMock: Category[] = [
  { id: '1111', name: 'Hlavný chod' },
  { id: '2222', name: 'Dezert' },
  { id: '4444', name: 'Predjedlá' },
  { id: '3333', name: 'Šaláty' },
  { id: '5555', name: 'Polievky' },
  { id: '6666', name: 'Nápoje' },
  { id: '8888', name: 'Bez lepku' },
  { id: '9999', name: 'Bez laktózy' },
  { id: '7777', name: 'Sladké' },
]

export const articlesDetailsMocks: ArticleDetails[] = [
  {
    author: 'John Doe',
    authorId: '123',
    body: 'Ako tak pozerám do kalendára, Veľká noc je už za rohom! Tentokrát mi začiatok roka ubehol ultra rýchlo a človek sa ani nenazdá a bude tu máj a s ním aj ja - opäť o rok staršia. :D Ale nebudem predbiehať, teším sa na Veľkú noc a naše rodinné nedeľné raňajky. Veľkonočnú pasku, hrudku, vajcia natvrdo, údeniny, cviklu s chrenom a zemiakový šalát. Ale nie vždy musí byť Veľká noc len v tradičnom šate. :) Každý rok do nej pridávam aj nejakú tú novinku, naposledy to bola veľkonočná roláda s malinovým krémom, mrkvové mafiny, či avokádová nátierka s granátovým jablkom. A teraz sa môžu moji najbližší tešiť na výborný olivový hummus! Kombinácia cíceru, sezamovej pasty, cesnaku, citrónovej šťavy a olív Kalamata, je výborným krokom na vykročenie do inej svetovej kuchyne. :) Hummus servírovaný s chrumkavou cibuľkou, olivami, kolieskami uhorky a paradajok, pokvapkaný olivovým olejom - u nás doma sa zjedol rýchlosťou blesku a to nie sme milovníci cíceru. Všetky ingrediencie potrebné na tento recept, nájdete pod jednou strechou v Kauflande. Ak ešte nepoznáte ich značku K-Favourites, odporúčam vyskúšať - ingrediencie sú chuťovo výborné a cena príjemná. :)',
    category: 'Technology',
    categoryId: '456',
    description: 'This is a dummy article about technology.',
    id: '789',
    tags: ['Bez laktózy', 'Hlavný chod'],
    title: 'Olivový hummus',
    dateAdded: '2023-06-01',
    ingredients: [
      { id: '1', value: '250 g predvareného cíceru' },
      { id: '2', value: '60 g sezamovej pasty' },
      {
        id: '3',
        value: '40 g nakrájaných olív Kalamata (ja som použila olivy Kalamata K-Favourites, ktoré nájdete v Kauflande)',
      },
      { id: '4', value: '25 ml šťavy z citróna' },
      { id: '5', value: '1 - 2 strúčiky cesnaku' },
      { id: '6', value: '2 PL studenej vody' },
      { id: '7', value: '1 PL panenského olivového oleja' },
      { id: '8', value: '1/2 ČL rímskej rasce' },
      { id: '9', value: 'soľ a čierne korenie' },
    ],
    guide: [
      'Predvarený cícer z konzervy prepláchneme, preložíme do hrnca, zalejeme vodou, jemne osolíme a privedieme do varu. Keď začne vrieť, znížime teplotu a prikrytý varíme približne 20 minút. Mäkký cícer prepláchneme studenou vodou a zbavíme šupiek. Presypeme ho do výkonného mixéra a pridáme k nemu ostatné ingrediencie na hummus. Vymixujeme dohladka a v prípade potreby pridáme trochu vody. Dochutíme soľou, čiernym korením a citrónovou šťavou.',
      'Hummus pred podávaním ochutíme trochou mletej červenej papriky, pokvapkáme olivovým olejom a ozdobíme nakrájanou cibuľou, paradajkami, kolieskami uhorky a hrsťou zelených a čiernych olív. Servírujeme s plátkami citróna, slanými krekrami a výberom rôznych salám a syrov.',
    ],
  },
  {
    author: 'Jane Smith',
    authorId: '456',
    body: 'Tento víkend sme zvrtli novú variáciu rizota! Pôvodne som chcela spraviť tekvicové, ale z debničky na mňa "žmurkali" voňavé cherry paradajky, takže bolo spontánne rozhodnuté v prospech dnešného receptu na paradajkové rizoto. :) Rizoto je jeden z mojich najobľúbenejších receptov, jeho príprava nie je vôbec zložitá, stačí vám naň zopár ingrediencií a dokážete ho pripraviť na desiatky spôsobov v závislosti od sezóny. Na mojom blogu nájdete recept na hubové, ale i cviklové rizoto a čoskoro pribudnú aj ďalšie, keďže vás chcem naňho namotať :) Rizoto je úžasne krémové, prevoňané pečenými paradajkami s cesnakom a čerstvou bazalkou. Čochvíľa nám začne sezóna paradajok, tie skleníkové si však môžete dopriať už dnes a využiť ich rovno pri testovaní tohto receptu, prípadne odporúčam vyskúšať moju rýchlu paradajkovú polievku, paradajkový džem či mäsové guľky v paradajkovej omáčke. Verím, že si pochutíte!',
    category: 'Science',
    categoryId: '789',
    description: 'A dummy article discussing scientific discoveries.',
    id: '012',
    tags: ['Bez lepku', 'Hlavný chod'],
    title: 'Famózne paradajkové rizoto',
    dateAdded: '2023-05-28',
    ingredients: [
      { id: '1', value: '300 g ryže arborio' },
      { id: '2', value: '1 cibuľa' },
      { id: '3', value: '200 ml bieleho suchého vína' },
      { id: '4', value: '300 ml paradajkového pretlaku/passaty' },
      { id: '5', value: '700 ml vývaru/vody' },
      { id: '6', value: '3 plátky masla' },
      { id: '7', value: '100 g parmezánu' },
      { id: '8', value: 'panenský olivový olej' },
      { id: '9', value: 'soľ a čierne korenie' },
      { id: '10', value: 'sušená bazalka' },
      { id: '11', value: 'sušené oregano' },
      { id: '12', value: 'hrsť čerstvej bazalky' },
      { id: '13', value: '500 g cherry paradajok' },
      { id: '14', value: '4 strúčiky cesnaku' },
      { id: '15', value: 'panenský olivový olej' },
      { id: '16', value: 'soľ a čierne korenie' },
    ],
    guide: [
      'Paradajky nakrájame na štvrtiny a vložíme do misky. Pokvapkáme ich olivovým olejom (cca 5 PL panenského olivového oleja), pridáme prelisované strúčiky cesnaku a ochutíme soľou a čiernym korením. Premiešame lyžicou a necháme pár minút odležať. Následne celú zmes preložíme na plech vyložený papierom na pečenie a vložíme do rúry vyhriatej na 200 °C. Pečieme 25 minút.',
      'V menšom hrnci zohrejeme kurací alebo zeleninový vývar. Ak vývar nemáte, môžete použiť aj vodu - do menšieho hrnca dajte zohriať 700 ml vody a keď bude horúca, pridajte do nej lyžičku soli a dobre premiešajte. Vývar, prípadne vodu zohrievame preto, aby mali podobnú teplotu ako ryža. Vďaka tomu sa nezastaví proces varenia a budete mať rizoto presne také, aké má byť - krémové a neskutočne dobré.',
      'Kým sa vývar/voda zohrieva, zohrejeme si v hlbokej panvici olivový olej, pridáme nadrobno nasekanú cibuľu a opečieme dosklovita. Prisypeme nepremytú ryžu arborio (môžete použiť aj carnaroli ryžu) a poriadne premiešame, aby sa ryža obalila vo vrstve oleja. Opekáme cca 4 minúty, pričom ryžu pravidelne premiešavame. Prilejeme víno a za občasného miešania privedieme do varu. Varíme cca 2 minúty, kým sa víno neodparí.',
      'Prilejeme paradajkový pretlak/passatu a dobre premiešame. Znížime teplotu na stredný plameň, pridáme naberačku teplého vývaru alebo osolenej vody a pravidelne miešame, kým sa voda nevstrebe. Pokračujeme v postupnom pridávaní vody a zakaždým premiešavame, kým sa voda nevstrebe a ryža sa neuvarí al dente. Ryža je hotová vtedy, keď je obklopená krémovou tekutinou a po ochutnaní je jemne chrumkavá. Celý proces varenia trvá cca 25 minút.',
      'Rizoto stiahneme zo sporáka, pridáme k nemu plátky masla a nastrúhaný parmezán a vareškou jemne premiešame. Podľa potreby dochutíme soľou, čiernym korením, trochou sušeného oregana a bazalky. Rizoto servírujeme v hlbokých tanieroch, navrch dáme pečené paradajky a ozdobíme lístkami čerstvej bazalky. Rizoto podávame hneď po uvarení, vtedy chutí najlepšie, s pohárom bieleho vína priam dokonale!',
    ],
  },
  {
    author: 'David Johnson',
    authorId: '789',
    body: 'Blíži sa jar a s ňou aj všetky milé stretnutia s našimi blízkymi. U nás doma som zaviedla tradíciu nedeľných dlhých raňajok a vždy keď máme pred sebou voľný víkend, rada na tieto dlhé raňajky pozývam aj svojich najbližších. Jedlo a konverzácie pri spoločnom stole, ktoré ho sprevádzajú, sú pre mňa jedny z najmilších okamihov, preto rada vymýšľam vždy nové a nové kombinácie jedál, ktorými by som ich pohostila. :) A najradšej sa inšpirujem práve v talianskej kuchyni, keďže tá je známa svojou jednoduchosťou, kvalitnými ingredienciami a pritom zaručene chutným výsledkom. Mnohí z vás už určite poznajú recept na chrumkavú paradajkovú bruschettu, ktorú nájdete v mojej prvej kuchárskej knihe. Tento recept je jej malou obmenou, je však vhodný pre všetkých bezlepkáčov, nakoľko v ňom nájdete aj tip na bezgluténové pečivo od Kauflandu. V ich sortimente nájdete pod značkou K-free bezgluténové pečivo a cestoviny, ktoré rada využívam pri príprave bezlepkových receptov. Na chrumkavú bruschettu vám stačí zopár ingrediencií a výsledok je neuveriteľne chutný! Budem sa tešiť, ak recept najbližšie vyskúšate a dáte mi vedieť, ako vám chutilo.',
    category: 'Business',
    categoryId: '123',
    description: 'A dummy article on business strategies.',
    id: '345',
    tags: ['Predjedlá', 'Bez lepku'],
    title: 'Chrumkavá paradajková bruschetta',
    dateAdded: '2023-06-02',
    ingredients: [
      { id: '1', value: '500 g cherry paradajok' },
      { id: '2', value: '7 PL panenského olivového oleja' },
      { id: '3', value: '3 strúčiky cesnaku' },
      {
        id: '4',
        value:
          '1 bageta alebo iné pečivo (pre verziu bez lepku odporúčam použiť 1 balenie bezlepkových svetlých žemlí K-free, ktoré nájdete v Kauflande)',
      },
      { id: '5', value: 'mozzarella' },
      { id: '6', value: 'bazalkové pesto' },
      { id: '7', value: 'hrsť lístkov bazalky' },
      { id: '8', value: 'soľ a čierne korenie' },
    ],
    guide: [
      'Paradajky nakrájame na menšie kúsky a vložíme do misky. Zalejeme ich olivovým olejom, pridáme prelisované strúčiky cesnaku, ochutíme soľou a čiernym korením a dobre premiešame. Necháme pár minút postáť. Následne paradajky preložíme na plech vyložený papierom na pečenie a vložíme do rúry vyhriatej na 200 °C. Pečieme približne 30 minút, kým nezmäknú.',
      'Bagetu alebo iné pečivo nakrájame na približne rovnaké kúsky. Ak použijete bezlepkové svetlé žemle K-free od Kauflandu, prekrojte ich na polovicu. Jednotlivé kúsky potrieme zvyšným olivovým olejom, ktorý zostal v miske a opečieme na grile, panvici alebo vložíme na 10 minút do rúry. Chrumkavé pečivo potrieme pestom, na to dáme plátok mozzarelly, grilované paradajky a lístky čerstvej bazalky.',
    ],
  },
  {
    author: 'Sarah Williams',
    authorId: '012',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    category: 'Health',
    categoryId: '234',
    description: 'A dummy article about maintaining a healthy lifestyle.',
    id: '567',
    tags: ['Hlavný chod'],
    title: 'Zeleninový tart z lístkového cesta',
    dateAdded: '2023-05-30',
    ingredients: [],
    guide: [],
  },
  {
    author: 'Michael Brown',
    authorId: '345',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    category: 'Education',
    categoryId: '345',
    description: 'A dummy article discussing the importance of education.',
    id: '890',
    tags: ['Bez lepku', 'Šaláty'],
    title: 'Jednoduchý grécky šalát',
    dateAdded: '2023-06-03',
    ingredients: [],
    guide: [],
  },
  {
    author: 'Emily Davis',
    authorId: '567',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Technology',
    categoryId: '456',
    description: 'This is another dummy article about technology.',
    id: '123',
    tags: ['Bez lepku', 'Sladké', 'Dezert'],
    title: 'Arašidové brownies s malinami',
    dateAdded: '2023-06-04',
    ingredients: [],
    guide: [],
  },
  {
    author: 'James Wilson',
    authorId: '890',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    category: 'Science',
    categoryId: '789',
    description: 'A dummy article on scientific experiments.',
    id: '456',
    tags: ['Bez laktózy', 'Hlavný chod'],
    title: 'Paella s morskými plodmi',
    dateAdded: '2023-06-02',
    ingredients: [],
    guide: [],
  },
  {
    author: 'Olivia Taylor',
    authorId: '123',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    category: 'Business',
    categoryId: '123',
    description: 'A dummy article on effective business communication.',
    id: '787',
    tags: ['Bez lepku', 'Hlavný chod'],
    title: 'Tikka Masala',
    dateAdded: '2023-05-29',
    ingredients: [],
    guide: [],
  },
  {
    author: 'Benjamin Martin',
    authorId: '456',
    body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    category: 'Health',
    categoryId: '234',
    description: 'A dummy article about the benefits of regular exercise.',
    id: '011',
    tags: ['Sladké', 'Dezert'],
    title: 'Čokoládový tart',
    dateAdded: '2023-06-01',
    ingredients: [],
    guide: [],
  },
  {
    author: 'Sophia Thompson',
    authorId: '789',
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    category: 'Education',
    categoryId: '345',
    description: 'A dummy article discussing innovative teaching methods.',
    id: '341',
    tags: ['Hlavný chod', 'Bez lepku'],
    title: 'Špagety Bolognese',
    dateAdded: '2023-05-31',
    ingredients: [],
    guide: [],
  },
]

export const articleDetailsMock = (id: string): ArticleDetails => {
  const article = articlesDetailsMocks.find((article) => article.id === id)

  if (article) {
    return article
  }

  return {
    author: 'James Wilson',
    authorId: '890',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    category: 'Science',
    categoryId: '789',
    description: 'A dummy article on scientific experiments.',
    id: '456',
    tags: ['science', 'research', 'dummy'],
    title: 'Unveiling the Mysteries of Science',
    dateAdded: '2023-06-02',
    guide: ['lorem ipsum dolor sit amet, consect lorem ipsum dolor lorem impusm'],
    ingredients: [
      {
        id: '1',
        value: 'ingredient1',
      },
      {
        id: '2',
        value: 'ingredient2',
      },
      {
        id: '3',
        value: 'ingredient3',
      },
      {
        id: '4',
        value: 'ingredient4',
      },
      {
        id: '5',
        value: 'ingredient5',
      },
    ],
  }
}
