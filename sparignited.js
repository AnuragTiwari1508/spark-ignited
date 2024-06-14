function startNow() {
    window.open("start.html", "_blank");
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function learnMore() {
    window.open("learn-more.html", "_blank");
}
function openbrochure() {
    window.open("open-brochure.html", "_blank");
}

function searchFunction() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = {
        'home': '#welcome',
        'about': '#about-us',
        'groups': '#groups',
        'contact': '#contact',
        'more': '#more',
        'gallery': '#gallery'
    };
    
    if (sections[query]) {
        document.querySelector(sections[query]).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Section not found!');
    }
}

function toggleMorePhotos() {
    window.open("photo.html", "_blank");
    const morePhotos = document.getElementById('more-photos');
    const seeMoreBtn = document.getElementById('see-more-btn');
    
    if (morePhotos.style.display === 'none') {
        morePhotos.style.display = 'flex';
        seeMoreBtn.textContent = 'See Less';
    } else {
        morePhotos.style.display = 'none';
        seeMoreBtn.textContent = 'See More';
    }
}