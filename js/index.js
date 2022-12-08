const contentName = document.querySelector('.content__name a');
const contentDescription = document.querySelector('.content__description');
const mainItemDescription = document.querySelectorAll('.main-item__description p');
const contentSubheader = document.querySelectorAll('.content__subheader');
const name = document.querySelector('.name');
const projects = document.querySelectorAll('.projects');


let language = {
    'ru': { 
        contentName: 'Привет, я Илья Андрианов.',
        contentDescription: 'Здесь вы найдете кто я и чем занимаюсь!',
        mainItemDescription: [
            'Я работаю только с малым бизнесом или индивидуальными клиентами.',
            'Но не верьте моим словам. Посмотрите мои последние проекты. Они представят меня лучше, чем просто слова.',
            'Я проделал огромный путь к своей нынешней точке. С детства я понимал, что буду разработчиком. Не просто разработчиком, а Разработчиком. Мой путь заключается в том, чтобы делать все возможное для своих клиентов. Я всегда стараюсь выяснить настоящие причины неисправностей и найти лучшее решение. Я думаю не только о коде и его качестве, но и о бизнес-логике и удовлетворенности клиентов.',
            'Каждый клиент, который у меня был, был счастлив работать со мной. Практически каждый второй клиент приходит ко мне по рекомендации. Я думаю, это говорит о многом.',
            'Мой бот помогает мне проводить уроки, автоматизирует домашние работы и тд.',
            'Мой блог в телеграме.',
            'Мой блог в телеграме.',
        ], 
        projects: [
            'Проект 1 - Ilandroxy Bot',
            'Проект 2 - Teletype',
            'Проект 3 - Авито репетиторство',
        ],
        contentSubheader: [
            'Обо мне',
            'Мое образование',
            'Проекты',
            'Отзывы',
            'Прайс-лист'
        ],
        name: '© Илья Андрианов',
        
    },
    'en': {
        contentName: `Hi, I'm Ilya Andrianov.`,
        contentDescription: 'Here you will find who I am and what I do!',
        mainItemDescription: [
            'I only work with small businesses or individual clients.',
            `But don't believe my words. Check out my latest projects. They will represent me better than mere words.`,
            'I have come a long way to my current point. Since childhood, I knew that I would be a developer. Not just a developer, but a developer. My path is to do my best for my clients. I always try to find out the real causes of malfunctions and find the best solution. I think not only about the code and its quality, but also about the business logic and customer satisfaction.',
            `Every client I've had has been happy to work with me. Almost every second client comes to me on the recommendation. I think it says a lot.`,
            'My bot helps me with my lessons, automates my homework, etc.',
            'My telegram blog.',
            'My telegram blog.',
        ], 
        projects: [
            'Project 1 - Ilandroxy Bot',
            'Project 2 - Teletype',
            'Project 3 - Avito Tutoring',
        ],
        contentSubheader: [
            'About me',
            'My education',
            'Projects',
            'Reviews',
            'Price-list'
        ],
        name: '© Ilya Andrianov',
    }
}


const switchLanguage = language => {
    contentName.textContent = language.contentName;
    contentDescription.textContent = language.contentDescription;
    for(let i = 0; i < mainItemDescription.length; i++) {
        mainItemDescription[i].textContent = language.mainItemDescription[i];
    }
    for(let i = 0; i < projects.length; i++) {
        projects[i].textContent = language.projects[i];
    }
    for(let i = 0; i < contentSubheader.length; i++) {
        contentSubheader[i].textContent = language.contentSubheader[i];
    }
    name.textContent = language.name;
}

const languageRu = document.querySelector('.ru');
const languageEn = document.querySelector('.en');

languageRu.addEventListener('click', () => {switchLanguage(language.ru)})
languageEn.addEventListener('click', () => {switchLanguage(language.en)})



let swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });