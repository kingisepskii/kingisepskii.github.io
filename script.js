document.addEventListener('DOMContentLoaded', () => {
    const carouselParticipants = document.getElementById('carousel-participants');
    const slidesParticipants = carouselParticipants.querySelectorAll('.carousel-slide');
    let currentIndexParticipants = 0;

    setInterval(() => {
        currentIndexParticipants = (currentIndexParticipants + 1) % slidesParticipants.length;
        updateCarousel(carouselParticipants, currentIndexParticipants);
    }, 4000);

    const carouselStages = document.getElementById('carousel-stages');
    const slidesStages = carouselStages.querySelectorAll('.carousel-slide');
    let currentIndexStages = 0;

    document.getElementById('next-stage').addEventListener('click', () => {
        if (currentIndexStages < slidesStages.length - 1) {
            currentIndexStages++;
            updateCarousel(carouselStages, currentIndexStages);
        }
    });

    document.getElementById('prev-stage').addEventListener('click', () => {
        if (currentIndexStages > 0) {
            currentIndexStages--;
            updateCarousel(carouselStages, currentIndexStages);
        }
    });
});

function updateCarousel(carousel, index) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
