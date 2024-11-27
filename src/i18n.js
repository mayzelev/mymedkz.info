import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    ru: {
        translation: {
            headerText: 'myMedInfo – онлайн сервис научно-медицинской информации. Ваши вопросы – наши ответы!',
            headerTextSecoundPart:
                'Для получения экспертной поддержки в области научно-медицинских вопросов достаточно заполнить форму ниже. Ответ будет направлен Вам по указанной в форме электронной почте в течение 3-10 рабочих дней (в зависимости от сложности вопроса).',
            footerLegalInformation: 'Правовая информация',
            footerPersonalDataProcessingPolicy: 'Политика обработки персональных данных',
            footerPrivacyPolicy: 'Политика конфиденциальности',
            footerRightsReserved: '© Takeda, 2024. Все права защищены.',
            footerLocation: 'г. Алматы, ул. Кунаева 77.',
            footerPhoneNumber: 'Тел.: +7 (727) 244-40-04,, факс: +7 (727) 244-40-05',
            footerLicenseDate: 'Декабрь 2024'
        }
    },
    kz: {
        translation: {
            headerText: 'myMedInfo – онлайн ғылыми-медициналық ақпарат беру қызметі. Сіздің сұрақтарыңыз – біздің жауаптарымыз!',
            headerTextSecoundPart:
                'Ғылыми-медициналық сұрағыңызға сараптамалық қолдау алу үшін төмендегі форманы толтыру жеткілікті. Жауап формада көрсетілген электрондық поштаңызға 3-10 жұмыс күні ішінде (сұрақтың қиындығына байланысты) жіберіледі.',
            footerLegalInformation: 'Құқықтық ақпарат',
            footerPersonalDataProcessingPolicy: 'Жеке мәліметтерді өңдеу саясаты',
            footerPrivacyPolicy: 'Құпиялылық саясаты',
            footerRightsReserved: '© Takeda, 2024. Барлық құқықтар қорғалған.',
            footerLocation: 'Алматы қ., Қонаев көшесі, 77.',
            footerPhoneNumber: 'Тел.: +7 (727) 244-40-04,, факс: +7 (727) 244-40-05',
            footerLicenseDate: '2024 жыл, желтоқсан айы'
        }
    }
};
i18n.use(LanguageDetector)
    .use(initReactI18next) // Для інтеграції з React
    .init({
        debug: true, // Для розробки
        lng: 'ru', // Мова за замовчуванням
        resources,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
