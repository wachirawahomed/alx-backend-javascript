describe('testing taskFirst and taskNext functions', () => {
  it('taskFirst should return a const string', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('taskNext should return a let string', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
