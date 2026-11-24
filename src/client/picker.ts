for (const form of document.querySelectorAll<HTMLFormElement>(
  ".compare-picker",
)) {
  const selects = form.querySelectorAll("select");
  function syncChoices() {
    for (const [index, select] of selects.entries()) {
      const other = selects[1 - index].value;
      for (const option of select.options)
        option.disabled = !option.value || option.value === other;
    }
  }
  form.addEventListener("change", syncChoices);
  window.addEventListener("pageshow", syncChoices);
  syncChoices();
}
