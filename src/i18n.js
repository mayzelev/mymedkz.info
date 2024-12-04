import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ru: {
        translation: {
            // MainPage
            headerText: 'myMedInfo – онлайн сервис научно-медицинской информации. Ваши вопросы – наши ответы!',
            headerTextSecoundPart:
                'Для получения экспертной поддержки в области научно-медицинских вопросов достаточно заполнить форму ниже. Ответ будет направлен Вам по указанной в форме электронной почте в течение 3-10 рабочих дней (в зависимости от сложности вопроса).',
            stepOne: 'Шаг 1.',
            // PERSONAL DATA ENTRY FORM
            lastName: 'Фамилия',
            enterLastName: 'Введите вашу фамилию',
            name: 'Имя',
            enterName: 'Введите ваше имя',
            patronymic: 'Отчество',
            enterPatronymic: 'Введите ваше отчество',
            email: 'E-mail',
            enterEmail: 'Введите ваш e-mail',
            // FORM IF A HEALTHCARE SPECIALIST
            healthcareSpecialist: 'Являюсь специалистом здравоохранения',
            infoHealthcareSpecialist: 'Некоторая информация может быть предоставлена только специалистам здравоохранения',
            workPlace: 'Место работы',
            enterWorkPlace: 'Введите ваше место работы',
            position: 'Должность',
            enterPosition: 'Введите вашу должность',
            formFooterInfo:
                'Размещенная информация не является рекомендацией компании Такеда, рекламой компании или ее продукции, не должна быть основанием для принятия каких-либо решений или осуществления каких-либо действий. Решение о выборе метода лечения конкретного пациента должно приниматься лечащим врачом.',
            formFooterQuestionTitle: 'Вы также можете задать вопрос, отправив письмо на электронную почту ',
            formFooterQuestionTitle2: 'KZ.medinfo@takeda.com ',
            formFooterQuestionTitle3: 'с указанием:',
            formFooterQuestion:
                '1) ФИО, 2) Ваша роль (сотрудник здравоохранения/пациент/опекун/представитель общественности), 3) Наименование препарата, 4) Вопрос',

            // City selector
            selectCity: 'Выберите город',
            enterCity: 'Введите город',
            selectPlaceholder: 'Введите город',
            errorsRequired: 'Обязательно для заполнения',
            cities: [
                'Абай',
                'Акжар',
                'Акмол',
                'Аксай',
                'Аксу',
                'Аксукент',
                'Актау',
                'Актобе',
                'Алга',
                'Алматы',
                'Арыс',
                'Аса',
                'Астана',
                'Атасу',
                'Атырау',
                'Ауликоль',
                'Бадамша',
                'Балпык-Би',
                'Балхаш',
                'Балыкшы',
                'Бишкуль',
                'Боралдай',
                'Боровской',
                'Ботакара',
                'Гагарина',
                'Геолог',
                'Глубокое',
                'Есик',
                'Жалагаш',
                'Жанакорган',
                'Жанатас',
                'Жаркент',
                'Жезказган',
                'Жетысай',
                'Заречный',
                'Казыгурт',
                'Капчагай',
                'Карабулак',
                'Караганда',
                'Каратау',
                'Каргалы',
                'Каркаралинск',
                'Каскелен',
                'Кентау',
                'Коксайек',
                'Кокшетау',
                'Кордай',
                'Костанай',
                'Кулан',
                'Кызылорда',
                'Ленгер',
                'Мерке',
                'Момышулы',
                'Мырзакент',
                'Осакаровка',
                'Отеген-Батыр',
                'Павлодар',
                'Панфилово',
                'Петропавловск',
                'Рудный',
                'Сайрам',
                'Сарань',
                'Сарыагаш',
                'Сарыкемер',
                'Сарыозек',
                'Сатпаев',
                'Семей',
                'Сергеевка',
                'Степногорск',
                'Тайынша',
                'Талгар',
                'Талдыкорган',
                'Тараз',
                'Тарановка',
                'Таскала',
                'Тастыбулак',
                'Текели',
                'Темирлановка',
                'Темиртау',
                'Теренозек',
                'Тобыл',
                'Туздыбастау',
                'Турар Рыскулов',
                'Туркестан',
                'Узынагаш',
                'Уральск',
                'Усть-Каменогорск',
                'Уштобе',
                'Хромтау',
                'Шаульдер',
                'Шахтинск',
                'Шаян',
                'Шелек',
                'Шиели',
                'Шымкент',
                'Шу',
                'Щучинск',
                'Экибастуз'
            ],
            nextPage: 'Далее',
            mandatoryFields: 'обязательные для заполнения поля',
            noCitiesFound: 'Город не найден',
            // Step two
            stepTwo: 'Шаг 2.',
            therapeuticArea: 'Название терапевтической области',
            selectArea: 'Выберите область',
            therapeuticAreas: {
                Гастроэнтерология: [
                    'Дексилант (Декслансопразол)',
                    'Контролок Контрол (Пантопразол)',
                    'Мезавант (Месалазин)',
                    'Мовипреп (Макрогол 3350)',
                    'Энтивио (Ведолизумаб)',
                    'Другое'
                ],
                Гематология: [
                    'Адвейт (Октоког альфа)',
                    'Адиновейт (Руриоктоког альфа пегол)',
                    'Альбумин человеческий (Альбумин человеческий)',
                    'Иммунат (Фактор свертывания крови VIII)',
                    'Иммунин (Фактор свертывания крови IX)',
                    'Фейба (Антиингибиторный коагулянтный комплекс)',
                    'Другое'
                ],
                'Генетические заболевания': [
                    'Вприв (Велаглюцераза альфа)',
                    'Реплагал (Агалсидаза альфа)',
                    'Элапраза (Идурсульфаза)',
                    'Другое'
                ],
                Иммунология: [
                    'Киовиг (Иммуноглобулин человека нормальный)',
                    'Кувитру (Иммуноглобулин человеческий нормальный)',
                    'Такзайро (Ланаделумаб)',
                    'Цинрайз (Ингибитор С1 эстеразы (человеческий))',
                    'Другое'
                ],
                Онкология: ['Адцетрис (Брентуксимаб ведотин)', 'Алунбриг (Бригатиниб)', 'Нинларо (Иксазомиб)', 'Другое'],
                Прочее: [
                    'Актовегин (Депротеинизированный гемодериват крови телят)',
                    'Келтикан, Келтикан Комплекс (Витамин В12 и фолиевая кислота)',
                    'Матрифен (Фентанил)',
                    'Миорикс (Циклобензаприн)',
                    'Цераксон (Цитиколин)',
                    'Другое'
                ]
            },
            // DRUGS AND THEIR ISSUES
            preparation: 'Препарат',
            selectPreparetion: 'Выберите препарат',
            question: 'Вопрос',
            enterQuestion: 'Введите ваш вопрос',
            // QUESTIONNAIRE
            takedaPatient: 'Пациент принимает препарат компании Такеда?',
            pregnancy: 'Вопрос связан с нежелательным явлением или с беременностью?',
            instructions: 'Вопрос связан с применением препарата не по инструкции?',
            yes: 'Да',
            no: 'Нет',
            // MANDATORY CHECK BOXES
            iAgree: 'Я соглашаюсь с',
            iAgree2: 'политикой использования',
            iAgree3: 'и ознакомлен с политикой',
            iAgree4: 'в отношении обработки a персональных данных',
            iAgreeEmail: 'Я даю согласие на получение по электронной почте сообщений,',
            iAgreeEmail2: 'приглашений к участию в мероприятиях и/или опросах, рассылки',
            iAgreeEmail3: 'новостей и также другую информацию по научным/медицинским',
            iAgreeEmail4: 'вопросам',
            iAgreePresonal: 'Cогласие на обработку',
            iAgreePresonal2: 'персональных данных',
            sendQuestion: 'Отправить вопрос',
            back: 'Назад',
            // User agreement
            userAgree: 'Пользовательское соглашение и',
            userAgree2: 'персональные данные',
            // Footer
            footerLegalInformation: 'Правовая информация',
            footerPersonalDataProcessingPolicy: 'Политика обработки персональных данных',
            footerPrivacyPolicy: 'Политика конфиденциальности',
            footerRightsReserved: '© Takeda, 2024. Все права защищены.',
            footerLocation: 'г. Алматы, ул. Кунаева 77.',
            footerPhoneNumber: 'Тел.: +7 (727) 244-40-04,, факс: +7 (727) 244-40-05',
            footerLicenseDate: 'Декабрь 2024',
            // QUESTION SUBMISSION SUCCESS PAGE
            successTitle: 'Спасибо! Ваш вопрос отправлен.',
            successSubTitle: 'Ответ будет отправлен на ваш email в течение 3-10 дней в зависимости от сложности вопроса.',
            successSubTitleSpam: 'Если вы не получили ответ, попробуйте проверить папку Спам.',
            successSubTitleBtn: 'Задать медицинский вопрос по другому препарату'
        }
    },
    kz: {
        translation: {
            headerText: 'myMedInfo – онлайн ғылыми-медициналық ақпарат беру қызметі. Сіздің сұрақтарыңыз – біздің жауаптарымыз!',
            headerTextSecoundPart:
                'Ғылыми-медициналық сұрағыңызға сараптамалық қолдау алу үшін төмендегі форманы толтыру жеткілікті. Жауап формада көрсетілген электрондық поштаңызға 3-10 жұмыс күні ішінде (сұрақтың қиындығына байланысты) жіберіледі.',
            stepOne: '1-ші қадам',
            // PERSONAL DATA ENTRY FORM
            lastName: 'Тегі',
            enterLastName: 'Тегіңізді енгізіңіз',
            name: 'Аты',
            enterName: 'Атыңызды енгізіңіз',
            patronymic: 'Әкесінің аты',
            enterPatronymic: 'Әкеңіздің атын енгізіңіз',
            email: 'Электрондық пошта',
            enterEmail: 'Электрондық поштаңызды енгізіңіз',
            // FORM IF A HEALTHCARE SPECIALIST
            healthcareSpecialist: 'Мен денсаулық сақтау маманымын',
            infoHealthcareSpecialist: 'Кейбір ақпараттар тек денсаулық сақтау мамандарына ғана беріледі',
            workPlace: 'Жұмыс орны',
            enterWorkPlace: 'Жұмыс орныңызды енгізіңіз',
            position: 'Лауазымы',
            enterPosition: 'Лауазымыңызды енгізіңіз',
            formFooterInfo:
                'Орналастырылған ақпарат Такеда компаниясының ұсыныстары, жарнамасы немесе өнімдері емес, және шешім қабылдауға немесе әрекет жасауға негіз болмауы керек. Нақты пациенттің емдеу әдісін таңдау туралы шешімді емдеуші дәрігер қабылдауы керек.',
            formFooterQuestionTitle: 'Сондай-ақ, Сіз сұрағыңызды ',
            formFooterQuestionTitle2: 'KZ.medinfo@takeda.com',
            formFooterQuestionTitle3: 'электрондық поштасына келесі мәліметті қамтитын хат жіберу арқылы қоя аласыз:',
            formFooterQuestion:
                '1) Аты-жөніңіз, 2) Сіздің рөліңіз (денсаулық сақтау қызметкері/пациент/қамқоршы/қоғам өкілі), 3) Препарат атауы, 4) Сұрақ',
            // City selector
            selectCity: 'Қаланы таңдаңыз',
            enterCity: 'Қаланы енгізіңіз',
            selectPlaceholder: 'Қаланы енгізіңіз',
            errorsRequired: 'Міндетті түрде толтыру керек',
            cities: [
                'Абай',
                'Ақжар',
                'Ақмол',
                'Ақсай',
                'Ақсу',
                'Ақсукент',
                'Ақтау',
                'Ақтөбе',
                'Алға',
                'Алматы',
                'Арыс',
                'Аса',
                'Астана',
                'Атасу',
                'Атырау',
                'Әулиекөл',
                'Бадамша',
                'Балпық би',
                'Балқаш',
                'Балықшы',
                'Бішкуль',
                'Боралдай',
                'Боровской',
                'Ботақара',
                'Гагарин',
                'Геолог',
                'Глубокое',
                'Есік',
                'Жалағаш',
                'Жаңақорған',
                'Жаңатас',
                'Жаркент',
                'Жезқазған',
                'Жетісай',
                'Заречный',
                'Қазығұрт',
                'Қапшағай',
                'Қарабұлақ',
                'Қарағанды',
                'Қаратау',
                'Қарғалы',
                'Қарқаралы',
                'Қаскелең',
                'Кентау',
                'Көксайық',
                'Көкшетау',
                'Қордай',
                'Қостанай',
                'Құлан',
                'Қызылорда',
                'Леңгір',
                'Меркі',
                'Момышұлы',
                'Мырзакент',
                'Осакаровка',
                'Өтеген Батыр',
                'Павлодар',
                'Панфилово',
                'Петропавл',
                'Рудный',
                'Сайрам',
                'Саран',
                'Сарыағаш',
                'Сарыкемер',
                'Сарыөзек',
                'Сәтбаев',
                'Семей',
                'Сергеевка',
                'Степногорск',
                'Тайынша',
                'Талғар',
                'Талдықорған',
                'Тараз',
                'Тарановка',
                'Тасқала',
                'Тастыбұлақ',
                'Текелі',
                'Темірлан',
                'Теміртау',
                'Тереңөзек',
                'Тобыл',
                'Түздыбастау',
                'Тұрар Рысқұлов',
                'Түркістан',
                'Ұзынағаш',
                'Орал',
                'Өскемен',
                'Үштөбе',
                'Хромтау',
                'Шәуілдір',
                'Шахтинск',
                'Шаян',
                'Шелек',
                'Шиелі',
                'Шымкент',
                'Шу',
                'Щучинск',
                'Екібастұз'
            ],
            nextPage: 'Әрі қарай',
            mandatoryFields: 'міндетті түрде толтырылатын орындар',
            noCitiesFound: 'Қала тізімде жоқ',
            // Step two
            stepTwo: '2-ші қадам',
            therapeuticArea: 'Терапевтикалық облыс атауы',
            selectArea: 'Облысты таңдаңыз',
            therapeuticAreas: {
                Гастроэнтерология: [
                    'Дексилант (Декслансопразол)',
                    'Контролок Контрол (Пантопразол)',
                    'Мезавант (Месалазин)',
                    'Мовипреп (Макрогол 3350)',
                    'Энтивио (Ведолизумаб)',
                    'Басқа'
                ],
                Гематология: [
                    'Адвейт (Октоког альфа)',
                    'Адиновейт (Руриоктоког альфа пегол)',
                    'Адам альбумині (Адам альбумині)',
                    'Иммунат (Қан ұюының VIII факторы)',
                    'Иммунин (Қан ұюының IX факторы)',
                    'Фейба (Антиингибиторлық коагулянттық кешен)',
                    'Басқа'
                ],
                'Генетикалық аурулар': ['Вприв (Велаглюцераза альфа)', 'Реплагал (Агалсидаза альфа)', 'Элапраза (Идурсульфаза)', 'Басқа'],
                Иммунология: [
                    'Киовиг (Адамның қалыпты иммуноглобулиндері)',
                    'Кувитру (Адамның қалыпты иммуноглобулиндері)',
                    'Такзайро (Ланаделумаб)',
                    'Цинрайз (Адам плазмасынан алынған C1-тежегіш)',
                    'Басқа'
                ],
                Онкология: ['Адцетрис (Брентуксимаб ведотин)', 'Алунбриг (Бригатиниб)', 'Нинларо (Иксазомиб)', 'Басқа'],
                Басқа: [
                    'Актовегин (Депротеинизацияланған бұзау қанының гемодериваты)',
                    'Келтикан, Келтикан Комплекс (Витамин В12 және фолий қышқылы)',
                    'Матрифен (Фентанил)',
                    'Миорикс (Циклобензаприн)',
                    'Цераксон (Цитиколин)',
                    'Басқа'
                ]
            },
            // DRUGS AND THEIR ISSUES
            preparation: 'Препарат',
            selectPreparetion: 'Препаратты таңдаңыз',
            question: 'Сұрақ',
            enterQuestion: 'Сұрағыңызды енгізіңіз',
            // QUESTIONNAIRE
            takedaPatient: 'Пациент Такеда компаниясының препаратын қабылдай ма?',
            pregnancy: 'Сұрақ жағымсыз құбылыс немесе жүктілікпен байланысты ма?',
            instructions: 'Сұрақ препаратты нұсқаулыққа сай емес қолданумен байланысты ма?',
            yes: 'Иә',
            no: 'Жоқ',
            // MANDATORY CHECK BOXES
            iAgree: 'Мен пайдалану',
            iAgree2: 'саясатына келісемін',
            iAgree3: 'және жеке деректерді',
            iAgree4: 'өңдеу саясатын оқыдым',
            iAgreeEmail: 'Электрондық пошта арқылы хабарламалар,',
            iAgreeEmail2: 'іс-шараларға және/немесе сауалнамаларға қатысуға шақырулар, жаңалықтар',
            iAgreeEmail3: 'тарату және басқа да ғылыми/медициналық мәселелер бойынша ақпарат алу үшін',
            iAgreeEmail4: 'келісім беремін',
            iAgreePresonal: 'Жеке деректерді',
            iAgreePresonal2: 'өңдеуге келісім',
            sendQuestion: 'Сұрақты жіберу',
            back: 'Артқа',
            // User agreement
            userAgree: 'Пайдаланушы келісімі және',
            userAgree2: 'жеке деректер',
            // Footer
            footerLegalInformation: 'Құқықтық ақпарат',
            footerPersonalDataProcessingPolicy: 'Жеке мәліметтерді өңдеу саясаты',
            footerPrivacyPolicy: 'Құпиялылық саясаты',
            footerRightsReserved: '© Takeda, 2024. Барлық құқықтар қорғалған.',
            footerLocation: 'Алматы қ., Қонаев көшесі, 77.',
            footerPhoneNumber: 'Тел.: +7 (727) 244-40-04,, факс: +7 (727) 244-40-05',
            footerLicenseDate: '2024 жыл, желтоқсан айы',
            // QUESTION SUBMISSION SUCCESS PAGE
            successTitle: 'Рақмет! Сұрағыңыз жіберілді.',
            successSubTitle: 'Жауап сұрағыңыздың қиындығына байланысты электрондық поштаңызға 3-10 күн ішінде жіберіледі.',
            successSubTitleSpam: 'Егер жауап алмасаңыз, Спам қалтасын тексеріп көріңіз.',
            successSubTitleBtn: 'Басқа препарат бойынша медициналық сұрақ қою'
        }
    }
};
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: true,
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
