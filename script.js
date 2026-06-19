const scrollButtons = document.querySelectorAll("[data-scroll]");
const cards = document.querySelectorAll("[data-select]");
const niveauInput = document.querySelector("#niveau");
const rageScore = document.querySelector("#rageScore");
const choiceButtons = document.querySelectorAll("[data-choice]");
const taskTextarea = document.querySelector("textarea[name='tache_manuelle']");

let score = 0;

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    niveauInput.value = card.dataset.select;
    score += 2;
    rageScore.value = String(score);
    document.getElementById("diagnostic").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const current = taskTextarea.value.trim();
    const addition = button.dataset.choice;
    if (!current.includes(addition)) {
      taskTextarea.value = current ? `${current}\n- ${addition}` : `- ${addition}`;
    }
    score += 1;
    rageScore.value = String(score);
  });
});

const form = document.querySelector("#leadForm");
form?.addEventListener("submit", () => {
  const submit = form.querySelector("button[type='submit']");
  submit.textContent = "Ça part...";
  submit.disabled = true;
});
