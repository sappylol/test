(async () => {
  const texto = `texto teste`;

  const textarea = document.querySelector('textarea#outlined-multiline-static.jss31');
  if (!textarea) {
    console.error('Textarea não encontrado');
    return;
  }

  textarea.value = '';

  for (let i = 0; i < texto.length; i++) {
    textarea.value += texto[i];
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 50));
  }

  console.log('Digitação simulada completa!');
})();
