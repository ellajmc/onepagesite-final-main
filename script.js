document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll("#navbar a");
    const scrollingText = document.querySelector('.scrolling-text');
    const events = document.querySelectorAll('.event');
    const windowHeight = window.innerHeight;

    // Add a click event listener to each navbar link
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll to increase font size and decrease opacity
    document.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const fontSize = 90 + scrollTop / 10;
        const opacity = 1 - scrollTop / 500;

        scrollingText.style.fontSize = fontSize + 'px';
        scrollingText.style.opacity = opacity;

        if (fontSize <= 0) {
            scrollingText.style.display = 'none';
        } else {
            scrollingText.style.display = 'block';
        }

        animateTimeline(scrollTop);
    });

    function animateTimeline(scrollTop) {
        const timelineOffset = scrollTop + windowHeight / 2;

        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const eventPosition = event.getBoundingClientRect();

            if (eventPosition.top < timelineOffset) {
                showEvent(i);
            } else {
                hideEvent(i);
            }
        }
    }

    function showEvent(index) {
        events[index].style.display = 'block';
    }

    function hideEvent(index) {
        events[index].style.display = 'none';
    }
});
