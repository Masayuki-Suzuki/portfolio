import type { Ref } from 'vue'

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

export type Tag = {
    name: string
    slug: string
    __typename?: string
}

export type Tags = Tag[]

export type Thumbnail = {
    title: string
    alternativeText: string
    height: number
    width: number
    url: string
    updatedAt: string | Date
    __typename?: string
}

export type BlogNode = {
    createdAt: string | Date
    documentId: string
    excerpt: string
    slug: string
    tags: Tags
    thumbnail: Thumbnail
    title: string
    updatedAt: string | Date
    __typename?: string
}

export type BlogData = BlogNode[]
