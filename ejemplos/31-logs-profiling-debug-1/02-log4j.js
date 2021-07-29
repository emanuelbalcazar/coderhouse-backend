const log4js = require("log4js");

log4js.configure({
    appenders: {
        miLoggerConsole: { type: "console" },
        miLoggerFile: { type: 'file', filename: 'info.log' },
        miLoggerFile2: { type: 'file', filename: 'info2.log' }
    },
    categories: {
        default: { appenders: ["miLoggerConsole"], level: "trace" },
        consola: { appenders: ["miLoggerConsole"], level: "debug" },
        archivo: { appenders: ["miLoggerFile"], level: "warn" },
        archivo2: { appenders: ["miLoggerFile2"], level: "info" },
        todos: { appenders: ["miLoggerConsole", "miLoggerFile"], level: "error" }
    }
});

const logger = log4js.getLogger();
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

const loggerConsola = log4js.getLogger('consola');
loggerConsola.trace("Entering cheese testing");
loggerConsola.debug("Got cheese.");
loggerConsola.info("Cheese is Comté.");
loggerConsola.warn("Cheese is quite smelly.");
loggerConsola.error("Cheese is too ripe!");
loggerConsola.fatal("Cheese was breeding ground for listeria.");

const loggerArchivo = log4js.getLogger('archivo');
loggerArchivo.trace("Entering cheese testing");
loggerArchivo.debug("Got cheese.");
loggerArchivo.info("Cheese is Comté.");
loggerArchivo.warn("Cheese is quite smelly.");
loggerArchivo.error("Cheese is too ripe!");
loggerArchivo.fatal("Cheese was breeding ground for listeria.");

const loggerArchivo2 = log4js.getLogger('archivo2');
loggerArchivo2.trace("Entering cheese testing");
loggerArchivo2.debug("Got cheese.");
loggerArchivo2.info("Cheese is Comté.");
loggerArchivo2.warn("Cheese is quite smelly.");
loggerArchivo2.error("Cheese is too ripe!");
loggerArchivo2.fatal("Cheese was breeding ground for listeria.");

const loggerTodos = log4js.getLogger('todos');
loggerTodos.trace("Entering cheese testing");
loggerTodos.debug("Got cheese.");
loggerTodos.info("Cheese is Comté.");
loggerTodos.warn("Cheese is quite smelly.");
loggerTodos.error("Cheese is too ripe!");
loggerTodos.fatal("Cheese was breeding ground for listeria.");
