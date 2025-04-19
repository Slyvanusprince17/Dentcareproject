
    const container = document.getElementById("sliderContainer");
    const afterImg = document.getElementById("afterImg");
    const sliderLine = document.getElementById("sliderLine");
    const handle = document.getElementById("handle");

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left;

      x = Math.max(0, Math.min(x, rect.width));

      const percent = (x / rect.width) * 100;

      afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      sliderLine.style.left = `${percent}%`;
      handle.style.left = `${percent}%`;
    });

