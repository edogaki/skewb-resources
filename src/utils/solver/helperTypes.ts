export type Tuple<T, N extends number> = N extends N
    ? number extends N
        ? T[]
        : _TupleOf<T, N, []>
    : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
    ? R
    : _TupleOf<T, N, [T, ...R]>;

type _IntFrom0To<
    N extends number,
    R extends number[] = [],
> = R["length"] extends N ? R[number] : _IntFrom0To<N, [R["length"], ...R]>;

export type IntFrom0To<N extends number> = number extends N
    ? number
    : _IntFrom0To<N>;
