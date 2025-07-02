import AdBanner from "./AdBanner";
import { Card } from "@/components/ui/card";

const AdSidebar = () => {
  return (
    <div className="w-64 space-y-6">
      {/* Вертикальная реклама */}
      <AdBanner type="vertical" size="medium" />

      {/* Дополнительные рекламные блоки */}
      <div className="space-y-4">
        <AdBanner type="square" size="medium" />
        <AdBanner type="square" size="medium" />
      </div>

      {/* Рекламный блок с текстом */}
      <Card className="bg-gray-100 border-0 p-4">
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-2">РЕКЛАМА</div>
          <div className="text-sm font-semibold text-gray-800 mb-2">
            Рекламное место
          </div>
          <div className="text-xs text-gray-600 mb-3">
            Разместите здесь свою рекламу
          </div>
          <div className="text-xs text-gray-500">320×240 px</div>
        </div>
      </Card>
    </div>
  );
};

export default AdSidebar;
