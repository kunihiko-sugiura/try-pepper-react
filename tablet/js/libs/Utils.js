class Utils {
    static isProduction() {
        return process.env.NODE_ENV === 'production';
    }
    static logDev( log ){
        (! Utils.isProduction() ) && console.log( log );

    }


}
export default Utils;
