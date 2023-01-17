let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });



  const title = document.querySelectorAll('.title');
  const text = document.querySelectorAll('.text');
  console.log(title)
  console.log(text)



  let languages = {
    'ru': {
      'title': [
        'Привет, я Илья Андрианов. Здесь вы найдете кто я и чем занимаюсь!',
        'Обо мне',
        'Репетитор по информатике ЕГЭ и программирование на Python',
        'Блог посвященный подготовке к ЕГЭ по информатике',
        'Разработка своего Telegram-бота для проведения уроков',
        '© Илья Андрианов'
      ],
      'text': [
        'Я проделал огромный путь к своей нынешней точке. С детства я понимал, что буду разработчиком. Не просто разработчиком, а Разработчиком. Мой путь заключается в том, чтобы делать все возможное для своих клиентов. Я всегда стараюсь выяснить настоящие причины неисправностей и найти лучшее решение. Я думаю не только о коде и его качестве, но и о бизнес-логике и удовлетворенности клиентов.',
        'Каждый клиент, который у меня был, был счастлив работать со мной. Практически каждый второй клиент приходит ко мне по рекомендации. Я думаю, это говорит о многом.',
        `Воспользуйтесь моей новой умной визиткой <a href="https://card.myqrcards.com/links/5zdU4UMLyic?v=53150" target="_blank" class="about-me__text-link">MyQRcards</a> для связи со мной.`,
        `Доступ к визитке через ссылку, QR код и NFC модуль, который можно встроить в любой носитель!
        Если захотел такую же - <a href="http://myqrcards.com/shop" target="_blank" class="about-me__text-link">заходи в наш магазин</a>. Используй промокод andrianov на 10% скидку!`,
        'Мой профиль на Авито',
        'Подписывайтесь на мой Teletype.',
        'Или читайте в удобном формате из Telegram.',
        'Ссылка на мой Telegram-бот.',
      ],
    },

    'en': {
      'title': [
        `Hi, I'm Ilya Andrianov. Here you will find who I am and what I do!`,
        'About me',
        'Tutor in computer science USE and programming in Python',
        'Blog dedicated to preparing for the exam in computer science',
        'Developing your own Telegram bot for conducting lessons',
        '© Ilya Andrianov'
      ],

      'text': [
        'I have come a long way to my current point. Since childhood, I knew that I would be a developer. Not just a developer, but a Developer. My path is to do my best for my clients. I always try to find out the real causes of malfunctions and find the best solution. I think not only about the code and its quality, but also about the business logic and customer satisfaction.',
        `Every client I've had has been happy to work with me. Almost every second client comes to me on the recommendation. I think it says a lot.`,
        `Use my new smart business card <a href="https://card.myqrcards.com/links/5zdU4UMLyic?v=53150" target="_blank" class="about-me__text-link">MyQRcards</a> to contact me.`,
        `Access to a business card via a link, QR code and NFC module that can be embedded in any media!
        If you want the same - <a href="http://myqrcards.com/shop" target="_blank" class="about-me__text-link">visit our store</a>. Use promo code andrianov for 10% discount!`,
        'My profile on Avito',
        'Subscribe to my teletype.',
        'Or read in a convenient format from Telegram.',
        'Link to my Telegram bot.',
      ],
    },
    
  }


  const switchLanguage = language => {
    for(let i = 0; i < title.length; i++) {
        title[i].innerHTML = language.title[i];
    }
    for(let i = 0; i < text.length; i++) {
        text[i].innerHTML = language.text[i];
    }
}

const languageRu = document.querySelector('.ru');
const languageEn = document.querySelector('.en');

languageRu.addEventListener('click', () => {switchLanguage(languages.ru)})
languageEn.addEventListener('click', () => {switchLanguage(languages.en)})