const log4js = require("log4js");

log4js.configure({
    appenders: {
        miLoggerConsole: { type: "console" },
        miLoggerError: { type: 'file', filename: 'info.log' }
    },
    categories: {
        default: { appenders: ["miLoggerConsole", "miLoggerError"], level: "trace" },
        consola: { appenders: ["miLoggerConsole"], level: "debug" },
        error: { appenders: ["miLoggerError"], level: "error" }
    }
});

module.exports = log4js.getLogger('default');