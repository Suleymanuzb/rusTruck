import { notification } from "antd";

const ru = {
    language: "ru",

    header: {
        production: "производство и продажа автоспецтехники",
        workingTime: "Время работы",
        workingTimeOpened: "Пн-пт: с 8:00 до 18:00",
        workingTimeWeekend: "Сб-вс: Выходной",
        adress: "г. Нижний Новгород, ул. Торфяная, 35",
        forStates: "Для регионов:",
        numberForStates: " 8 (800)-511-05-25",
        forLocals: "Нижний Новгород:",
        numberFotLocals: " 8 (831) 235-26-16",
        gispText: "В РЕЕСТРЕ РОССИЙСКОЙ ПРОМЫШЛЕННОЙ ПРОДУКЦИИ",

        navigation: {
            about: "О нас",
            media: "Медиа",
            service: "Сервис",
            news: "Новости",
            contacts: "Контакты",
            filtered: "отфильтровано",
        },

        megaMenu: {
            categories: {
                title: "Категории",
                recommendedProducts: "Рекомендуемая продукция",

                products: {
                    product: "товар",
                    producta: "товарa",
                    products: "товаров",
                },

                types: [
                    {
                        id: 1,
                        name: "Шторные автомобили",
                        slug: "шторные-автомобили",

                        brandsOfTrucks: {
                            title: "Марка",

                            brands: [
                                "ГАЗ",
                                "КАМАЗ",
                                "JAC",
                                "DAEWOO",
                                "FOTON",
                                "DONG FENG",
                                "МАЗ",
                            ],
                        },

                        GrossLoad: {
                            title: "Полная масса, тонн",
                            grossCapacities: [
                                {
                                    cap: "до 12",
                                },
                                {
                                    cap: "до 20",
                                },
                                {
                                    cap: "до 5,5",
                                },
                                {
                                    cap: "свыше 20",
                                },
                            ],
                        },
                        seoText: `
    <div class="text-[18px] leading-normal">

        <p>
            Шторный грузовик сочетает удобство загрузки и надежность на дороге.
            Мощные двигатели и современная техника делают управление безопасным и комфортным.
            Компания «РусТрак» предлагает шторные автомобили, готовые к любым задачам.
            Надёжная конструкция и качественные материалы обеспечивают долгий срок службы машин.
            Выбор подходящей машины поможет справиться с самыми разными задачами.
            Каждая модель создаётся с учётом потребностей владельцев, сочетая практичность и долговечность.
        </p>

        <h2 class="text-[22px] mt-5 mb-3">
            Ассортимент
        </h2>

        <p>
            Мы предлагаем широкий ассортимент коммерческих автомобилей, отвечающих современным стандартам качества.
            В нашем каталоге представлена шторная машина в различных исполнениях и марках,
            что позволяет подобрать технику под любые задачи эксплуатации.
        </p>

        <p>Марки:</p>

        <ul class="list-none pl-0">
            <li class="relative pl-6.25 mb-2.5 text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-0.5 before:text-[#fec80b] before:text-[16px]">
                ГАЗ
            </li>

            <li class="relative pl-6.25 mb-2.5 text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-0.5 before:text-[#fec80b] before:text-[16px]">
                Валдай
            </li>

            <li class="relative pl-6.25 mb-2.5 text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-0.5 before:text-[#fec80b] before:text-[16px]">
                КАМАЗ
            </li>

            <li class="relative pl-6.25 mb-2.5 text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-0.5 before:text-[#fec80b] before:text-[16px]">
                Компас
            </li>

            <li class="relative pl-[25px] mb-[10px] text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                JAC
            </li>

            <li class="relative pl-[25px] mb-[10px] text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                МАЗ
            </li>

            <li class="relative pl-[25px] mb-[10px] text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                FAW
            </li>

            <li class="relative pl-[25px] mb-[10px] text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                FOTON
            </li>

            <li class="relative pl-[25px] mb-[10px] text-[18px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                DAEWOO
            </li>
        </ul>

        <p>
            Размеры и тоннаж автомобилей зависят от выбранного шасси:
            от компактных моделей грузоподъёмностью 3 тонны до мощных машин,
            рассчитанных на перевозку до 30 тонн. Такой диапазон позволяет подобрать
            оптимальное решение для любых логистических и коммерческих задач,
            обеспечивая надёжность и долговечность техники.
        </p>

        <h2 class="text-[22px] mt-5 mb-3">
            Особенности шторных автомобилей
        </h2>

        <ul class="list-none pl-0">

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Оцинкованные стойки на болтовых соединениях — при повреждении их можно быстро заменить без сложного ремонта,
                что снижает затраты и сокращает простои.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Алюминиевые направляющие с резиновым уплотнителем — шторно бортовой автомобиль получает надёжную герметизацию,
                защищающую груз от влаги и пыли при эксплуатации в любых условиях.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Профиль Hossen — усиленный конструктивный элемент, который повышает жёсткость и долговечность всей надстройки.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Откидные борта на 180° — позволяют легко загружать и разгружать груз с любой стороны, экономя время на маршруте.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Сдвижная штора в обе стороны — гибкость эксплуатации: доступ к грузу возможен с любой стороны платформы.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Алюминиевая передняя стенка — лёгкая и прочная, она снижает общий вес конструкции и повышает устойчивость к коррозии.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Сдвижная крыша — обеспечивает удобный доступ сверху, что особенно важно при погрузке негабаритных грузов в шторно бортовой фургон.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Тент крыши с крестообразным усилителем — выдерживает дополнительные нагрузки и сохраняет форму даже при длительной эксплуатации.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Двунаправленное усиление бокового тента — повышает надёжность при перевозке тяжёлых и хрупких грузов.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Скрытые петли крепления груза — безопасная фиксация без выступающих элементов, что делает платформу аккуратной и удобной.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Складная лестница — быстрый и безопасный доступ к кузову без дополнительных приспособлений.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Три варианта крепления надстройки к подрамнику — шторный фургон адаптируется к разным условиям монтажа,
                обеспечивая универсальность для различных задач и типов шасси.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Сдвижные центральные стойки — позволяют оптимально использовать пространство и упрощают работу с крупногабаритными грузами.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Алюминиевые ворота со скрытой запорной арматурой — надёжная защита груза и эстетичный внешний вид без лишних деталей.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Противозаливной козырёк — дополнительная защита от осадков и грязи, повышающая сохранность перевозимого груза.
            </li>

        </ul>

        <h2 class="text-[22px] mt-5 mb-3">
            Сферы применения
        </h2>

        <p>
            Шторный грузовик от компании «РусТрак» находят широкое применение
            в строительных компаниях, логистических и транспортных организациях,
            обеспечивая безопасную и удобную доставку материалов. Они используются
            для коммерческой доставки товаров, в торговых и оптовых компаниях,
            а также при перевозке негабаритных и тяжёлых грузов.
            Надёжная конструкция и качественная защита груза делают их удобными
            для длительных маршрутов и работы в любых погодных условиях,
            обеспечивая эффективность перевозок и сохранность имущества.
        </p>

        <h2 class="text-[22px] mt-5 mb-3">
            Преимущества работы с компанией «РусТрак»
        </h2>

        <ul class="list-none pl-0">

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Большой выбор техники<br>
                У нас представлены шторные и другие коммерческие автомобили различных марок и типов,
                что позволяет подобрать технику под любые задачи.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Профессиональная поддержка<br>
                Наши специалисты помогают подобрать технику с учётом задач клиента и особенностей бизнеса.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Сертификация и контроль качества<br>
                Все грузовики проходят строгую проверку и сертифицированы, что гарантирует безопасность эксплуатации.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Гарантийное и послегарантийное обслуживание<br>
                Компания обеспечивает поддержку после покупки, включая техническое обслуживание и консультации.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Удобство покупки<br>
                Предоставляются прозрачные условия приобретения, различные формы оплаты и индивидуальные предложения для клиентов.
            </li>

            <li class="relative pl-[25px] mb-[10px] before:content-['♦'] before:absolute before:left-0 before:top-[2px] before:text-[#fec80b] before:text-[16px]">
                Опыт и репутация<br>
                «РусТрак» имеет многолетний опыт работы на рынке коммерческих автомобилей,
                что подтверждает высокий профессионализм и доверие клиентов.
            </li>

        </ul>

        <h2 class="text-[22px] mt-5 mb-3">
            Техника, созданная для надежности и комфорта
        </h2>

        <p>
            Купить шторный грузовик — выгодное решение, позволяющее оптимизировать логистику
            и сократить затраты на эксплуатацию. Выбирая технику, которая соответствует
            вашим требованиям и стандартам качества, вы получаете надёжный автомобиль,
            полностью готовый к эксплуатации. Компания «РусТрак» поможет подобрать модель,
            идеально подходящую для ваших нужд. Ознакомьтесь с характеристиками и возможностями
            каждой машины. Сделайте выбор в пользу надёжности, комфорта и долговечности вашей техники.
            Для оформления заказа свяжитесь с нами любым удобным способом и получите консультацию специалистов.
        </p>

    </div>
                                `,
                    },
                    {
                        id: 2,
                        name: "Краны-манипуляторы",
                        slug: "краны-манипуляторы",
                    },
                    {
                        id: 3,
                        name: "Автотопливозаправщики",
                        slug: "автотопливозаправщики",
                    },
                    {
                        id: 4,
                        name: "Автогидроподъёмники",
                        slug: "автогидроподъёмники",
                    },
                    {
                        id: 5,
                        name: "Автоцистерны",
                        slug: "автоцистерны",
                    },
                    {
                        id: 6,
                        name: "Автомобили-эвакуаторы",
                        slug: "автомобили-эвакуаторы",
                    },
                    {
                        id: 7,
                        name: "Изотермические фургоны",
                        slug: "изотермические-фургоны",
                    },
                    {
                        id: 8,
                        name: "Контейнеровозы",
                        slug: "контейнеровозы",
                    },
                    {
                        id: 9,
                        name: "Крюковые погрузчики",
                        slug: "крюковые-погрузчики",
                    },
                    {
                        id: 10,
                        name: "Самосвалы",
                        slug: "самосвалы",
                    },
                    {
                        id: 11,
                        name: "Автомобили ДОПОГ категории EXII",
                        slug: "автомобили-допог-категории-exii",
                    },
                ],
            },

            aboutUs: {
                title: "О нас",
                links: [
                    {
                        name: "О компании ООО «РусТрак»",
                        path: "/about",
                    },
                    {
                        name: "Новости",
                        path: "/news",
                    },
                    {
                        name: "Наши партнёры",
                        path: "/partners",
                    },
                    {
                        name: "Производство",
                        path: "/production",
                    },
                    {
                        name: "Поставщикам и партнёрам",
                        path: "/suppliers",
                    },
                    {
                        name: "Отзывы",
                        path: "/reviews",
                    },
                    {
                        name: "Сертификаты",
                        path: "/certificate",
                    },
                    {
                        name: "Вакансии",
                        path: "/vacancies",
                    },
                    {
                        name: "Кредит и лизинг",
                        path: "/leasing",
                    },
                ],
            },

            media: {
                title: "Медиа",
                links: [
                    {
                        name: "Фотогалерея",
                        path: "/photogallery",
                    },
                    {
                        name: "Видео",
                        path: "/video",
                    },
                    {
                        name: "Рекламные материалы",
                        path: "/promo",
                    },
                    {
                        name: "Информационные материалы",
                        path: "/info",
                    },
                ],
            },

            service: {
                links: [
                    {
                        name: "Сервис",
                        path: "/service",
                    },
                    {
                        name: "Ремонт",
                        path: "/remont",
                    },
                    {
                        name: "Новости",
                        path: "/news",
                    },
                    {
                        name: "Контакты",
                        path: "/contacts",
                    },
                ],
            },
        },
    },

    filteredPage: {
        intro: {
            sortText: "Сортировка:",

            sortDown: [
                "По популярности",
                "Сначала новые",
                "В наличии",
                "По возрастанию цены",
                "По бренду",
            ],
        },

        truckProducts: {
            notificationButton: "Уведомить о поступлении",
        },

        trucksInLine: {
            brand: "Марка",
            capacityOfTruck: "Габариты ТС",
            capacityNumber: Math.floor(Math.random() * 1000000),
            capacityOfLoad: "Грузоподъёмность, кг",
        },

        filterSideBar: {
            showMore: "Показать товары",
        },

        filterResponsive: {
            title: "Фильтры",
            reset: "сбросить",
        },
    },

    hero: {
        slides: [
            {
                id: 1,
                title: "АТЗ Рустрак включены в реестр российской промышленной продукции ",
                description:
                    "Теперь доступны для приобретения по Федеральному закону № 44-ФЗ",
                buttons: [
                    {
                        text: "Заказать звонок",
                        variant: "btn_big_border",
                    },
                ],
            },

            {
                id: 2,
                title: "В наличии шторные фургоны КАМАЗ 4308",
                description:
                    "Размеры надстройки: 6200x2550x2850 мм. Цена: 5 500 000 руб.",
                buttons: [
                    {
                        text: "Заказать звонок",
                        variant: "btn_big_border",
                    },
                ],
            },

            {
                id: 3,
                title: "Бортовые платформы со шторным механизмом",
                description:
                    "Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами и сдвижной крышей.",
                buttons: [
                    {
                        text: "Подробнее",
                        variant: "btn_big",
                    },
                ],
            },

            {
                id: 4,
                title: "ООО «РусТрак»",
                description:
                    "Производство и поставка специализированной техники и спецтранспорта",
                buttons: [
                    {
                        text: "Открыть каталог",
                        variant: "btn_big",
                    },
                    {
                        text: "Заказать звонок",
                        variant: "btn_big_border",
                    },
                ],
            },

            {
                id: 5,
                title: "Краны-манипуляторы на базе грузовиков MCV/HCV",
                description:
                    "Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окраска платформы в цвет крана.",
                buttons: [
                    {
                        text: "Подробнее",
                        variant: "btn_big",
                    },
                    {
                        text: "Заказать звонок",
                        variant: "btn_big_border",
                    },
                ],
            },

            {
                id: 6,
                title: "Автотопливозаправщики на базе грузовиков MCV/HCV",
                description:
                    "Производство и поставка автотопливозаправщиков объёмом 8 и 6 кубических метров. Алюминиевые коммуникации, композитные напорно-всасывающие рукава и производительный узел выдачи топлива.",
                buttons: [
                    {
                        text: "Подробнее",
                        variant: "btn_big",
                    },
                    {
                        text: "Заказать звонок",
                        variant: "btn_big_border",
                    },
                ],
            },
        ],
    },

    aboutCompany: {
        intro: {
            title: 'О компании <span class="rustrack text-[#FEC80B]">РусТрак</span>',
            paragraphs: [
                {
                    text: "Наша компания занимает лидирующие позиции на рынке спецтехники. Каждый день мы вносим свой вклад в развитие отечественного автопрома и укрепление российской экономики.",
                },
                {
                    text: "«РусТрак» является ведущим производителем коммерческого транспорта и специализированной техники. Наша работа признана и высоко оценена крупнейшими отечественными корпорациями и государственными структурами. Мы поставляем спецтехнику для таких компаний, как Газпром, Росатом, Россети, РСК «МИГ» и других.",
                },
            ],
            button: "Подробнее",
        },
    },

    CompanyStatistics: {
        fullThreeStats: [
            {
                numberOfStats: "17",
                unit: "лет",
                description:
                    "За 17 лет деятельности ООО «РусТрак» превратилось в крупное предприятие по производству и продаже специальной техники.",
            },
            {
                numberOfStats: "85",
                unit: "регионов",
                description:
                    "Мы обеспечили 85 регионов Российской Федерации надёжной техникой коммерческого и специализированного назначения.",
            },
            {
                numberOfStats: "11",
                unit: "автопроизводителей",
                description:
                    "ООО «РусТрак» дорожит доверием автомобильной промышленности, которое подтверждено официальными партнёрствами с 11 автопроизводителями.",
            },
        ],
    },

    scrollSlider: {
        into: {},

        linePart: [
            {
                id: 1,
                name: "Конструкторское бюро",
                text: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиентов.",
            },
            {
                id: 2,
                name: "Разработка",
                text: "Все проекты разработаны в соответствии с мануалами производителей транспортных средств.",
            },
            {
                id: 3,
                name: "Производственная база",
                text: "Собственная производственная база позволяет значительно снизить себестоимость продукции, повышая её конкурентоспособность.",
            },
            {
                id: 4,
                name: "Гарантия",
                text: "Собственное конструкторское бюро позволяет реализовать индивидуальные проекты клиентов. Гарантия на надстройки и работы соответствует гарантии на шасси.",
            },
            {
                id: 5,
                name: "Сервис",
                text: "Сервисное обслуживание: широкая партнёрская сервисная сеть на всей территории Российской Федерации.",
            },
        ],
    },

    products: {
        modal: {
            title: "Получить коммерческое предложение",

            inputs: [
                {
                    name: "name",
                    label: "Ваше имя *",
                    placeholder: "Иван",
                    type: "text",
                    must: "Это поле обязательно для заполнения",
                },
                {
                    name: "email",
                    label: "Электронная почта *",
                    placeholder: "russia@mail.com",
                    type: "email",
                    must: "Это поле обязательно для заполнения",
                },
                {
                    name: "tel",
                    label: "Телефон *",
                    placeholder: "+7 (___) ___-__-__",
                    type: "tel",
                    must: "Это поле обязательно для заполнения",
                },
            ],

            agreement: {
                text: "Я согласен",
                link: "на обработку персональных данных",
            },

            getPk: "Получить КП",
        },
    },

    anyQuestions: {
        extraQuest: "ОСТАЛИСЬ ВОПРОСЫ?",
        leaveContact:
            "Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время",

        inputs: [
            {
                label: "Ваше имя *",
                htmlFor: "name",
                placeholder: "Артем",
                name: "name",
                type: "text",
                must: "Это поле обязательно для заполнения",
            },
            {
                label: "Телефон *",
                htmlFor: "phone",
                placeholder: "+7",
                name: "tel",
                type: "tel",
                must: "Это поле обязательно для заполнения",
            },
        ],

        sendButton: "Отправить",

        agreement:
            'Нажимая на кнопку отправить <1 href="/upload/privacy_policy.pdf">Вы соглашаетесь на обработку персональных данных</1>',
    },

    newsSection: {
        intro: {
            title: "Новости",
        },
        categories: [
            {
                id: 1,
                slug: "pervyy-v-rossii-konteynerovoz-na-shassi-kamaz-65658-vypustil-rustrak",
            },
            {
                id: 2,
                slug: "rustrak-podvyel-itogi-uchastiya-v-vystavke-comvex-2026-",
            },
            {
                id: 3,
                slug: "sadko-9-fermer-obzavelsya-kmu-s-burilnoy-ustanovkoy-",
            },
            {
                id: 4,
                slug: "rustrak-pozdravryalet-s-mezhdunarodnym-zhenskim-dnyem",
            },
        ],
    },

    newsPage: {
        intro: {
            title: "Новости РусТрак",
        },

        back: "Назад",
        next: "Дальше",
        button: "Покозать ещё",
    },

    footer: {
        mainInfo: [
            {
                text: "Тел/факс: 8 (831) 235-25-17",
                to: "tel:88312352517",
            },
            {
                text: "Email: info+7603@rtrf.ru",
                to: "mailto:info+7603@rtrf.ru",
            },
            {
                text: "г. Нижний Новгород ул. Торфяная, 35",
                to: "https://yandex.ru/maps/?text=Нижний+Новгород+Торфяная+35",
                isExternal: true,
            },
            {
                text: "Заказать звонок",
                type: "button",
            },
            {
                text: "2009 - 2026 © Rus - Trucks",
                type: "disclaimerOne",
            },
            {
                text: " Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.",
                type: "disclaimer",
            },
        ],

        aboutUs: [
            { title: "О нас" },

            {
                text: "О компании ООО «Рустрак»",
                to: "/about",
            },
            {
                text: "Новости",
                to: "/news",
            },
            {
                text: "Наши партнёры",
                to: "/partners",
            },
            {
                text: "Производство",
                to: "/production",
            },
            {
                text: "Поставщикам и партнёрам",
                to: "/suppliers",
            },
            {
                text: "Отзывы",
                to: "/reviews",
            },
            {
                text: "Сертификаты",
                to: "/certificate",
            },
        ],

        services: [
            {
                text: "Вакансии",
                to: "/vacancies",
            },
            {
                text: "Кредит и лизинг",
                to: "/leasing",
            },
            {
                text: "Сервис",
                to: "/service",
            },
            {
                text: "Ремонт",
                to: "/remont",
            },
            {
                text: "Контакты",
                to: "/contacts",
            },
            { text: "Полезные статьи" },
        ],

        media: [
            {
                title: "Медиа",
            },
            {
                text: "Фотогалерея",
            },
            {
                text: "Видео",
            },
            {
                text: "Рекламные материалы",
            },
        ],

        inputTitle: {
            orderCall: "Заказать звонок",
            getInTouch: "Наш менеджер свяжется с Вами в ближайшее время",
        },

        inputs: [
            {
                label: "Ваше имя *",
                htmlFor: "name",
                placeholder: "Иван",
                name: "name",
                type: "text",
                must: "Поле обязательно для заполнения",
            },
            {
                label: "Телефон *",
                htmlFor: "phone",
                placeholder: "+7",
                name: "tel",
                type: "tel",
                must: "Поле обязательно для заполнения",
            },
        ],

        button: "Оставить заявку",

        agreement:
            'Я согласен <1 href="/upload/privacy_policy.pdf">на обработку персональных данных</1>',
    },

    contactsPage: {
        adressSection: {
            title: "Контакты производителя автоспецтехники РусТрак",

            adress: `603035 г. Нижний Новгород, ул. Торфяная, д. 35`,
            forLocals: "Нижний Новгород:",
            numberFotLocals: "8 (831) 235-25-17",
            forStates: "Для регионов:",
            numberForStates: "8 (800)-511-05-25",
            emailText: "Электронная почта: ",
            email: "info+7603@rtrf.ru",

            redisterText: "Запись на техническое обслуживание:",
            registerNumber: "8 (831) 225-00-55",
        },
        employeeSection: {
            title: "Сотрудники",

            employees: [
                {
                    id: 1,
                    name: "Шаронов Сергей Владимирович",
                    position: "Генеральный директор",
                    phoneNumber: "8 (831) 225-00-55",
                    email: "komdir@rtrf.ru",
                },
                {
                    id: 2,
                    name: "Сучков Александр Алексеевич",
                    position: "Коммерческий директор",
                    phoneNumber: "8 (831) 225-00-55",
                    email: "sale@rtrf.ru",
                },
                {
                    id: 3,
                    name: "Ширдин Михаил Васильевич",
                    position: "Руководитель отдела продаж",
                    extraNumber: "88312352517 доб.202",
                    phoneNumber: "89524466974",
                    email: "rop+7603@rtrf.ru",
                },
                {
                    id: 4,
                    name: "Савенко Екатерина Юрьевна",
                    position: "Менеджер по продажам",
                    phoneNumber: "88312352517 доб.214",
                    email: "RK+7603@rtrf.ru",
                },
                {
                    id: 5,
                    name: "Сергеева Юлия Юрьевна",
                    position: "Менеджер по продажам",
                    phoneNumber: "88312352551 доб.215",
                    email: "sale4+7603@rtrf.ru",
                },
                {
                    id: 6,
                    name: "Конев Максим Анатольевич",
                    position:
                        "Руководитель направления развития дилерской сети",
                    phoneNumber: "88312250055 доб.213",
                    extraNumber: "89302703728",
                    email: "sale3@rtrf.ru",
                },
                {
                    id: 7,
                    name: "Киселёв Иван Александрович",
                    position:
                        "Руководитель отдела по сертификации ООО «РусТрак»",
                    phoneNumber: "88312250055 доб.212",
                    extraNumber: "89534157742",
                    email: "sale2@rtrf.ru",
                },
                {
                    id: 8,
                    name: "Шалявин Дмитрий Леонидович",
                    position: "Главный конструктор",
                    phoneNumber: "88312250055 доб.701",
                    email: "kb@rtrf.ru",
                },
                {
                    id: 9,
                    name: "Ярилин Александр Валерьевич",
                    position: "Инженер по гарантии",
                    phoneNumber: "88312250055 доб.610",
                    email: "kb1@rtrf.ru",
                },

                {
                    id: 10,
                    name: "Муреев Александр Евгеньевич",
                    position: "Начальник ОТК",
                    phoneNumber: "88312250055 доб.601",
                    extraNumber: "89534154171",
                    email: "OTK@rtrf.ru",
                },
                {
                    id: 11,
                    name: "Иванов Сергей Иванович ",
                    position: "Руководитель отдела снабжения",
                    phoneNumber: "88312250055 доб.401",
                    extraNumber: "89519151423",
                    email: "snab@rtrf.ru",
                },
            ],
        },
    },

    servicePage: {
        part: {
            title: "Сервис по гарантийному ремонту автоспецтехники РусТрак",
            text: "После приобретения продукции в ООО «Рустрак» Вы всегда можете обратиться за помощью по любым вопросам, связанными с гарантийным обслуживанием, настройкой и ремонтом транспорного средства, поставкой дополнительного обурудования, а также внесением доработок под задачи клиента. Вы можете обратиться за технической поддержкой и консультацией по эксплуатации в любое время и в любой срок после заключения контракта.",
        },

        support: {
            title: "Как получить поддержку?",

            texts: [
                {
                    text: "<1>Заполнить Рекламационный акт</1> с внесением подписи ответственного лица и печати организации, подробно описать характер отказа. Приложить фото: шильды в пассажирской двери, шильды вышедшего из строя оборудования, первая страница ПТС",
                    number: "1",
                    href: "https://rtrf.ru/service/upload/RKLMACTRT26.pdf",
                },
                {
                    text: "Сфотографировать неисправности, а также общий вид изделия в целом.",
                    number: "2",
                },
                {
                    text: "Отправить заполненный акт, копию ПТС, фотографии неисправностей по электронной почте: <1>kb1@rtrf.ru</1>",
                    number: "3",
                    href: "mailto:kb1@rtrf.ru",
                },
            ],

            theyWillContact:
                "После этого специалисты гарантийной службы свяжутся с владельцем и предложат варианты организации ремонта.",

            anyQuestions:
                "Любые вопросы относительно гарантийного обслуживания техники производства «РусТрак» можно задать по телефону 8 (831) 225-00-55 (доб 610) или по электронной почте: kb1@rtrf.ru",
        },

        personCard: {
            name: "Дмитрий Волков",
            profession:
                "менеджер по вопросам гарантии и сервисного обслуживания",
            phoneNumber: "(831) 225-00-55 (доб 124)",
            email: "kb1@rtrf.ru",
        },
    },

    remontPage: {
        intro: {
            title: "Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем Новгороде",
            text: "Логистическая сфера опирается на устойчивую работу прицепной техники. Ремонт шторных полуприцепов обеспечивает восстановление работоспособности конструкции после интенсивной эксплуатации. Наши мастера учитывают конструктивные особенности узлов и применяют проверенные методы обслуживания. Компания «Рустрак» в Нижнем Новгороде предлагает сервис, ориентированный на качество и долговечность оборудования. Своевременные технические мероприятия поддерживают стабильное состояние прицепов при интенсивных нагрузках. Надёжный подход к обслуживанию формирует уверенность в бесперебойной работе техники.",
        },

        ourServices: {
            title: "Наши услуги",
            text: "Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем Новгороде после повреждений или выхода из строя. Мы восстанавливаем конструкцию прицепа, исправляем каркас и боковые тенты, ремонтируем двери, замки и механизмы открывания, а также восстанавливаем пол и борта прицепа. Все работы выполняются с высокой точностью и соблюдением стандартов качества, что гарантирует долговечность восстановленных элементов.",
            important:
                "<strong>Важно:</strong>  ремонт ходовой, двигателя, замена масел и плановое техническое обслуживание не производятся.",
        },

        advantages: {
            title: "Преимущества компании «Рустрак»",

            prems: [
                {
                    prem: "Большая производственная база – позволяет одновременно выполнять несколько крупных заказов и обслуживать большое количество техники.",
                },
                {
                    prem: "Вместительные цеха – обеспечивают удобство работы с крупногабаритными полуприцепами и комфорт для сотрудников.",
                },
                {
                    prem: "Профессиональные мастера – специалисты с опытом и знаниями гарантируют качественный и точный ремонт.",
                },
                {
                    prem: "Полный цикл производства – все работы выполняются на месте, от диагностики до финальной сборки, без привлечения сторонних подрядчиков.",
                },
                {
                    prem: "Опыт 17 лет – долгий срок работы на рынке подтверждает надёжность и компетентность компании.",
                },
                {
                    prem: "Гарантия на ремонт – обеспечивает уверенность в долговечности и качестве выполненных работ.",
                },
            ],

            Calcbutton: "Рассчитать стоимость ремонта",

            extraService: {
                title: "Качественный сервис для полуприцепов",
                text: "Ремонт шторных полуприцепов помогает продлить срок службы техники и сохранить её функциональность. Обратитесь к нашей команде, чтобы получить надежное и аккуратное обслуживание. Компания «Рустрак» в Нижнем Новгороде выполняет работы с вниманием к деталям и строгими стандартами качества. Доверьте нам технические задачи и получите результат, который оправдает ожидания. Запланируйте обслуживание заранее и убедитесь в удобстве нашего сервиса. Для начала сотрудничества свяжитесь с нами любым удобным способом, и мы поможем организовать все быстро и профессионально.",
            },
        },

        modalInfo: {
            title: "Рассчитать стоимость ремонта",
            leaveYourInfo:
                "Оставьте свои данные, и наш менеджер свяжется с вами для расчета стоимости.",

            form: [
                {
                    label: "Ваше имя <0>*</0>",
                    name: "name",
                    type: "text",
                    placeholder: "Иван",
                    focus: "nameUnique",
                    must: "Поле обязательно для заполнения",
                },
                {
                    label: "Телефон <0>*</0>",
                    name: "phoneNumber",
                    type: "tel",
                    placeholder: "+7 (_ _ _) _ _ _ - _ _ - _ _",
                    focus: "nameUnique",
                    must: "Поле обязательно для заполнения",
                },
            ],
        },
    },

    aboutPage: {
        intro: {
            title: "Автомобильный завод «РусТрак» - ведущий производитель коммерческого транспорта и специализированной техники в Нижнем Новгороде.",
            labelTexty: "14+",
            labelText: "лет опыта",
        },

        offers: {
            title: "Автомобильный завод «РусТрак» является предприятием полного цикла: от конструкторско-технологических разработок до готового изделия.",

            offerCards: [
                {
                    id: 1,
                    title: "Собственная производственная база",
                    text: "позволяет максимально снизить себестоимость продукции, повышая её конкурентоспособность",
                },
                {
                    id: 2,
                    title: "Отдел контроля качества",
                    text: "проверяет каждую единицу спецтехники, что гарантирует длительный срок эксплуатации и безотказную работу техники.",
                },
                {
                    id: 3,
                    title: "Разработка надстроек шасси",
                    text: "производится на шасси мировых производителей и позволяет предлагать уникальную технику — надёжную в эксплуатации и максимально адаптированную под конкретные условия работы.",
                },
                {
                    id: 4,
                    title: "Наличие конструкторского бюро",
                    text: "обеспечивает возможность индивидуального подхода к каждому клиенту.",
                },
                {
                    id: 5,
                    title: "Собственная служба логистики",
                    text: "предельно уменьшает сроки доставки комплектующих и агрегатов.",
                },
                {
                    id: 6,
                    title: "Сервисная партнёрская сеть",
                    text: "гарантирует техническую помощь на всей территории РФ.",
                },
            ],
        },

        whatWeAchieved: {
            title: "Сегодня ООО «Рустрак» - это:",

            achievements: [
                {
                    text: "3 производственных корпуса, общей площадью более 7000 м2;",
                },
                {
                    text: "производственная территория более 20000 м2;",
                },
                {
                    text: "служба качества, гарантирующая выпуск высококачественной техники;",
                },
                {
                    text: "современный парк станочного оборудования;",
                },
                {
                    text: "ежемесячный объём выпускаемой техники - до 110 единиц.",
                },
                {
                    text: "наличие собственной конструкторско-технологической службы",
                },
            ],
        },

        industriesServed: {
            leftCard: [
                {
                    title: "Отрасли применения выпускаемой техники:",
                    text: "Cтроительная, телекоммуникационная, коммунальная, дорожное хозяйство, логистика, сельское хозяйство.",
                },
                {
                    title: "Выпускаемая техника:",
                    text: "Краны-манипуляторы, автотопливозаправщики, автовышки, фургоны, самосвалы, бортовые платформы, эвакуаторы, крюковые погрузчики, мастерские, пищевые цистерны, вакуумные машины, автогидроподъёмники.",
                },
            ],
        },

        adv: {
            texts: [
                {
                    text: "ООО «РусТрак» является официальным дилером на территории РФ следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang, FASSI, Hangil, XCMG, HIAB.",
                },
                {
                    text: "За 16 лет деятельности компания заслужила высокий уровень доверия дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ, ГАЗ, DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС, ДАЙМЛЕР КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG, SHACHMAN, НЕФАЗ, ЗАВОД СТАРТ",
                },
                {
                    text: "Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и др.",
                },
            ],
        },
    },

    partnersPage: {
        title: "Партнёры",

        companies: [
            {
                title: "КАМАЗ",
                text: "Группа компаний «КАМАЗ» – крупнейшая автомобильная корпорация Российской Федерации. ПАО «КАМАЗ» входит в 20-ку ведущих мировых производителей тяжёлых грузовых автомобилей и находится на 16-м месте по объёмам производства тяжёлых грузовиков полной массой более 16 тонн. Группа организаций ПАО «КАМАЗ» объединяет 109 компаний на территории России, СНГ и дальнего зарубежья. Единый производственный комплекс группы организаций ПАО «КАМАЗ» охватывает весь технологический цикл производства грузовых автомобилей – от разработки, изготовления, сборки автотехники и автокомпонентов до сбыта готовой продукции и сервисного сопровождения.",
            },

            {
                title: "Группа ГАЗ",
                text: "«Группа ГАЗ» специализируется на разработке и производстве легких и среднетоннажных коммерческих автомобилей, автобусов, тяжелых грузовиков, силовых агрегатов и автокомпонентов.",
            },
            {
                title: 'ООО "Тракс Восток Руc"',
                text: "ООО «Тракс Восток Рус» является официальным дистрибьютором среднетоннажных грузовых автомобилей Компас 9 и Компас 12 с различными вариантами надстроек.",
                link: "https://compasstrucks.ru",
            },
            {
                title: "Публичное акционерное общество «НЕФАЗ».",
                text: 'Публичное акционерное общество "НЕФАЗ" входит в группу предприятий ПАО «КАМАЗ» и является крупнейшим в России заводом по производству спецнадстроек на шасси КАМАЗ.',

                link: "https://nefaz.ru",
            },
            {
                title: 'ООО "Палфингер Кран Рус"',
                text: '"Палфингер Кран Рус" - совместное предприятие концерна Palfinger(Австрия) и Группы Крафт Инвест (Россия) является эксклюзивным дистрибьютором Palfinger на территории Российский Федерации и стран СНГ',
                link: "https://www.palfinger.ru",
            },
            {
                title: "ООО «КМУ-РУС»",
                text: "ООО «КМУ-РУС» реализует краны-манипуляторы, автовышки известных южнокорейских брендов.",
                link: "https://kmu-rus.ru",
            },
            {
                title: 'ОАО "Завод Старт"',
                text: 'ОАО "Завод Старт" специализируется на производстве и реализации транспортных автоцистерн на широком ассортименте разновидностей шасси отечественного и зарубежного производства.',
                link: "http://zavod-start.ru",
            },
            {
                title: "МАЗ",
                text: "Официальный дистрибьютор коммерческой техники МАЗ в России.",
                link: "https://maz.by",
            },
            {
                title: "JAC Motors RUS",
                text: "Компания JAC Motors RUS является эксклюзивным импортером и дистрибьютором продукции китайского автоконцерна JAC на территории России.",
                link: "https://jaccar.ru",
            },
            {
                title: "ДУНФЭН ТРАК РУС",
                text: "ДУНФЭН ТРАК РУС",
            },
            {
                title: "ООО «Фотон Мотор»",
                text: "Компания ООО «Фотон Мотор» основана 27 апреля 2009 года в городе Москва, является представительством Пекинской машиностроительной компании Beiqi Foton Motor Co., Ltd.на территории РФ.",
                link: "https://foton-motor.ru",
            },
            {
                title: "ООО «ФЕРРО ОТТИМО»",
                text: "FASSI Эксклюзивный дистрибьютор в РФ ООО «ФЕРРО ОТТИМО»",
                link: "https://fassi.ru",
            },
            {
                title: "FAW",
                text: "FAW",
            },
            {
                title: "ООО «Шакман моторс»",
                text: "Официальный дистрибьютор грузовой техники Shacman в России.",
                link: "https://shacman.ru",
            },
        ],
    },

    productionPage: {
        intro: {
            title: "Производство",
            text: "Компания «РусТрак» — ведущий производитель коммерческого транспорта и специализированной техники в Нижнем Новгороде. Наша продукция - это автофургоны, бортовые платформы, краны-манипуляторы, мастерские, пищевые цистерны, автотопливозаправщики, автогидроподъёмники, самосвалы, выкуумные машины эвакуаторы, крюковые погрузчики. Все автомобили собираются на собственном производстве.",
        },

        scheme: [
            {
                text: "Производственные мощности «РусТрак» состоят из 3 корпусов, общей площадью более 7000 квадратных метров. Станочный парк оснащён современным высокотехнологичным оборудованием, что определяет высокое качество готовой продукции. Компания использует комплектующие известных мировых и отечественных производителей. Сегодня производительность компании - от 110 единиц в месяц.",
            },
            {
                title: "Высококвалифицированный персонал",
                text: "Залог качества продукции ООО «РусТрак» - это работа команды профессионалов на технологичном оборудовании компании. Руководство компании заботится о своих сотрудниках, создавая максимально комфортные условия труда и повышая профессиональную подготовку сотрудников. Каждые полгода сотрудники компании проходят переаттестацию знаний и навыков и проходят курсы повышения квалификации.",
            },
        ],

        details: [
            {
                title: "Собственное конструкторское бюро",
                text: "Компания «РусТрак» имеет собственное конструкторско-технологическое бюро, которое работает в тесном сотрудничестве с производством. Такая схема работы позволяет постоянно улучшать и модернизировать выпускаемую спецтехнику, учитывая пожелания наших клиентов. Мы готовы изготовить автомобиль практически для любых нужд!",
            },
            {
                title: "Контроль качества",
                text: "Контроль качества нашей продукции осуществляется на всех этапах производства. Мы используем только надёжные комплектующие, покупая их у проверенных поставщиков. Специалисты «РусТрак» строго следят за выполнением технологии производства. Постоянное тестирование и испытания выпускаемой продукции исключают поступление рекламаций. На производстве введена общемировая практика сертификации соответствия продукции: на каждую единицу спецтехники, которая сходит с нашего производства, имеется сертификат международного образца (ISO 9001).",
                extratext:
                    "Отдел контроля качества оценивает каждую единицу техники, что гарантирует нашим покупателям длительный срок эксплуатации и безотказную работу техники.",
            },
        ],
    },

    suppliersPage: {
        title: "Поставщикам и партнёрам",

        invite: [
            {
                title: "ООО «Рустрак» приглашает к сотрудничеству.",
                text: "Наша компания 17 лет работает на рынке производства и продажи коммерческого транспорта и спецтехники и прочно занимает ведущие позиции на российском рынке.",
            },
            {
                text: "Мы приглашаем к сотрудничеству поставщиков комплектующих, как одно из основных направлений развития компании.",
            },
            {
                text: "Наша компания заинтересована в долгосрочном и эффективном сотрудничестве.",
            },
        ],

        whatWeValue: {
            title: "Мы ценим в партнёрах:",

            values: [
                {
                    number: 1,
                    text: "Высококачественную продукцию;",
                },
                {
                    number: 2,
                    text: "Гибкую ценовую политику;",
                },
                {
                    number: 3,
                    text: "Регулярное информирование об ассортименте и складских остатках продукции;",
                },
                {
                    number: 4,
                    text: "Минимальные сроки поставки.",
                },
            ],

            importants:
                "Основные принципы ООО «РусТрак» при взаимодействии с партнёрами:",

            imp: [
                { text: "- Доверие," },
                { text: "- честность," },
                { text: "- Доверие," },
                { text: "- взаимопомощь;" },
            ],

            contractText:
                "Долгосрочное сотрудничество на взаимовыгодной основе. Обязательность и точность выполнения договоренностей. Соблюдение международных норм деловой этики.",
            wish: "Всегда рады Вам!",
        },
    },

    reviewsPage: {
        title: "Отзывы",
    },

    vacancyPage: {
        title: "Вакансии",
        avtoElectric: "Автоэлектрик",

        accardion: [
            {
                title: "Обязанности:",
                firstTexts: [
                    { text: "электромонтаж осветительного оборудования" },
                    {
                        text: "монтаж электрооборудования и надстроек на спецавтомобили",
                    },
                ],
            },

            {
                title: "Требования:",
                firstTexts: [
                    { text: "опыт работы приветствуется" },
                    {
                        text: "желание обучаться новому",
                    },
                ],
            },

            {
                title: "Условия:",
                firstTexts: [
                    { text: "желание обучаться новому" },
                    {
                        text: "полный соцпакет",
                    },
                    {
                        text: "отапливаемый цех, хорошие бытовые условия",
                    },
                    {
                        text: "предоставляем обучение по данному направлению",
                    },
                ],
            },
        ],
    },

    certificatePage: {
        title: "Сертификаты",
    },

    loanPage: {
        texts: [
            {
                title: "Кредит и лизинг на автоспецтехнику компании РусТрак",
                text: "Компания Рустрак предоставляет возможность покупки автоспецтехники в кредит и в лизинг. Мы работаем со всеми банками и лизинговыми компаниями. Помните, Вы можете выбрать любую лизинговуюкомпанию, которая Вас устроит.",
            },
            {
                title: "Основные условия лизинга",
                text: "Сумма аванса 5-30% от стоимости техники. Удорожание объекта лизинга в год на 8-9% Срок выплаты лизинговых платежей от 6-ти месяцев до 5-ти лет. После полного расчёта по лизингу техника переходит в собственность Вашей фирмы.",
            },
            {
                title: "Преимущества лизинговых схем:",
                text: "Максимальная отсрочка платежа. Ускоренная амортизация: участники лизинговой сделки имеют право применять механизм ускоренной амортизации предмета лизинга с коэффициентом ускорения до 3, что позволяет быстрее окупить технику, варьировать длительность лизингового договора. Налоговая оптимизация: все платежи, производимые по договору лизинга, относятся на себестоимость продукции, тем самым, уменьшая налогооблагаемую базу по налогу на прибыль. Экономия средств лизингополучателя в результате отсутствия необходимости уплаты налога на имущество, т.к. предмет лизинга в большинстве случаев находится на балансе лизинговой компании. Возможность приобрести и использовать имущество, не отвлекая при этом собственные средства предприятия единовременно и в полном объёме. Возможность приобретения в собственность предмета лизинга, полностью освобожденного от налоговой нагрузки, по истечению срока договора лизинга. Самостоятельный выбор предмета лизинга и его продавца лизингополучателем.",
            },
            {
                title: "Три основных вида лизинга:",
                threeTypesOFLeasing: [
                    {
                        number: 1,
                        type: "Финансовый лизинг",
                        desc: "Лизингодатель (лизинговая компания) приобретает в собственность указанное лизингополучателем имущество у определённого продавца и передаёт лизингополучателю это имущество в качестве предмета лизинга на определённых условиях во временное владение и пользование. Имущество (предмет лизинга) переходит в собственность лизингополучателя при условии выплаты лизингополучателем всех лизинговых платежей.",
                    },
                    {
                        number: 2,
                        type: "Оперативный лизинг",
                        desc: "Имущество не выкупается лизингополучателем, а остаётся в собственности лизинговой компании и после окончания срока действия договора лизинга ещё раз передаётся в лизинг или аренду.",
                    },
                    {
                        number: 3,
                        type: "Возвратный лизинг",
                        desc: "Предприятие покупает имущество на собственные средства, а затем обращается в лизинговую компанию. Это один из способов достаточно быстро вернуть оборотные средства. Лизинговая компания рассматривает имущество как предмет лизинга и приобретает его по договору купли-продажи у предприятия. Это же имущество передается в лизинг этому же предприятию.",
                    },
                ],
            },
            {
                title: 'Информация о партнёре - компания "CARCADE"',
                text: "Компания CARCADE – это универсальный лизинговый партнёр. CARCADE финансирует покупку как легковых автомобилей, так и коммерческого транспорта. Оформить коммерческие автомобили или спецтехнику в лизинг можно без предоставления финансовой отчётности по 2 документам. Условия оформления сделки: аванс от 4% до 50%, срок лизинга от 12 до 60 месяцев, последний платёж от 1% до 15%. Дополнительная выгода клиентов",
                extra: "CARCADE: каско в рассрочку, бесплатная цессия, электронный документооборот.За получением более подробной информации по спецтехники и приобретению в лизинг обращайтесь пo телефону: 8 (831) 225-00-55",
            },
        ],
    },

    truckDetailsForm: {
        title: "Подобрать аналогичный грузовик",

        form: [
            {
                label: "E-mail *",
                name: "email",
                type: "email",
                placeholder: "your@mail.com",
                focus: "emailTruckDetails",
                must: "Поле обязательно для заполнения",
            },
            {
                label: "Телефон *",
                name: "tel",
                type: "tel",
                placeholder: "+7 (_ _ _) _ _ _ - _ _ - _ _",
                focus: "phoneTruckDetails",
                must: "Поле обязательно для заполнения",
            },
        ],

        agreement:
            "Я согласен <0>на обработку персональных данных компанией ООО «РусТрак»</0>",

        button: "Получить варианты",

        success: {
            title: "Успешно",
            text: "Когда товар снова будет доступен для заказа, мы отправим Вам письмо-уведомление на почту",
            button: "Закрыть",
        },
    },

    breadcrumbs: {
        home: "Главная",
        catalog: "Каталог",
        news: "Новости",
        about: "О нас",
        contacts: "Контакты",
        service: "Сервис",
        remont: "Ремонт",
        success: "Успешно",
        partners: "Партнёры",
        production: "Производство",
        suppliers: "Поставщикам и партнёрам",
        reviews: "Отзывы и рекомендательные письма партнёров ООО «Рустрак»",
        vacancies: "Вакансии",
        certificate: "Сертификаты",
        leasing: "Кредит и лизинг",
    },
};

export default ru;
