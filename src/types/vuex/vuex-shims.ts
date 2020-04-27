import "vuex";
declare module "vuex" {
    type A2<T> = T extends (a1: any, a2: infer I) => any ? I : never;
    interface StrictCommit<M> {
        <T extends keyof M>(type: T, payload?: M[T], options?: CommitOptions): void;
    }
    interface StrictCommit<M> {
        <T extends keyof M>(payloadWithType: {
            type: T;
        } & M[T], options?: CommitOptions): void;
    }
    interface StrictDispatch<A> {
        <T extends keyof A>(type: T, payload?: A[T], options?: DispatchOptions): Promise<void>;
    }
    interface StrictDispatch<A> {
        <T extends keyof A>(payloadWithType: {
            type: T;
        } & A[T], options?: DispatchOptions): Promise<void>;
    }
    type StrictContext<S, G, M, A> = {
        state: S;
        getters: G;
        rootState: RootState;
        rootGetters: RootGetters;
        commit: StrictCommit<M>;
        dispatch: StrictDispatch<A>;
    };
    interface StrictStore extends Store<RootState> {
        getters: RootGetters;
        commit: StrictCommit<MutationTypes>;
        dispatch: StrictDispatch<ActionTypes>;
    }
    type RootState = {
        devices: ReturnType<Modules["devices"]["state"]>;
    } & {
        pageLocation: ReturnType<Modules["pageLocation"]["state"]>;
    } & {
        scrolls: ReturnType<Modules["scrolls"]["state"]>;
    } & {
        works: ReturnType<Modules["works"]["state"]>;
    };
    type RootContext = StrictContext<RootState, RootGetters, MutationTypes, ActionTypes>;
}
