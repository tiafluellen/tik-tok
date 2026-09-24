const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const count = button.nextElementSibling;

        let likes = Number(count.textContent);

        if (button.classList.contains("liked")) {
            likes--;
            button.classList.remove("liked");
            button.textContent = "❤️ Like";
        } else {
            likes++;
            button.classList.add("liked");
            button.textContent = "💖 Liked";
        }

        count.textContent = likes;
    });
});

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent.includes("Play")) {
            button.textContent = "⏸ Pause";
        } else {
            button.textContent = "▶ Play";
        }
    });
});