export default function equal<T1, T2>(obj1: T1, obj2: T2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}