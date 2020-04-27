import * as Module from '~/store/devices/index'
import 'vuex'

declare module 'vuex' {
    interface Modules {
        'devices': typeof Module;
    }

    interface LocalState {
        'devices': ReturnType<Modules['devices']['state']>;
    }

    interface LocalGetters {
        'devices': {
            isMobile: ReturnType<Modules["devices"]["getters"]["isMobile"]>;
            prevWindowWidth: ReturnType<Modules["devices"]["getters"]["prevWindowWidth"]>;
        };
    }
    interface LocalMutationTypes {
        "devices": {
            setIsMobile: A2<Modules["devices"]["mutations"]["setIsMobile"]>;
            setWindowSize: A2<Modules["devices"]["mutations"]["setWindowSize"]>;
        };
    }
    interface LocalActionTypes {
        "devices": {};
    }
    interface RootGetters {
        "devices/isMobile": LocalGetters["devices"]["isMobile"];
        "devices/prevWindowWidth": LocalGetters["devices"]["prevWindowWidth"];
    }
    interface MutationTypes {
        "devices/setIsMobile": LocalMutationTypes["devices"]["setIsMobile"];
        "devices/setWindowSize": LocalMutationTypes["devices"]["setWindowSize"];
    }
    interface ActionTypes {
    }
    interface LocalContext {
        "devices": StrictContext<LocalState["devices"], LocalGetters["devices"], LocalMutationTypes["devices"], LocalActionTypes["devices"]>;
    }
}
