$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// const header = document.getElementsByClassName('container')
// const headerClassList = header.classList
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 200) {
//         if (!headerClassList.contains('scrolled')) {
//             headerClassList.add('scrolled')
//         }
//     } else {
//         if (headerClassList.contains('scrolled')) {
//             headerClassList.remove('scrolled')
//         }
//     }
// })
