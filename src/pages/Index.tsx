import BiographyHeader from "@/components/BiographyHeader";
import BiographyContent from "@/components/BiographyContent";
import CommentsSection from "@/components/CommentsSection";
import AdBanner from "@/components/AdBanner";
import AdSidebar from "@/components/AdSidebar";

const Index = () => {
  const biographyData = {
    name: "Курт Кобейн",
    title: "Лидер группы Nirvana, икона гранжа",
    birthYear: "1967",
    deathYear: "1994",
    imageUrl: "/placeholder.svg",
  };

  const biographyContent = [
    "Курт Дональд Кобейн родился 20 февраля 1967 года в городе Абердин, штат Вашингтон. Развод родителей в 1976 году стал травматическим событием в его жизни, которое сильно повлияло на его личность и творчество. С детства Курт проявлял интерес к музыке и искусству, рисовал и учился играть на гитаре.",

    "В 1987 году Кобейн основал группу Nirvana вместе с басистом Кристом Новоселичем. Их дебютный альбом 'Bleach' (1989) привлек внимание андеграундной сцены, но настоящий прорыв произошел с выходом альбома 'Nevermind' в 1991 году. Песня 'Smells Like Teen Spirit' стала гимном поколения и вывела гранж из подполья на мировую арену.",

    "Курт стал нежеланным лидером поколения X и символом альтернативной рок-культуры 90-х. Его тексты отражали отчуждение, боль и социальную критику. Несмотря на коммерческий успех, Кобейн страдал от депрессии, наркозависимости и давления славы. Он женился на Кортни Лав в 1992 году, и у них родилась дочь Фрэнсис Бин.",

    "5 апреля 1994 года Курт Кобейн покончил жизнь самоубийством в возрасте 27 лет в своем доме в Сиэтле. Его смерть потрясла мир музыки и стала символом трагедии творческих личностей. Наследие Кобейна продолжает влиять на рок-музыку, а Nirvana остается одной из самых влиятельных групп в истории.",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхний рекламный баннер */}
      <div className="w-full bg-white border-b border-gray-200 py-2">
        <div className="max-w-6xl mx-auto px-4">
          <AdBanner type="horizontal" size="large" className="w-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Основной контент */}
          <div className="flex-1 max-w-4xl">
            <BiographyHeader {...biographyData} />

            {/* Реклама между заголовком и контентом */}
            <div className="mb-8">
              <AdBanner type="horizontal" size="medium" />
            </div>

            <BiographyContent content={biographyContent} />

            {/* Реклама перед комментариями */}
            <div className="mb-8">
              <AdBanner type="horizontal" size="medium" />
            </div>

            <CommentsSection />
          </div>

          {/* Боковая панель с рекламой */}
          <div className="hidden lg:block">
            <AdSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
