import * as Module from '~/store/scrolls/index'
import 'vuex'

declare module 'vuex' {
    interface Modules {
        'scrolls': typeof Module;
    }

    interface LocalState {
        'scrolls': ReturnType<Modules['scrolls']['state']>;
    }

    interface LocalGetters {
        'scrolls': {
            translate: ReturnType<Modules["scrolls"]["getters"]["translate"]>;
            rightToLeft: ReturnType<Modules["scrolls"]["getters"]["rightToLeft"]>;
            leftToRight: ReturnType<Modules["scrolls"]["getters"]["leftToRight"]>;
            isFirstView: ReturnType<Modules["scrolls"]["getters"]["isFirstView"]>;
            delayedActivePage: ReturnType<Modules["scrolls"]["getters"]["delayedActivePage"]>;
        };
    }
    interface LocalMutationTypes {
        "scrolls": {
            setTranslate: A2<Modules["scrolls"]["mutations"]["setTranslate"]>;
            setRightToLeft: A2<Modules["scrolls"]["mutations"]["setRightToLeft"]>;
            setLeftToRight: A2<Modules["scrolls"]["mutations"]["setLeftToRight"]>;
            setIsFirstView: A2<Modules["scrolls"]["mutations"]["setIsFirstView"]>;
            setDelayedActivePage: A2<Modules["scrolls"]["mutations"]["setDelayedActivePage"]>;
        };
    }
    interface LocalActionTypes {
        "scrolls": {};
    }
    interface RootGetters {
        "scrolls/translate": LocalGetters["scrolls"]["translate"];
        "scrolls/rightToLeft": LocalGetters["scrolls"]["rightToLeft"];
        "scrolls/leftToRight": LocalGetters["scrolls"]["leftToRight"];
        "scrolls/isFirstView": LocalGetters["scrolls"]["isFirstView"];
        "scrolls/delayedActivePage": LocalGetters["scrolls"]["delayedActivePage"];
    }
    interface MutationTypes {
        "scrolls/setTranslate": LocalMutationTypes["scrolls"]["setTranslate"];
        "scrolls/setRightToLeft": LocalMutationTypes["scrolls"]["setRightToLeft"];
        "scrolls/setLeftToRight": LocalMutationTypes["scrolls"]["setLeftToRight"];
        "scrolls/setIsFirstView": LocalMutationTypes["scrolls"]["setIsFirstView"];
        "scrolls/setDelayedActivePage": LocalMutationTypes["scrolls"]["setDelayedActivePage"];
    }
    interface ActionTypes {
    }
    interface LocalContext {
        "scrolls": StrictContext<LocalState["scrolls"], LocalGetters["scrolls"], LocalMutationTypes["scrolls"], LocalActionTypes["scrolls"]>;
    }
}
