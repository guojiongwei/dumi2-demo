import formatDate from '..';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const timestamp = 1681138341000;
    const formattedDate = formatDate(timestamp, 'YYYY年MM月DD日 hh时mm分ss秒');
    expect(formattedDate).toEqual('2023年04月10日 12时40分51秒');
  });

  it('should format date with default format correctly', () => {
    const timestamp = 1681138341000;
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toEqual('2023-04-10 12:40:51');
  });
});
