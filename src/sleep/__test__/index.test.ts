import sleep from '..';

test('测试延时效果', async () => {
  const timer1 = Date.now();
  await sleep(2000);
  const timer2 = Date.now();
  expect(Math.abs(timer2 - timer1 - 2000)).toBeLessThan(10);
});
