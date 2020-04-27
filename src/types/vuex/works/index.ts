import * as Module from '~/store/works/index'
import 'vuex'

declare module 'vuex' {
    interface Modules {
        'works': typeof Module;
    }

    interface LocalState {
        'works': ReturnType<Modules['works']['state']>;
    }

    interface LocalGetters {
        'works': {
            isRightActive: ReturnType<Modules["works"]["getters"]["isRightActive"]>;
        };
    }
    interface LocalMutationTypes {
        "works": {
            setIsRightActive: A2<Modules["works"]["mutations"]["setIsRightActive"]>;
        };
    }
    interface LocalActionTypes {
        "works": {};
    }
    interface RootGetters {
        "works/isRightActive": LocalGetters["works"]["isRightActive"];
    }
    interface MutationTypes {
        "works/setIsRightActive": LocalMutationTypes["works"]["setIsRightActive"];
    }
    interface ActionTypes {
    }
    interface LocalContext {
        "works": StrictContext<LocalState["works"], LocalGetters["works"], LocalMutationTypes["works"], LocalActionTypes["works"]>;
    }
}
