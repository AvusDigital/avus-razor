import { brl } from "../data/razor";

const board = document.querySelector<HTMLElement>("[data-board]")!;
const number = board.dataset.number!;
const services = board.querySelectorAll<HTMLButtonElement>("[data-service]");
const barbers = board.querySelectorAll<HTMLButtonElement>("[data-barber]");
const totalEl = board.querySelector<HTMLElement>("[data-total]")!;
const minEl = board.querySelector<HTMLElement>("[data-min]")!;
const links = document.querySelectorAll<HTMLAnchorElement>("[data-wa]");

let barber: string | null = null;

function update() {
  const picked = [...services].filter((b) => b.getAttribute("aria-pressed") === "true");
  const total = picked.reduce((s, b) => s + Number(b.dataset.price), 0);
  const min = picked.reduce((s, b) => s + Number(b.dataset.min), 0);
  totalEl.textContent = brl(total);
  minEl.textContent = min ? `${min} min` : "–";

  let msg = "Olá! Quero agendar um horário.";
  if (picked.length) {
    msg = `Olá! Quero agendar: ${picked.map((b) => b.dataset.name).join(" + ")} (${brl(total)})`;
    if (barber) msg += ` com ${barber}`;
    msg += ".";
  }
  const href = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  links.forEach((a) => (a.href = href));
}

services.forEach((b) =>
  b.addEventListener("click", () => {
    b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true"));
    update();
  })
);

barbers.forEach((b) =>
  b.addEventListener("click", () => {
    const same = b.getAttribute("aria-pressed") === "true";
    barbers.forEach((x) => x.setAttribute("aria-pressed", "false"));
    barber = same ? null : b.dataset.name!;
    if (!same) b.setAttribute("aria-pressed", "true");
    update();
  })
);

update();
