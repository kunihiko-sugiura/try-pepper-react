class Utils {
    static isProduction() {
        return process.env.NODE_ENV === 'production';
    }
}
export default Utils;
