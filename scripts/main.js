(function init() {
  const slides = [
    {
      type: 'video',
      src: './video/temp_openning.mov',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/Березины.mov',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/Кузьмич.mov',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/Маша.mp4',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/Мишка.mp4',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/алия.mp4',
    },
    {
      type: 'img',
      src: './img/01.png',
    },
    {
      type: 'img',
      src: './img/01 - 1.png',
    },
    {
      type: 'video',
      src: './video/Руслан.mkv',
    },
    {
      type: 'video',
      src: './video/backstage.mp4',
    },
  ];

  createElement = slide => {
    if (slide.type === 'video') {
      const video = document.createElement('video');
      video.src = slide.src;
      video.controls = true;
      video.classList.add('video');
      return video;
    }
    if (slide.type === 'img') {
      const img = document.createElement('img');
      img.src = slide.src;
      img.classList.add('img');
      return img;
    }
  };

  const wrapper = document.querySelector('#fullpage');

  slides.forEach(slide => {
    const section = document.createElement('div');
    section.classList.add('section');
    section.appendChild(createElement(slide));
    wrapper.appendChild(section);
  });

  // const fullpage = new fullpage('#fullpage', {});
})();
