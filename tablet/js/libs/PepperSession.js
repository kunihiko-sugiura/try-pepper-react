import Utils from "Utils";
import ConfGlobal from "../config/global";

class PepperSession {
    constructor(){
        this.session  = null;
        this.aLMemoryCallback = null;
        this.services = {};
    }
    start(ip = null, _aLMemoryCallback = null ) {
        this.aLMemoryCallback = _aLMemoryCallback;
        if (this.aLMemoryCallback) {
            this.aLMemoryCallback.bind(this);
        }
        window.QiSession(
            this.sessionConnect.bind(this),
            this.sessionDisconnect.bind(this),
            ip
        );
    }
    static requireServices() {
        return [
            "ALMemory"
        ];
    }
    sessionConnect(_session) {
        this.session = _session;
        if( ! this.session ) {
            Utils.logDev( PepperSession.MEM_KEY_P2T + ":Connect Error !" );
        }
        for( let serviceName of PepperSession.requireServices() ) {
            this.session.service(serviceName).then(
                (response) => {
                    this.services[serviceName] = response;
                    if( serviceName === "ALMemory" ) {
                        this.subscribeALMemory(response);
                        this.aLMemoryCallback && this.aLMemoryCallback();
                    }
                    Utils.logDev( serviceName + ":Opened!" );
                },
                (error) => {
                    Utils.logDev(["error occurred:", error ]);
                }
            );
        }
    }
    sessionDisconnect(_error) {
        console.log(_error);
    }
    subscribeALMemory(alM) {
        alM.subscriber(PepperSession.MEM_KEY_P2T).then(
            (subscriber) => {
                subscriber.signal.connect(function (result) {
                    Utils.logDev( PepperSession.MEM_KEY_P2T + ":Connected !" );
                });
        });
    }
    reiseEvent2Pepper( sendMessage ) {
        this.services.ALMemory.raiseEvent( PepperSession.MEM_KEY_T2P, sendMessage);
    }
    sendLog2Pepper( logText ) {
        this.services.ALMemory.raiseEvent( PepperSession.MEM_KEY_TABLOG, logText);
    }
    sendLog2PepperObject( obj ) {
        this.services.ALMemory.raiseEvent( PepperSession.MEM_KEY_TABLOG, JSON.stringify(obj) );
    }
}
PepperSession.MEM_KEY_P2T = ConfGlobal.QI_MESSAGING_KEY + "/Pepper2Tablet";
PepperSession.MEM_KEY_T2P = ConfGlobal.QI_MESSAGING_KEY + "/Tablet2Pepper";
PepperSession.MEM_KEY_TABLOG = ConfGlobal.QI_MESSAGING_KEY + "/TabletLog";

export default new PepperSession();