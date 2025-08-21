// Shared application types go here
export type BrandedId<T extends string> = string & { readonly __brand: T };