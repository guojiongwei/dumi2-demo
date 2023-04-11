import formatDate from '..';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const timestamp = 1681216363389;
    const formattedDate = formatDate(timestamp, 'YYYY年MM月DD日 hh时mm分ss秒');
    expect(formattedDate).toEqual('2023年04月11日 20时32分43秒');
  });

  it('should format date with default format correctly', () => {
    const timestamp = 1681216363389;
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toEqual('2023-04-11 20:32:43');
  });
});
