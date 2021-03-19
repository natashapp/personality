

export enum TestType {Combination, Default, Points, ColorTest};

export type Test = {
    id: string,
    name: string,
    className: string,
    _productId: string,
    intro: string,
    description: string,
    extraDescription: string,
    type: TestType,
    free: boolean,
    footerIndicator: boolean,
    questions: Question[],
    results: Result[],
    version:number
}

export type Question = {
    id: string,
    name: string
    means: string,
    message: string,
    answers: Answer[]
}

export type Answer = {
    id: string,
    name: string,
    text: string
}

export type Result = {
    value: string,
    text: string
}
export type TestShort = {
    id: string,
    name: string,
    version:number

}