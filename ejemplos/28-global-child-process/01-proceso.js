console.log('directorio actual del proceso', process.cwd());
console.log('id del proceso', process.pid);
console.log('version de node', process.version);
console.log('titulo del proceso', process.title);
console.log('sistema operativo', process.platform);
console.log('uso de memoria', process.memoryUsage());

process.on('beforeExit', (code) => {
    console.log('el codigo recibido', code);
});
