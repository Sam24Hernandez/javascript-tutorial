async function saludo() {
  return (saludando = await Promise.resolve("Hola, que tal!"));
}

saludo().then(alert);
