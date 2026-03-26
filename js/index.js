//navbar
const navList = document.querySelector('.navList')
const navLinks = document.querySelectorAll('.navLink');
const sections = document.querySelectorAll('section[id]');

navList.addEventListener('click', (e) => {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    e.target.classList.add('active')
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (scrollY < 100) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
        }
        navLinks[0].classList.add('active');
        return;
    }

    let currentSectionId = '';
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const offset = 250;
        if (scrollY >= section.offsetTop - offset &&
            scrollY < section.offsetTop + section.offsetHeight - offset) {
            currentSectionId = section.id;
            break;
        }
    };
    for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        }
    }
});

//portfolio
const tabsContainer = document.querySelector('.tabsContainer');
const tab = document.querySelectorAll('.tab');
const img = document.querySelectorAll('.img');

tabsContainer.addEventListener('click', (e) => {
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
    }
    e.target.classList.add('active');

    for (let i = 0; i < img.length; i++) {
        const tabValue = e.target.dataset.tab;
        if (tabValue === 'all' || img[i].classList.contains(tabValue)) {
            img[i].parentElement.classList.remove('hideItem');

        } else {
            img[i].parentElement.classList.add('hideItem');
        }
    }
});

//faq
const question = document.querySelectorAll('.qIconContainer');
const answer = document.querySelectorAll('.qDropdown');
const iconDown = document.querySelectorAll('.bi-chevron-down');
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', () => {
        for (let index = 0; index < question.length; index++) {
            if (i !== index) {
                answer[index].classList.add('hide');
                iconDown[index].className = ('bi bi-chevron-down');
                question[index].classList.remove('text-primary');
            };

        }

        if (answer[i].classList.contains('hide')) {
            answer[i].classList.remove('hide');
            iconDown[i].className = ('bi bi-chevron-up');
            question[i].className = ('qIconContainer d-flex gap-2 text-primary')
        } else {
            answer[i].classList.add('hide');
            iconDown[i].className = ('bi bi-chevron-down');
            question[i].classList.remove('text-primary');
        };
    });
};

//clients
const logoTrack = document.querySelector('.logoTrack');
const logoItem = document.querySelectorAll('.logoItem');
const dotBtn = document.querySelectorAll('.dotBtn');

const originalLength = logoItem.length;

for (let i = 0; i < originalLength; i++) {
    logoTrack.appendChild(logoItem[i].cloneNode(true));
};
for (let i = 0; i < originalLength; i++) {
    logoTrack.appendChild(logoItem[i].cloneNode(true));
};

for (let i = 0; i < dotBtn.length; i++) {
    dotBtn[i].addEventListener('click', function () {
        let index;
        for (let j = 0; j < dotBtn.length; j++) {
            if (dotBtn[j] === this) {
                index = j;
            };
            dotBtn[j].classList.remove('active');
        };
        this.classList.add('active');
        let clientsGap = 120;
        let width = logoItem[0].offsetWidth + clientsGap;
        logoTrack.style.transition = '0.5s';
        logoTrack.style.transform = "translateX(-" + (index * width) + "px)";      
    });
};


//Go To Top Btn
const toTopBtn = document.querySelector('.toTopBtn');
toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.style.display = 'block'
    } else {
        toTopBtn.style.display = 'none'
    }
});