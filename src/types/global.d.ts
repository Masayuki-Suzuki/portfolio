import { Ref } from '@vue/composition-api'

export declare type Refs<Data> = {
    [K in keyof Data]: Data[K] extends Ref<infer V> ? Ref<V> : Ref<Data[K]>
}

type BlogCategoryNode = {
    name: string
}

type BlogCategoryEdge = {
    node: BlogCategoryNode
}

type BlogCategory = {
    edges: BlogCategoryEdge[]
}

type FeatureImage = {
    sourceUrl: string
}

export type BlogNode = {
    categories: BlogCategory
    content: string
    date: string
    link: string
    title: string
    featureImage: FeatureImage
}

export type BlogData = {
    edges: BlogNode[]
}
