import * as Module from '~/store/pageLocation/index'
import 'vuex'

declare module 'vuex' {
    interface Modules {
        'pageLocation': typeof Module;
    }

    interface LocalState {
        'pageLocation': ReturnType<Modules['pageLocation']['state']>;
    }

    interface LocalGetters {
        'pageLocation': {
            pageLocation: ReturnType<Modules["pageLocation"]["getters"]["pageLocation"]>;
            pageLocationNum: ReturnType<Modules["pageLocation"]["getters"]["pageLocationNum"]>;
            worksLocation: ReturnType<Modules["pageLocation"]["getters"]["worksLocation"]>;
            worksSide: ReturnType<Modules["pageLocation"]["getters"]["worksSide"]>;
            isRight: ReturnType<Modules["pageLocation"]["getters"]["isRight"]>;
        };
    }
    interface LocalMutationTypes {
        "pageLocation": {
            setPageLocation: A2<Modules["pageLocation"]["mutations"]["setPageLocation"]>;
            setPageLocationNum: A2<Modules["pageLocation"]["mutations"]["setPageLocationNum"]>;
            setWorksLocation: A2<Modules["pageLocation"]["mutations"]["setWorksLocation"]>;
            setWorksSide: A2<Modules["pageLocation"]["mutations"]["setWorksSide"]>;
            setIsRight: A2<Modules["pageLocation"]["mutations"]["setIsRight"]>;
        };
    }
    interface LocalActionTypes {
        "pageLocation": {};
    }
    interface RootGetters {
        "pageLocation/pageLocation": LocalGetters["pageLocation"]["pageLocation"];
        "pageLocation/pageLocationNum": LocalGetters["pageLocation"]["pageLocationNum"];
        "pageLocation/worksLocation": LocalGetters["pageLocation"]["worksLocation"];
        "pageLocation/worksSide": LocalGetters["pageLocation"]["worksSide"];
        "pageLocation/isRight": LocalGetters["pageLocation"]["isRight"];
    }
    interface MutationTypes {
        "pageLocation/setPageLocation": LocalMutationTypes["pageLocation"]["setPageLocation"];
        "pageLocation/setPageLocationNum": LocalMutationTypes["pageLocation"]["setPageLocationNum"];
        "pageLocation/setWorksLocation": LocalMutationTypes["pageLocation"]["setWorksLocation"];
        "pageLocation/setWorksSide": LocalMutationTypes["pageLocation"]["setWorksSide"];
        "pageLocation/setIsRight": LocalMutationTypes["pageLocation"]["setIsRight"];
    }
    interface ActionTypes {
    }
    interface LocalContext {
        "pageLocation": StrictContext<LocalState["pageLocation"], LocalGetters["pageLocation"], LocalMutationTypes["pageLocation"], LocalActionTypes["pageLocation"]>;
    }
}
