const row = document.querySelector<HTMLElement>(".share-row")!;
const button = row.querySelector("button")!;
const message = row.querySelector<HTMLElement>('[role="status"]')!;
row.hidden = false;
button.addEventListener("click", async () => {
  const url = new URL(button.dataset.sharePath!, location.origin).href;
  const title = document.querySelector<HTMLMetaElement>(
    'meta[property="og:title"]',
  )!.content;
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    message.textContent = "Link copied";
  } catch {
    message.textContent = "";
    const field = document.createElement("input");
    field.readOnly = true;
    field.value = url;
    field.setAttribute("aria-label", "Link to share");
    message.append(field);
    field.focus();
    field.select();
  }
});
