export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const arr = new Int8Array(buffer);
  const view = new DataView(buffer, 0, length);
  arr[position] = value;

  return view;
}
