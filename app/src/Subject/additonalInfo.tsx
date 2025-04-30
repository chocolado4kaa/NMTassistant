const AdditonalInfo = () => {
  return (
    <div className="bg-gray-100 py-12 mt-12 additional">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Що включає курс?
          </h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Тести для закріплення матеріалу</li>
            <li>Пояснення граматики та правил</li>
            <li>Підбірка необхідної лексики</li>
            <li>Практика читання та розуміння текстів</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Чому обирають нас?
          </h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Актуальні матеріали відповідно до НМТ</li>
            <li>Зручний формат навчання</li>
            <li>Швидкий доступ до тестів і вправ</li>
            <li>Підтримка команди викладачів</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditonalInfo;
