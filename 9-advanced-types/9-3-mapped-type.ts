/**
 * Mapped type 은 기존의 타입을 이용할 수 있고 타입을 변형하는 것도 가능. 재사용!!
 * Mapping방법  :
 *  type Optional<T> = {
 *  [P in keyof T]?: T[P];
 *  }
 */

type Video = {
    title: string;
    author: string;
}

// type VideoOptional = {
//     title?: string;
//     author?: string;
// }

type Optional<T> = {
    [P in keyof T]?: T[P];
}
 
type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
    title: 'h1',
}

type ReadOnly<T> = {
   readonly [P in keyof T]: T[P];
}

//Map을 이요한 타입의 변환!!
type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
    title: null,
    author: null
}

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Proxy_fy<T> = {
    [P in keyof T]: Proxy<T[P]>;
}