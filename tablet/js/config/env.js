const config = {
    development: {
        pepperHost: "192.168.0.6"
    },
    production: {
        pepperHost: null
    }
};
export default config[process.env.NODE_ENV];