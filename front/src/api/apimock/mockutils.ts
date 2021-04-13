const ONLINE = true;

const TIME_FOR_RESPONSE = 600;

export function mockasync <T>(data: T): Promise<T> {
  if (ONLINE) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(JSON.parse(JSON.stringify(data))), TIME_FOR_RESPONSE);
    });
  }
  return new Promise((_, reject) => {
    const e = new Error('Network Error');
    setTimeout(() => reject(e), TIME_FOR_RESPONSE);
  });
}

export default { mockasync };
