const TEST_KEY = 'getTest';

export const todoCache = {
  getTestAll: TEST_KEY,
  getTestById: (testId: string) => TEST_KEY + testId,
};
